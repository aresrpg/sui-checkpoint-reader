import { bcs } from '@mysten/bcs'

import {
  Data,
  Owner,
  SuiAddress,
  TransactionDigest,
} from './generated/bcs-sui.js'

const IntentScope = bcs.u8()
const IntentVersion = bcs.u8()
const AppId = bcs.u8()

const Intent = bcs.struct('Intent', {
  scope: IntentScope,
  version: IntentVersion,
  app_id: AppId,
})

export const IntentMessage = value =>
  bcs.struct(`IntentMessage(${value.name})`, {
    intent: Intent,
    value,
  })

const SuiObject = bcs.struct('SuiObject', {
  data: Data,
  owner: Owner,
  previous_transaction: TransactionDigest,
  storage_rebate: bcs.u64(),
})

const FileType = bcs.enum('FileType', {
  Object: null,
  Reference: null,
})

const FileCompression = bcs.enum('FileCompression', {
  None: null,
  Zstd: null,
})

const FileMetadata = bcs.struct('FileMetadata', {
  file_type: FileType,
  bucket_num: bcs.u32(),
  part_num: bcs.u32(),
  file_compression: FileCompression,
  sha3_digest: bcs.fixedArray(32, bcs.u8()),
})

const ManifestV1 = bcs.struct('ManifestV1', {
  snapshot_version: bcs.u8(),
  address_length: bcs.u64(),
  file_metadata: bcs.vector(FileMetadata),
  epoch: bcs.u64(),
})

const ObjectKey = bcs.struct('ObjectKey', {
  object_id: SuiAddress,
  version: bcs.u64(),
})

export const LiveObject = bcs.enum('LiveObject', {
  Normal: SuiObject,
  Wrapped: ObjectKey,
})

export const Manifest = bcs.enum('Manifest', {
  V1: ManifestV1,
})
