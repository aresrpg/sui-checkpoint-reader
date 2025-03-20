import { bcs, fromHex, toHex } from '@mysten/bcs'

const Address = bcs.bytes(32).transform({
  input: val => fromHex(val),
  output: val => toHex(val),
})
const String = bcs.struct('String', {
  bytes: bcs.vector(bcs.u8()),
})
const JwkId = bcs.struct('JwkId', {
  iss: String,
  kid: String,
})
const JWK = bcs.struct('JWK', {
  kty: String,
  e: String,
  n: String,
  alg: String,
})
const ID = bcs.struct('ID', {
  bytes: Address,
})
const UID = bcs.struct('UID', {
  id: ID,
})
const ActiveJwk = bcs.struct('ActiveJwk', {
  jwk_id: JwkId,
  jwk: JWK,
  epoch: bcs.u64(),
})
const Option = T0 =>
  bcs.struct(`Option<${T0}>`, {
    vec: bcs.vector(T0),
  })
const Balance = T0 =>
  bcs.struct(`Balance<${T0}>`, {
    value: bcs.u64(),
  })
const Url = bcs.struct('Url', {
  url: String,
})
const Supply = T0 =>
  bcs.struct(`Supply<${T0}>`, {
    value: bcs.u64(),
  })
const SettingData = T0 =>
  bcs.struct(`SettingData<${T0}>`, {
    newer_value_epoch: bcs.u64(),
    newer_value: Option(T0),
    older_value_opt: Option(T0),
  })
const Bag = bcs.struct('Bag', {
  id: UID,
  size: bcs.u64(),
})
const ConfigKey = bcs.struct('ConfigKey', {
  per_type_index: bcs.u64(),
  per_type_key: bcs.vector(bcs.u8()),
})
const Table = (T0, T1) =>
  bcs.struct(`Table<${T0}, ${T1}>`, {
    id: UID,
    size: bcs.u64(),
  })
const VecSet = T0 =>
  bcs.struct(`VecSet<${T0}>`, {
    contents: bcs.vector(T0),
  })
const Entry = (T0, T1) =>
  bcs.struct(`Entry<${T0}, ${T1}>`, {
    key: T0,
    value: T1,
  })
const VecMap = (T0, T1) =>
  bcs.struct(`VecMap<${T0}, ${T1}>`, {
    contents: bcs.vector(Entry(T0, T1)),
  })
const SUI = bcs.struct('SUI', {
  dummy_field: bcs.bool(),
})
const PCREntry = bcs.struct('PCREntry', {
  index: bcs.u8(),
  value: bcs.vector(bcs.u8()),
})
const Versioned = bcs.struct('Versioned', {
  id: UID,
  version: bcs.u64(),
})
const TypeName = bcs.struct('TypeName', {
  name: String,
})

export default {
  authenticator_state: {
    ActiveJwk: bcs.struct('ActiveJwk', {
      jwk_id: JwkId,
      jwk: JWK,
      epoch: bcs.u64(),
    }),
    AuthenticatorState: bcs.struct('AuthenticatorState', {
      id: UID,
      version: bcs.u64(),
    }),
    AuthenticatorStateInner: bcs.struct('AuthenticatorStateInner', {
      version: bcs.u64(),
      active_jwks: bcs.vector(ActiveJwk),
    }),
    JWK: bcs.struct('JWK', {
      kty: String,
      e: String,
      n: String,
      alg: String,
    }),
    JwkId: bcs.struct('JwkId', {
      iss: String,
      kid: String,
    }),
  },

  bag: {
    Bag: bcs.struct('Bag', {
      id: UID,
      size: bcs.u64(),
    }),
  },

  balance: {
    Balance: T0 =>
      bcs.struct(`Balance<${T0}>`, {
        value: bcs.u64(),
      }),
    Supply: T0 =>
      bcs.struct(`Supply<${T0}>`, {
        value: bcs.u64(),
      }),
  },

  bcs: {
    BCS: bcs.struct('BCS', {
      bytes: bcs.vector(bcs.u8()),
    }),
  },

  bls12381: {
    G1: bcs.struct('G1', {
      dummy_field: bcs.bool(),
    }),
    G2: bcs.struct('G2', {
      dummy_field: bcs.bool(),
    }),
    GT: bcs.struct('GT', {
      dummy_field: bcs.bool(),
    }),
    Scalar: bcs.struct('Scalar', {
      dummy_field: bcs.bool(),
    }),
    UncompressedG1: bcs.struct('UncompressedG1', {
      dummy_field: bcs.bool(),
    }),
  },

  borrow: {
    Borrow: bcs.struct('Borrow', {
      ref: Address,
      obj: ID,
    }),
    Referent: T0 =>
      bcs.struct(`Referent<>`, {
        id: Address,
        value: Option(T0),
      }),
  },

  clock: {
    Clock: bcs.struct('Clock', {
      id: UID,
      timestamp_ms: bcs.u64(),
    }),
  },

  coin: {
    Coin: T0 =>
      bcs.struct(`Coin<${T0}>`, {
        id: UID,
        balance: Balance(T0),
      }),
    CoinMetadata: T0 =>
      bcs.struct(`CoinMetadata<${T0}>`, {
        id: UID,
        decimals: bcs.u8(),
        name: String,
        symbol: String,
        description: String,
        icon_url: Option(Url),
      }),
    CurrencyCreated: T0 =>
      bcs.struct(`CurrencyCreated<${T0}>`, {
        decimals: bcs.u8(),
      }),
    DenyCap: T0 =>
      bcs.struct(`DenyCap<${T0}>`, {
        id: UID,
      }),
    DenyCapV2: T0 =>
      bcs.struct(`DenyCapV2<${T0}>`, {
        id: UID,
        allow_global_pause: bcs.bool(),
      }),
    RegulatedCoinMetadata: T0 =>
      bcs.struct(`RegulatedCoinMetadata<${T0}>`, {
        id: UID,
        coin_metadata_object: ID,
        deny_cap_object: ID,
      }),
    TreasuryCap: T0 =>
      bcs.struct(`TreasuryCap<${T0}>`, {
        id: UID,
        total_supply: Supply(T0),
      }),
  },

  config: {
    Config: T0 =>
      bcs.struct(`Config<${T0}>`, {
        id: UID,
      }),
    Setting: T0 =>
      bcs.struct(`Setting<>`, {
        data: Option(SettingData(T0)),
      }),
    SettingData: T0 =>
      bcs.struct(`SettingData<>`, {
        newer_value_epoch: bcs.u64(),
        newer_value: Option(T0),
        older_value_opt: Option(T0),
      }),
  },

  deny_list: {
    AddressKey: bcs.struct('AddressKey', {
      pos0: Address,
    }),
    ConfigKey: bcs.struct('ConfigKey', {
      per_type_index: bcs.u64(),
      per_type_key: bcs.vector(bcs.u8()),
    }),
    ConfigWriteCap: bcs.struct('ConfigWriteCap', {
      dummy_field: bcs.bool(),
    }),
    DenyList: bcs.struct('DenyList', {
      id: UID,
      lists: Bag,
    }),
    GlobalPauseKey: bcs.struct('GlobalPauseKey', {
      dummy_field: bcs.bool(),
    }),
    PerTypeConfigCreated: bcs.struct('PerTypeConfigCreated', {
      key: ConfigKey,
      config_id: ID,
    }),
    PerTypeList: bcs.struct('PerTypeList', {
      id: UID,
      denied_count: Table(Address, bcs.u64()),
      denied_addresses: Table(bcs.vector(bcs.u8()), VecSet(Address)),
    }),
  },

  display: {
    Display: T0 =>
      bcs.struct(`Display<${T0}>`, {
        id: UID,
        fields: VecMap(String, String),
        version: bcs.u16(),
      }),
    DisplayCreated: T0 =>
      bcs.struct(`DisplayCreated<${T0}>`, {
        id: ID,
      }),
    VersionUpdated: T0 =>
      bcs.struct(`VersionUpdated<${T0}>`, {
        id: ID,
        version: bcs.u16(),
        fields: VecMap(String, String),
      }),
  },

  dynamic_field: {
    Field: (T0, T1) =>
      bcs.struct(`Field<>`, {
        id: UID,
        name: T0,
        value: T1,
      }),
  },

  dynamic_object_field: {
    Wrapper: T0 =>
      bcs.struct(`Wrapper<>`, {
        name: T0,
      }),
  },

  groth16: {
    Curve: bcs.struct('Curve', {
      id: bcs.u8(),
    }),
    PreparedVerifyingKey: bcs.struct('PreparedVerifyingKey', {
      vk_gamma_abc_g1_bytes: bcs.vector(bcs.u8()),
      alpha_g1_beta_g2_bytes: bcs.vector(bcs.u8()),
      gamma_g2_neg_pc_bytes: bcs.vector(bcs.u8()),
      delta_g2_neg_pc_bytes: bcs.vector(bcs.u8()),
    }),
    ProofPoints: bcs.struct('ProofPoints', {
      bytes: bcs.vector(bcs.u8()),
    }),
    PublicProofInputs: bcs.struct('PublicProofInputs', {
      bytes: bcs.vector(bcs.u8()),
    }),
  },

  group_ops: {
    Element: T0 =>
      bcs.struct(`Element<${T0}>`, {
        bytes: bcs.vector(bcs.u8()),
      }),
  },

  kiosk: {
    Borrow: bcs.struct('Borrow', {
      kiosk_id: ID,
      item_id: ID,
    }),
    Item: bcs.struct('Item', {
      id: ID,
    }),
    ItemDelisted: T0 =>
      bcs.struct(`ItemDelisted<${T0}>`, {
        kiosk: ID,
        id: ID,
      }),
    ItemListed: T0 =>
      bcs.struct(`ItemListed<${T0}>`, {
        kiosk: ID,
        id: ID,
        price: bcs.u64(),
      }),
    ItemPurchased: T0 =>
      bcs.struct(`ItemPurchased<${T0}>`, {
        kiosk: ID,
        id: ID,
        price: bcs.u64(),
      }),
    Kiosk: bcs.struct('Kiosk', {
      id: UID,
      profits: Balance(SUI),
      owner: Address,
      item_count: bcs.u32(),
      allow_extensions: bcs.bool(),
    }),
    KioskOwnerCap: bcs.struct('KioskOwnerCap', {
      id: UID,
      for: ID,
    }),
    Listing: bcs.struct('Listing', {
      id: ID,
      is_exclusive: bcs.bool(),
    }),
    Lock: bcs.struct('Lock', {
      id: ID,
    }),
    PurchaseCap: T0 =>
      bcs.struct(`PurchaseCap<${T0}>`, {
        id: UID,
        kiosk_id: ID,
        item_id: ID,
        min_price: bcs.u64(),
      }),
  },

  kiosk_extension: {
    Extension: bcs.struct('Extension', {
      storage: Bag,
      permissions: bcs.u128(),
      is_enabled: bcs.bool(),
    }),
    ExtensionKey: T0 =>
      bcs.struct(`ExtensionKey<${T0}>`, {
        dummy_field: bcs.bool(),
      }),
  },

  linked_table: {
    LinkedTable: (T0, T1) =>
      bcs.struct(`LinkedTable<${T0}>`, {
        id: UID,
        size: bcs.u64(),
        head: Option(T0),
        tail: Option(T0),
      }),
    Node: (T0, T1) =>
      bcs.struct(`Node<>`, {
        prev: Option(T0),
        next: Option(T0),
        value: T1,
      }),
  },

  nitro_attestation: {
    NitroAttestationDocument: bcs.struct('NitroAttestationDocument', {
      module_id: bcs.vector(bcs.u8()),
      timestamp: bcs.u64(),
      digest: bcs.vector(bcs.u8()),
      pcrs: bcs.vector(PCREntry),
      public_key: Option(bcs.vector(bcs.u8())),
      user_data: Option(bcs.vector(bcs.u8())),
      nonce: Option(bcs.vector(bcs.u8())),
    }),
    PCREntry: bcs.struct('PCREntry', {
      index: bcs.u8(),
      value: bcs.vector(bcs.u8()),
    }),
  },

  object: {
    ID: bcs.struct('ID', {
      bytes: Address,
    }),
    UID: bcs.struct('UID', {
      id: ID,
    }),
  },

  object_bag: {
    ObjectBag: bcs.struct('ObjectBag', {
      id: UID,
      size: bcs.u64(),
    }),
  },

  object_table: {
    ObjectTable: (T0, T1) =>
      bcs.struct(`ObjectTable<${T0}, ${T1}>`, {
        id: UID,
        size: bcs.u64(),
      }),
  },

  package: {
    Publisher: bcs.struct('Publisher', {
      id: UID,
      package: String,
      module_name: String,
    }),
    UpgradeCap: bcs.struct('UpgradeCap', {
      id: UID,
      package: ID,
      version: bcs.u64(),
      policy: bcs.u8(),
    }),
    UpgradeReceipt: bcs.struct('UpgradeReceipt', {
      cap: ID,
      package: ID,
    }),
    UpgradeTicket: bcs.struct('UpgradeTicket', {
      cap: ID,
      package: ID,
      policy: bcs.u8(),
      digest: bcs.vector(bcs.u8()),
    }),
  },

  priority_queue: {
    Entry: T0 =>
      bcs.struct(`Entry<>`, {
        priority: bcs.u64(),
        value: T0,
      }),
    PriorityQueue: T0 =>
      bcs.struct(`PriorityQueue<>`, {
        entries: bcs.vector(Entry(T0)),
      }),
  },

  random: {
    Random: bcs.struct('Random', {
      id: UID,
      inner: Versioned,
    }),
    RandomGenerator: bcs.struct('RandomGenerator', {
      seed: bcs.vector(bcs.u8()),
      counter: bcs.u16(),
      buffer: bcs.vector(bcs.u8()),
    }),
    RandomInner: bcs.struct('RandomInner', {
      version: bcs.u64(),
      epoch: bcs.u64(),
      randomness_round: bcs.u64(),
      random_bytes: bcs.vector(bcs.u8()),
    }),
  },

  sui: {
    SUI: bcs.struct('SUI', {
      dummy_field: bcs.bool(),
    }),
  },

  table: {
    Table: (T0, T1) =>
      bcs.struct(`Table<${T0}, ${T1}>`, {
        id: UID,
        size: bcs.u64(),
      }),
  },

  table_vec: {
    TableVec: T0 =>
      bcs.struct(`TableVec<${T0}>`, {
        contents: Table(bcs.u64(), T0),
      }),
  },

  token: {
    ActionRequest: T0 =>
      bcs.struct(`ActionRequest<${T0}>`, {
        name: String,
        amount: bcs.u64(),
        sender: Address,
        recipient: Option(Address),
        spent_balance: Option(Balance(T0)),
        approvals: VecSet(TypeName),
      }),
    RuleKey: T0 =>
      bcs.struct(`RuleKey<${T0}>`, {
        is_protected: bcs.bool(),
      }),
    Token: T0 =>
      bcs.struct(`Token<${T0}>`, {
        id: UID,
        balance: Balance(T0),
      }),
    TokenPolicy: T0 =>
      bcs.struct(`TokenPolicy<${T0}>`, {
        id: UID,
        spent_balance: Balance(T0),
        rules: VecMap(String, VecSet(TypeName)),
      }),
    TokenPolicyCap: T0 =>
      bcs.struct(`TokenPolicyCap<${T0}>`, {
        id: UID,
        for: ID,
      }),
    TokenPolicyCreated: T0 =>
      bcs.struct(`TokenPolicyCreated<${T0}>`, {
        id: ID,
        is_mutable: bcs.bool(),
      }),
  },

  transfer: {
    Receiving: T0 =>
      bcs.struct(`Receiving<${T0}>`, {
        id: ID,
        version: bcs.u64(),
      }),
  },

  transfer_policy: {
    RuleKey: T0 =>
      bcs.struct(`RuleKey<${T0}>`, {
        dummy_field: bcs.bool(),
      }),
    TransferPolicy: T0 =>
      bcs.struct(`TransferPolicy<${T0}>`, {
        id: UID,
        balance: Balance(SUI),
        rules: VecSet(TypeName),
      }),
    TransferPolicyCap: T0 =>
      bcs.struct(`TransferPolicyCap<${T0}>`, {
        id: UID,
        policy_id: ID,
      }),
    TransferPolicyCreated: T0 =>
      bcs.struct(`TransferPolicyCreated<${T0}>`, {
        id: ID,
      }),
    TransferPolicyDestroyed: T0 =>
      bcs.struct(`TransferPolicyDestroyed<${T0}>`, {
        id: ID,
      }),
    TransferRequest: T0 =>
      bcs.struct(`TransferRequest<${T0}>`, {
        item: ID,
        paid: bcs.u64(),
        from: ID,
        receipts: VecSet(TypeName),
      }),
  },

  tx_context: {
    TxContext: bcs.struct('TxContext', {
      sender: Address,
      tx_hash: bcs.vector(bcs.u8()),
      epoch: bcs.u64(),
      epoch_timestamp_ms: bcs.u64(),
      ids_created: bcs.u64(),
    }),
  },

  url: {
    Url: bcs.struct('Url', {
      url: String,
    }),
  },

  vec_map: {
    Entry: (T0, T1) =>
      bcs.struct(`Entry<>`, {
        key: T0,
        value: T1,
      }),
    VecMap: (T0, T1) =>
      bcs.struct(`VecMap<>`, {
        contents: bcs.vector(Entry(T0, T1)),
      }),
  },

  vec_set: {
    VecSet: T0 =>
      bcs.struct(`VecSet<>`, {
        contents: bcs.vector(T0),
      }),
  },

  versioned: {
    VersionChangeCap: bcs.struct('VersionChangeCap', {
      versioned_id: ID,
      old_version: bcs.u64(),
    }),
    Versioned: bcs.struct('Versioned', {
      id: UID,
      version: bcs.u64(),
    }),
  },

  zklogin_verified_id: {
    VerifiedID: bcs.struct('VerifiedID', {
      id: UID,
      owner: Address,
      key_claim_name: String,
      key_claim_value: String,
      issuer: String,
      audience: String,
    }),
  },

  zklogin_verified_issuer: {
    VerifiedIssuer: bcs.struct('VerifiedIssuer', {
      id: UID,
      owner: Address,
      issuer: String,
    }),
  },
}
