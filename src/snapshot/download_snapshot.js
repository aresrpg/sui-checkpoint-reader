import { existsSync } from 'fs'
import { mkdir, readFile, writeFile } from 'fs/promises'

import { Manifest } from '../bcs.js'

async function fetch_manifest({ network, epoch }) {
  const response = await fetch(
    `https://formal-snapshot.${network}.sui.io/epoch_${epoch}/MANIFEST`,
  )
  const buffer = await response.arrayBuffer()
  return buffer
}

async function fetch_object({
  network,
  epoch,
  bucket_num,
  part_num,
  save,
  obj_folder,
}) {
  const file_path = `${obj_folder}/epoch_${epoch}/${bucket_num}_${part_num}.obj`

  if (existsSync(file_path)) {
    console.log(
      `[snapshot] File ${bucket_num}_${part_num}.obj already exists locally.`,
    )
    const { buffer } = await readFile(file_path)
    return buffer
  }

  console.log(`[snapshot] Downloading object ${bucket_num}_${part_num}.obj`)
  const response = await fetch(
    `https://formal-snapshot.${network}.sui.io/epoch_${epoch}/${bucket_num}_${part_num}.obj`,
  )
  const buffer = await response.arrayBuffer()

  if (save) {
    await mkdir(`${obj_folder}/epoch_${epoch}`, { recursive: true })
    await writeFile(file_path, new Uint8Array(buffer))
    console.log(`[snapshot] Saved object ${file_path}`)
  }

  return buffer
}

function parse_manifest(buffer) {
  // https://github.com/MystenLabs/sui/blob/c1b1e1e74c82b950e8d531f1b84c605d1ea957ca/crates/sui-snapshot/src/lib.rs#L109-L116

  const view = new DataView(buffer)

  // eslint-disable-next-line eqeqeq
  if (view.getUint32(0) != 0x00c0ffee) throw new Error('Invalid magic')

  const serializedManifest = new Uint8Array(view.buffer).slice(4, -32)

  return Manifest.parse(serializedManifest)
}

export async function* download_snapshot({
  network,
  epoch,
  concurrent_downloads = 5,
  save,
  start_bucket,
  start_part,
  obj_folder,
}) {
  console.log('[snapshot] Downloading snapshot manifest..')
  const manifest = parse_manifest(await fetch_manifest({ network, epoch }))
  const {
    V1: { file_metadata, ...rest },
  } = manifest

  const object_metadata = file_metadata.filter(
    ({ file_type, bucket_num, part_num }) => {
      if (!file_type.Object) return false
      if (start_bucket && start_part) {
        return bucket_num >= start_bucket && part_num >= start_part
      }
      return true
    },
  )

  console.dir(
    {
      ...rest,
      files: object_metadata.length,
      concurrent_downloads,
    },
    { depth: Infinity },
  )

  while (object_metadata.length) {
    const current_batch = object_metadata.splice(0, concurrent_downloads)
    const objects = await Promise.all(
      current_batch.map(
        async ({
          bucket_num,
          part_num,
          file_compression,
          file_type,
          sha3_digest,
        }) => {
          const buffer = Buffer.from(
            await fetch_object({
              network,
              epoch,
              bucket_num,
              part_num,
              save,
              obj_folder,
            }),
          )
          return {
            bucket_num,
            part_num,
            buffer,
            file_compression,
            file_type,
            sha3_digest,
          }
        },
      ),
    )

    yield objects
  }
}
