import { ClassicLevel } from 'classic-level'

import { format_objects, premap_transaction } from '../index.js'
import sui_bcs from '../generated/0x2.js'
import standard_bcs from '../generated/0x1.js'

import { download_snapshot } from './download_snapshot.js'
import { parse_objects } from './parse_object.js'

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
  })) {
    for (const { bucket_num, part_num, file_compression, buffer } of objects) {
      const objects = await parse_objects({ buffer, file_compression })
      const raw_objects = objects.map(({ Normal }) => Normal).filter(Boolean)

      let batches = 0

      while (raw_objects.length) {
        const batch = format_objects(
          premap_transaction(raw_objects.splice(0, 1000)),
          known_types,
        ).filter(object => object.contents?.id)

        if (batch.length) {
          await db.batch(
            batch.map(object => ({
              type: 'put',
              key: object.contents.id,
              value: JSON.stringify(object),
            })),
          )
        }

        console.log(
          `[${bucket_num}:${part_num}]`,
          `> parsed objects | batch ${++batches} | saved ${batch.length} objects`,
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
