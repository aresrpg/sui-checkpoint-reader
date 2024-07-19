#!/usr/bin/env node
import { writeFileSync } from 'fs'

import { SuiClient, getFullnodeUrl } from '@mysten/sui/client'
import { Command } from 'commander'

import { async_iterable } from '../src/async_iterable.js'

const program = new Command()

program
  .command('gen')
  .description('Generate BCS types')
  .option('--package <package>', 'Package address')
  .option('--file <filename>', 'Output file name')
  .option('--network <network>', 'Network name (default: testnet)', 'testnet')
  .action(async ({ package: PACKAGE, file: filename, network }) => {
    const client = new SuiClient({
      url: getFullnodeUrl(network),
    })

    const result = await client.getNormalizedMoveModulesByPackage({
      package: PACKAGE,
    })

    const structs_cache = new Map()
    const types_cache = new Map()

    async function get_struct(
      { fields, typeParameters },
      struct_name,
      type_arguments = [],
    ) {
      const fieldEntries = await async_iterable
        .from(fields)
        .reduce(async (result, { name, type }) => {
          return {
            ...result,
            [name]: await get_bcs_code(type),
          }
        }, {})

      const content = Object.entries(fieldEntries)
        .map(([name, type_code]) => `${name}: ${type_code}`)
        .join(',\n    ')

      const typeArgsStr = type_arguments.map((_, i) => `\${T${i}}`)
      const phantomArgsStr = typeParameters
        .filter(param => param.isPhantom)
        .map((_, i) => `\${T${i}}`)

      const allArgsSet = new Set([...typeArgsStr, ...phantomArgsStr])
      const allArgsStr = Array.from(allArgsSet).join(', ')

      const typeParamsStr = typeParameters.map((_, i) => `T${i}`).join(', ')

      if (type_arguments.length || typeParameters.length) {
        return `(${typeParamsStr}) => bcs.struct(\`${struct_name}<${allArgsStr}>\`, {
            ${content}
          })`
      }

      return `bcs.struct('${struct_name}', {
            ${content}
          })`
    }

    async function get_bcs_code(type) {
      switch (type) {
        case 'U8':
          return 'bcs.u8()'
        case 'U16':
          return 'bcs.u16()'
        case 'U32':
          return 'bcs.u32()'
        case 'U64':
          return 'bcs.u64()'
        case 'U128':
          return 'bcs.u128()'
        case 'U256':
          return 'bcs.u256()'
        case 'Bool':
          return 'bcs.bool()'
        case 'Address':
          if (!types_cache.has('Address'))
            types_cache.set(
              'Address',
              `bcs.bytes(32).transform({
            input: val => fromHEX(val),
            output: val => toHEX(val),
          })`,
            )
          return 'Address'
        case 'Signer':
          if (!types_cache.has('Signer'))
            types_cache.set('Signer', 'bcs.bytes(32)')
          return 'Signer'
        default:
          break
      }

      if ('TypeParameter' in type) return `T${type.TypeParameter}`

      if (type.Vector) return `bcs.vector(${await get_bcs_code(type.Vector)})`

      if (type.Struct) {
        const { address, module, name, typeArguments = [] } = type.Struct

        if (!structs_cache.has(name)) {
          const struct_code = await get_struct(
            await client.getNormalizedMoveStruct({
              package: address,
              module,
              struct: name,
            }),
            name,
            typeArguments,
          )
          structs_cache.set(name, struct_code)
        }

        if (typeArguments.length) {
          const typeArgsStr = await async_iterable
            .from(typeArguments)
            .map(arg => get_bcs_code(arg))
            .reduce((str, arg) => {
              if (str === '') return arg
              return `${str}, ${arg}`
            }, '')
          return `${name}(${typeArgsStr})`
        } else {
          return name
        }
      }
    }

    const final_result = await async_iterable
      .from(Object.entries(result))
      .map(([module_name, { structs }]) => ({ module_name, structs }))
      .flat_map(({ module_name, structs }) =>
        Object.entries(structs).map(([struct_name, struct]) => ({
          module_name,
          struct_name,
          struct,
        })),
      )
      .filter(Boolean)
      .reduce(async (code, { module_name, struct_name, struct }) => {
        console.log(`exporting ${module_name}::${struct_name}`)
        const struct_code = await get_struct(struct, struct_name)
        return {
          ...code,
          [module_name]: {
            ...(code[module_name] || {}),
            [struct_name]: struct_code,
          },
        }
      }, {})

    const unique_types = Array.from(types_cache.entries())
      .map(([name, definition]) => `const ${name} = ${definition};`)
      .join('\n')

    const unique_structs = Array.from(structs_cache.entries())
      .map(([name, definition]) => `const ${name} = ${definition};`)
      .join('\n')

    const formatted_result = Object.entries(final_result)
      .map(
        ([module_name, structs]) => `
  ${module_name}: {
    ${Object.entries(structs)
      .map(([struct_name, struct_code]) => `${struct_name}: ${struct_code}`)
      .join(',\n    ')}
  }`,
      )
      .join(',\n  ')

    writeFileSync(
      filename,
      `
import { bcs, fromHEX, toHEX } from '@mysten/bcs'

${unique_types}
${unique_structs}

export default {
  ${formatted_result}
}
  `,
    )

    console.log('Generation complete')
  })
  .parse(process.argv)
