import { decompress as zstdDecompress } from '@mongodb-js/zstd'

import { LiveObject } from '../bcs.js'

const BLOB_ENCODING_BCS = 1

function read_uvarint(buffer, offset) {
  let value = 0
  let shift = 0
  let byte
  do {
    byte = buffer[offset++]
    value |= (byte & 0x7f) << shift
    shift += 7
  } while (byte >= 0x80)
  return [value, offset]
}

export async function parse_objects({ buffer, file_compression }) {
  const decompressed_buffer =
    file_compression.$kind === 'Zstd' ? await zstdDecompress(buffer) : buffer

  // https://github.com/MystenLabs/sui/blob/c1b1e1e74c82b950e8d531f1b84c605d1ea957ca/crates/sui-snapshot/src/lib.rs#L75-L90
  const view = new DataView(decompressed_buffer.buffer)

  // eslint-disable-next-line eqeqeq
  if (view.getUint32(0) != 0x00b7ec75) throw new Error('Invalid magic')

  const objects = []

  let offset = 4
  while (offset < view.byteLength) {
    const [length, new_offset] = read_uvarint(decompressed_buffer, offset)
    offset = new_offset

    const encoding = view.getUint8(offset)
    offset += 1

    // eslint-disable-next-line eqeqeq
    if (encoding != BLOB_ENCODING_BCS) {
      throw new Error(`Invalid encoding ${encoding}`)
    }

    const data = new Uint8Array(view.buffer).slice(offset, offset + length)
    const obj = LiveObject.parse(data)

    objects.push(obj)

    offset += length
  }

  return objects
}
