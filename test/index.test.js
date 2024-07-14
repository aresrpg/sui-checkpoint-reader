import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs'
import path from 'path'
import { test, describe, before, after } from 'node:test'
import assert from 'node:assert/strict'

import { read_checkpoints } from '../src/index.js'

const test_folder = './test_checkpoints'
const base_url = 'https://checkpoints.testnet.sui.io/'

const ensure_folder_exists = folder => !existsSync(folder) && mkdirSync(folder)
const cleanup_folder = folder => {
  if (existsSync(folder)) {
    console.log('Cleaning up folder')
    rmSync(folder, { recursive: true, force: true })
  }
}

const download_checkpoint = async num => {
  const response = await fetch(`${base_url}${num}.chk`)
  const buffer = await response.arrayBuffer()
  writeFileSync(path.join(test_folder, `${num}.chk`), Buffer.from(buffer))
}

describe('read_checkpoints basic functionality', async () => {
  before(() => ensure_folder_exists(test_folder))
  after(() => cleanup_folder(test_folder))

  await test('reading checkpoint 1', async () => {
    await read_checkpoints({
      to: 1,
      cleanup_checkpoints: true,
      concurrent_downloads: 2,
      async process_checkpoint({ checkpoint_summary }) {
        assert.deepEqual(checkpoint_summary.data, {
          epoch: '0',
          sequence_number: '1',
          network_total_transactions: '2',
          content_digest:
            '46b7cba9ce67cbbd5b3c1f3e20a65cbf54bd08a6692465d31c8867c4b10893e6',
          previous_digest:
            '4c78adacf2a2f5ad80f27ed7d54aa69d3a78f1ca67fdef9ecf5754f5b8bb77b0',
          epoch_rolling_gas_cost_summary: {
            computation_cost: '0',
            storage_cost: '0',
            storage_rebate: '0',
            non_refundable_storage_fee: '0',
          },
          timestamp_ms: '1683810749434',
          checkpoint_commitments: [],
          end_of_epoch_data: null,
          version_specific_data: [],
        })
      },
    })
  })

  await test('reading checkpoint 66582638', async () => {
    await read_checkpoints({
      from: 66582638,
      to: 66582638,
      cleanup_checkpoints: true,
      async process_checkpoint({ transactions }) {
        assert.deepEqual(transactions[0].effects.V2.dependencies, [
          '0x22092a1643bcd1173c8072eb9fc3661f5e3b8b2326749224195d087787d37261',
          '0x5344ceb048c14f10b32a2e1adcf2cfb188e3cc1d5edd761a2e9bc62277bf40c1',
          '0x895e99b6cc9f35b70b3ed839a8c0f25ed92f89ddbcb8a2b403725f24da2f5717',
          '0xa45864a43a7c69a904881c638696876364572877e1f802c1ccc311be36a76b74',
          '0xc21b1b9c4d82baa567af039be7b2a245803d3f1699b5e109d72c7cd920d6e119',
          '0xc64df2bc6be5ef431d91a445fc52df069ca887c2d87bb662b909258ed88c06ff',
        ])
      },
    })
  })

  await test('continuous reading from remote', async () => {
    let current_checkpoint = 1000
    await read_checkpoints({
      from: current_checkpoint,
      to: 1005,
      cleanup_checkpoints: true,
      async process_checkpoint(_, index) {
        assert.strictEqual(index, current_checkpoint++)
      },
    })
    assert.strictEqual(current_checkpoint, 1006)
  })
})

describe('read_checkpoints with local files and remote fallback', () => {
  before(() => ensure_folder_exists(test_folder))
  after(() => cleanup_folder(test_folder))

  test('download and processes checkpoints', async () => {
    const checkpoints_to_download = [10, 11, 12]
    await Promise.all(checkpoints_to_download.map(download_checkpoint))

    let highest_processed = 0
    await read_checkpoints({
      from: 4,
      to: 12,
      concurrent_downloads: 5,
      checkpoints_folder: test_folder,
      cleanup_checkpoints: true,
      async process_checkpoint(_, index) {
        if (index > highest_processed) highest_processed = index
      },
    })
    assert.strictEqual(highest_processed, 12)
  })
})
