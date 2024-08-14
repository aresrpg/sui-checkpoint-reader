import { decompress as zstdDecompress } from '@mongodb-js/zstd'
import { toB58, toHEX } from '@mysten/bcs'

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

export async function parse_reference({ buffer, file_compression }) {
  const decompressed_buffer =
    file_compression.$kind === 'Zstd' ? await zstdDecompress(buffer) : buffer

  const view = new DataView(decompressed_buffer.buffer)

  // Validate magic number
  // eslint-disable-next-line eqeqeq
  if (view.getUint32(0) != 0xdeadbeef) throw new Error('Invalid magic')

  const object_refs = []
  const address_len = 32 // SuiAddress length
  const sequence_num_len = 8 // u64 length
  const digest_len = 32 // Digest length

  let offset = 4
  while (offset < view.byteLength) {
    // Extract address (32 bytes)
    const address = new Uint8Array(
      decompressed_buffer.slice(offset, offset + address_len),
    )
    offset += address_len

    // Extract sequence number (8 bytes, BigEndian)
    const sequence_number = view.getBigUint64(offset, false) // false for BigEndian
    offset += sequence_num_len

    // Extract digest (32 bytes)
    const digest = new Uint8Array(
      decompressed_buffer.slice(offset, offset + digest_len),
    )
    offset += digest_len

    // Manually construct the object reference
    const obj_ref = {
      address: `0x${toHEX(address)}`,
      version: sequence_number,
      digest: toB58(digest),
    }

    object_refs.push(obj_ref)
  }

  return object_refs
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
