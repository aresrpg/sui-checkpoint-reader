import { setInterval, setTimeout } from 'timers/promises'
import path from 'path'
import { readFileSync, unlinkSync } from 'fs'
import { performance } from 'perf_hooks'

import { bcs, toB58, toHEX } from '@mysten/bcs'
import chokidar from 'chokidar'

import sui_bcs from './generated/0x2.js'
import standard_bcs from './generated/0x1.js'
import { get_local_checkpoints } from './get_local_checkpoints.js'
import { SuiAddress } from './generated/bcs-sui.js'
import { CheckpointData } from './bcs-checkpoints.js'

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
    type_params = [],
    $kind,
    ...rest
  }) {
    if ($kind && $kind !== 'Struct') {
      switch ($kind) {
        case 'Address':
          return SuiAddress
        case 'Vector':
          if (rest.Vector.Struct) return find_nested_bcs(rest.Vector.Struct)
          return bcs.vector(bcs[rest.Vector.$kind.toLowerCase()])
        default:
          return bcs[$kind.toLowerCase()]()
      }
    }

    const current_bcs = known_types[address]?.[module]?.[name]

    if (!current_bcs) return

    if (type_params.length) {
      const nested_bcs = type_params.map(({ Struct, ...rest }) => {
        if (!Struct) return find_nested_bcs(rest)
        return find_nested_bcs(Struct)
      })

      if (nested_bcs.some(b => !b)) return
      return current_bcs(...nested_bcs)
    }

    return current_bcs
  }

  const found_bcs = find_nested_bcs(struct)

  if (!found_bcs?.parse) return

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
        Other: { address, module, name, type_params = [] } = {},
      },
      has_public_transfer,
      contents,
      version,
    } = Move

    const parsed_type_params = parse_type_param(type_params)

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
        ...(type_params?.length && {
          type_params: `${address}::${module}::${name}<${parsed_type_params}>`,
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

      const has_sub_type = type.type_params?.length
      const parsed_type = parse_type_param(type.type_params)
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

function parse_type_param(params = []) {
  if (!params.length) return ''
  return params.reduce((result, { Struct, $kind }) => {
    if (!Struct) return `${result}, ${$kind.toLowerCase()}`
    const { address, module, name, type_params = [] } = Struct
    const typename = `${address}::${module}::${name}`

    if (!result)
      if (type_params.length)
        return `${typename}<${parse_type_param(type_params)}>`
      else return typename

    if (type_params.length)
      return `${result}, ${typename}<${parse_type_param(type_params)}>`
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
    console.log('[indexer] process_checkpoint:', index)
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
  const existing_files = get_local_checkpoints(checkpoints_folder)
  const [lowest_known_checkpoint_path] = existing_files
  const lowest_known_checkpoint = lowest_known_checkpoint_path
    ? +path.basename(lowest_known_checkpoint_path, '.chk')
    : null

  function log_update(index, msg) {
    console.log(`-- [cache size: ${known_checkpoints.size}]`, msg, index)
  }

  const processing_state = {
    cached: 0,
    last_detected: 0,
    downloaded: 0,
    cleaned: 0,
    processing: 0,
    downloads_per_second: 0,
    processing_per_second: 0,
    elapsed: 0,
  }

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
    console.log('[local] starting to watch for local checkpoints')
    processing_settings.watcher = chokidar.watch(checkpoints_folder, {
      persistent: true,
    })
    processing_settings.watcher.on('add', async file_path => {
      // if we detect local checkpoints
      // console.log('[system] detected new checkpoint:', file_path)
      const file_number = +path.basename(file_path, '.chk')

      processing_state.last_detected = file_number

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
      console.log('[system] starting to download checkpoints', {
        from,
        to:
          lowest_known_checkpoint == null
            ? to
            : Math.min(to, lowest_known_checkpoint),
      })
    else start_listening_for_local_checkpoints()

    while (should_keep_downloading(sync_settings.current_checkpoint)) {
      try {
        const start_time = performance.now()

        await Promise.all(
          Array.from({ length: concurrent_downloads }, async (_, i) => {
            const current_checkpoint_number =
              sync_settings.current_checkpoint + i

            // if the count reaches the lowest known checkpoint or the target checkpoint, we stop
            if (!should_keep_downloading(current_checkpoint_number)) {
              sync_settings.catching_up = false
              return
            }

            log_update(current_checkpoint_number, '[<] downloading checkpoint:')

            const buffer = await get_remote_checkpoint(
              current_checkpoint_number,
            )

            known_checkpoints.set(current_checkpoint_number, buffer)
          }),
        )

        processing_state.downloaded += Math.min(
          concurrent_downloads,
          to - sync_settings.current_checkpoint,
        )

        const end_time = performance.now()
        const elapsed = ((end_time - start_time) / 1000).toFixed(2)

        console.log(
          '[remote] downloaded',
          concurrent_downloads,
          'checkpoints in',
          +elapsed,
          's',
        )

        sync_settings.current_checkpoint += concurrent_downloads

        // Once we caught up, we start watching for file changes
        if (!sync_settings.catching_up && checkpoints_folder)
          start_listening_for_local_checkpoints()
      } catch (error) {
        console.error(
          `[remote] Some checkpoints couldn't be downloaded, retrying in 2s`,
          error,
        )
        await setTimeout(2000)
        sync_settings.catching_up = true
      }
    }
  }

  async function start_cleaning_up_checkpoints() {
    console.log('[system] starting to clean up old checkpoints')
    try {
      // eslint-disable-next-line no-unused-vars
      for await (const _ of setInterval(5000, true, {
        signal: controller.signal,
      })) {
        // check all checkpoints files, remove those below the currently processed
        const files = get_local_checkpoints(checkpoints_folder).map(
          f => +path.basename(f, '.chk'),
        )
        for (const file of files) {
          if (file < processing_settings.current_checkpoint) {
            log_update(file, '[x] cleaning up checkpoint:')
            unlinkSync(path.join(checkpoints_folder, `${file}.chk`))
            processing_state.cached++
          }
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') throw error
    }
  }

  async function start_processing_checkpoints() {
    console.log('[system] starting to process checkpoints')
    while (processing_settings.current_checkpoint <= to) {
      const checkpoint_buffer = known_checkpoints.get(
        processing_settings.current_checkpoint,
      )
      const current_checkpoint_number = processing_settings.current_checkpoint
      known_checkpoints.delete(current_checkpoint_number)

      try {
        if (checkpoint_buffer) {
          log_update(current_checkpoint_number, '[>] processing checkpoint:')
          const parsed_checkpoint = read_checkpoint(
            checkpoint_buffer,
            known_types,
            object_filter,
          )
          processing_state.processing = current_checkpoint_number
          await process_checkpoint(parsed_checkpoint, current_checkpoint_number)
          processing_settings.current_checkpoint++
        } else {
          // console.warn(
          //   'missing checkpoint:',
          //   processing_settings.current_checkpoint,
          //   'retrying in 5s',
          // )
          await setTimeout(2000)
        }
      } catch (error) {
        console.error(
          '/!\\ Error while processing checkpoint, this should never happen and is an internal problem of the sui-checkpoint-reader lib:',
          '\ncurrent checkpoint:',
          current_checkpoint_number,
          error,
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
  return {
    encoding: view[0],
    // TODO: subarray seems to cause an issue with the bcs library
    data: view.slice(1),
  }
}

function read_checkpoint(buffer, known_types, object_filter) {
  const { encoding, data } = read_blob(buffer)
  if (encoding !== BLOB_ENCODING_BCS)
    throw new Error(`unsupported encoding ${encoding}`)

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
