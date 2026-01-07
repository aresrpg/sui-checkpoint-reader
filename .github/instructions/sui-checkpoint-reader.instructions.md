---
applyTo: '**'
---

# Sui Checkpoint Reader (Library)

## Purpose
Shared JavaScript library for reading and processing Sui blockchain checkpoints. Used by both indexers (JS and Rust) for checkpoint streaming and snapshot handling.

## Architecture Role
**Position in Stack:** Utility Library
- **Used by:** aresrpg-indexer, aresrpg-rust-indexer (reference)
- **Purpose:** Abstract checkpoint reading, BCS parsing, snapshot downloading
- **Distribution:** NPM package `@aresrpg/sui-checkpoint-reader`

## Core Exports

### `/src/index.js` - Checkpoint Reader
```javascript
import { read_checkpoints } from '@aresrpg/sui-checkpoint-reader/reader'

await read_checkpoints({
  from: 167000000,              // Start checkpoint
  to: Infinity,                 // End checkpoint (Infinity = continuous)
  get_remote_checkpoint,        // Fetch function
  concurrent_downloads: 25,     // Parallel downloads
  known_types: { ... },         // BCS type registry
  checkpoints_folder: './chk',  // Local cache
  cleanup_checkpoints: true,    // Delete after processing
  process_checkpoint,           // Handler function
  local_files_only: false,      // Only use local files
})
```

### `/src/snapshot/` - Snapshot Handling
```javascript
import {
  download_and_store_objects,
  read_snapshot_objects,
  get_db,
} from '@aresrpg/sui-checkpoint-reader/snapshot'

// Download and parse Sui formal snapshot
await download_and_store_objects({
  network: 'testnet',
  epoch: 645,
  known_types: { ... },
  db,                           // LevelDB instance
  save_objects: false,          // Keep .obj files
  obj_folder: './snapshots',
  concurrent_downloads: 15,
  start_bucket: 1,              // Resume from specific file
  start_part: 1,
})
```

### `/src/bcs-checkpoints.js` - BCS Parsing
- Checkpoint deserialization
- Transaction parsing
- Event extraction
- Object change detection

### `/src/generated/` - Sui BCS Types
- `bcs-sui.js`: Core Sui types (Address, ObjectID, Transaction, etc.)
- `0x1.js`: Move stdlib types
- `0x2.js`: Sui framework types

## Key Functions

### Checkpoint Processing
```javascript
function process_checkpoint(checkpoint, index) {
  // checkpoint.transactions: Array of transactions
  // checkpoint.timestamp_ms: Checkpoint time
  // checkpoint.epoch: Current epoch
  // checkpoint.sequence_number: Checkpoint number

  const events = checkpoint.transactions
    .flatMap(tx => tx.events)
    .filter(Boolean)

  const objects = checkpoint.transactions
    .flatMap(tx => tx.output_objects)
    .filter(Boolean)

  // Process events and objects
}
```

### BCS Type Registration
```javascript
// Register custom Move package types
import aresrpg_bcs from './generated/aresrpg-bcs.js'

const known_types = {
  '0x46a07ea4ba0999cfc2c14d24531d7b5a5268afa18131777003f34e23a51bef2a': aresrpg_bcs,
  // More packages...
}
```

### Object Filtering
```javascript
// Only process objects with parsed id
const filtered = objects
  .map(obj => parse_content(obj, { known_types }))
  .filter(obj => obj.contents?.id) // Must have id field in Move struct
```

## Code Style

### Functional JavaScript
```javascript
// ✅ Good: Functional, no semicolons
const events = checkpoint.transactions
  .flatMap(({ events }) => events)
  .filter(Boolean)
  .map(parse_event)

// ✅ Good: Async iterables for streams
async function* checkpoint_stream() {
  for await (const checkpoint of read_checkpoints(...)) {
    yield checkpoint
  }
}

// ✅ Good: Function keyword for named functions
function parse_content(object, { known_types }) {
  const type_str = object.type
  const parser = known_types[type_str]
  return parser ? parser.parse(object.contents) : null
}
```

## Integration Points

### With aresrpg-indexer
```javascript
import { read_checkpoints } from '@aresrpg/sui-checkpoint-reader/reader'
import { download_and_store_objects } from '@aresrpg/sui-checkpoint-reader/snapshot'

// Bootstrap from snapshot
await download_and_store_objects({ epoch: 645, ... })

// Stream checkpoints
await read_checkpoints({
  from: last_processed_checkpoint,
  process_checkpoint: async (checkpoint) => {
    // Update FalkorDB
  },
})
```

### With aresrpg-rust-indexer
- **Reference implementation** for BCS parsing logic
- **Snapshot download flow** replicated in Rust
- **Filter pattern** (`.filter(object => object.contents?.id)`) implemented

### With sui-bcs
- Uses `@mysten/bcs` for BCS serialization
- Custom type definitions built on top

## Snapshot Architecture

### Download Flow
1. **Query manifest:** `https://formal-snapshot.{network}.sui.io/{epoch}/MANIFEST`
2. **Parse manifest:** Extract file list (bucket_num, part_num)
3. **Download .obj files:** Parallel downloads (zstd compressed)
4. **Decompress:** zstd decompression
5. **Parse BCS:** LiveObject enum (Normal or Wrapped)
6. **Filter:** Only objects with matching package types
7. **Store:** LevelDB (key: object_id, value: JSON)

### LiveObject Format
```javascript
// BCS enum
LiveObject = {
  Normal: Object,      // Full object data (variant 0)
  Wrapped: ObjectKey,  // Reference only (variant 1)
}

// Only process Normal variant
if (live_object.variant === 0) {
  const object = live_object.Normal
  // Parse and filter
}
```

### File Naming
- Pattern: `{bucket_num}_{part_num}.obj`
- Example: `1_15.obj`, `42_7.obj`
- Bucket: 0-based partition
- Part: Sub-partition within bucket

## Performance Considerations

### Concurrent Downloads
- **Default:** 25 concurrent for checkpoints
- **Snapshots:** 15 concurrent for .obj files
- **Trade-off:** Network bandwidth vs processing speed

### Local Caching
- **checkpoints_folder:** Store .chk files locally
- **cleanup_checkpoints:** Delete after processing (save disk)
- **Resume capability:** Start from any checkpoint

### Memory Usage
- **Streaming:** Process checkpoints one at a time
- **LevelDB:** Efficient key-value storage
- **BCS:** Zero-copy deserialization where possible

## Common Tasks

### Adding New BCS Type
```javascript
// 1. Generate type definition (from Move package)
// 2. Export from generated file
export const MyType = bcs.struct('MyType', {
  id: bcs.Address,
  field: bcs.u64,
})

// 3. Register in known_types
const known_types = {
  '0xPACKAGE_ADDRESS': { MyType },
}
```

### Debugging Checkpoint
```javascript
// Fetch specific checkpoint
const checkpoint = await get_remote_checkpoint(167166154)

// Parse with BCS
const parsed = CheckpointData.deserialize(checkpoint)

// Inspect transactions
console.log(parsed.transactions.length)
console.log(parsed.transactions[0].events)
```

### Handling Parse Errors
```javascript
try {
  const parsed = parse_content(object, { known_types })
} catch (error) {
  // BCS parse failed
  console.log('Failed to parse object:', object.id, error)
  // Skip object or retry with different type
}
```

## Important Reminders

- ⚠️ **Filter on contents.id:** Only store objects where parsed Move data has `id` field
- ⚠️ **BCS types must match:** Move package changes require regenerating types
- ⚠️ **Snapshot epochs:** Not all epochs have snapshots (may need to try earlier)
- ⚠️ **LiveObject variants:** Only process Normal (variant 0), skip Wrapped
- ⚠️ **Concurrent downloads:** Balance network bandwidth and processing
- ⚠️ **Checkpoint order:** Process in sequence, don't skip
- ⚠️ **Memory management:** Stream processing, avoid loading all checkpoints
- ⚠️ **Error recovery:** Handle network errors, corrupted files gracefully
