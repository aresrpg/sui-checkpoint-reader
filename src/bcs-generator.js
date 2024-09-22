import { writeFile } from 'fs/promises'

import { parse } from 'yaml'

const VERSION = 'testnet-v1.33.2'
const YAML_URL =
  'https://raw.githubusercontent.com/MystenLabs/sui/{version}/crates/sui-core/tests/staged/sui.yaml'

async function get_type_definitions() {
  const response = await fetch(YAML_URL.replace('{version}', VERSION))
  const yamlText = await response.text()
  return parse(yamlText)
}

function generate_bcs_types(parsed_yaml) {
  const typeGraph = new Map()
  const typeSet = new Set()
  const orderedTypes = []

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

  // Generate ordered content
  const content = orderedTypes.map(
    name => `export const ${name} = ${parse_type(parsed_yaml[name], name)};`,
  )

  return `import { bcs } from '@mysten/bcs';\n\n${content.join('\n')}`
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

function parse_type(type, name = null) {
  if (typeof type === 'object') {
    if (type.NEWTYPESTRUCT) return parse_type(type.NEWTYPESTRUCT, name)
    if (type.STRUCT) return parse_struct(type.STRUCT, name)
    if (type.TYPENAME) return type.TYPENAME
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

console.log('Generating BCS types...')
await writeFile('./src/generated/bcs-sui.js', generate_bcs_types(definitions))
