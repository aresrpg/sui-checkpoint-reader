import { read_checkpoints } from '../src/index.js'

await read_checkpoints({
  from: 100262512,
  to: 100262512,
  process_checkpoint: async (data, index) => {
    console.dir({ data, index })
  },
})
