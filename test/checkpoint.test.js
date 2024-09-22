import { read_checkpoints } from '../src/index.js'

await read_checkpoints({
  from: 111718064,
  to: 111718064,
  process_checkpoint: async (data, index) => {
    console.dir({ data, index })
  },
})
