import { writeFile } from 'fs/promises'

import { parse } from 'yaml'

const VERSION = 'testnet-v1.46.0'
const YAML_URL =
  'https://raw.githubusercontent.com/MystenLabs/sui/{version}/crates/sui-core/tests/staged/sui.yaml'

async function get_type_definitions() {
  const response = await fetch(YAML_URL.replace('{version}', VERSION))
  const yamlText = await response.text()
  return parse(yamlText)
}

function parse_function_type(type_string) {
  const clean = str => str.replace(/sui_types::/g, '')

  const parse_type = type => {
    const match = type.match(/^([\w:]+)(?:<(.+)>)?$/)
    if (!match) {
      return null
    }

    const [, type_name, sub_types] = match

    const result = { type: type_name.split('::').pop(), subtypes: [] }

    if (sub_types) {
      let depth = 0
      let current = ''
      for (let i = 0; i < sub_types.length; i++) {
        const char = sub_types[i]
        if (char === '<') depth++
        else if (char === '>') depth--

        if (char === ',' && depth === 0) {
          if (current.trim()) {
            result.subtypes.push(parse_type(current.trim()))
          }
          current = ''
        } else {
          current += char
        }
      }

      if (current.trim()) {
        result.subtypes.push(parse_type(current.trim()))
      }
    }

    return result
  }

  const cleaned_string = clean(type_string)
  return parse_type(cleaned_string)
}

function generate_bcs_types(parsed_yaml) {
  const typeGraph = new Map()
  const typeSet = new Set()
  const orderedTypes = []
  const functionTypes = new Map()

  // Build dependency graph
  for (const [name, value] of Object.entries(parsed_yaml)) {
    typeGraph.set(name, getDependencies(value))
  }

  // Topological sort
  function visitNode(node) {
    if (typeSet.has(node)) return
    typeSet.add(node)
    const dependencies = typeGraph.get(node) || []
    for (const dep of dependencies) {
      if (typeGraph.has(dep)) {
        visitNode(dep)
      }
    }
    orderedTypes.push(node)
  }

  for (const type of typeGraph.keys()) {
    visitNode(type)
  }

  orderedTypes
    .filter(name => name.includes('sui_types::'))
    .forEach(name => {
      const { type, subtypes } = parse_function_type(name)
      const type_content = parsed_yaml[name]

      if (!functionTypes.has(type)) {
        functionTypes.set(type, { name, subtypes, content: type_content })
      }
    })

  const function_types = Array.from(functionTypes.entries()).map(
    ([type, { name, subtypes, content }]) => {
      const params = content.STRUCT
        ? content.STRUCT.map(obj => Object.keys(obj)[0]).join(', ')
        : 'data'
      return `const ${type} = (name, ${params}) =>
  ${parse_type(content, name)}`
    },
  )

  // Generate ordered content
  const content = orderedTypes
    .filter(name => !name.includes('sui_types::'))
    .map(
      name => `export const ${name} = ${parse_type(parsed_yaml[name], name)};`,
    )

  return `import { bcs } from '@mysten/bcs';
${function_types.join('\n\n')}

${content.join('\n')}`
}

function getDependencies(type) {
  const deps = new Set()

  function addDep(t) {
    if (typeof t === 'string' && t !== 'UNIT') {
      deps.add(t)
    } else if (typeof t === 'object') {
      for (const value of Object.values(t)) {
        addDep(value)
      }
    }
  }

  addDep(type)
  return Array.from(deps)
}

function parse_type(type, name = 'name') {
  if (name?.includes('sui_types::')) {
    const { type: funcName } = parse_function_type(name)
    const params = type.STRUCT
      ? type.STRUCT.map(obj => Object.keys(obj)[0]).join(', ')
      : 'data'
    return `${funcName}('${name}', ${params})`
  }
  if (typeof type === 'object') {
    if (type.NEWTYPESTRUCT) return parse_type(type.NEWTYPESTRUCT, name)
    if (type.STRUCT) return parse_struct(type.STRUCT, name)
    if (type.TYPENAME) {
      const parsed = parse_function_type(type.TYPENAME)
      if (parsed.subtypes.length > 0) {
        return `${parsed.type}('${name}', ${parsed.subtypes.map(st => st.type).join(', ')})`
      }
      return type.TYPENAME
    }
    if (type.SEQ) return `bcs.vector(${parse_type(type.SEQ, name)})`
    if (type.OPTION) return `bcs.option(${parse_type(type.OPTION, name)})`
    if (type.MAP)
      return `bcs.map(${parse_type(type.MAP.KEY, name)}, ${parse_type(type.MAP.VALUE, name)})`
    if (type.TUPLE)
      return `bcs.tuple([${type.TUPLE.map(value => parse_type(value, name)).join(', ')}])`
    if (type.TUPLEARRAY)
      return `bcs.fixedArray(${type.TUPLEARRAY.SIZE}, ${parse_type(type.TUPLEARRAY.CONTENT, name)})`
    if (type.NEWTYPE) return parse_type(type.NEWTYPE, name)
    if (type.ENUM) return parse_enum(type.ENUM, name)
  }
  return parse_primitive(type)
}

function parse_enum(type, name) {
  const result = Array.from({ ...type, length: Object.keys(type).length }).map(
    object => {
      const [[inner_name, value]] = Object.entries(object)
      return `${inner_name}: ${parse_type(value, inner_name)}`
    },
  )
  return `bcs.enum("${name}", {${result.join(', ')}})`
}

function parse_struct(type, name) {
  const fields = type
    .flatMap(object => Object.entries(object))
    .map(([inner_name, type]) => {
      if (inner_name === 'type_') inner_name = 'type'
      return `${inner_name}: ${parse_type(type, inner_name)}`
    })

  return `bcs.struct("${name}", {${fields.join(', ')}})`
}

function parse_primitive(type) {
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
    case 'BOOL':
      return 'bcs.bool()'
    case 'STR':
      return 'bcs.string()'
    case 'BYTES':
      return 'bcs.vector(bcs.u8())'
    case 'UNIT':
      return null
    default:
      return type
  }
}

console.log('Fetching type definitions...')
const definitions = await get_type_definitions()
await writeFile('./src/types.json', JSON.stringify(definitions, null, 2))

console.log('Generating BCS types...')
await writeFile('./src/generated/bcs-sui.js', generate_bcs_types(definitions))
