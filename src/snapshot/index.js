import { ClassicLevel } from 'classic-level'

import { format_objects, premap_transaction } from '../index.js'
import sui_bcs from '../generated/0x2.js'
import standard_bcs from '../generated/0x1.js'
import logger from '../logger.js'

import { download_snapshot } from './download_snapshot.js'
import { parse_objects, parse_reference } from './parse_object.js'

const log = logger(import.meta)

export function get_db(db_folder = './sui-formal-objects') {
  return new ClassicLevel(db_folder)
}

export async function download_and_store_objects({
  network,
  epoch,
  known_types,
  save_objects = false,
  start_bucket = 1,
  start_part = 1,
  concurrent_downloads = 1,
  obj_folder = './obj_files',
  include_refs = false,
  db,
}) {
  Object.assign(known_types, {
    '0x0000000000000000000000000000000000000000000000000000000000000002':
      sui_bcs,
    '0x0000000000000000000000000000000000000000000000000000000000000001':
      standard_bcs,
  })

  for await (const objects of download_snapshot({
    network,
    epoch,
    concurrent_downloads,
    save: save_objects,
    start_bucket,
    start_part,
    obj_folder,
    include_refs,
  })) {
    for (const {
      bucket_num,
      part_num,
      file_compression,
      buffer,
      ref_buffer,
    } of objects) {
      const objects = await parse_objects({ buffer, file_compression })

      const refs = include_refs
        ? await parse_reference({
            buffer: ref_buffer,
            file_compression,
          })
        : []

      const raw_objects = objects
        .map(({ Normal }) => Normal)
        .filter(Boolean)
        .filter(({ data }) => !data.Move?.type?.GasCoin)

      let batches = 0

      while (raw_objects.length) {
        const raw_objects_batch = raw_objects.splice(0, 1000)
        const raw_refs_batch = refs.splice(0, 1000)

        const batch = format_objects(
          premap_transaction(raw_objects_batch),
          known_types,
          () => null,
        )
          .map((object, i) => ({
            ...object,
            ref: raw_refs_batch[i],
          }))
          .filter(object => object.contents?.id)

        if (batch.length) {
          await db.batch(
            batch.map(object => ({
              type: 'put',
              key: object.contents.id,
              value: JSON.stringify(object),
            })),
          )
        }

        log.info(
          {
            bucket_num,
            part_num,
            batch: ++batches,
            batch_length: batch.length,
          },
          'parsed objects',
        )
      }
    }
  }
}

export async function* read_snapshot_objects(db) {
  for await (const value of db.values()) {
    yield JSON.parse(value)
  }
}
