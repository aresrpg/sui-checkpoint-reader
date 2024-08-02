import { bcs } from '@mysten/bcs'

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

const ModuleId = bcs.struct('ModuleId', {
  address: AccountAddress,
  name: Identifier,
})

const MoveLocation = bcs.struct('MoveLocation', {
  module: ModuleId,
  function: bcs.u16(),
  instruction: bcs.u16(),
  function_name: bcs.option(bcs.string()),
})

const MoveLocationOpt = bcs.option(MoveLocation)

const ExecutionFailureStatus = bcs.enum('ExecutionFailureStatus', {
  InsufficientGas: null,
  InvalidGasObject: null,
  InvariantViolation: null,
  FeatureNotYetSupported: null,
  MoveObjectTooBig: bcs.struct('MoveObjectTooBig', {
    object_size: bcs.u64(),
    max_object_size: bcs.u64(),
  }),
  MovePackageTooBig: bcs.struct('MovePackageTooBig', {
    object_size: bcs.u64(),
    max_object_size: bcs.u64(),
  }),
  CircularObjectOwnership: bcs.struct('CircularObjectOwnership', {
    object: ObjectID,
  }),
  InsufficientCoinBalance: null,
  CoinBalanceOverflow: null,
  PublishErrorNonZeroAddress: null,
  SuiMoveVerificationError: null,
  MovePrimitiveRuntimeError: MoveLocationOpt,
  MoveAbort: bcs.tuple([MoveLocation, bcs.u64()]),
  VMVerificationOrDeserializationError: null,
  VMInvariantViolation: null,
  FunctionNotFound: null,
  ArityMismatch: null,
  TypeArityMismatch: null,
  NonEntryFunctionInvoked: null,
  CommandArgumentError: bcs.struct('CommandArgumentError', {
    arg_idx: bcs.u16(),
    kind: bcs.string(),
  }),
  TypeArgumentError: bcs.struct('TypeArgumentError', {
    argument_idx: bcs.u16(),
    kind: bcs.string(),
  }),
  UnusedValueWithoutDrop: bcs.struct('UnusedValueWithoutDrop', {
    result_idx: bcs.u16(),
    secondary_idx: bcs.u16(),
  }),
  InvalidPublicFunctionReturnType: bcs.struct(
    'InvalidPublicFunctionReturnType',
    {
      idx: bcs.u16(),
    },
  ),
  InvalidTransferObject: null,
  EffectsTooLarge: bcs.struct('EffectsTooLarge', {
    current_size: bcs.u64(),
    max_size: bcs.u64(),
  }),
  PublishUpgradeMissingDependency: null,
  PublishUpgradeDependencyDowngrade: null,
  PackageUpgradeError: bcs.struct('PackageUpgradeError', {
    upgrade_error: bcs.string(),
  }),
  WrittenObjectsTooLarge: bcs.struct('WrittenObjectsTooLarge', {
    current_size: bcs.u64(),
    max_size: bcs.u64(),
  }),
  CertificateDenied: null,
  SuiMoveVerificationTimedout: null,
  SharedObjectOperationNotAllowed: null,
  InputObjectDeleted: null,
  ExecutionCancelledDueToSharedObjectCongestion: bcs.struct(
    'ExecutionCancelledDueToSharedObjectCongestion',
    {
      congested_objects: bcs.string(),
    },
  ),
  AddressDeniedForCoin: bcs.struct('AddressDeniedForCoin', {
    address: SuiAddress,
    coin_type: bcs.string(),
  }),
  CoinTypeGlobalPause: bcs.struct('CoinTypeGlobalPause', {
    coin_type: bcs.string(),
  }),
})

const Failure = bcs.struct('Failure', {
  error: ExecutionFailureStatus,
  command: bcs.option(bcs.u64()),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-graphql-rpc/src/types/transaction_block_effects.rs#L78-L83
const ExecutionStatus = bcs.enum('ExecutionStatus', {
  Success: null,
  Failure,
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

// https://github.com/MystenLabs/sui/blob/testnet-v1.30.1/crates/sui-snapshot/src/lib.rs#L142-L145
const FileType = bcs.enum('FileType', {
  Object: null,
  Reference: null,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.30.1/crates/sui-storage/src/lib.rs#L56-L59
const FileCompression = bcs.enum('FileCompression', {
  None: null,
  Zstd: null,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.30.1/crates/sui-snapshot/src/lib.rs#L148-L154
const FileMetadata = bcs.struct('FileMetadata', {
  file_type: FileType,
  bucket_num: bcs.u32(),
  part_num: bcs.u32(),
  file_compression: FileCompression,
  sha3_digest: bcs.fixedArray(32, bcs.u8()),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.30.1/crates/sui-snapshot/src/lib.rs#L173-L178
const ManifestV1 = bcs.struct('ManifestV1', {
  snapshot_version: bcs.u8(),
  address_length: bcs.u64(),
  file_metadata: bcs.vector(FileMetadata),
  epoch: bcs.u64(),
})

// https://github.com/MystenLabs/sui/blob/main/crates/sui-graphql-rpc/src/types/object.rs#L139-L142
const ObjectKey = bcs.struct('ObjectKey', {
  object_id: SuiAddress,
  version: bcs.u64(),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.30.1/crates/sui-core/src/authority/authority_store_tables.rs#L501-L504
export const LiveObject = bcs.enum('LiveObject', {
  Normal: SuiObject,
  Wrapped: ObjectKey,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.30.1/crates/sui-snapshot/src/lib.rs#L181
export const Manifest = bcs.enum('Manifest', {
  V1: ManifestV1,
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-types/src/full_checkpoint_content.rs#L14-L18
export const CheckpointData = bcs.struct('CheckpointData', {
  checkpoint_summary: CertifiedCheckpointSummary,
  checkpoint_contents: CheckpointContents,
  transactions: bcs.vector(CheckpointTransaction),
})

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-storage/src/blob.rs#L19
export const BLOB_ENCODING_BCS = 1

// https://github.com/MystenLabs/sui/blob/testnet-v1.28.3/crates/sui-storage/src/blob.rs#L78-L85
export function read_blob(buffer) {
  const view = new Uint8Array(buffer)
  return {
    encoding: view[0],
    // TODO: subarray seems to cause an issue with the bcs library
    data: view.slice(1),
  }
}
