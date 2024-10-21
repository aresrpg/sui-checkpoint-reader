import { setInterval, setTimeout } from 'timers/promises'
import path from 'path'
import { readFileSync, unlinkSync } from 'fs'
import { performance } from 'perf_hooks'

import { bcs, toB58, toHEX } from '@mysten/bcs'
import chokidar from 'chokidar'

import sui_bcs from './generated/0x2.js'
import standard_bcs from './generated/0x1.js'
import { get_local_checkpoints } from './get_local_checkpoints.js'
import { SuiAddress, CheckpointData } from './generated/bcs-sui.js'
import logger from './logger.js'
import { async_iterable } from './async_iterable.js'

const log = logger(import.meta)

function mapper(object_source, mappings) {
  const map_recursive = obj => {
    if (Array.isArray(obj)) {
      return obj.map(map_recursive)
    } else if (obj && typeof obj === 'object') {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const map_function = mappings[key]
        acc[key] = map_function
          ? map_function(map_recursive(value))
          : map_recursive(value)
        return acc
      }, {})
    }
    return obj
  }

  return map_recursive(object_source)
}

// @ts-ignore
const to_address = bytes => (Array.isArray(bytes) ? `0x${toHEX(bytes)}` : bytes)

function parse_content(struct, { contents, known_types }) {
  if (!contents) return

  function find_nested_bcs({
    address,
    module,
    name,
    type_args = [],
    $kind,
    ...rest
  }) {
    if ($kind && $kind.toLowerCase() !== 'struct') {
      switch ($kind.toLowerCase()) {
        case 'address':
          return SuiAddress
        case 'vector':
          if (
            rest.vector.$kind === 'struct' ||
            rest.vector.$kind === 'address' ||
            rest.vector.$kind === 'vector'
          ) {
            const nested = find_nested_bcs(rest.vector)
            return nested ? bcs.vector(nested) : null
          }
          return bcs.vector(bcs[rest.vector.$kind.toLowerCase()]())
        default:
          return bcs[$kind.toLowerCase()]()
      }
    }

    const current_bcs = known_types[address]?.[module]?.[name]

    if (!current_bcs) return

    if (type_args.length) {
      const nested_bcs = type_args.map(({ struct, ...rest }) => {
        if (!struct) return find_nested_bcs(rest)
        return find_nested_bcs(struct)
      })

      if (nested_bcs.some(b => !b)) return
      return current_bcs(...nested_bcs)
    }

    return current_bcs
  }

  const found_bcs = find_nested_bcs(struct)

  if (!found_bcs?.parse) return
  try {
    const parsed = found_bcs.parse(new Uint8Array(contents))
    const { id: { id: { bytes = undefined } = {} } = {}, ...rest } = mapper(
      parsed,
      {
        bytes: b => {
          if (Array.isArray(b)) return Buffer.from(b).toString('utf8')
          return b
        },
      },
    )
    return {
      ...(bytes && { id: `0x${bytes}` }),
      ...Object.fromEntries(
        Object.entries(rest).map(([key, value]) => {
          // @ts-ignore
          if (value.bytes) return [key, value.bytes]
          return [key, value]
        }),
      ),
    }
  } catch (error) {
    log.error('Unable to parse content')
    console.dir({ found_bcs, contents, struct }, { depth: Infinity })
    log.error({ found_bcs, contents, struct }, error)
    throw error
  }
}

export function format_objects(objects, known_types, get_object_digest) {
  return objects.map(object => {
    const {
      data: { Package, Move },
      storage_rebate,
      owner,
      previous_transaction,
    } = object

    if (Package) {
      const { id, version, type_origin_table } = Package
      return {
        id: to_address(id),
        version,
        type_origin_table: type_origin_table.map(
          ({ module_name, datatype_name, package: pkg }) => ({
            module_name,
            datatype_name,
            package: to_address(pkg),
          }),
        ),
      }
    }

    const {
      type: {
        Other,
        // @ts-ignore
        Other: { address, module, name, type_args = [] } = {},
      },
      has_public_transfer,
      contents,
      version,
    } = Move

    const parsed_type_args = parse_type_args(type_args)

    if (Other) {
      const parsed_content = parse_content(Other, {
        contents,
        known_types,
      })

      const digest = parsed_content
        ? get_object_digest(parsed_content.id)
        : null
      return {
        has_public_transfer,
        type: `${address}::${module}::${name}`,
        version,
        storage_rebate,
        digest,
        owner,
        previous_transaction,
        ...(type_args?.length && {
          type_args: `${address}::${module}::${name}<${parsed_type_args}>`,
        }),
        contents: parsed_content ?? contents,
      }
    }

    return object
  })
}

function format_events(events, known_types) {
  return events
    .map(event => {
      const { type, package_id, transaction_module, sender, contents } = event

      const has_sub_type = type.type_args?.length
      const parsed_type = parse_type_args(type.type_args)
      const event_type = `${type.address}::${type.module}::${type.name}${has_sub_type ? `<${parsed_type}>` : ''}`
      const base_config = known_types[type.address]?.[type.module]?.[type.name]
      const bcs = has_sub_type ? base_config?.(parsed_type) : base_config

      const base_result = {
        event_type,
        package_id,
        transaction_module,
        sender,
      }

      const final_contents = bcs?.parse
        ? Object.fromEntries(
            Object.entries(bcs.parse(new Uint8Array(contents))).map(
              ([key, value]) => {
                // @ts-ignore
                if (value.bytes) return [key, value.bytes]
                return [key, value]
              },
            ),
          )
        : contents

      return {
        ...base_result,
        contents: final_contents,
      }
    })
    .filter(Boolean)
}

function parse_type_args(params = []) {
  if (!params.length) return ''
  return params.reduce((result, { struct, $kind }) => {
    if (!struct) return `${result}, ${$kind.toLowerCase()}`
    const { address, module, name, type_args = [] } = struct
    const typename = `${address}::${module}::${name}`

    if (!result)
      if (type_args.length) return `${typename}<${parse_type_args(type_args)}>`
      else return typename

    if (type_args.length)
      return `${result}, ${typename}<${parse_type_args(type_args)}>`
    return `${result}, ${typename}`
  }, '')
}

export async function read_checkpoints({
  from = 1,
  to = Infinity,
  get_remote_checkpoint = async num => {
    const response = await fetch(
      `https://checkpoints.testnet.sui.io/${num}.chk`,
    )
    const buffer = await response.arrayBuffer()
    return buffer
  },
  concurrent_downloads = 25,
  known_types = {},
  object_filter = () => true,
  checkpoints_folder = '',
  process_checkpoint = async (data, index) => {
    log.info({ index }, '[indexer] process_checkpoint')
  },
  cleanup_checkpoints = false,
  local_files_only = false,
}) {
  const controller = new AbortController()
  const sync_settings = {
    current_checkpoint: from,
    catching_up: true,
  }
  const processing_settings = {
    current_checkpoint: from,
    watcher: null,
  }
  const known_checkpoints = new Map()

  function get_lowest_known_checkpoint() {
    const existing_files = get_local_checkpoints(checkpoints_folder)
    const [lowest_known_checkpoint] = existing_files

    log.trace({ lowest_known_checkpoint }, 'Lowest known checkpoint')

    return lowest_known_checkpoint
  }

  let lowest_known_checkpoint = get_lowest_known_checkpoint()

  async_iterable
    .from(setInterval(1000 * 10, null, { signal: controller.signal }))
    .for_each(() => {
      const result = get_lowest_known_checkpoint()
      if (result) lowest_known_checkpoint = result
    })
    .catch(error => {
      log.error(error)
    })

  Object.assign(known_types, {
    '0x0000000000000000000000000000000000000000000000000000000000000002':
      sui_bcs,
    '0x0000000000000000000000000000000000000000000000000000000000000001':
      standard_bcs,
  })

  // if the lowest known checkpoint is higher than the start checkpoint, we don't need to catch up
  if (lowest_known_checkpoint != null && lowest_known_checkpoint <= from)
    sync_settings.catching_up = false

  // Once we caught up, we start watching for file changes
  function start_listening_for_local_checkpoints() {
    log.info('[local] starting to watch for local checkpoints')
    processing_settings.watcher = chokidar.watch(checkpoints_folder, {
      persistent: true,
    })
    processing_settings.watcher.on('add', async file_path => {
      // if we detect local checkpoints
      const file_number = +path.basename(file_path, '.chk')

      // if in configured range, we add it to the known checkpoints
      if (file_number >= from && file_number <= to) {
        const buffer = readFileSync(file_path)
        known_checkpoints.set(file_number, buffer)
      }
    })

    // we once again check all files in the folder to start fresh
    const recent_existing_files = get_local_checkpoints(checkpoints_folder)
    // we then try to add them all to the known checkpoints
    for (const file of recent_existing_files) {
      if (file >= from && file <= to) {
        const buffer = readFileSync(
          path.join(checkpoints_folder, `${file}.chk`),
        )
        known_checkpoints.set(file, buffer)
      }
    }
  }

  async function start_downloading_checkpoints() {
    // we will download checkpoints until we reach the lowest known checkpoint or the target checkpoint
    const should_keep_downloading = current => {
      if (!sync_settings.catching_up) return false
      if (lowest_known_checkpoint != null && lowest_known_checkpoint <= to)
        return current <= lowest_known_checkpoint
      return current <= to
    }

    if (should_keep_downloading(sync_settings.current_checkpoint))
      log.info(
        {
          from,
          to:
            lowest_known_checkpoint == null
              ? to
              : Math.min(to, lowest_known_checkpoint),
        },
        '[system] starting to download checkpoints',
      )
    else start_listening_for_local_checkpoints()

    while (should_keep_downloading(sync_settings.current_checkpoint)) {
      await setTimeout(1) // let it breathe
      try {
        const start_time = performance.now()

        log.debug(
          {
            known_checkpoints_size: known_checkpoints.size,
            concurrent_downloads,
          },
          '[<] downloading checkpoints',
        )

        await Promise.all(
          Array.from({ length: concurrent_downloads }, async (_, i) => {
            const current_checkpoint_number =
              sync_settings.current_checkpoint + i

            // if the count reaches the lowest known checkpoint or the target checkpoint, we stop
            if (!should_keep_downloading(current_checkpoint_number)) {
              sync_settings.catching_up = false
              log.info(
                { caught_up_at: current_checkpoint_number },
                '[system] caught up with the latest checkpoint',
              )
              return
            }

            const buffer = await get_remote_checkpoint(
              current_checkpoint_number,
            )

            known_checkpoints.set(current_checkpoint_number, buffer)
          }),
        )

        const end_time = performance.now()
        const elapsed = ((end_time - start_time) / 1000).toFixed(2)

        log.info(
          {
            concurrent_downloads,
            elapsed: +elapsed,
            from: sync_settings.current_checkpoint - concurrent_downloads,
            to: sync_settings.current_checkpoint,
          },
          '[remote] downloaded',
        )

        sync_settings.current_checkpoint += concurrent_downloads

        // Once we caught up, we start watching for file changes
        if (!sync_settings.catching_up && checkpoints_folder)
          start_listening_for_local_checkpoints()
      } catch (error) {
        log.warn(
          error,
          `[remote] Some checkpoints couldn't be downloaded, retrying in 2s`,
        )
        await setTimeout(2000)
        sync_settings.catching_up = true
      }
    }
  }

  async function start_cleaning_up_checkpoints() {
    log.info('[system] starting to clean up old checkpoints')
    try {
      // eslint-disable-next-line no-unused-vars
      for await (const _ of setInterval(5000, true, {
        signal: controller.signal,
      })) {
        if (sync_settings.catching_up) continue
        // check all checkpoints files, remove those below the currently processed
        const files = get_local_checkpoints(checkpoints_folder)

        log.debug(
          { files: files.length, from: files[0], to: files.at(-1) },
          '[x] cleaning up checkpoint',
        )

        for (const file of files) {
          if (file < processing_settings.current_checkpoint) {
            unlinkSync(path.join(checkpoints_folder, `${file}.chk`))
          }
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') throw error
      log.fatal(error, 'Cleaning up checkpoints failed')
    }
  }

  async function start_processing_checkpoints() {
    log.info('[system] starting to process checkpoints')

    let index = 0
    let index_missing = 0

    async function get_valid_checkpoint_buffer() {
      const current_checkpoint_number = processing_settings.current_checkpoint
      const checkpoint_buffer = known_checkpoints.get(current_checkpoint_number)

      if (!checkpoint_buffer) return { current_checkpoint_number }

      known_checkpoints.delete(current_checkpoint_number)

      const { encoding, data } = read_blob(checkpoint_buffer)

      if (encoding !== BLOB_ENCODING_BCS) {
        log.warn(
          {
            encoding,
            current_checkpoint_number,
            expected_encoding: BLOB_ENCODING_BCS,
          },
          'Invalid encoding detected, is the checkpoint file corrupted?',
        )
        // sometimes the encoding is wrong, it happens somehow when downloading snapshots and I have no idea why
        // replaying (redownloading) the checkpoint will work
        if (local_files_only) {
          // well here we're fucked
          throw new Error(
            `The checkpoint file has an encoding of ${encoding} instead of ${BLOB_ENCODING_BCS}, is the file corrupted ?`,
          )
        }

        // if the corrupted data is a file exported from the node
        // then we simply take it from remote because why the fuck would the node export a corrupted file?
        // but I had this issue :/
        if (!sync_settings.catching_up) {
          log.warn(
            { current_checkpoint_number },
            'It seems the node exported a corrupted checkpoint file, downloading from remote!',
          )
          known_checkpoints.set(
            current_checkpoint_number,
            await get_remote_checkpoint(current_checkpoint_number),
          )
          return get_valid_checkpoint_buffer()
        }

        sync_settings.current_checkpoint =
          current_checkpoint_number - concurrent_downloads

        await setTimeout(100)
        return get_valid_checkpoint_buffer()
      }

      return { checkpoint_buffer, current_checkpoint_number, data }
    }

    while (processing_settings.current_checkpoint <= to) {
      const { checkpoint_buffer, current_checkpoint_number, data } =
        await get_valid_checkpoint_buffer()

      try {
        if (checkpoint_buffer) {
          index_missing = 0 // reset as we only want to detect if its stuck
          if (++index % 4 === 0)
            log.info({ current_checkpoint_number }, '[>] processing checkpoint')
          const parsed_checkpoint = read_checkpoint({
            known_types,
            object_filter,
            data,
          })
          await process_checkpoint(parsed_checkpoint, current_checkpoint_number)
          processing_settings.current_checkpoint++
        } else {
          // checkpoint not found, we wait a bit
          if (++index_missing % 10 === 0) {
            log.debug(
              { current_checkpoint_number },
              '[~] waiting for checkpoint',
            )

            // since it keeps failing, force download the current
            known_checkpoints.set(
              current_checkpoint_number,
              await get_remote_checkpoint(current_checkpoint_number),
            )

            // then flush all existing checkpoints
            const recent_existing_files =
              get_local_checkpoints(checkpoints_folder)

            log.debug(
              {
                recent_existing_files: recent_existing_files.length,
                from: recent_existing_files[0],
                to: recent_existing_files.at(-1),
              },
              'There are existing checkpoints files',
            )

            for (const file of recent_existing_files) {
              if (file >= from && file <= to) {
                const buffer = readFileSync(
                  path.join(checkpoints_folder, `${file}.chk`),
                )
                known_checkpoints.set(file, buffer)
              }
            }
          }
          await setTimeout(100)
        }
      } catch (error) {
        log.fatal(error)
        log.warn(
          { current_checkpoint_number },
          `/!\\ Error while processing checkpoint, this should never happen and is an internal problem of the sui-checkpoint-reader lib:`,
        )
        process.exit(1)
      }
    }
  }

  if (!local_files_only) start_downloading_checkpoints()
  if (cleanup_checkpoints) start_cleaning_up_checkpoints()
  await start_processing_checkpoints().then(() => {
    controller.abort()
    processing_settings.watcher?.close()
  })
}

export function premap_transaction(transaction) {
  return mapper(transaction, {
    sender: to_address,
    address: to_address,
    digest: toHEX,
    owner: o => (Array.isArray(o) ? to_address(o) : o),
    transaction_digest: to_address,
    AddressOwner: to_address,
    ObjectOwner: to_address,
    previous_transaction: to_address,
    package_id: to_address,
    consensus_commit_digest: to_address,
    ObjectWrite: ([key, value]) => ({ [toB58(key)]: value }),
    changed_objects: entries_array =>
      Object.fromEntries(
        entries_array.map(([key, value]) => [to_address(key), value]),
      ),
    dependencies: dependencies => dependencies.map(to_address),
  })
}

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-storage/src/blob.rs#L19
const BLOB_ENCODING_BCS = 1

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-storage/src/blob.rs#L78-L85
function read_blob(buffer) {
  const view = new Uint8Array(buffer)
  const [encoding] = view
  return {
    encoding,
    // TODO: subarray seems to cause an issue with the bcs library
    data: view.slice(1),
  }
}

function read_checkpoint({ known_types, object_filter, data }) {
  const { checkpoint_summary, checkpoint_contents, transactions } =
    CheckpointData.parse(data)

  const final_result = {
    checkpoint_summary: {
      ...checkpoint_summary,
      data: mapper(checkpoint_summary.data, {
        content_digest: toHEX,
        previous_digest: toHEX,
      }),
      auth_signature: mapper(checkpoint_summary.auth_signature, {
        signature: toHEX,
      }),
    },
    checkpoint_contents,
    transactions: transactions.map(transaction => {
      const mapped = premap_transaction(transaction)
      const get_object_digest = id => {
        const object_write =
          mapped.effects.V2?.changed_objects[id]?.output_state?.ObjectWrite ??
          {}
        return Object.keys(object_write)[0]
      }

      return {
        ...mapped,
        input_objects: format_objects(
          mapped.input_objects,
          known_types,
          get_object_digest,
        ).filter(object_filter),
        output_objects: format_objects(
          mapped.output_objects,
          known_types,
          get_object_digest,
        ).filter(object_filter),
        ...(mapped.events?.data?.length && {
          events: format_events(mapped.events.data, known_types),
        }),
      }
    }),
  }

  // console.dir(final_result, { depth: Infinity })

  return final_result
}
