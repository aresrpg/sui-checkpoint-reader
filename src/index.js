import { setInterval, setTimeout } from 'timers/promises'
import path from 'path'
import { existsSync, readFileSync, readdirSync, unlinkSync } from 'fs'

import { bcs, toHEX } from '@mysten/bcs'
import chokidar from 'chokidar'

import sui_bcs from './generated/0x2.js'
import standard_bcs from './generated/0x1.js'

const Envelope = (name, data, auth_signature) =>
  bcs.struct(name, {
    data,
    auth_signature,
  })

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/shared-crypto/src/intent.rs#L60-L70
const IntentScope = bcs.u8()

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/shared-crypto/src/intent.rs#L18-L20
const IntentVersion = bcs.u8()

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/shared-crypto/src/intent.rs#L35-L39
const AppId = bcs.u8()

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/shared-crypto/src/intent.rs#L85-L89
const Intent = bcs.struct('Intent', {
  scope: IntentScope,
  version: IntentVersion,
  app_id: AppId,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/shared-crypto/src/intent.rs#L167-L170
const IntentMessage = value =>
  bcs.struct(`IntentMessage(${value.name})`, {
    intent: Intent,
    value,
  })

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/gas.rs#L139-L157
const GasCostSummary = bcs.struct('GasCostSummary', {
  computation_cost: bcs.u64(),
  storage_cost: bcs.u64(),
  storage_rebate: bcs.u64(),
  non_refundable_storage_fee: bcs.u64(),
})

const EpochId = bcs.u64()
const CheckpointSequenceNumber = bcs.u64()
const CheckpointTimestamp = bcs.u64()

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/digests.rs#L20-L24
// vector due to the usage of Readable<..., Bytes>
const Digest = bcs.vector(bcs.u8())

const ECMHLiveObjectSetDigest = bcs.struct('ECMHLiveObjectSetDigest', {
  digest: Digest,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_checkpoint.rs#L123-L127
const CheckpointCommitment = bcs.enum('CheckpointCommitment', {
  ECMHLiveObjectSetDigest,
})

const AuthorityName = bcs.fixedArray(32, bcs.u8())
const StakeUnit = bcs.u64()
const ProtocolVersion = bcs.u64()

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_checkpoint.rs#L138-L158
const EndOfEpochData = bcs.struct('EndOfEpochData', {
  next_epoch_committee: bcs.vector(bcs.tuple([AuthorityName, StakeUnit])),
  next_epoch_protocol_version: ProtocolVersion,
  epoch_commitments: bcs.vector(CheckpointCommitment),
})

const CheckpointContentsDigest = Digest
const CheckpointDigest = Digest

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_checkpoint.rs#L161-L192
const CheckpointSummary = bcs.struct('CheckpointSummary', {
  epoch: EpochId,
  sequence_number: CheckpointSequenceNumber,
  network_total_transactions: bcs.u64(),
  content_digest: CheckpointContentsDigest,
  previous_digest: bcs.option(CheckpointDigest),
  epoch_rolling_gas_cost_summary: GasCostSummary,
  timestamp_ms: CheckpointTimestamp,
  checkpoint_commitments: bcs.vector(CheckpointCommitment),
  end_of_epoch_data: bcs.option(EndOfEpochData),
  version_specific_data: bcs.vector(bcs.u8()),
})

const AggregateAuthoritySignature = bcs.fixedArray(48, bcs.u8())
const SuiBitmap = bcs.vector(bcs.u8())

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/crypto.rs#L1186-L1197
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

const TransactionDigest = Digest
const TransactionEffectsDigest = Digest

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/base_types.rs#L794-L797
const ExecutionDigests = bcs.struct('ExecutionDigests', {
  transaction: TransactionDigest,
  effects: TransactionEffectsDigest,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/signature.rs#L260-L272
const GenericSignature = bcs.vector(bcs.u8())

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_checkpoint.rs#L416-L425
const CheckpointContentsV1 = bcs.struct('CheckpointContentsV1', {
  transactions: bcs.vector(ExecutionDigests),
  user_signatures: bcs.vector(bcs.vector(GenericSignature)),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_checkpoint.rs#L407C1-L409C2
const CheckpointContents = bcs.enum('CheckpointContents', {
  V1: CheckpointContentsV1,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/crypto.rs#L1050
const EmptySignInfo = bcs.struct('EmptySignInfo', {})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-graphql-rpc/src/types/sui_address.rs#L15
const SuiAddress = bcs.fixedArray(32, bcs.u8())

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-graphql-rpc/src/types/object.rs#L100-L107
const ObjectRef = bcs.struct('ObjectRef', {
  address: SuiAddress,
  version: bcs.u64(),
  digest: Digest,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L1478-L1483
const GasData = bcs.struct('GasData', {
  payment: bcs.vector(ObjectRef),
  owner: SuiAddress,
  price: bcs.u64(),
  budget: bcs.u64(),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L1486-L1492
const TransactionExpiration = bcs.enum('TransactionExpiration', {
  None: null,
  Epoch: EpochId,
})

const SequenceNumber = bcs.u64()

const ObjectID = SuiAddress

const Identifier = bcs.string()
const AccountAddress = SuiAddress

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/external-crates/move/crates/move-core-types/src/language_storage.rs#L33-L59
const TypeTag = bcs.enum('TypeTag', {
  Bool: null,
  U8: null,
  U64: null,
  U128: null,
  Address: null,
  Signer: null,
  Vector: bcs.lazy(() => TypeTag),
  Struct: bcs.lazy(() => StructTag),
  U16: null,
  U32: null,
  U256: null,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/external-crates/move/crates/move-core-types/src/language_storage.rs#L140
const StructTag = bcs.struct('StructTag', {
  address: AccountAddress,
  module: Identifier,
  name: Identifier,
  type_params: bcs.vector(TypeTag),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L108-L120
const ObjectArg = bcs.enum('ObjectArg', {
  ImmOrOwnedObject: ObjectRef,
  SharedObject: bcs.struct('SharedObjectArg', {
    id: ObjectID,
    initial_shared_version: SequenceNumber,
    mutable: bcs.bool(),
  }),
  Receiving: ObjectRef,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L81-L86
const CallArg = bcs.enum('CallArg', {
  Pure: bcs.vector(bcs.u8()),
  Object: ObjectArg,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L668-L680
const Argument = bcs.enum('Argument', {
  GasCoin: null,
  Input: bcs.u16(),
  Result: bcs.u16(),
  NestedResult: bcs.tuple([bcs.u16(), bcs.u16()]),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L685-L696
const ProgrammableMoveCall = bcs.struct('ProgrammableMoveCall', {
  package: ObjectID,
  module: Identifier,
  function: Identifier,
  type_arguments: bcs.vector(TypeTag),
  arguments: bcs.vector(Argument),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L635-L664
const Command = bcs.enum('Command', {
  MoveCall: ProgrammableMoveCall,
  TransferObjects: bcs.tuple([bcs.vector(Argument), Argument]),
  SplitCoins: bcs.tuple([Argument, bcs.vector(Argument)]),
  MergeCoins: bcs.tuple([Argument, bcs.vector(Argument)]),
  Publish: bcs.tuple([bcs.vector(bcs.vector(bcs.u8())), bcs.vector(ObjectID)]),
  MakeMoveVec: bcs.tuple([bcs.option(TypeTag), bcs.vector(Argument)]),
  Upgrade: bcs.tuple([
    bcs.vector(bcs.vector(bcs.u8())),
    bcs.vector(ObjectID),
    ObjectID,
    Argument,
  ]),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L625-L631
const ProgrammableTransaction = bcs.struct('ProgrammableTransaction', {
  inputs: bcs.vector(CallArg),
  commands: bcs.vector(Command),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L167-L188
const ChangeEpoch = bcs.struct('ChangeEpoch', {
  epoch: EpochId,
  protocol_version: ProtocolVersion,
  storage_charge: bcs.u64(),
  computation_charge: bcs.u64(),
  storage_rebate: bcs.u64(),
  non_refundable_storage_fee: bcs.u64(),
  epoch_start_timestamp_ms: bcs.u64(),
  system_packages: bcs.vector(
    bcs.tuple([
      SequenceNumber,
      bcs.vector(bcs.vector(bcs.u8())),
      bcs.vector(ObjectID),
    ]),
  ),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_consensus.rs#L28-L35
const ConsensusCommitPrologue = bcs.struct('ConsensusCommitPrologue', {
  epoch: bcs.u64(),
  round: bcs.u64(),
  commit_timestamp_ms: CheckpointTimestamp,
})

const JwkId = bcs.struct('JwkId', {
  iss: bcs.string(),
  kid: bcs.string(),
})

const JWK = bcs.struct('JWK', {
  kty: bcs.string(),
  e: bcs.string(),
  n: bcs.string(),
  alg: bcs.string(),
})

const ActiveJwk = bcs.struct('ActiveJwk', {
  jwk_id: JwkId,
  jwk: JWK,
  epoch: EpochId,
})

const AuthenticatorStateUpdate = bcs.enum('AuthenticatorStateUpdate', {
  epoch: EpochId,
  round: bcs.u64(),
  new_active_jwks: bcs.vector(ActiveJwk),
  authenticator_obj_initial_shared_version: SequenceNumber,
})

const AuthenticatorStateExpire = bcs.struct('AuthenticatorStateExpire', {
  min_epoch: EpochId,
  authenticator_obj_initial_shared_version: SequenceNumber,
})

const ChainIdentifier = CheckpointDigest

const EndOfEpochTransactionKind = bcs.enum('EndOfEpochTransactionKind', {
  ChangeEpoch,
  AuthenticatorStateCreate: null,
  AuthenticatorStateExpire,
  RandomnessStateCreate: null,
  DenyListStateCreate: null,
  BridgeStateCreate: ChainIdentifier,
  BridgeCommitteeInit: SequenceNumber,
})

const RandomnessStateUpdate = bcs.struct('RandomnessStateUpdate', {
  epoch: EpochId,
  randomness_round: bcs.u64(),
  random_bytes: bcs.vector(bcs.u8()),
  randomness_obj_initial_shared_version: SequenceNumber,
})

const ConsensusCommitDigest = Digest

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/messages_consensus.rs#L38-L47
const ConsensusCommitPrologueV2 = bcs.struct('ConsensusCommitPrologueV2', {
  epoch: EpochId,
  round: bcs.u64(),
  commit_timestamp_ms: CheckpointTimestamp,
  consensus_commit_digest: ConsensusCommitDigest,
})

const ConsensusDeterminedVersionAssignments = bcs.enum(
  'ConsensusDeterminedVersionAssignments',
  {
    CancelledTransactions: bcs.struct('CancelledTransactions', {
      transactions: bcs.vector(
        bcs.tuple([TransactionDigest, bcs.tuple([ObjectID, SequenceNumber])]),
      ),
    }),
  },
)

const ConsensusCommitPrologueV3 = bcs.struct('ConsensusCommitPrologueV3', {
  epoch: EpochId,
  round: bcs.u64(),
  sub_dag_index: bcs.option(bcs.u64()),
  commit_timestamp_ms: CheckpointTimestamp,
  consensus_commit_digest: ConsensusCommitDigest,
  consensus_determined_version_assignments:
    ConsensusDeterminedVersionAssignments,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/base_types.rs#L169-L181
const MoveObjectType = bcs.enum('MoveObjectType', {
  Other: StructTag,
  GasCoin: null,
  StakedSui: null,
  Coin: TypeTag,
})

const MoveObject = bcs.struct('MoveObject', {
  type: MoveObjectType,
  has_public_transfer: bcs.bool(),
  version: SequenceNumber,
  contents: bcs.vector(bcs.u8()),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/move_package.rs#L67-L73
const TypeOrigin = bcs.struct('TypeOrigin', {
  module_name: bcs.string(),
  datatype_name: bcs.string(),
  package: ObjectID,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/move_package.rs#L77-L82
const UpgradeInfo = bcs.struct('UpgradeInfo', {
  upgraded_id: ObjectID,
  upgraded_version: SequenceNumber,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/move_package.rs#L87-L111
const MovePackage = bcs.struct('MovePackage', {
  id: ObjectID,
  version: SequenceNumber,
  module_map: bcs.map(bcs.string(), bcs.vector(bcs.u8())),
  type_origin_table: bcs.vector(TypeOrigin),
  linkage_table: bcs.map(ObjectID, UpgradeInfo),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/object.rs#L395-L401
const Data = bcs.enum('Data', {
  Move: MoveObject,
  Package: MovePackage,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/object.rs#L472-L485
const Owner = bcs.enum('Owner', {
  AddressOwner: SuiAddress,
  ObjectOwner: SuiAddress,
  Shared: bcs.struct('SharedOwner', {
    initial_shared_version: SequenceNumber,
  }),
  Immutable: null,
})

const GenesisObject = bcs.enum('GenesisObject', {
  RawObject: bcs.struct('RawObject', {
    data: Data,
    owner: Owner,
  }),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L191-L193
const GenesisTransaction = bcs.struct('GenesisTransaction', {
  objects: bcs.vector(GenesisObject),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L266-L295
const TransactionKind = bcs.enum('TransactionKind', {
  ProgrammableTransaction,
  ChangeEpoch,
  Genesis: GenesisTransaction,
  ConsensusCommitPrologue,
  AuthenticatorStateUpdate,
  EndOfEpochTransaction: bcs.vector(EndOfEpochTransactionKind),
  RandomnessStateUpdate,
  ConsensusCommitPrologueV2,
  ConsensusCommitPrologueV3,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-graphql-rpc/src/types/transaction_block_effects.rs#L78-L83
const ExecutionStatus = bcs.enum('ExecutionStatus', {
  Success: null,
  Failure: null,
})

const TransactionEventsDigest = Digest

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/effects_v1.rs#L20-L58
const TransactionEffectsV1 = bcs.struct('TransactionEffectsV1', {
  status: ExecutionStatus,
  executed_epoch: EpochId,
  gas_used: GasCostSummary,
  modified_at_versions: bcs.vector(bcs.tuple([ObjectID, SequenceNumber])),
  shared_objects: bcs.vector(ObjectRef),
  transaction_digest: TransactionDigest,
  created: bcs.vector(bcs.tuple([ObjectRef, Owner])),
  mutated: bcs.vector(bcs.tuple([ObjectRef, Owner])),
  unwrapped: bcs.vector(bcs.tuple([ObjectRef, Owner])),
  deleted: bcs.vector(ObjectRef),
  unwrapped_then_deleted: bcs.vector(ObjectRef),
  wrapped: bcs.vector(ObjectRef),
  gas_object: bcs.tuple([ObjectRef, Owner]),
  events_digest: bcs.option(TransactionEventsDigest),
  dependencies: bcs.vector(TransactionDigest),
})

const ObjectDigest = Digest

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/base_types.rs#L138
const VersionDigest = bcs.tuple([SequenceNumber, ObjectDigest])

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/object_change.rs#L63-L67
const ObjectIn = bcs.enum('ObjectIn', {
  NotExist: null,
  Exist: bcs.tuple([VersionDigest, Owner]),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/object_change.rs#L70-L78
const ObjectOut = bcs.enum('ObjectOut', {
  NotExist: null,
  ObjectWrite: bcs.tuple([ObjectDigest, Owner]),
  PackageWrite: VersionDigest,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/mod.rs#L388-L392
const IDOperation = bcs.enum('IDOperation', {
  None: null,
  Created: null,
  Deleted: null,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/object_change.rs#L14-L26
const EffectsObjectChange = bcs.struct('EffectsObjectChange', {
  input_state: ObjectIn,
  output_state: ObjectOut,
  id_operation: IDOperation,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/effects_v2.rs#L600-L612
const UnchangedSharedKind = bcs.enum('UnchangedSharedKind', {
  ReadOnlyRoot: VersionDigest,
  MutateDeleted: SequenceNumber,
  ReadDeleted: SequenceNumber,
  Cancelled: SequenceNumber,
  PerEpochConfig: null,
})

const EffectsAuxDataDigest = Digest

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/effects_v2.rs#L25-L56
const TransactionEffectsV2 = bcs.struct('TransactionEffectsV2', {
  status: ExecutionStatus,
  executed_epoch: EpochId,
  gas_used: GasCostSummary,
  transaction_digest: TransactionDigest,
  gas_object_index: bcs.option(bcs.u32()),
  events_digest: bcs.option(TransactionEventsDigest),
  dependencies: bcs.vector(TransactionDigest),
  lamport_version: SequenceNumber,
  changed_objects: bcs.vector(bcs.tuple([ObjectID, EffectsObjectChange])),
  unchanged_shared_objects: bcs.vector(
    bcs.tuple([ObjectID, UnchangedSharedKind]),
  ),
  aux_data_digest: bcs.option(EffectsAuxDataDigest),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/effects/mod.rs#L57-L60
const TransactionEffects = bcs.enum('TransactionEffects', {
  V1: TransactionEffectsV1,
  V2: TransactionEffectsV2,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/event.rs#L103
const TransactionEvent = bcs.struct('TransactionEvent', {
  package_id: ObjectID,
  transaction_module: Identifier,
  sender: SuiAddress,
  type: StructTag,
  contents: bcs.vector(bcs.u8()),
})

const TransactionEvents = bcs.struct('TransactionEvents', {
  data: bcs.vector(TransactionEvent),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/object.rs#L567-L578
const SuiObject = bcs.struct('SuiObject', {
  data: Data,
  owner: Owner,
  previous_transaction: TransactionDigest,
  storage_rebate: bcs.u64(),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L1503-L1508
const TransactionDataV1 = bcs.struct('TransactionDataV1', {
  kind: TransactionKind,
  sender: SuiAddress,
  gas_data: GasData,
  expiration: TransactionExpiration,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L1496-L1500
const TransactionData = bcs.enum('TransactionData', {
  V1: TransactionDataV1,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L2108-L2114
const SenderSignedTransaction = bcs.struct('SenderSignedTransaction', {
  intent_message: IntentMessage(TransactionData),
  tx_signatures: bcs.vector(GenericSignature),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L2105
const SenderSignedData = bcs.vector(SenderSignedTransaction)

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/transaction.rs#L2630
const Transaction = Envelope('Transaction', SenderSignedData, EmptySignInfo)

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/full_checkpoint_content.rs#L45-L56
const CheckpointTransaction = bcs.struct('CheckpointTransaction', {
  transaction: Transaction,
  effects: TransactionEffects,
  events: bcs.option(TransactionEvents),
  input_objects: bcs.vector(SuiObject),
  output_objects: bcs.vector(SuiObject),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/full_checkpoint_content.rs#L14-L18
const CheckpointData = bcs.struct('CheckpointData', {
  checkpoint_summary: CertifiedCheckpointSummary,
  checkpoint_contents: CheckpointContents,
  transactions: bcs.vector(CheckpointTransaction),
})

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

function mapper(object_source, mappings) {
  const map_recursive = obj => {
    if (Array.isArray(obj)) {
      return obj.map(map_recursive)
    } else if (obj && typeof obj === 'object') {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const map_function = mappings[key]
        acc[key] = map_function ? map_function(value) : map_recursive(value)
        return acc
      }, {})
    }
    return obj
  }

  return map_recursive(object_source)
}

const to_address = bytes => `0x${toHEX(bytes)}`

function parse_content(struct, { contents, known_types }) {
  if (!contents) return

  function find_nested_bcs({ address, module, name, type_params = [], $kind }) {
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

    if ($kind && $kind !== 'Struct') return bcs[$kind.toLowerCase()]()
    return current_bcs
  }

  const found_bcs = find_nested_bcs(struct)

  if (!found_bcs) return

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

function format_objects(objects, known_types) {
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
      return {
        has_public_transfer,
        type: `${address}::${module}::${name}`,
        version,
        storage_rebate,
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

      const final_contents = bcs
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
  return params.reduce((result, { Struct, ...rest }) => {
    if (!Struct) return JSON.stringify(rest)
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

function get_existing_checkpoints_files(checkpoints_folder) {
  return checkpoints_folder && existsSync(checkpoints_folder)
    ? readdirSync(checkpoints_folder)
        .filter(file => file.endsWith('.chk'))
        .map(file => +path.basename(file, '.chk'))
        .sort((a, b) => a - b)
    : []
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
  const existing_files = get_existing_checkpoints_files(checkpoints_folder)
  const [lowest_known_checkpoint] = existing_files

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
      console.log('[system] detected new checkpoint:', file_path)
      const file_number = +path.basename(file_path, '.chk')

      // if in configured range, we add it to the known checkpoints
      if (file_number >= from && file_number <= to) {
        if (cleanup_checkpoints && known_checkpoints.size > 1000) {
          console.warn(
            `Beware, the buffered checkpoints amount is getting high (${known_checkpoints.size}), you might want to process them faster`,
          )
        }
        const buffer = readFileSync(file_path)
        const parsed_checkpoint = read_checkpoint(
          buffer,
          known_types,
          object_filter,
        )
        known_checkpoints.set(file_number, parsed_checkpoint)
      }
    })

    // we once again check all files in the folder to start fresh
    const recent_existing_files =
      get_existing_checkpoints_files(checkpoints_folder)
    // we then try to add them all to the known checkpoints
    for (const file of recent_existing_files) {
      if (file >= from && file <= to) {
        const buffer = readFileSync(
          path.join(checkpoints_folder, `${file}.chk`),
        )
        const parsed_checkpoint = read_checkpoint(
          buffer,
          known_types,
          object_filter,
        )
        known_checkpoints.set(file, parsed_checkpoint)
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
      console.log(
        '[remote] downloading checkpoints:',
        Math.min(
          sync_settings.current_checkpoint + concurrent_downloads,
          lowest_known_checkpoint == null
            ? to
            : Math.min(to, lowest_known_checkpoint),
        ),
      )
      try {
        await Promise.all(
          Array.from({ length: concurrent_downloads }, async (_, i) => {
            const current_checkpoint_number =
              sync_settings.current_checkpoint + i

            // if the count reaches the lowest known checkpoint or the target checkpoint, we stop
            if (!should_keep_downloading(current_checkpoint_number)) {
              sync_settings.catching_up = false
              return
            }

            const buffer = await get_remote_checkpoint(
              current_checkpoint_number,
            )
            const parsed_checkpoint = read_checkpoint(
              buffer,
              known_types,
              object_filter,
            )
            known_checkpoints.set(current_checkpoint_number, parsed_checkpoint)
          }),
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
        const files = get_existing_checkpoints_files(checkpoints_folder)
        for (const file of files) {
          if (file < processing_settings.current_checkpoint) {
            console.log('[system] cleaning up checkpoint:', file)
            unlinkSync(path.join(checkpoints_folder, `${file}.chk`))
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
      const checkpoint = known_checkpoints.get(
        processing_settings.current_checkpoint,
      )
      if (checkpoint) {
        await process_checkpoint(
          checkpoint,
          processing_settings.current_checkpoint,
        )
        processing_settings.current_checkpoint++
      } else {
        console.warn(
          'missing checkpoint:',
          processing_settings.current_checkpoint,
          'retrying in 1s',
        )
        await setTimeout(1000)
      }
    }
  }

  start_downloading_checkpoints()
  if (cleanup_checkpoints) start_cleaning_up_checkpoints()
  await start_processing_checkpoints().then(() => {
    controller.abort()
    processing_settings.watcher?.close()
  })
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
      const mapped = mapper(transaction, {
        sender: to_address,
        address: to_address,
        digest: toHEX,
        // owner: x => `0x${toHEX(x)}`,
        transaction_digest: to_address,
        AddressOwner: to_address,
        ObjectOwner: to_address,
        previous_transaction: to_address,
        package_id: to_address,
        changed_objects: entries_array =>
          Object.fromEntries(
            entries_array.map(([key, value]) => [to_address(key), value]),
          ),
        dependencies: dependencies => dependencies.map(to_address),
      })

      return {
        ...mapped,
        input_objects: format_objects(mapped.input_objects, known_types).filter(
          object_filter,
        ),
        output_objects: format_objects(
          mapped.output_objects,
          known_types,
        ).filter(object_filter),
        ...(mapped.events?.data?.length && {
          events: format_events(mapped.events.data, known_types),
        }),
      }
    }),
  }

  return final_result
}
