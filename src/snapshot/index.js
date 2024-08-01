import { ClassicLevel } from 'classic-level'

import { format_objects, premap_transaction } from '../index.js'

import { download_snapshot } from './download_snapshot.js'
import { parse_objects } from './parse_object.js'

export async function download_and_store_objects({
  network,
  epoch,
  known_types,
  save_objects = false,
  start_bucket = 1,
  start_part = 1,
  db_folder = './sui-formal-objects',
}) {
  const db = new ClassicLevel(db_folder)

  for await (const objects of download_snapshot({
    network,
    epoch,
    concurrent_downloads: 1,
    save: save_objects,
    start_bucket,
    start_part,
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

export async function* read_snapshot_objects(
  db_folder = './sui-formal-objects',
) {
  const db = new ClassicLevel(db_folder)

  for await (const value of db.values()) {
    yield [db, JSON.parse(value)]
  }
}
