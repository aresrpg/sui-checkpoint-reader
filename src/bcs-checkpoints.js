import { bcs } from '@mysten/bcs'

import {
  CheckpointContents,
  CheckpointSummary,
  Data,
  EmptySignInfo,
  Owner,
  SenderSignedData,
  StructTag,
  SuiAddress,
  TransactionDigest,
  TransactionEffects,
} from './generated/bcs-sui.js'

const Envelope = (name, data, auth_signature) =>
  bcs.struct(name, {
    data,
    auth_signature,
  })

const IntentScope = bcs.u8()
const IntentVersion = bcs.u8()
const AppId = bcs.u8()
const EpochId = bcs.u64()

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

const AggregateAuthoritySignature = bcs.fixedArray(48, bcs.u8())
const SuiBitmap = bcs.vector(bcs.u8())

const AuthorityStrongQuorumSignInfo = bcs.struct(
  'AuthorityStrongQuorumSignInfo',
  {
    epoch: EpochId,
    signature: AggregateAuthoritySignature,
    signers_map: SuiBitmap,
  },
)

const CertifiedCheckpointSummary = Envelope(
  'CertifiedCheckpointSummary',
  CheckpointSummary,
  AuthorityStrongQuorumSignInfo,
)

const SuiObject = bcs.struct('SuiObject', {
  data: Data,
  owner: Owner,
  previous_transaction: TransactionDigest,
  storage_rebate: bcs.u64(),
})

const Transaction = Envelope('Transaction', SenderSignedData, EmptySignInfo)

const TransactionEvent = bcs.struct('TransactionEvent', {
  package_id: SuiAddress,
  transaction_module: bcs.string(),
  sender: SuiAddress,
  type: StructTag,
  contents: bcs.vector(bcs.u8()),
})

const TransactionEvents = bcs.struct('TransactionEvents', {
  data: bcs.vector(TransactionEvent),
})

const CheckpointTransaction = bcs.struct('CheckpointTransaction', {
  transaction: Transaction,
  effects: TransactionEffects,
  events: bcs.option(TransactionEvents),
  input_objects: bcs.vector(SuiObject),
  output_objects: bcs.vector(SuiObject),
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

export const CheckpointData = bcs.struct('CheckpointData', {
  checkpoint_summary: CertifiedCheckpointSummary,
  checkpoint_contents: CheckpointContents,
  transactions: bcs.vector(CheckpointTransaction),
})
