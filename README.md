<p align=center>
  <img src="https://user-images.githubusercontent.com/11330271/208825167-77d7bc78-17d0-4f33-ad35-d108b6fac730.gif" height="237px" width="344"/>
</p>
<h1 align=center>@aresrpg/sui-checkpoint-reader</h1>
<p align=center>
  <img src="https://img.shields.io/badge/Made%20with-Javascript-%23f7df1e?style=for-the-badge" alt="fully in javascript"/>
  <img src="https://img.shields.io/badge/Powered%20By-Dark%20Magic-blueviolet?style=for-the-badge" alt="powered by lsd"/>
  <a href="https://discord.gg/aresrpg">
    <img src="https://img.shields.io/discord/265104803531587584.svg?logo=discord&style=for-the-badge" alt="Chat"/>
  </a>
  <a href="https://www.npmjs.com/package/@aresrpg/sui-checkpoint-reader">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/%40aresrpg%2Fsui-checkpoint-reader?style=for-the-badge">
  </a>
</p>
<h3 align=center>Process sui checkpoints with ease</h3>

This library allows building custom [Sui indexers](https://docs.sui.io/guides/developer/advanced/custom-indexer?ref=blog.sui.io) in JavaScript. It reads checkpoint files from both remote and local sources and processes them efficiently.

It also allows building a local leveldb from Sui's formal snapshots, which you can then process to initialize your indexer without the need to read checkpoints history for past epochs

> **Note:** This is a work in progress and might not be suited for production usage.

## 🚀 Getting Started

First, install the library:

```sh
npm install @aresrpg/sui-checkpoint-reader
```

Here's a basic example of how to use the library:

```js
import { read_checkpoints } from '@aresrpg/sui-checkpoint-reader/reader'

async function get_remote_checkpoint(num) {
  const response = await fetch(`https://checkpoints.testnet.sui.io/${num}.chk`)
  const buffer = await response.arrayBuffer()
  return buffer
}

async function process_checkpoint(checkpoint, index) {
  console.log('[indexer] process_checkpoint:', index)
}

const known_types = {}

await read_checkpoints({
  from: 1, // Start processing from checkpoint 1
  to: Infinity, // Continue processing indefinitely
  get_remote_checkpoint, // Function to fetch checkpoint data
  concurrent_downloads: 25, // Number of concurrent downloads allowed
  known_types, // BCS types you want to parse
  checkpoints_folder: '', // Local folder for checkpoint files (nesting is supported at 1 level)
  cleanup_checkpoints: false, // Clean up processed checkpoint files
  process_checkpoint, // Function to process each checkpoint
  local_files_only: false, // if true, the reader will only use checkpoints exported by the node
})
```

And here is how to get your leveldb from the formal snapshot

```js
import { download_and_store_objects, read_snapshot_objects, get_db } from '@aresrpg/sui-checkpoint-reader/snapshot'

const DB_FOLDER = './sui-formal-objects'
const db = get_db(DB_FOLDER)

// this will start download the formal snapshot of the specified epoch
// and save any objects recognized by your known types into leveldb (key: id, value: object)
await download_and_store_objects({
  network: 'testnet',
  epoch: 440, // the epoch of the snapshot
  known_types, // same types as for checkpoint reading
  save_objects: false, // if you want to also save the .obj files locally under obj_folder/epoch_X/*.obj
  start_bucket = 1, // optional start files 1_1.obj
  start_part = 1,
  db,
  obj_folder = './obj_files' // if `save_objects` is true, it'll use this folder to save obj files
  concurrent_downloads = 1, // how many obj files to download in one go
})


// and here you can iterate easily on your leveldb, note that you can use anything else to read those
for await (const object of read_snapshot_objects(db)) {
  // process all objects here, for example use db.get(object.contents.kiosk_id)
  // to save something like { object, object_kiosk } in your storage of choice
  console.dir(object, { depth: Infinity })
}
```

## ⚙️ How It Works

The reader supports two modes: **remote-only** and **hybrid** (more powerful) mode.

### Hybrid Mode (with `checkpoints_folder` specified)

1. **Initial Check**: The reader will first check existing checkpoint files and determine what needs to be downloaded to fill the gap between `from` and the lowest present checkpoint file.
2. **Gap Filling**: If `from` is lower than the lowest checkpoint file, missing checkpoints will be downloaded up to the lower checkpoint file.
3. **Sequential Processing**: The reader will process checkpoints sequentially as they become available.
4. **Stopping Remote Reader**: Once all checkpoints up to the lowest file (or the `to` parameter) are downloaded, the remote reader will stop.
5. **Local File Watching**: Local checkpoint files will be watched and processed as they become available.

### Remote-Only Mode (without `checkpoints_folder`)

In this mode, the reader will rely solely on remote checkpoint files:

- **Fetching Checkpoints**: Checkpoints are fetched from the specified remote source.
- **Sequential Processing**: Checkpoints are processed in sequential order as they are downloaded.
- **Efficient Downloads**: The reader handles concurrent downloads up to the specified limit.

## Example Usage for Remote-Only Mode

```js
import { read_checkpoints } from '@aresrpg/sui-checkpoint-reader'

async function get_remote_checkpoint(num) {
  const response = await fetch(`https://checkpoints.testnet.sui.io/${num}.chk`)
  const buffer = await response.arrayBuffer()
  return buffer
}

async function process_checkpoint(checkpoint, index) {
  console.log('[indexer] process_checkpoint:', index)
}

const known_types = {}

await read_checkpoints({
  from: 1,
  get_remote_checkpoint,
  concurrent_downloads: 25,
  known_types,
  process_checkpoint,
})
```

## 🧩 BCS Types

To parse specific objects within the checkpoints, you can provide the BCS definitions directly.

### Generating BCS Types

You can generate the necessary types using the https://github.com/Sceat/sui-bcs. Here is an example of how to generate them:

```bash
npx sui-bcs gen --package <package_address> --file <output_file> --network <network_name>
```

> The `network_name` defaults to `testnet` if not provided. Not that you can also generate 0x2 types as needed

### Example Usage

Here's an example of how you can define and use known BCS types:

```js
// npx sui-bcs gen --package 0x68e06aee7966648c7b3258f02d5c7da2cf9b035727d6e9167c90e662f20e0406 --file aresrpg-bcs.js --network testnet
import { read_checkpoints } from '@aresrpg/sui-checkpoint-reader'

import aresrpg_bcs from './aresrpg-bcs.js'

const ARESRPG =
  '0x68e06aee7966648c7b3258f02d5c7da2cf9b035727d6e9167c90e662f20e0406'

const known_types = {
  [ARESRPG]: aresrpg_bcs,
}
```

This configuration allows the checkpoint reader to correctly parse and process the objects within the checkpoints.

> Note that 0x1 & 0x2 are built in

## 📖 API Reference

### `read_checkpoints(options)`

**Options:**

- `from`: Start processing from this checkpoint number (default: `1`).
- `to`: Stop processing once this checkpoint number is reached (default: `Infinity`).
- `get_remote_checkpoint`: Function to fetch a checkpoint array buffer from a number.
- `concurrent_downloads`: Number of concurrent downloads allowed while catching up (default: `25`).
- `known_types`: Generated BCS for types you want to parse.
- `checkpoints_folder`: Local folder where your Sui node is dumping the checkpoint files (default: `''`).
- `cleanup_checkpoints`: Option to delete already processed checkpoint files (default: `false`).
- `process_checkpoint`: Function to process a checkpoint.

### `download_and_store_objects(options)`

**Options:**

- `network`: Network to download the snapshot from (e.g., `'testnet'`).
- `epoch`: Epoch of the snapshot.
- `known_types`: Generated BCS for types you want to parse.
- `save_objects`: If true, saves `.obj` files locally under `obj_folder/epoch_X/\*.obj` (default: `false`).
- `start_bucket`: Optional start file (e.g., `1_1.obj`) (default: `1`).
- `start_part`: Part to start from (default: `1`).
- `db`: Classic level instance.
- `obj_folder`: Folder to store the `.obj` files
- `concurrent_downloads`: Concurrent obj files download

### `read_snapshot_objects(db)`

- `db`: The Classic level db instance

Returns:

An async generator yielding [db, object] pairs for processing.

## Contributing 🛠️

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License 📄

This project is licensed under the ISC License.
