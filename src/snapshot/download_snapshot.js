import { existsSync } from 'fs'
import { mkdir, readFile, writeFile } from 'fs/promises'

import { Manifest } from '../bcs-checkpoints.js'
import logger from '../logger.js'

const log = logger(import.meta)

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
  include_refs = false,
}) {
  const file_path = `${obj_folder}/epoch_${epoch}/${bucket_num}_${part_num}.obj`
  const ref_file_path = `${obj_folder}/epoch_${epoch}/${bucket_num}_${part_num}.ref`

  if (existsSync(file_path)) {
    log.info(
      { file: `${bucket_num}_${part_num}.obj` },
      `[snapshot] File already exists locally.`,
    )
    const { buffer } = await readFile(file_path)
    if (include_refs) {
      const { buffer: ref_buffer } = await readFile(ref_file_path)
      return { buffer, ref_buffer }
    }
    return { buffer }
  }

  log.info(
    { object: `${bucket_num}_${part_num}` },
    `[snapshot] Downloading object & ref`,
  )
  const response = await fetch(
    `https://formal-snapshot.${network}.sui.io/epoch_${epoch}/${bucket_num}_${part_num}.obj`,
  )

  const ref_response = include_refs
    ? await fetch(
        `https://formal-snapshot.${network}.sui.io/epoch_${epoch}/${bucket_num}_${part_num}.ref`,
      )
    : null
  const buffer = await response.arrayBuffer()
  const ref_buffer = include_refs ? await ref_response.arrayBuffer() : null

  if (save) {
    await mkdir(`${obj_folder}/epoch_${epoch}`, { recursive: true })
    await writeFile(file_path, new Uint8Array(buffer))
    if (include_refs) await writeFile(ref_file_path, new Uint8Array(ref_buffer))
    log.info({ file_path }, '[snapshot] file saved')
  }

  return { buffer, ref_buffer }
}

function parse_manifest(buffer) {
  // https://github.com/MystenLabs/sui/blob/c1b1e1e74c82b950e8d531f1b84c605d1ea957ca/crates/sui-snapshot/src/lib.rs#L109-L116

  const view = new DataView(buffer)

  // eslint-disable-next-line eqeqeq
  // if (view.getUint32(0) != 0x00c0ffee) throw new Error('Invalid magic')

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
  include_refs = false,
}) {
  log.info('[snapshot] Downloading snapshot manifest..')
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

  log.debug(
    {
      ...rest,
      files: object_metadata.length,
      concurrent_downloads,
    },
    'snapshot manifest',
  )

  while (object_metadata.length) {
    const current_batch = object_metadata.splice(0, concurrent_downloads)

    try {
      const objects = await Promise.all(
        current_batch.map(
          async ({
            bucket_num,
            part_num,
            file_compression,
            file_type,
            sha3_digest,
          }) => {
            const { buffer, ref_buffer } = await fetch_object({
              network,
              epoch,
              bucket_num,
              part_num,
              save,
              obj_folder,
              include_refs,
            })

            return {
              bucket_num,
              part_num,
              buffer: Buffer.from(buffer),
              ref_buffer: ref_buffer && Buffer.from(ref_buffer),
              file_compression,
              file_type,
              sha3_digest,
            }
          },
        ),
      )

      yield objects
    } catch (error) {
      log.error(error, 'Error downloading checkpoint file. Retrying..')
      // add the batch back for immediate retry
      object_metadata.unshift(...current_batch)
    }
  }
}
