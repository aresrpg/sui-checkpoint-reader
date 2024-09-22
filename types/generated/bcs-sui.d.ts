export const AccountAddress: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const JwkId: import("@mysten/bcs").BcsType<{
    iss: string;
    kid: string;
}, {
    iss: string;
    kid: string;
}>;
export const JWK: import("@mysten/bcs").BcsType<{
    kty: string;
    e: string;
    n: string;
    alg: string;
}, {
    kty: string;
    e: string;
    n: string;
    alg: string;
}>;
export const ActiveJwk: import("@mysten/bcs").BcsType<{
    jwk_id: {
        iss: string;
        kid: string;
    };
    jwk: {
        kty: string;
        e: string;
        n: string;
        alg: string;
    };
    epoch: string;
}, {
    jwk_id: {
        iss: string;
        kid: string;
    };
    jwk: {
        kty: string;
        e: string;
        n: string;
        alg: string;
    };
    epoch: string | number | bigint;
}>;
export const Argument: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    GasCoin: unknown;
    Input: number;
    Result: number;
    NestedResult: [number, number];
}, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumInputShape<{
    GasCoin: unknown;
    Input: number;
    Result: number;
    NestedResult: readonly [number, number];
}>>;
export const SequenceNumber: import("@mysten/bcs").BcsType<string, string | number | bigint>;
export const AuthenticatorStateExpire: import("@mysten/bcs").BcsType<{
    min_epoch: string;
    authenticator_obj_initial_shared_version: string;
}, {
    min_epoch: string | number | bigint;
    authenticator_obj_initial_shared_version: string | number | bigint;
}>;
export const AuthenticatorStateUpdate: import("@mysten/bcs").BcsType<{
    epoch: string;
    round: string;
    new_active_jwks: {
        jwk_id: {
            iss: string;
            kid: string;
        };
        jwk: {
            kty: string;
            e: string;
            n: string;
            alg: string;
        };
        epoch: string;
    }[];
    authenticator_obj_initial_shared_version: string;
}, {
    epoch: string | number | bigint;
    round: string | number | bigint;
    new_active_jwks: Iterable<{
        jwk_id: {
            iss: string;
            kid: string;
        };
        jwk: {
            kty: string;
            e: string;
            n: string;
            alg: string;
        };
        epoch: string | number | bigint;
    }> & {
        length: number;
    };
    authenticator_obj_initial_shared_version: string | number | bigint;
}>;
export const AuthorityPublicKeyBytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ObjectID: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const Digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ObjectDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ObjectArg: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    ImmOrOwnedObject: [number[], string, number[]];
    SharedObject: {
        id: number[];
        initial_shared_version: string;
        mutable: boolean;
    };
    Receiving: [number[], string, number[]];
}, "ImmOrOwnedObject" | "SharedObject" | "Receiving">, import("@mysten/bcs").EnumInputShape<{
    ImmOrOwnedObject: readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }];
    SharedObject: {
        id: Iterable<number> & {
            length: number;
        };
        initial_shared_version: string | number | bigint;
        mutable: boolean;
    };
    Receiving: readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }];
}>>;
export const CallArg: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Pure: number[];
    Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ImmOrOwnedObject: [number[], string, number[]];
        SharedObject: {
            id: number[];
            initial_shared_version: string;
            mutable: boolean;
        };
        Receiving: [number[], string, number[]];
    }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
}, "Pure" | "Object">, import("@mysten/bcs").EnumInputShape<{
    Pure: Iterable<number> & {
        length: number;
    };
    Object: import("@mysten/bcs").EnumInputShape<{
        ImmOrOwnedObject: readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }];
        SharedObject: {
            id: Iterable<number> & {
                length: number;
            };
            initial_shared_version: string | number | bigint;
            mutable: boolean;
        };
        Receiving: readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }];
    }>;
}>>;
export const CheckpointDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ChainIdentifier: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ProtocolVersion: import("@mysten/bcs").BcsType<string, string | number | bigint>;
export const ChangeEpoch: import("@mysten/bcs").BcsType<{
    epoch: string;
    protocol_version: string;
    storage_charge: string;
    computation_charge: string;
    storage_rebate: string;
    non_refundable_storage_fee: string;
    epoch_start_timestamp_ms: string;
    system_packages: [string, number[][], number[][]][];
}, {
    epoch: string | number | bigint;
    protocol_version: string | number | bigint;
    storage_charge: string | number | bigint;
    computation_charge: string | number | bigint;
    storage_rebate: string | number | bigint;
    non_refundable_storage_fee: string | number | bigint;
    epoch_start_timestamp_ms: string | number | bigint;
    system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }]> & {
        length: number;
    };
}>;
export const ECMHLiveObjectSetDigest: import("@mysten/bcs").BcsType<{
    digest: number[];
}, {
    digest: Iterable<number> & {
        length: number;
    };
}>;
export const CheckpointCommitment: import("@mysten/bcs").BcsType<{
    ECMHLiveObjectSetDigest: {
        digest: number[];
    };
    $kind: "ECMHLiveObjectSetDigest";
}, {
    ECMHLiveObjectSetDigest: {
        digest: Iterable<number> & {
            length: number;
        };
    };
}>;
export const TransactionDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const TransactionEffectsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ExecutionDigests: import("@mysten/bcs").BcsType<{
    transaction: number[];
    effects: number[];
}, {
    transaction: Iterable<number> & {
        length: number;
    };
    effects: Iterable<number> & {
        length: number;
    };
}>;
export const GenericSignature: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const CheckpointContentsV1: import("@mysten/bcs").BcsType<{
    transactions: {
        transaction: number[];
        effects: number[];
    }[];
    user_signatures: number[][][];
}, {
    transactions: Iterable<{
        transaction: Iterable<number> & {
            length: number;
        };
        effects: Iterable<number> & {
            length: number;
        };
    }> & {
        length: number;
    };
    user_signatures: Iterable<Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }> & {
        length: number;
    };
}>;
export const CheckpointContents: import("@mysten/bcs").BcsType<{
    V1: {
        transactions: {
            transaction: number[];
            effects: number[];
        }[];
        user_signatures: number[][][];
    };
    $kind: "V1";
}, {
    V1: {
        transactions: Iterable<{
            transaction: Iterable<number> & {
                length: number;
            };
            effects: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        };
        user_signatures: Iterable<Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }> & {
            length: number;
        };
    };
}>;
export const CheckpointContentsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const GasCostSummary: import("@mysten/bcs").BcsType<{
    computationCost: string;
    storageCost: string;
    storageRebate: string;
    nonRefundableStorageFee: string;
}, {
    computationCost: string | number | bigint;
    storageCost: string | number | bigint;
    storageRebate: string | number | bigint;
    nonRefundableStorageFee: string | number | bigint;
}>;
export const EndOfEpochData: import("@mysten/bcs").BcsType<{
    nextEpochCommittee: [number[], string][];
    nextEpochProtocolVersion: string;
    epochCommitments: {
        ECMHLiveObjectSetDigest: {
            digest: number[];
        };
        $kind: "ECMHLiveObjectSetDigest";
    }[];
}, {
    nextEpochCommittee: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    };
    nextEpochProtocolVersion: string | number | bigint;
    epochCommitments: Iterable<{
        ECMHLiveObjectSetDigest: {
            digest: Iterable<number> & {
                length: number;
            };
        };
    }> & {
        length: number;
    };
}>;
export const CheckpointSummary: import("@mysten/bcs").BcsType<{
    epoch: string;
    sequence_number: string;
    network_total_transactions: string;
    content_digest: number[];
    previous_digest: number[];
    epoch_rolling_gas_cost_summary: {
        computationCost: string;
        storageCost: string;
        storageRebate: string;
        nonRefundableStorageFee: string;
    };
    timestamp_ms: string;
    checkpoint_commitments: {
        ECMHLiveObjectSetDigest: {
            digest: number[];
        };
        $kind: "ECMHLiveObjectSetDigest";
    }[];
    end_of_epoch_data: {
        nextEpochCommittee: [number[], string][];
        nextEpochProtocolVersion: string;
        epochCommitments: {
            ECMHLiveObjectSetDigest: {
                digest: number[];
            };
            $kind: "ECMHLiveObjectSetDigest";
        }[];
    };
    version_specific_data: number[];
}, {
    epoch: string | number | bigint;
    sequence_number: string | number | bigint;
    network_total_transactions: string | number | bigint;
    content_digest: Iterable<number> & {
        length: number;
    };
    previous_digest: Iterable<number> & {
        length: number;
    };
    epoch_rolling_gas_cost_summary: {
        computationCost: string | number | bigint;
        storageCost: string | number | bigint;
        storageRebate: string | number | bigint;
        nonRefundableStorageFee: string | number | bigint;
    };
    timestamp_ms: string | number | bigint;
    checkpoint_commitments: Iterable<{
        ECMHLiveObjectSetDigest: {
            digest: Iterable<number> & {
                length: number;
            };
        };
    }> & {
        length: number;
    };
    end_of_epoch_data: {
        nextEpochCommittee: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        };
        nextEpochProtocolVersion: string | number | bigint;
        epochCommitments: Iterable<{
            ECMHLiveObjectSetDigest: {
                digest: Iterable<number> & {
                    length: number;
                };
            };
        }> & {
            length: number;
        };
    };
    version_specific_data: Iterable<number> & {
        length: number;
    };
}>;
export const Identifier: import("@mysten/bcs").BcsType<string, string>;
export const TypeTag: any;
export const StructTag: import("@mysten/bcs").BcsType<{
    address: number[];
    module: string;
    name: string;
    type_args: any[];
}, {
    address: Iterable<number> & {
        length: number;
    };
    module: string;
    name: string;
    type_args: Iterable<any> & {
        length: number;
    };
}>;
export const ProgrammableMoveCall: import("@mysten/bcs").BcsType<{
    package: number[];
    module: string;
    function: string;
    type_arguments: any[];
    arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
}, {
    package: Iterable<number> & {
        length: number;
    };
    module: string;
    function: string;
    type_arguments: Iterable<any> & {
        length: number;
    };
    arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    };
}>;
export const Command: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    MoveCall: {
        package: number[];
        module: string;
        function: string;
        type_arguments: any[];
        arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
    };
    TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
    SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
    MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
    Publish: [number[][], number[][]];
    MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
    Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
}, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">, import("@mysten/bcs").EnumInputShape<{
    MoveCall: {
        package: Iterable<number> & {
            length: number;
        };
        module: string;
        function: string;
        type_arguments: Iterable<any> & {
            length: number;
        };
        arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        };
    };
    TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }, import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>];
    SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }];
    MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }];
    Publish: readonly [Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }];
    MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }];
    Upgrade: readonly [Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, Iterable<number> & {
        length: number;
    }, import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>];
}>>;
export const CommandArgumentError: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    TypeMismatch: unknown;
    InvalidBCSBytes: unknown;
    InvalidUsageOfPureArg: unknown;
    InvalidArgumentToPrivateEntryFunction: unknown;
    IndexOutOfBounds: {
        idx: number;
    };
    SecondaryIndexOutOfBounds: {
        result_idx: number;
        secondary_idx: number;
    };
    InvalidResultArity: {
        result_idx: number;
    };
    InvalidGasCoinUsage: unknown;
    InvalidValueUsage: unknown;
    InvalidObjectByValue: unknown;
    InvalidObjectByMutRef: unknown;
    SharedObjectOperationNotAllowed: unknown;
}, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">, import("@mysten/bcs").EnumInputShape<{
    TypeMismatch: unknown;
    InvalidBCSBytes: unknown;
    InvalidUsageOfPureArg: unknown;
    InvalidArgumentToPrivateEntryFunction: unknown;
    IndexOutOfBounds: {
        idx: number;
    };
    SecondaryIndexOutOfBounds: {
        result_idx: number;
        secondary_idx: number;
    };
    InvalidResultArity: {
        result_idx: number;
    };
    InvalidGasCoinUsage: unknown;
    InvalidValueUsage: unknown;
    InvalidObjectByValue: unknown;
    InvalidObjectByMutRef: unknown;
    SharedObjectOperationNotAllowed: unknown;
}>>;
export const ZkLoginAuthenticatorAsBytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const CompressedSignature: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Ed25519: number[];
    Secp256k1: number[];
    Secp256r1: number[];
    ZkLogin: number[];
}, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">, import("@mysten/bcs").EnumInputShape<{
    Ed25519: Iterable<number> & {
        length: number;
    };
    Secp256k1: Iterable<number> & {
        length: number;
    };
    Secp256r1: Iterable<number> & {
        length: number;
    };
    ZkLogin: Iterable<number> & {
        length: number;
    };
}>>;
export const CongestedObjects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
    length: number;
}> & {
    length: number;
}>;
export const ConsensusCommitDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const ConsensusCommitPrologue: import("@mysten/bcs").BcsType<{
    epoch: string;
    round: string;
    commit_timestamp_ms: string;
}, {
    epoch: string | number | bigint;
    round: string | number | bigint;
    commit_timestamp_ms: string | number | bigint;
}>;
export const ConsensusCommitPrologueV2: import("@mysten/bcs").BcsType<{
    epoch: string;
    round: string;
    commit_timestamp_ms: string;
    consensus_commit_digest: number[];
}, {
    epoch: string | number | bigint;
    round: string | number | bigint;
    commit_timestamp_ms: string | number | bigint;
    consensus_commit_digest: Iterable<number> & {
        length: number;
    };
}>;
export const ConsensusDeterminedVersionAssignments: import("@mysten/bcs").BcsType<{
    CancelledTransactions: [number[], [number[], string][]][];
    $kind: "CancelledTransactions";
}, {
    CancelledTransactions: Iterable<readonly [Iterable<number> & {
        length: number;
    }, Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    }]> & {
        length: number;
    };
}>;
export const ConsensusCommitPrologueV3: import("@mysten/bcs").BcsType<{
    epoch: string;
    round: string;
    sub_dag_index: string;
    commit_timestamp_ms: string;
    consensus_commit_digest: number[];
    consensus_determined_version_assignments: {
        CancelledTransactions: [number[], [number[], string][]][];
        $kind: "CancelledTransactions";
    };
}, {
    epoch: string | number | bigint;
    round: string | number | bigint;
    sub_dag_index: string | number | bigint;
    commit_timestamp_ms: string | number | bigint;
    consensus_commit_digest: Iterable<number> & {
        length: number;
    };
    consensus_determined_version_assignments: {
        CancelledTransactions: Iterable<readonly [Iterable<number> & {
            length: number;
        }, Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        }]> & {
            length: number;
        };
    };
}>;
export const MoveObjectType_: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Other: {
        address: number[];
        module: string;
        name: string;
        type_args: any[];
    };
    GasCoin: unknown;
    StakedSui: unknown;
    Coin: unknown;
}, "GasCoin" | "Other" | "StakedSui" | "Coin">, import("@mysten/bcs").EnumInputShape<{
    Other: {
        address: Iterable<number> & {
            length: number;
        };
        module: string;
        name: string;
        type_args: Iterable<any> & {
            length: number;
        };
    };
    GasCoin: unknown;
    StakedSui: unknown;
    Coin: unknown;
}>>;
export const MoveObjectType: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Other: {
        address: number[];
        module: string;
        name: string;
        type_args: any[];
    };
    GasCoin: unknown;
    StakedSui: unknown;
    Coin: unknown;
}, "GasCoin" | "Other" | "StakedSui" | "Coin">, import("@mysten/bcs").EnumInputShape<{
    Other: {
        address: Iterable<number> & {
            length: number;
        };
        module: string;
        name: string;
        type_args: Iterable<any> & {
            length: number;
        };
    };
    GasCoin: unknown;
    StakedSui: unknown;
    Coin: unknown;
}>>;
export const MoveObject: import("@mysten/bcs").BcsType<{
    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Other: {
            address: number[];
            module: string;
            name: string;
            type_args: any[];
        };
        GasCoin: unknown;
        StakedSui: unknown;
        Coin: unknown;
    }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
    has_public_transfer: boolean;
    version: string;
    contents: number[];
}, {
    type: import("@mysten/bcs").EnumInputShape<{
        Other: {
            address: Iterable<number> & {
                length: number;
            };
            module: string;
            name: string;
            type_args: Iterable<any> & {
                length: number;
            };
        };
        GasCoin: unknown;
        StakedSui: unknown;
        Coin: unknown;
    }>;
    has_public_transfer: boolean;
    version: string | number | bigint;
    contents: Iterable<number> & {
        length: number;
    };
}>;
export const TypeOrigin: import("@mysten/bcs").BcsType<{
    module_name: string;
    datatype_name: string;
    package: number[];
}, {
    module_name: string;
    datatype_name: string;
    package: Iterable<number> & {
        length: number;
    };
}>;
export const UpgradeInfo: import("@mysten/bcs").BcsType<{
    upgraded_id: number[];
    upgraded_version: string;
}, {
    upgraded_id: Iterable<number> & {
        length: number;
    };
    upgraded_version: string | number | bigint;
}>;
export const MovePackage: import("@mysten/bcs").BcsType<{
    id: number[];
    version: string;
    module_map: Map<string, number[]>;
    type_origin_table: {
        module_name: string;
        datatype_name: string;
        package: number[];
    }[];
    linkage_table: Map<number[], {
        upgraded_id: number[];
        upgraded_version: string;
    }>;
}, {
    id: Iterable<number> & {
        length: number;
    };
    version: string | number | bigint;
    module_map: Map<string, Iterable<number> & {
        length: number;
    }>;
    type_origin_table: Iterable<{
        module_name: string;
        datatype_name: string;
        package: Iterable<number> & {
            length: number;
        };
    }> & {
        length: number;
    };
    linkage_table: Map<Iterable<number> & {
        length: number;
    }, {
        upgraded_id: Iterable<number> & {
            length: number;
        };
        upgraded_version: string | number | bigint;
    }>;
}>;
export const Data: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Move: {
        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Other: {
                address: number[];
                module: string;
                name: string;
                type_args: any[];
            };
            GasCoin: unknown;
            StakedSui: unknown;
            Coin: unknown;
        }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
        has_public_transfer: boolean;
        version: string;
        contents: number[];
    };
    Package: {
        id: number[];
        version: string;
        module_map: Map<string, number[]>;
        type_origin_table: {
            module_name: string;
            datatype_name: string;
            package: number[];
        }[];
        linkage_table: Map<number[], {
            upgraded_id: number[];
            upgraded_version: string;
        }>;
    };
}, "Move" | "Package">, import("@mysten/bcs").EnumInputShape<{
    Move: {
        type: import("@mysten/bcs").EnumInputShape<{
            Other: {
                address: Iterable<number> & {
                    length: number;
                };
                module: string;
                name: string;
                type_args: Iterable<any> & {
                    length: number;
                };
            };
            GasCoin: unknown;
            StakedSui: unknown;
            Coin: unknown;
        }>;
        has_public_transfer: boolean;
        version: string | number | bigint;
        contents: Iterable<number> & {
            length: number;
        };
    };
    Package: {
        id: Iterable<number> & {
            length: number;
        };
        version: string | number | bigint;
        module_map: Map<string, Iterable<number> & {
            length: number;
        }>;
        type_origin_table: Iterable<{
            module_name: string;
            datatype_name: string;
            package: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        };
        linkage_table: Map<Iterable<number> & {
            length: number;
        }, {
            upgraded_id: Iterable<number> & {
                length: number;
            };
            upgraded_version: string | number | bigint;
        }>;
    };
}>>;
export const DeleteKind: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Normal: unknown;
    UnwrapThenDelete: unknown;
    Wrap: unknown;
}, "Normal" | "UnwrapThenDelete" | "Wrap">, import("@mysten/bcs").EnumInputShape<{
    Normal: unknown;
    UnwrapThenDelete: unknown;
    Wrap: unknown;
}>>;
export const EffectsAuxDataDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const SuiAddress: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const Owner: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    AddressOwner: number[];
    ObjectOwner: number[];
    Shared: {
        initial_shared_version: string;
    };
    Immutable: unknown;
}, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">, import("@mysten/bcs").EnumInputShape<{
    AddressOwner: Iterable<number> & {
        length: number;
    };
    ObjectOwner: Iterable<number> & {
        length: number;
    };
    Shared: {
        initial_shared_version: string | number | bigint;
    };
    Immutable: unknown;
}>>;
export const ObjectIn: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    NotExist: unknown;
    Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
}, "NotExist" | "Exist">, import("@mysten/bcs").EnumInputShape<{
    NotExist: unknown;
    Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
    }>];
}>>;
export const ObjectOut: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    NotExist: unknown;
    ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
    PackageWrite: [string, number[]];
}, "NotExist" | "ObjectWrite" | "PackageWrite">, import("@mysten/bcs").EnumInputShape<{
    NotExist: unknown;
    ObjectWrite: readonly [Iterable<number> & {
        length: number;
    }, import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
    }>];
    PackageWrite: readonly [string | number | bigint, Iterable<number> & {
        length: number;
    }];
}>>;
export const IDOperation: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    None: unknown;
    Created: unknown;
    Deleted: unknown;
}, "None" | "Created" | "Deleted">, import("@mysten/bcs").EnumInputShape<{
    None: unknown;
    Created: unknown;
    Deleted: unknown;
}>>;
export const EffectsObjectChange: import("@mysten/bcs").BcsType<{
    input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        NotExist: unknown;
        Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
    }, "NotExist" | "Exist">;
    output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        NotExist: unknown;
        ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
        PackageWrite: [string, number[]];
    }, "NotExist" | "ObjectWrite" | "PackageWrite">;
    id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        None: unknown;
        Created: unknown;
        Deleted: unknown;
    }, "None" | "Created" | "Deleted">;
}, {
    input_state: import("@mysten/bcs").EnumInputShape<{
        NotExist: unknown;
        Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>];
    }>;
    output_state: import("@mysten/bcs").EnumInputShape<{
        NotExist: unknown;
        ObjectWrite: readonly [Iterable<number> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>];
        PackageWrite: readonly [string | number | bigint, Iterable<number> & {
            length: number;
        }];
    }>;
    id_operation: import("@mysten/bcs").EnumInputShape<{
        None: unknown;
        Created: unknown;
        Deleted: unknown;
    }>;
}>;
export const EmptySignInfo: import("@mysten/bcs").BcsType<{}, {}>;
export const EndOfEpochTransactionKind: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    ChangeEpoch: {
        epoch: string;
        protocol_version: string;
        storage_charge: string;
        computation_charge: string;
        storage_rebate: string;
        non_refundable_storage_fee: string;
        epoch_start_timestamp_ms: string;
        system_packages: [string, number[][], number[][]][];
    };
    AuthenticatorStateCreate: unknown;
    AuthenticatorStateExpire: {
        min_epoch: string;
        authenticator_obj_initial_shared_version: string;
    };
    RandomnessStateCreate: unknown;
    DenyListStateCreate: unknown;
    BridgeStateCreate: number[];
    BridgeCommitteeInit: string;
}, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">, import("@mysten/bcs").EnumInputShape<{
    ChangeEpoch: {
        epoch: string | number | bigint;
        protocol_version: string | number | bigint;
        storage_charge: string | number | bigint;
        computation_charge: string | number | bigint;
        storage_rebate: string | number | bigint;
        non_refundable_storage_fee: string | number | bigint;
        epoch_start_timestamp_ms: string | number | bigint;
        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }]> & {
            length: number;
        };
    };
    AuthenticatorStateCreate: unknown;
    AuthenticatorStateExpire: {
        min_epoch: string | number | bigint;
        authenticator_obj_initial_shared_version: string | number | bigint;
    };
    RandomnessStateCreate: unknown;
    DenyListStateCreate: unknown;
    BridgeStateCreate: Iterable<number> & {
        length: number;
    };
    BridgeCommitteeInit: string | number | bigint;
}>>;
export const Intent: import("@mysten/bcs").BcsType<{
    scope: number;
    version: number;
    app_id: number;
}, {
    scope: number;
    version: number;
    app_id: number;
}>;
export const ProgrammableTransaction: import("@mysten/bcs").BcsType<{
    inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Pure: number[];
        Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ImmOrOwnedObject: [number[], string, number[]];
            SharedObject: {
                id: number[];
                initial_shared_version: string;
                mutable: boolean;
            };
            Receiving: [number[], string, number[]];
        }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
    }, "Pure" | "Object">[];
    commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        MoveCall: {
            package: number[];
            module: string;
            function: string;
            type_arguments: any[];
            arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
        };
        TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
        SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
        MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
        Publish: [number[][], number[][]];
        MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
        Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
    }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
}, {
    inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
        Pure: Iterable<number> & {
            length: number;
        };
        Object: import("@mysten/bcs").EnumInputShape<{
            ImmOrOwnedObject: readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }];
            SharedObject: {
                id: Iterable<number> & {
                    length: number;
                };
                initial_shared_version: string | number | bigint;
                mutable: boolean;
            };
            Receiving: readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }];
        }>;
    }>> & {
        length: number;
    };
    commands: Iterable<import("@mysten/bcs").EnumInputShape<{
        MoveCall: {
            package: Iterable<number> & {
                length: number;
            };
            module: string;
            function: string;
            type_arguments: Iterable<any> & {
                length: number;
            };
            arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            };
        };
        TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>];
        SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }];
        MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }];
        Publish: readonly [Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }];
        MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }];
        Upgrade: readonly [Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<number> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>];
    }>> & {
        length: number;
    };
}>;
export const GenesisObject: import("@mysten/bcs").BcsType<{
    RawObject: {
        data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Move: {
                type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Other: {
                        address: number[];
                        module: string;
                        name: string;
                        type_args: any[];
                    };
                    GasCoin: unknown;
                    StakedSui: unknown;
                    Coin: unknown;
                }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                has_public_transfer: boolean;
                version: string;
                contents: number[];
            };
            Package: {
                id: number[];
                version: string;
                module_map: Map<string, number[]>;
                type_origin_table: {
                    module_name: string;
                    datatype_name: string;
                    package: number[];
                }[];
                linkage_table: Map<number[], {
                    upgraded_id: number[];
                    upgraded_version: string;
                }>;
            };
        }, "Move" | "Package">;
        owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
    };
    $kind: "RawObject";
}, {
    RawObject: {
        data: import("@mysten/bcs").EnumInputShape<{
            Move: {
                type: import("@mysten/bcs").EnumInputShape<{
                    Other: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        name: string;
                        type_args: Iterable<any> & {
                            length: number;
                        };
                    };
                    GasCoin: unknown;
                    StakedSui: unknown;
                    Coin: unknown;
                }>;
                has_public_transfer: boolean;
                version: string | number | bigint;
                contents: Iterable<number> & {
                    length: number;
                };
            };
            Package: {
                id: Iterable<number> & {
                    length: number;
                };
                version: string | number | bigint;
                module_map: Map<string, Iterable<number> & {
                    length: number;
                }>;
                type_origin_table: Iterable<{
                    module_name: string;
                    datatype_name: string;
                    package: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                linkage_table: Map<Iterable<number> & {
                    length: number;
                }, {
                    upgraded_id: Iterable<number> & {
                        length: number;
                    };
                    upgraded_version: string | number | bigint;
                }>;
            };
        }>;
        owner: import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>;
    };
}>;
export const GenesisTransaction: import("@mysten/bcs").BcsType<{
    objects: {
        RawObject: {
            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Move: {
                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Other: {
                            address: number[];
                            module: string;
                            name: string;
                            type_args: any[];
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                    }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                    has_public_transfer: boolean;
                    version: string;
                    contents: number[];
                };
                Package: {
                    id: number[];
                    version: string;
                    module_map: Map<string, number[]>;
                    type_origin_table: {
                        module_name: string;
                        datatype_name: string;
                        package: number[];
                    }[];
                    linkage_table: Map<number[], {
                        upgraded_id: number[];
                        upgraded_version: string;
                    }>;
                };
            }, "Move" | "Package">;
            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
        };
        $kind: "RawObject";
    }[];
}, {
    objects: Iterable<{
        RawObject: {
            data: import("@mysten/bcs").EnumInputShape<{
                Move: {
                    type: import("@mysten/bcs").EnumInputShape<{
                        Other: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            name: string;
                            type_args: Iterable<any> & {
                                length: number;
                            };
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                    }>;
                    has_public_transfer: boolean;
                    version: string | number | bigint;
                    contents: Iterable<number> & {
                        length: number;
                    };
                };
                Package: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    module_map: Map<string, Iterable<number> & {
                        length: number;
                    }>;
                    type_origin_table: Iterable<{
                        module_name: string;
                        datatype_name: string;
                        package: Iterable<number> & {
                            length: number;
                        };
                    }> & {
                        length: number;
                    };
                    linkage_table: Map<Iterable<number> & {
                        length: number;
                    }, {
                        upgraded_id: Iterable<number> & {
                            length: number;
                        };
                        upgraded_version: string | number | bigint;
                    }>;
                };
            }>;
            owner: import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>;
        };
    }> & {
        length: number;
    };
}>;
export const RandomnessRound: import("@mysten/bcs").BcsType<string, string | number | bigint>;
export const RandomnessStateUpdate: import("@mysten/bcs").BcsType<{
    epoch: string;
    randomness_round: string;
    random_bytes: number[];
    randomness_obj_initial_shared_version: string;
}, {
    epoch: string | number | bigint;
    randomness_round: string | number | bigint;
    random_bytes: Iterable<number> & {
        length: number;
    };
    randomness_obj_initial_shared_version: string | number | bigint;
}>;
export const TransactionKind: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    ProgrammableTransaction: {
        inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Pure: number[];
            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ImmOrOwnedObject: [number[], string, number[]];
                SharedObject: {
                    id: number[];
                    initial_shared_version: string;
                    mutable: boolean;
                };
                Receiving: [number[], string, number[]];
            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
        }, "Pure" | "Object">[];
        commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            MoveCall: {
                package: number[];
                module: string;
                function: string;
                type_arguments: any[];
                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
            };
            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            Publish: [number[][], number[][]];
            MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
    };
    ChangeEpoch: {
        epoch: string;
        protocol_version: string;
        storage_charge: string;
        computation_charge: string;
        storage_rebate: string;
        non_refundable_storage_fee: string;
        epoch_start_timestamp_ms: string;
        system_packages: [string, number[][], number[][]][];
    };
    Genesis: {
        objects: {
            RawObject: {
                data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Move: {
                        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Other: {
                                address: number[];
                                module: string;
                                name: string;
                                type_args: any[];
                            };
                            GasCoin: unknown;
                            StakedSui: unknown;
                            Coin: unknown;
                        }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                        has_public_transfer: boolean;
                        version: string;
                        contents: number[];
                    };
                    Package: {
                        id: number[];
                        version: string;
                        module_map: Map<string, number[]>;
                        type_origin_table: {
                            module_name: string;
                            datatype_name: string;
                            package: number[];
                        }[];
                        linkage_table: Map<number[], {
                            upgraded_id: number[];
                            upgraded_version: string;
                        }>;
                    };
                }, "Move" | "Package">;
                owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
            };
            $kind: "RawObject";
        }[];
    };
    ConsensusCommitPrologue: {
        epoch: string;
        round: string;
        commit_timestamp_ms: string;
    };
    AuthenticatorStateUpdate: {
        epoch: string;
        round: string;
        new_active_jwks: {
            jwk_id: {
                iss: string;
                kid: string;
            };
            jwk: {
                kty: string;
                e: string;
                n: string;
                alg: string;
            };
            epoch: string;
        }[];
        authenticator_obj_initial_shared_version: string;
    };
    EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ChangeEpoch: {
            epoch: string;
            protocol_version: string;
            storage_charge: string;
            computation_charge: string;
            storage_rebate: string;
            non_refundable_storage_fee: string;
            epoch_start_timestamp_ms: string;
            system_packages: [string, number[][], number[][]][];
        };
        AuthenticatorStateCreate: unknown;
        AuthenticatorStateExpire: {
            min_epoch: string;
            authenticator_obj_initial_shared_version: string;
        };
        RandomnessStateCreate: unknown;
        DenyListStateCreate: unknown;
        BridgeStateCreate: number[];
        BridgeCommitteeInit: string;
    }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
    RandomnessStateUpdate: {
        epoch: string;
        randomness_round: string;
        random_bytes: number[];
        randomness_obj_initial_shared_version: string;
    };
    ConsensusCommitPrologueV2: {
        epoch: string;
        round: string;
        commit_timestamp_ms: string;
        consensus_commit_digest: number[];
    };
    ConsensusCommitPrologueV3: {
        epoch: string;
        round: string;
        sub_dag_index: string;
        commit_timestamp_ms: string;
        consensus_commit_digest: number[];
        consensus_determined_version_assignments: {
            CancelledTransactions: [number[], [number[], string][]][];
            $kind: "CancelledTransactions";
        };
    };
}, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">, import("@mysten/bcs").EnumInputShape<{
    ProgrammableTransaction: {
        inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
            Pure: Iterable<number> & {
                length: number;
            };
            Object: import("@mysten/bcs").EnumInputShape<{
                ImmOrOwnedObject: readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                SharedObject: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    initial_shared_version: string | number | bigint;
                    mutable: boolean;
                };
                Receiving: readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }];
            }>;
        }>> & {
            length: number;
        };
        commands: Iterable<import("@mysten/bcs").EnumInputShape<{
            MoveCall: {
                package: Iterable<number> & {
                    length: number;
                };
                module: string;
                function: string;
                type_arguments: Iterable<any> & {
                    length: number;
                };
                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                };
            };
            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>];
            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            Publish: readonly [Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }];
            MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            Upgrade: readonly [Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>];
        }>> & {
            length: number;
        };
    };
    ChangeEpoch: {
        epoch: string | number | bigint;
        protocol_version: string | number | bigint;
        storage_charge: string | number | bigint;
        computation_charge: string | number | bigint;
        storage_rebate: string | number | bigint;
        non_refundable_storage_fee: string | number | bigint;
        epoch_start_timestamp_ms: string | number | bigint;
        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }]> & {
            length: number;
        };
    };
    Genesis: {
        objects: Iterable<{
            RawObject: {
                data: import("@mysten/bcs").EnumInputShape<{
                    Move: {
                        type: import("@mysten/bcs").EnumInputShape<{
                            Other: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                name: string;
                                type_args: Iterable<any> & {
                                    length: number;
                                };
                            };
                            GasCoin: unknown;
                            StakedSui: unknown;
                            Coin: unknown;
                        }>;
                        has_public_transfer: boolean;
                        version: string | number | bigint;
                        contents: Iterable<number> & {
                            length: number;
                        };
                    };
                    Package: {
                        id: Iterable<number> & {
                            length: number;
                        };
                        version: string | number | bigint;
                        module_map: Map<string, Iterable<number> & {
                            length: number;
                        }>;
                        type_origin_table: Iterable<{
                            module_name: string;
                            datatype_name: string;
                            package: Iterable<number> & {
                                length: number;
                            };
                        }> & {
                            length: number;
                        };
                        linkage_table: Map<Iterable<number> & {
                            length: number;
                        }, {
                            upgraded_id: Iterable<number> & {
                                length: number;
                            };
                            upgraded_version: string | number | bigint;
                        }>;
                    };
                }>;
                owner: import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>;
            };
        }> & {
            length: number;
        };
    };
    ConsensusCommitPrologue: {
        epoch: string | number | bigint;
        round: string | number | bigint;
        commit_timestamp_ms: string | number | bigint;
    };
    AuthenticatorStateUpdate: {
        epoch: string | number | bigint;
        round: string | number | bigint;
        new_active_jwks: Iterable<{
            jwk_id: {
                iss: string;
                kid: string;
            };
            jwk: {
                kty: string;
                e: string;
                n: string;
                alg: string;
            };
            epoch: string | number | bigint;
        }> & {
            length: number;
        };
        authenticator_obj_initial_shared_version: string | number | bigint;
    };
    EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
        ChangeEpoch: {
            epoch: string | number | bigint;
            protocol_version: string | number | bigint;
            storage_charge: string | number | bigint;
            computation_charge: string | number | bigint;
            storage_rebate: string | number | bigint;
            non_refundable_storage_fee: string | number | bigint;
            epoch_start_timestamp_ms: string | number | bigint;
            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }]> & {
                length: number;
            };
        };
        AuthenticatorStateCreate: unknown;
        AuthenticatorStateExpire: {
            min_epoch: string | number | bigint;
            authenticator_obj_initial_shared_version: string | number | bigint;
        };
        RandomnessStateCreate: unknown;
        DenyListStateCreate: unknown;
        BridgeStateCreate: Iterable<number> & {
            length: number;
        };
        BridgeCommitteeInit: string | number | bigint;
    }>> & {
        length: number;
    };
    RandomnessStateUpdate: {
        epoch: string | number | bigint;
        randomness_round: string | number | bigint;
        random_bytes: Iterable<number> & {
            length: number;
        };
        randomness_obj_initial_shared_version: string | number | bigint;
    };
    ConsensusCommitPrologueV2: {
        epoch: string | number | bigint;
        round: string | number | bigint;
        commit_timestamp_ms: string | number | bigint;
        consensus_commit_digest: Iterable<number> & {
            length: number;
        };
    };
    ConsensusCommitPrologueV3: {
        epoch: string | number | bigint;
        round: string | number | bigint;
        sub_dag_index: string | number | bigint;
        commit_timestamp_ms: string | number | bigint;
        consensus_commit_digest: Iterable<number> & {
            length: number;
        };
        consensus_determined_version_assignments: {
            CancelledTransactions: Iterable<readonly [Iterable<number> & {
                length: number;
            }, Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            }]> & {
                length: number;
            };
        };
    };
}>>;
export const GasData: import("@mysten/bcs").BcsType<{
    payment: [number[], string, number[]][];
    owner: number[];
    price: string;
    budget: string;
}, {
    payment: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    };
    owner: Iterable<number> & {
        length: number;
    };
    price: string | number | bigint;
    budget: string | number | bigint;
}>;
export const TransactionExpiration: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    None: unknown;
    Epoch: string;
}, "None" | "Epoch">, import("@mysten/bcs").EnumInputShape<{
    None: unknown;
    Epoch: string | number | bigint;
}>>;
export const TransactionDataV1: import("@mysten/bcs").BcsType<{
    kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ProgrammableTransaction: {
            inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Pure: number[];
                Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ImmOrOwnedObject: [number[], string, number[]];
                    SharedObject: {
                        id: number[];
                        initial_shared_version: string;
                        mutable: boolean;
                    };
                    Receiving: [number[], string, number[]];
                }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
            }, "Pure" | "Object">[];
            commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                MoveCall: {
                    package: number[];
                    module: string;
                    function: string;
                    type_arguments: any[];
                    arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                };
                TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                Publish: [number[][], number[][]];
                MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
            }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
        };
        ChangeEpoch: {
            epoch: string;
            protocol_version: string;
            storage_charge: string;
            computation_charge: string;
            storage_rebate: string;
            non_refundable_storage_fee: string;
            epoch_start_timestamp_ms: string;
            system_packages: [string, number[][], number[][]][];
        };
        Genesis: {
            objects: {
                RawObject: {
                    data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Move: {
                            type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Other: {
                                    address: number[];
                                    module: string;
                                    name: string;
                                    type_args: any[];
                                };
                                GasCoin: unknown;
                                StakedSui: unknown;
                                Coin: unknown;
                            }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                            has_public_transfer: boolean;
                            version: string;
                            contents: number[];
                        };
                        Package: {
                            id: number[];
                            version: string;
                            module_map: Map<string, number[]>;
                            type_origin_table: {
                                module_name: string;
                                datatype_name: string;
                                package: number[];
                            }[];
                            linkage_table: Map<number[], {
                                upgraded_id: number[];
                                upgraded_version: string;
                            }>;
                        };
                    }, "Move" | "Package">;
                    owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                };
                $kind: "RawObject";
            }[];
        };
        ConsensusCommitPrologue: {
            epoch: string;
            round: string;
            commit_timestamp_ms: string;
        };
        AuthenticatorStateUpdate: {
            epoch: string;
            round: string;
            new_active_jwks: {
                jwk_id: {
                    iss: string;
                    kid: string;
                };
                jwk: {
                    kty: string;
                    e: string;
                    n: string;
                    alg: string;
                };
                epoch: string;
            }[];
            authenticator_obj_initial_shared_version: string;
        };
        EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ChangeEpoch: {
                epoch: string;
                protocol_version: string;
                storage_charge: string;
                computation_charge: string;
                storage_rebate: string;
                non_refundable_storage_fee: string;
                epoch_start_timestamp_ms: string;
                system_packages: [string, number[][], number[][]][];
            };
            AuthenticatorStateCreate: unknown;
            AuthenticatorStateExpire: {
                min_epoch: string;
                authenticator_obj_initial_shared_version: string;
            };
            RandomnessStateCreate: unknown;
            DenyListStateCreate: unknown;
            BridgeStateCreate: number[];
            BridgeCommitteeInit: string;
        }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
        RandomnessStateUpdate: {
            epoch: string;
            randomness_round: string;
            random_bytes: number[];
            randomness_obj_initial_shared_version: string;
        };
        ConsensusCommitPrologueV2: {
            epoch: string;
            round: string;
            commit_timestamp_ms: string;
            consensus_commit_digest: number[];
        };
        ConsensusCommitPrologueV3: {
            epoch: string;
            round: string;
            sub_dag_index: string;
            commit_timestamp_ms: string;
            consensus_commit_digest: number[];
            consensus_determined_version_assignments: {
                CancelledTransactions: [number[], [number[], string][]][];
                $kind: "CancelledTransactions";
            };
        };
    }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
    sender: number[];
    gas_data: {
        payment: [number[], string, number[]][];
        owner: number[];
        price: string;
        budget: string;
    };
    expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        None: unknown;
        Epoch: string;
    }, "None" | "Epoch">;
}, {
    kind: import("@mysten/bcs").EnumInputShape<{
        ProgrammableTransaction: {
            inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                Pure: Iterable<number> & {
                    length: number;
                };
                Object: import("@mysten/bcs").EnumInputShape<{
                    ImmOrOwnedObject: readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    SharedObject: {
                        id: Iterable<number> & {
                            length: number;
                        };
                        initial_shared_version: string | number | bigint;
                        mutable: boolean;
                    };
                    Receiving: readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                }>;
            }>> & {
                length: number;
            };
            commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                MoveCall: {
                    package: Iterable<number> & {
                        length: number;
                    };
                    module: string;
                    function: string;
                    type_arguments: Iterable<any> & {
                        length: number;
                    };
                    arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    };
                };
                TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>];
                SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                Publish: readonly [Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }];
                MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                Upgrade: readonly [Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>];
            }>> & {
                length: number;
            };
        };
        ChangeEpoch: {
            epoch: string | number | bigint;
            protocol_version: string | number | bigint;
            storage_charge: string | number | bigint;
            computation_charge: string | number | bigint;
            storage_rebate: string | number | bigint;
            non_refundable_storage_fee: string | number | bigint;
            epoch_start_timestamp_ms: string | number | bigint;
            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }]> & {
                length: number;
            };
        };
        Genesis: {
            objects: Iterable<{
                RawObject: {
                    data: import("@mysten/bcs").EnumInputShape<{
                        Move: {
                            type: import("@mysten/bcs").EnumInputShape<{
                                Other: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    module: string;
                                    name: string;
                                    type_args: Iterable<any> & {
                                        length: number;
                                    };
                                };
                                GasCoin: unknown;
                                StakedSui: unknown;
                                Coin: unknown;
                            }>;
                            has_public_transfer: boolean;
                            version: string | number | bigint;
                            contents: Iterable<number> & {
                                length: number;
                            };
                        };
                        Package: {
                            id: Iterable<number> & {
                                length: number;
                            };
                            version: string | number | bigint;
                            module_map: Map<string, Iterable<number> & {
                                length: number;
                            }>;
                            type_origin_table: Iterable<{
                                module_name: string;
                                datatype_name: string;
                                package: Iterable<number> & {
                                    length: number;
                                };
                            }> & {
                                length: number;
                            };
                            linkage_table: Map<Iterable<number> & {
                                length: number;
                            }, {
                                upgraded_id: Iterable<number> & {
                                    length: number;
                                };
                                upgraded_version: string | number | bigint;
                            }>;
                        };
                    }>;
                    owner: import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                    }>;
                };
            }> & {
                length: number;
            };
        };
        ConsensusCommitPrologue: {
            epoch: string | number | bigint;
            round: string | number | bigint;
            commit_timestamp_ms: string | number | bigint;
        };
        AuthenticatorStateUpdate: {
            epoch: string | number | bigint;
            round: string | number | bigint;
            new_active_jwks: Iterable<{
                jwk_id: {
                    iss: string;
                    kid: string;
                };
                jwk: {
                    kty: string;
                    e: string;
                    n: string;
                    alg: string;
                };
                epoch: string | number | bigint;
            }> & {
                length: number;
            };
            authenticator_obj_initial_shared_version: string | number | bigint;
        };
        EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
            ChangeEpoch: {
                epoch: string | number | bigint;
                protocol_version: string | number | bigint;
                storage_charge: string | number | bigint;
                computation_charge: string | number | bigint;
                storage_rebate: string | number | bigint;
                non_refundable_storage_fee: string | number | bigint;
                epoch_start_timestamp_ms: string | number | bigint;
                system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }]> & {
                    length: number;
                };
            };
            AuthenticatorStateCreate: unknown;
            AuthenticatorStateExpire: {
                min_epoch: string | number | bigint;
                authenticator_obj_initial_shared_version: string | number | bigint;
            };
            RandomnessStateCreate: unknown;
            DenyListStateCreate: unknown;
            BridgeStateCreate: Iterable<number> & {
                length: number;
            };
            BridgeCommitteeInit: string | number | bigint;
        }>> & {
            length: number;
        };
        RandomnessStateUpdate: {
            epoch: string | number | bigint;
            randomness_round: string | number | bigint;
            random_bytes: Iterable<number> & {
                length: number;
            };
            randomness_obj_initial_shared_version: string | number | bigint;
        };
        ConsensusCommitPrologueV2: {
            epoch: string | number | bigint;
            round: string | number | bigint;
            commit_timestamp_ms: string | number | bigint;
            consensus_commit_digest: Iterable<number> & {
                length: number;
            };
        };
        ConsensusCommitPrologueV3: {
            epoch: string | number | bigint;
            round: string | number | bigint;
            sub_dag_index: string | number | bigint;
            commit_timestamp_ms: string | number | bigint;
            consensus_commit_digest: Iterable<number> & {
                length: number;
            };
            consensus_determined_version_assignments: {
                CancelledTransactions: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                }]> & {
                    length: number;
                };
            };
        };
    }>;
    sender: Iterable<number> & {
        length: number;
    };
    gas_data: {
        payment: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        };
        owner: Iterable<number> & {
            length: number;
        };
        price: string | number | bigint;
        budget: string | number | bigint;
    };
    expiration: import("@mysten/bcs").EnumInputShape<{
        None: unknown;
        Epoch: string | number | bigint;
    }>;
}>;
export const TransactionData: import("@mysten/bcs").BcsType<{
    V1: {
        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ProgrammableTransaction: {
                inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Pure: number[];
                    Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ImmOrOwnedObject: [number[], string, number[]];
                        SharedObject: {
                            id: number[];
                            initial_shared_version: string;
                            mutable: boolean;
                        };
                        Receiving: [number[], string, number[]];
                    }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                }, "Pure" | "Object">[];
                commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    MoveCall: {
                        package: number[];
                        module: string;
                        function: string;
                        type_arguments: any[];
                        arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                    };
                    TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                    SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    Publish: [number[][], number[][]];
                    MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
            };
            ChangeEpoch: {
                epoch: string;
                protocol_version: string;
                storage_charge: string;
                computation_charge: string;
                storage_rebate: string;
                non_refundable_storage_fee: string;
                epoch_start_timestamp_ms: string;
                system_packages: [string, number[][], number[][]][];
            };
            Genesis: {
                objects: {
                    RawObject: {
                        data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Move: {
                                type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Other: {
                                        address: number[];
                                        module: string;
                                        name: string;
                                        type_args: any[];
                                    };
                                    GasCoin: unknown;
                                    StakedSui: unknown;
                                    Coin: unknown;
                                }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                has_public_transfer: boolean;
                                version: string;
                                contents: number[];
                            };
                            Package: {
                                id: number[];
                                version: string;
                                module_map: Map<string, number[]>;
                                type_origin_table: {
                                    module_name: string;
                                    datatype_name: string;
                                    package: number[];
                                }[];
                                linkage_table: Map<number[], {
                                    upgraded_id: number[];
                                    upgraded_version: string;
                                }>;
                            };
                        }, "Move" | "Package">;
                        owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                    };
                    $kind: "RawObject";
                }[];
            };
            ConsensusCommitPrologue: {
                epoch: string;
                round: string;
                commit_timestamp_ms: string;
            };
            AuthenticatorStateUpdate: {
                epoch: string;
                round: string;
                new_active_jwks: {
                    jwk_id: {
                        iss: string;
                        kid: string;
                    };
                    jwk: {
                        kty: string;
                        e: string;
                        n: string;
                        alg: string;
                    };
                    epoch: string;
                }[];
                authenticator_obj_initial_shared_version: string;
            };
            EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ChangeEpoch: {
                    epoch: string;
                    protocol_version: string;
                    storage_charge: string;
                    computation_charge: string;
                    storage_rebate: string;
                    non_refundable_storage_fee: string;
                    epoch_start_timestamp_ms: string;
                    system_packages: [string, number[][], number[][]][];
                };
                AuthenticatorStateCreate: unknown;
                AuthenticatorStateExpire: {
                    min_epoch: string;
                    authenticator_obj_initial_shared_version: string;
                };
                RandomnessStateCreate: unknown;
                DenyListStateCreate: unknown;
                BridgeStateCreate: number[];
                BridgeCommitteeInit: string;
            }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
            RandomnessStateUpdate: {
                epoch: string;
                randomness_round: string;
                random_bytes: number[];
                randomness_obj_initial_shared_version: string;
            };
            ConsensusCommitPrologueV2: {
                epoch: string;
                round: string;
                commit_timestamp_ms: string;
                consensus_commit_digest: number[];
            };
            ConsensusCommitPrologueV3: {
                epoch: string;
                round: string;
                sub_dag_index: string;
                commit_timestamp_ms: string;
                consensus_commit_digest: number[];
                consensus_determined_version_assignments: {
                    CancelledTransactions: [number[], [number[], string][]][];
                    $kind: "CancelledTransactions";
                };
            };
        }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
        sender: number[];
        gas_data: {
            payment: [number[], string, number[]][];
            owner: number[];
            price: string;
            budget: string;
        };
        expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            None: unknown;
            Epoch: string;
        }, "None" | "Epoch">;
    };
    $kind: "V1";
}, {
    V1: {
        kind: import("@mysten/bcs").EnumInputShape<{
            ProgrammableTransaction: {
                inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                    Pure: Iterable<number> & {
                        length: number;
                    };
                    Object: import("@mysten/bcs").EnumInputShape<{
                        ImmOrOwnedObject: readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                        SharedObject: {
                            id: Iterable<number> & {
                                length: number;
                            };
                            initial_shared_version: string | number | bigint;
                            mutable: boolean;
                        };
                        Receiving: readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                    }>;
                }>> & {
                    length: number;
                };
                commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                    MoveCall: {
                        package: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        function: string;
                        type_arguments: Iterable<any> & {
                            length: number;
                        };
                        arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        };
                    };
                    TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>];
                    SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    Publish: readonly [Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }];
                    MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    Upgrade: readonly [Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<number> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>];
                }>> & {
                    length: number;
                };
            };
            ChangeEpoch: {
                epoch: string | number | bigint;
                protocol_version: string | number | bigint;
                storage_charge: string | number | bigint;
                computation_charge: string | number | bigint;
                storage_rebate: string | number | bigint;
                non_refundable_storage_fee: string | number | bigint;
                epoch_start_timestamp_ms: string | number | bigint;
                system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }]> & {
                    length: number;
                };
            };
            Genesis: {
                objects: Iterable<{
                    RawObject: {
                        data: import("@mysten/bcs").EnumInputShape<{
                            Move: {
                                type: import("@mysten/bcs").EnumInputShape<{
                                    Other: {
                                        address: Iterable<number> & {
                                            length: number;
                                        };
                                        module: string;
                                        name: string;
                                        type_args: Iterable<any> & {
                                            length: number;
                                        };
                                    };
                                    GasCoin: unknown;
                                    StakedSui: unknown;
                                    Coin: unknown;
                                }>;
                                has_public_transfer: boolean;
                                version: string | number | bigint;
                                contents: Iterable<number> & {
                                    length: number;
                                };
                            };
                            Package: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                                version: string | number | bigint;
                                module_map: Map<string, Iterable<number> & {
                                    length: number;
                                }>;
                                type_origin_table: Iterable<{
                                    module_name: string;
                                    datatype_name: string;
                                    package: Iterable<number> & {
                                        length: number;
                                    };
                                }> & {
                                    length: number;
                                };
                                linkage_table: Map<Iterable<number> & {
                                    length: number;
                                }, {
                                    upgraded_id: Iterable<number> & {
                                        length: number;
                                    };
                                    upgraded_version: string | number | bigint;
                                }>;
                            };
                        }>;
                        owner: import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                        }>;
                    };
                }> & {
                    length: number;
                };
            };
            ConsensusCommitPrologue: {
                epoch: string | number | bigint;
                round: string | number | bigint;
                commit_timestamp_ms: string | number | bigint;
            };
            AuthenticatorStateUpdate: {
                epoch: string | number | bigint;
                round: string | number | bigint;
                new_active_jwks: Iterable<{
                    jwk_id: {
                        iss: string;
                        kid: string;
                    };
                    jwk: {
                        kty: string;
                        e: string;
                        n: string;
                        alg: string;
                    };
                    epoch: string | number | bigint;
                }> & {
                    length: number;
                };
                authenticator_obj_initial_shared_version: string | number | bigint;
            };
            EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                ChangeEpoch: {
                    epoch: string | number | bigint;
                    protocol_version: string | number | bigint;
                    storage_charge: string | number | bigint;
                    computation_charge: string | number | bigint;
                    storage_rebate: string | number | bigint;
                    non_refundable_storage_fee: string | number | bigint;
                    epoch_start_timestamp_ms: string | number | bigint;
                    system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                };
                AuthenticatorStateCreate: unknown;
                AuthenticatorStateExpire: {
                    min_epoch: string | number | bigint;
                    authenticator_obj_initial_shared_version: string | number | bigint;
                };
                RandomnessStateCreate: unknown;
                DenyListStateCreate: unknown;
                BridgeStateCreate: Iterable<number> & {
                    length: number;
                };
                BridgeCommitteeInit: string | number | bigint;
            }>> & {
                length: number;
            };
            RandomnessStateUpdate: {
                epoch: string | number | bigint;
                randomness_round: string | number | bigint;
                random_bytes: Iterable<number> & {
                    length: number;
                };
                randomness_obj_initial_shared_version: string | number | bigint;
            };
            ConsensusCommitPrologueV2: {
                epoch: string | number | bigint;
                round: string | number | bigint;
                commit_timestamp_ms: string | number | bigint;
                consensus_commit_digest: Iterable<number> & {
                    length: number;
                };
            };
            ConsensusCommitPrologueV3: {
                epoch: string | number | bigint;
                round: string | number | bigint;
                sub_dag_index: string | number | bigint;
                commit_timestamp_ms: string | number | bigint;
                consensus_commit_digest: Iterable<number> & {
                    length: number;
                };
                consensus_determined_version_assignments: {
                    CancelledTransactions: Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint]> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                };
            };
        }>;
        sender: Iterable<number> & {
            length: number;
        };
        gas_data: {
            payment: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            };
            owner: Iterable<number> & {
                length: number;
            };
            price: string | number | bigint;
            budget: string | number | bigint;
        };
        expiration: import("@mysten/bcs").EnumInputShape<{
            None: unknown;
            Epoch: string | number | bigint;
        }>;
    };
}>;
export const IntentMessage: import("@mysten/bcs").BcsType<{
    intent: {
        scope: number;
        version: number;
        app_id: number;
    };
    value: {
        V1: {
            kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ProgrammableTransaction: {
                    inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Pure: number[];
                        Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            ImmOrOwnedObject: [number[], string, number[]];
                            SharedObject: {
                                id: number[];
                                initial_shared_version: string;
                                mutable: boolean;
                            };
                            Receiving: [number[], string, number[]];
                        }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                    }, "Pure" | "Object">[];
                    commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        MoveCall: {
                            package: number[];
                            module: string;
                            function: string;
                            type_arguments: any[];
                            arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                        };
                        TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        Publish: [number[][], number[][]];
                        MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                    }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                };
                ChangeEpoch: {
                    epoch: string;
                    protocol_version: string;
                    storage_charge: string;
                    computation_charge: string;
                    storage_rebate: string;
                    non_refundable_storage_fee: string;
                    epoch_start_timestamp_ms: string;
                    system_packages: [string, number[][], number[][]][];
                };
                Genesis: {
                    objects: {
                        RawObject: {
                            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Move: {
                                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Other: {
                                            address: number[];
                                            module: string;
                                            name: string;
                                            type_args: any[];
                                        };
                                        GasCoin: unknown;
                                        StakedSui: unknown;
                                        Coin: unknown;
                                    }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                    has_public_transfer: boolean;
                                    version: string;
                                    contents: number[];
                                };
                                Package: {
                                    id: number[];
                                    version: string;
                                    module_map: Map<string, number[]>;
                                    type_origin_table: {
                                        module_name: string;
                                        datatype_name: string;
                                        package: number[];
                                    }[];
                                    linkage_table: Map<number[], {
                                        upgraded_id: number[];
                                        upgraded_version: string;
                                    }>;
                                };
                            }, "Move" | "Package">;
                            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                AddressOwner: number[];
                                ObjectOwner: number[];
                                Shared: {
                                    initial_shared_version: string;
                                };
                                Immutable: unknown;
                            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                        };
                        $kind: "RawObject";
                    }[];
                };
                ConsensusCommitPrologue: {
                    epoch: string;
                    round: string;
                    commit_timestamp_ms: string;
                };
                AuthenticatorStateUpdate: {
                    epoch: string;
                    round: string;
                    new_active_jwks: {
                        jwk_id: {
                            iss: string;
                            kid: string;
                        };
                        jwk: {
                            kty: string;
                            e: string;
                            n: string;
                            alg: string;
                        };
                        epoch: string;
                    }[];
                    authenticator_obj_initial_shared_version: string;
                };
                EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ChangeEpoch: {
                        epoch: string;
                        protocol_version: string;
                        storage_charge: string;
                        computation_charge: string;
                        storage_rebate: string;
                        non_refundable_storage_fee: string;
                        epoch_start_timestamp_ms: string;
                        system_packages: [string, number[][], number[][]][];
                    };
                    AuthenticatorStateCreate: unknown;
                    AuthenticatorStateExpire: {
                        min_epoch: string;
                        authenticator_obj_initial_shared_version: string;
                    };
                    RandomnessStateCreate: unknown;
                    DenyListStateCreate: unknown;
                    BridgeStateCreate: number[];
                    BridgeCommitteeInit: string;
                }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
                RandomnessStateUpdate: {
                    epoch: string;
                    randomness_round: string;
                    random_bytes: number[];
                    randomness_obj_initial_shared_version: string;
                };
                ConsensusCommitPrologueV2: {
                    epoch: string;
                    round: string;
                    commit_timestamp_ms: string;
                    consensus_commit_digest: number[];
                };
                ConsensusCommitPrologueV3: {
                    epoch: string;
                    round: string;
                    sub_dag_index: string;
                    commit_timestamp_ms: string;
                    consensus_commit_digest: number[];
                    consensus_determined_version_assignments: {
                        CancelledTransactions: [number[], [number[], string][]][];
                        $kind: "CancelledTransactions";
                    };
                };
            }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
            sender: number[];
            gas_data: {
                payment: [number[], string, number[]][];
                owner: number[];
                price: string;
                budget: string;
            };
            expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                None: unknown;
                Epoch: string;
            }, "None" | "Epoch">;
        };
        $kind: "V1";
    };
}, {
    intent: {
        scope: number;
        version: number;
        app_id: number;
    };
    value: {
        V1: {
            kind: import("@mysten/bcs").EnumInputShape<{
                ProgrammableTransaction: {
                    inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                        Pure: Iterable<number> & {
                            length: number;
                        };
                        Object: import("@mysten/bcs").EnumInputShape<{
                            ImmOrOwnedObject: readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }];
                            SharedObject: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                                initial_shared_version: string | number | bigint;
                                mutable: boolean;
                            };
                            Receiving: readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }];
                        }>;
                    }>> & {
                        length: number;
                    };
                    commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                        MoveCall: {
                            package: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            function: string;
                            type_arguments: Iterable<any> & {
                                length: number;
                            };
                            arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            };
                        };
                        TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>];
                        SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        Publish: readonly [Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }];
                        MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        Upgrade: readonly [Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<number> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>];
                    }>> & {
                        length: number;
                    };
                };
                ChangeEpoch: {
                    epoch: string | number | bigint;
                    protocol_version: string | number | bigint;
                    storage_charge: string | number | bigint;
                    computation_charge: string | number | bigint;
                    storage_rebate: string | number | bigint;
                    non_refundable_storage_fee: string | number | bigint;
                    epoch_start_timestamp_ms: string | number | bigint;
                    system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                };
                Genesis: {
                    objects: Iterable<{
                        RawObject: {
                            data: import("@mysten/bcs").EnumInputShape<{
                                Move: {
                                    type: import("@mysten/bcs").EnumInputShape<{
                                        Other: {
                                            address: Iterable<number> & {
                                                length: number;
                                            };
                                            module: string;
                                            name: string;
                                            type_args: Iterable<any> & {
                                                length: number;
                                            };
                                        };
                                        GasCoin: unknown;
                                        StakedSui: unknown;
                                        Coin: unknown;
                                    }>;
                                    has_public_transfer: boolean;
                                    version: string | number | bigint;
                                    contents: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                Package: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    version: string | number | bigint;
                                    module_map: Map<string, Iterable<number> & {
                                        length: number;
                                    }>;
                                    type_origin_table: Iterable<{
                                        module_name: string;
                                        datatype_name: string;
                                        package: Iterable<number> & {
                                            length: number;
                                        };
                                    }> & {
                                        length: number;
                                    };
                                    linkage_table: Map<Iterable<number> & {
                                        length: number;
                                    }, {
                                        upgraded_id: Iterable<number> & {
                                            length: number;
                                        };
                                        upgraded_version: string | number | bigint;
                                    }>;
                                };
                            }>;
                            owner: import("@mysten/bcs").EnumInputShape<{
                                AddressOwner: Iterable<number> & {
                                    length: number;
                                };
                                ObjectOwner: Iterable<number> & {
                                    length: number;
                                };
                                Shared: {
                                    initial_shared_version: string | number | bigint;
                                };
                                Immutable: unknown;
                            }>;
                        };
                    }> & {
                        length: number;
                    };
                };
                ConsensusCommitPrologue: {
                    epoch: string | number | bigint;
                    round: string | number | bigint;
                    commit_timestamp_ms: string | number | bigint;
                };
                AuthenticatorStateUpdate: {
                    epoch: string | number | bigint;
                    round: string | number | bigint;
                    new_active_jwks: Iterable<{
                        jwk_id: {
                            iss: string;
                            kid: string;
                        };
                        jwk: {
                            kty: string;
                            e: string;
                            n: string;
                            alg: string;
                        };
                        epoch: string | number | bigint;
                    }> & {
                        length: number;
                    };
                    authenticator_obj_initial_shared_version: string | number | bigint;
                };
                EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                    ChangeEpoch: {
                        epoch: string | number | bigint;
                        protocol_version: string | number | bigint;
                        storage_charge: string | number | bigint;
                        computation_charge: string | number | bigint;
                        storage_rebate: string | number | bigint;
                        non_refundable_storage_fee: string | number | bigint;
                        epoch_start_timestamp_ms: string | number | bigint;
                        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                    AuthenticatorStateCreate: unknown;
                    AuthenticatorStateExpire: {
                        min_epoch: string | number | bigint;
                        authenticator_obj_initial_shared_version: string | number | bigint;
                    };
                    RandomnessStateCreate: unknown;
                    DenyListStateCreate: unknown;
                    BridgeStateCreate: Iterable<number> & {
                        length: number;
                    };
                    BridgeCommitteeInit: string | number | bigint;
                }>> & {
                    length: number;
                };
                RandomnessStateUpdate: {
                    epoch: string | number | bigint;
                    randomness_round: string | number | bigint;
                    random_bytes: Iterable<number> & {
                        length: number;
                    };
                    randomness_obj_initial_shared_version: string | number | bigint;
                };
                ConsensusCommitPrologueV2: {
                    epoch: string | number | bigint;
                    round: string | number | bigint;
                    commit_timestamp_ms: string | number | bigint;
                    consensus_commit_digest: Iterable<number> & {
                        length: number;
                    };
                };
                ConsensusCommitPrologueV3: {
                    epoch: string | number | bigint;
                    round: string | number | bigint;
                    sub_dag_index: string | number | bigint;
                    commit_timestamp_ms: string | number | bigint;
                    consensus_commit_digest: Iterable<number> & {
                        length: number;
                    };
                    consensus_determined_version_assignments: {
                        CancelledTransactions: Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint]> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                };
            }>;
            sender: Iterable<number> & {
                length: number;
            };
            gas_data: {
                payment: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                owner: Iterable<number> & {
                    length: number;
                };
                price: string | number | bigint;
                budget: string | number | bigint;
            };
            expiration: import("@mysten/bcs").EnumInputShape<{
                None: unknown;
                Epoch: string | number | bigint;
            }>;
        };
    };
}>;
export const SenderSignedTransaction: import("@mysten/bcs").BcsType<{
    intent_message: {
        intent: {
            scope: number;
            version: number;
            app_id: number;
        };
        value: {
            V1: {
                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ProgrammableTransaction: {
                        inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Pure: number[];
                            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ImmOrOwnedObject: [number[], string, number[]];
                                SharedObject: {
                                    id: number[];
                                    initial_shared_version: string;
                                    mutable: boolean;
                                };
                                Receiving: [number[], string, number[]];
                            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                        }, "Pure" | "Object">[];
                        commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveCall: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: any[];
                                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                            };
                            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Publish: [number[][], number[][]];
                            MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                    };
                    ChangeEpoch: {
                        epoch: string;
                        protocol_version: string;
                        storage_charge: string;
                        computation_charge: string;
                        storage_rebate: string;
                        non_refundable_storage_fee: string;
                        epoch_start_timestamp_ms: string;
                        system_packages: [string, number[][], number[][]][];
                    };
                    Genesis: {
                        objects: {
                            RawObject: {
                                data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            Other: {
                                                address: number[];
                                                module: string;
                                                name: string;
                                                type_args: any[];
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                        }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                        has_public_transfer: boolean;
                                        version: string;
                                        contents: number[];
                                    };
                                    Package: {
                                        id: number[];
                                        version: string;
                                        module_map: Map<string, number[]>;
                                        type_origin_table: {
                                            module_name: string;
                                            datatype_name: string;
                                            package: number[];
                                        }[];
                                        linkage_table: Map<number[], {
                                            upgraded_id: number[];
                                            upgraded_version: string;
                                        }>;
                                    };
                                }, "Move" | "Package">;
                                owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    AddressOwner: number[];
                                    ObjectOwner: number[];
                                    Shared: {
                                        initial_shared_version: string;
                                    };
                                    Immutable: unknown;
                                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                            };
                            $kind: "RawObject";
                        }[];
                    };
                    ConsensusCommitPrologue: {
                        epoch: string;
                        round: string;
                        commit_timestamp_ms: string;
                    };
                    AuthenticatorStateUpdate: {
                        epoch: string;
                        round: string;
                        new_active_jwks: {
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string;
                        }[];
                        authenticator_obj_initial_shared_version: string;
                    };
                    EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ChangeEpoch: {
                            epoch: string;
                            protocol_version: string;
                            storage_charge: string;
                            computation_charge: string;
                            storage_rebate: string;
                            non_refundable_storage_fee: string;
                            epoch_start_timestamp_ms: string;
                            system_packages: [string, number[][], number[][]][];
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string;
                            authenticator_obj_initial_shared_version: string;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: number[];
                        BridgeCommitteeInit: string;
                    }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
                    RandomnessStateUpdate: {
                        epoch: string;
                        randomness_round: string;
                        random_bytes: number[];
                        randomness_obj_initial_shared_version: string;
                    };
                    ConsensusCommitPrologueV2: {
                        epoch: string;
                        round: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                    };
                    ConsensusCommitPrologueV3: {
                        epoch: string;
                        round: string;
                        sub_dag_index: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                        consensus_determined_version_assignments: {
                            CancelledTransactions: [number[], [number[], string][]][];
                            $kind: "CancelledTransactions";
                        };
                    };
                }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
                sender: number[];
                gas_data: {
                    payment: [number[], string, number[]][];
                    owner: number[];
                    price: string;
                    budget: string;
                };
                expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    None: unknown;
                    Epoch: string;
                }, "None" | "Epoch">;
            };
            $kind: "V1";
        };
    };
    tx_signatures: number[][];
}, {
    intent_message: {
        intent: {
            scope: number;
            version: number;
            app_id: number;
        };
        value: {
            V1: {
                kind: import("@mysten/bcs").EnumInputShape<{
                    ProgrammableTransaction: {
                        inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                            Pure: Iterable<number> & {
                                length: number;
                            };
                            Object: import("@mysten/bcs").EnumInputShape<{
                                ImmOrOwnedObject: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                                SharedObject: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    initial_shared_version: string | number | bigint;
                                    mutable: boolean;
                                };
                                Receiving: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                            }>;
                        }>> & {
                            length: number;
                        };
                        commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                            MoveCall: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<any> & {
                                    length: number;
                                };
                                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                };
                            };
                            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Publish: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }];
                            MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Upgrade: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<number> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                        }>> & {
                            length: number;
                        };
                    };
                    ChangeEpoch: {
                        epoch: string | number | bigint;
                        protocol_version: string | number | bigint;
                        storage_charge: string | number | bigint;
                        computation_charge: string | number | bigint;
                        storage_rebate: string | number | bigint;
                        non_refundable_storage_fee: string | number | bigint;
                        epoch_start_timestamp_ms: string | number | bigint;
                        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                    Genesis: {
                        objects: Iterable<{
                            RawObject: {
                                data: import("@mysten/bcs").EnumInputShape<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumInputShape<{
                                            Other: {
                                                address: Iterable<number> & {
                                                    length: number;
                                                };
                                                module: string;
                                                name: string;
                                                type_args: Iterable<any> & {
                                                    length: number;
                                                };
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                        }>;
                                        has_public_transfer: boolean;
                                        version: string | number | bigint;
                                        contents: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    Package: {
                                        id: Iterable<number> & {
                                            length: number;
                                        };
                                        version: string | number | bigint;
                                        module_map: Map<string, Iterable<number> & {
                                            length: number;
                                        }>;
                                        type_origin_table: Iterable<{
                                            module_name: string;
                                            datatype_name: string;
                                            package: Iterable<number> & {
                                                length: number;
                                            };
                                        }> & {
                                            length: number;
                                        };
                                        linkage_table: Map<Iterable<number> & {
                                            length: number;
                                        }, {
                                            upgraded_id: Iterable<number> & {
                                                length: number;
                                            };
                                            upgraded_version: string | number | bigint;
                                        }>;
                                    };
                                }>;
                                owner: import("@mysten/bcs").EnumInputShape<{
                                    AddressOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    ObjectOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    Shared: {
                                        initial_shared_version: string | number | bigint;
                                    };
                                    Immutable: unknown;
                                }>;
                            };
                        }> & {
                            length: number;
                        };
                    };
                    ConsensusCommitPrologue: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                    };
                    AuthenticatorStateUpdate: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        new_active_jwks: Iterable<{
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string | number | bigint;
                        }> & {
                            length: number;
                        };
                        authenticator_obj_initial_shared_version: string | number | bigint;
                    };
                    EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                        ChangeEpoch: {
                            epoch: string | number | bigint;
                            protocol_version: string | number | bigint;
                            storage_charge: string | number | bigint;
                            computation_charge: string | number | bigint;
                            storage_rebate: string | number | bigint;
                            non_refundable_storage_fee: string | number | bigint;
                            epoch_start_timestamp_ms: string | number | bigint;
                            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string | number | bigint;
                            authenticator_obj_initial_shared_version: string | number | bigint;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: Iterable<number> & {
                            length: number;
                        };
                        BridgeCommitteeInit: string | number | bigint;
                    }>> & {
                        length: number;
                    };
                    RandomnessStateUpdate: {
                        epoch: string | number | bigint;
                        randomness_round: string | number | bigint;
                        random_bytes: Iterable<number> & {
                            length: number;
                        };
                        randomness_obj_initial_shared_version: string | number | bigint;
                    };
                    ConsensusCommitPrologueV2: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                    };
                    ConsensusCommitPrologueV3: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        sub_dag_index: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                        consensus_determined_version_assignments: {
                            CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                    };
                }>;
                sender: Iterable<number> & {
                    length: number;
                };
                gas_data: {
                    payment: Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                    owner: Iterable<number> & {
                        length: number;
                    };
                    price: string | number | bigint;
                    budget: string | number | bigint;
                };
                expiration: import("@mysten/bcs").EnumInputShape<{
                    None: unknown;
                    Epoch: string | number | bigint;
                }>;
            };
        };
    };
    tx_signatures: Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    };
}>;
export const SenderSignedData: import("@mysten/bcs").BcsType<{
    intent_message: {
        intent: {
            scope: number;
            version: number;
            app_id: number;
        };
        value: {
            V1: {
                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ProgrammableTransaction: {
                        inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Pure: number[];
                            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ImmOrOwnedObject: [number[], string, number[]];
                                SharedObject: {
                                    id: number[];
                                    initial_shared_version: string;
                                    mutable: boolean;
                                };
                                Receiving: [number[], string, number[]];
                            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                        }, "Pure" | "Object">[];
                        commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveCall: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: any[];
                                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                            };
                            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Publish: [number[][], number[][]];
                            MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                    };
                    ChangeEpoch: {
                        epoch: string;
                        protocol_version: string;
                        storage_charge: string;
                        computation_charge: string;
                        storage_rebate: string;
                        non_refundable_storage_fee: string;
                        epoch_start_timestamp_ms: string;
                        system_packages: [string, number[][], number[][]][];
                    };
                    Genesis: {
                        objects: {
                            RawObject: {
                                data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            Other: {
                                                address: number[];
                                                module: string;
                                                name: string;
                                                type_args: any[];
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                        }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                        has_public_transfer: boolean;
                                        version: string;
                                        contents: number[];
                                    };
                                    Package: {
                                        id: number[];
                                        version: string;
                                        module_map: Map<string, number[]>;
                                        type_origin_table: {
                                            module_name: string;
                                            datatype_name: string;
                                            package: number[];
                                        }[];
                                        linkage_table: Map<number[], {
                                            upgraded_id: number[];
                                            upgraded_version: string;
                                        }>;
                                    };
                                }, "Move" | "Package">;
                                owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    AddressOwner: number[];
                                    ObjectOwner: number[];
                                    Shared: {
                                        initial_shared_version: string;
                                    };
                                    Immutable: unknown;
                                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                            };
                            $kind: "RawObject";
                        }[];
                    };
                    ConsensusCommitPrologue: {
                        epoch: string;
                        round: string;
                        commit_timestamp_ms: string;
                    };
                    AuthenticatorStateUpdate: {
                        epoch: string;
                        round: string;
                        new_active_jwks: {
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string;
                        }[];
                        authenticator_obj_initial_shared_version: string;
                    };
                    EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ChangeEpoch: {
                            epoch: string;
                            protocol_version: string;
                            storage_charge: string;
                            computation_charge: string;
                            storage_rebate: string;
                            non_refundable_storage_fee: string;
                            epoch_start_timestamp_ms: string;
                            system_packages: [string, number[][], number[][]][];
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string;
                            authenticator_obj_initial_shared_version: string;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: number[];
                        BridgeCommitteeInit: string;
                    }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
                    RandomnessStateUpdate: {
                        epoch: string;
                        randomness_round: string;
                        random_bytes: number[];
                        randomness_obj_initial_shared_version: string;
                    };
                    ConsensusCommitPrologueV2: {
                        epoch: string;
                        round: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                    };
                    ConsensusCommitPrologueV3: {
                        epoch: string;
                        round: string;
                        sub_dag_index: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                        consensus_determined_version_assignments: {
                            CancelledTransactions: [number[], [number[], string][]][];
                            $kind: "CancelledTransactions";
                        };
                    };
                }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
                sender: number[];
                gas_data: {
                    payment: [number[], string, number[]][];
                    owner: number[];
                    price: string;
                    budget: string;
                };
                expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    None: unknown;
                    Epoch: string;
                }, "None" | "Epoch">;
            };
            $kind: "V1";
        };
    };
    tx_signatures: number[][];
}[], Iterable<{
    intent_message: {
        intent: {
            scope: number;
            version: number;
            app_id: number;
        };
        value: {
            V1: {
                kind: import("@mysten/bcs").EnumInputShape<{
                    ProgrammableTransaction: {
                        inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                            Pure: Iterable<number> & {
                                length: number;
                            };
                            Object: import("@mysten/bcs").EnumInputShape<{
                                ImmOrOwnedObject: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                                SharedObject: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    initial_shared_version: string | number | bigint;
                                    mutable: boolean;
                                };
                                Receiving: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                            }>;
                        }>> & {
                            length: number;
                        };
                        commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                            MoveCall: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<any> & {
                                    length: number;
                                };
                                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                };
                            };
                            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Publish: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }];
                            MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Upgrade: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<number> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                        }>> & {
                            length: number;
                        };
                    };
                    ChangeEpoch: {
                        epoch: string | number | bigint;
                        protocol_version: string | number | bigint;
                        storage_charge: string | number | bigint;
                        computation_charge: string | number | bigint;
                        storage_rebate: string | number | bigint;
                        non_refundable_storage_fee: string | number | bigint;
                        epoch_start_timestamp_ms: string | number | bigint;
                        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                    Genesis: {
                        objects: Iterable<{
                            RawObject: {
                                data: import("@mysten/bcs").EnumInputShape<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumInputShape<{
                                            Other: {
                                                address: Iterable<number> & {
                                                    length: number;
                                                };
                                                module: string;
                                                name: string;
                                                type_args: Iterable<any> & {
                                                    length: number;
                                                };
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                        }>;
                                        has_public_transfer: boolean;
                                        version: string | number | bigint;
                                        contents: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    Package: {
                                        id: Iterable<number> & {
                                            length: number;
                                        };
                                        version: string | number | bigint;
                                        module_map: Map<string, Iterable<number> & {
                                            length: number;
                                        }>;
                                        type_origin_table: Iterable<{
                                            module_name: string;
                                            datatype_name: string;
                                            package: Iterable<number> & {
                                                length: number;
                                            };
                                        }> & {
                                            length: number;
                                        };
                                        linkage_table: Map<Iterable<number> & {
                                            length: number;
                                        }, {
                                            upgraded_id: Iterable<number> & {
                                                length: number;
                                            };
                                            upgraded_version: string | number | bigint;
                                        }>;
                                    };
                                }>;
                                owner: import("@mysten/bcs").EnumInputShape<{
                                    AddressOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    ObjectOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    Shared: {
                                        initial_shared_version: string | number | bigint;
                                    };
                                    Immutable: unknown;
                                }>;
                            };
                        }> & {
                            length: number;
                        };
                    };
                    ConsensusCommitPrologue: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                    };
                    AuthenticatorStateUpdate: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        new_active_jwks: Iterable<{
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string | number | bigint;
                        }> & {
                            length: number;
                        };
                        authenticator_obj_initial_shared_version: string | number | bigint;
                    };
                    EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                        ChangeEpoch: {
                            epoch: string | number | bigint;
                            protocol_version: string | number | bigint;
                            storage_charge: string | number | bigint;
                            computation_charge: string | number | bigint;
                            storage_rebate: string | number | bigint;
                            non_refundable_storage_fee: string | number | bigint;
                            epoch_start_timestamp_ms: string | number | bigint;
                            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string | number | bigint;
                            authenticator_obj_initial_shared_version: string | number | bigint;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: Iterable<number> & {
                            length: number;
                        };
                        BridgeCommitteeInit: string | number | bigint;
                    }>> & {
                        length: number;
                    };
                    RandomnessStateUpdate: {
                        epoch: string | number | bigint;
                        randomness_round: string | number | bigint;
                        random_bytes: Iterable<number> & {
                            length: number;
                        };
                        randomness_obj_initial_shared_version: string | number | bigint;
                    };
                    ConsensusCommitPrologueV2: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                    };
                    ConsensusCommitPrologueV3: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        sub_dag_index: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                        consensus_determined_version_assignments: {
                            CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                    };
                }>;
                sender: Iterable<number> & {
                    length: number;
                };
                gas_data: {
                    payment: Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                    owner: Iterable<number> & {
                        length: number;
                    };
                    price: string | number | bigint;
                    budget: string | number | bigint;
                };
                expiration: import("@mysten/bcs").EnumInputShape<{
                    None: unknown;
                    Epoch: string | number | bigint;
                }>;
            };
        };
    };
    tx_signatures: Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    };
}> & {
    length: number;
}>;
export const Envelope: import("@mysten/bcs").BcsType<{
    data: {
        intent_message: {
            intent: {
                scope: number;
                version: number;
                app_id: number;
            };
            value: {
                V1: {
                    kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ProgrammableTransaction: {
                            inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Pure: number[];
                                Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    ImmOrOwnedObject: [number[], string, number[]];
                                    SharedObject: {
                                        id: number[];
                                        initial_shared_version: string;
                                        mutable: boolean;
                                    };
                                    Receiving: [number[], string, number[]];
                                }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                            }, "Pure" | "Object">[];
                            commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                MoveCall: {
                                    package: number[];
                                    module: string;
                                    function: string;
                                    type_arguments: any[];
                                    arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                                };
                                TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                                SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                Publish: [number[][], number[][]];
                                MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                        };
                        ChangeEpoch: {
                            epoch: string;
                            protocol_version: string;
                            storage_charge: string;
                            computation_charge: string;
                            storage_rebate: string;
                            non_refundable_storage_fee: string;
                            epoch_start_timestamp_ms: string;
                            system_packages: [string, number[][], number[][]][];
                        };
                        Genesis: {
                            objects: {
                                RawObject: {
                                    data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Move: {
                                            type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                                Other: {
                                                    address: number[];
                                                    module: string;
                                                    name: string;
                                                    type_args: any[];
                                                };
                                                GasCoin: unknown;
                                                StakedSui: unknown;
                                                Coin: unknown;
                                            }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                            has_public_transfer: boolean;
                                            version: string;
                                            contents: number[];
                                        };
                                        Package: {
                                            id: number[];
                                            version: string;
                                            module_map: Map<string, number[]>;
                                            type_origin_table: {
                                                module_name: string;
                                                datatype_name: string;
                                                package: number[];
                                            }[];
                                            linkage_table: Map<number[], {
                                                upgraded_id: number[];
                                                upgraded_version: string;
                                            }>;
                                        };
                                    }, "Move" | "Package">;
                                    owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        AddressOwner: number[];
                                        ObjectOwner: number[];
                                        Shared: {
                                            initial_shared_version: string;
                                        };
                                        Immutable: unknown;
                                    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                                };
                                $kind: "RawObject";
                            }[];
                        };
                        ConsensusCommitPrologue: {
                            epoch: string;
                            round: string;
                            commit_timestamp_ms: string;
                        };
                        AuthenticatorStateUpdate: {
                            epoch: string;
                            round: string;
                            new_active_jwks: {
                                jwk_id: {
                                    iss: string;
                                    kid: string;
                                };
                                jwk: {
                                    kty: string;
                                    e: string;
                                    n: string;
                                    alg: string;
                                };
                                epoch: string;
                            }[];
                            authenticator_obj_initial_shared_version: string;
                        };
                        EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            ChangeEpoch: {
                                epoch: string;
                                protocol_version: string;
                                storage_charge: string;
                                computation_charge: string;
                                storage_rebate: string;
                                non_refundable_storage_fee: string;
                                epoch_start_timestamp_ms: string;
                                system_packages: [string, number[][], number[][]][];
                            };
                            AuthenticatorStateCreate: unknown;
                            AuthenticatorStateExpire: {
                                min_epoch: string;
                                authenticator_obj_initial_shared_version: string;
                            };
                            RandomnessStateCreate: unknown;
                            DenyListStateCreate: unknown;
                            BridgeStateCreate: number[];
                            BridgeCommitteeInit: string;
                        }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
                        RandomnessStateUpdate: {
                            epoch: string;
                            randomness_round: string;
                            random_bytes: number[];
                            randomness_obj_initial_shared_version: string;
                        };
                        ConsensusCommitPrologueV2: {
                            epoch: string;
                            round: string;
                            commit_timestamp_ms: string;
                            consensus_commit_digest: number[];
                        };
                        ConsensusCommitPrologueV3: {
                            epoch: string;
                            round: string;
                            sub_dag_index: string;
                            commit_timestamp_ms: string;
                            consensus_commit_digest: number[];
                            consensus_determined_version_assignments: {
                                CancelledTransactions: [number[], [number[], string][]][];
                                $kind: "CancelledTransactions";
                            };
                        };
                    }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
                    sender: number[];
                    gas_data: {
                        payment: [number[], string, number[]][];
                        owner: number[];
                        price: string;
                        budget: string;
                    };
                    expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        None: unknown;
                        Epoch: string;
                    }, "None" | "Epoch">;
                };
                $kind: "V1";
            };
        };
        tx_signatures: number[][];
    }[];
    auth_signature: {};
}, {
    data: Iterable<{
        intent_message: {
            intent: {
                scope: number;
                version: number;
                app_id: number;
            };
            value: {
                V1: {
                    kind: import("@mysten/bcs").EnumInputShape<{
                        ProgrammableTransaction: {
                            inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                                Pure: Iterable<number> & {
                                    length: number;
                                };
                                Object: import("@mysten/bcs").EnumInputShape<{
                                    ImmOrOwnedObject: readonly [Iterable<number> & {
                                        length: number;
                                    }, string | number | bigint, Iterable<number> & {
                                        length: number;
                                    }];
                                    SharedObject: {
                                        id: Iterable<number> & {
                                            length: number;
                                        };
                                        initial_shared_version: string | number | bigint;
                                        mutable: boolean;
                                    };
                                    Receiving: readonly [Iterable<number> & {
                                        length: number;
                                    }, string | number | bigint, Iterable<number> & {
                                        length: number;
                                    }];
                                }>;
                            }>> & {
                                length: number;
                            };
                            commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                                MoveCall: {
                                    package: Iterable<number> & {
                                        length: number;
                                    };
                                    module: string;
                                    function: string;
                                    type_arguments: Iterable<any> & {
                                        length: number;
                                    };
                                    arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>> & {
                                        length: number;
                                    };
                                };
                                TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                }, import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>];
                                SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                }];
                                MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                }];
                                Publish: readonly [Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }, Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }];
                                MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                }];
                                Upgrade: readonly [Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }, Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }, Iterable<number> & {
                                    length: number;
                                }, import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>];
                            }>> & {
                                length: number;
                            };
                        };
                        ChangeEpoch: {
                            epoch: string | number | bigint;
                            protocol_version: string | number | bigint;
                            storage_charge: string | number | bigint;
                            computation_charge: string | number | bigint;
                            storage_rebate: string | number | bigint;
                            non_refundable_storage_fee: string | number | bigint;
                            epoch_start_timestamp_ms: string | number | bigint;
                            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        Genesis: {
                            objects: Iterable<{
                                RawObject: {
                                    data: import("@mysten/bcs").EnumInputShape<{
                                        Move: {
                                            type: import("@mysten/bcs").EnumInputShape<{
                                                Other: {
                                                    address: Iterable<number> & {
                                                        length: number;
                                                    };
                                                    module: string;
                                                    name: string;
                                                    type_args: Iterable<any> & {
                                                        length: number;
                                                    };
                                                };
                                                GasCoin: unknown;
                                                StakedSui: unknown;
                                                Coin: unknown;
                                            }>;
                                            has_public_transfer: boolean;
                                            version: string | number | bigint;
                                            contents: Iterable<number> & {
                                                length: number;
                                            };
                                        };
                                        Package: {
                                            id: Iterable<number> & {
                                                length: number;
                                            };
                                            version: string | number | bigint;
                                            module_map: Map<string, Iterable<number> & {
                                                length: number;
                                            }>;
                                            type_origin_table: Iterable<{
                                                module_name: string;
                                                datatype_name: string;
                                                package: Iterable<number> & {
                                                    length: number;
                                                };
                                            }> & {
                                                length: number;
                                            };
                                            linkage_table: Map<Iterable<number> & {
                                                length: number;
                                            }, {
                                                upgraded_id: Iterable<number> & {
                                                    length: number;
                                                };
                                                upgraded_version: string | number | bigint;
                                            }>;
                                        };
                                    }>;
                                    owner: import("@mysten/bcs").EnumInputShape<{
                                        AddressOwner: Iterable<number> & {
                                            length: number;
                                        };
                                        ObjectOwner: Iterable<number> & {
                                            length: number;
                                        };
                                        Shared: {
                                            initial_shared_version: string | number | bigint;
                                        };
                                        Immutable: unknown;
                                    }>;
                                };
                            }> & {
                                length: number;
                            };
                        };
                        ConsensusCommitPrologue: {
                            epoch: string | number | bigint;
                            round: string | number | bigint;
                            commit_timestamp_ms: string | number | bigint;
                        };
                        AuthenticatorStateUpdate: {
                            epoch: string | number | bigint;
                            round: string | number | bigint;
                            new_active_jwks: Iterable<{
                                jwk_id: {
                                    iss: string;
                                    kid: string;
                                };
                                jwk: {
                                    kty: string;
                                    e: string;
                                    n: string;
                                    alg: string;
                                };
                                epoch: string | number | bigint;
                            }> & {
                                length: number;
                            };
                            authenticator_obj_initial_shared_version: string | number | bigint;
                        };
                        EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                            ChangeEpoch: {
                                epoch: string | number | bigint;
                                protocol_version: string | number | bigint;
                                storage_charge: string | number | bigint;
                                computation_charge: string | number | bigint;
                                storage_rebate: string | number | bigint;
                                non_refundable_storage_fee: string | number | bigint;
                                epoch_start_timestamp_ms: string | number | bigint;
                                system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }, Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }]> & {
                                    length: number;
                                };
                            };
                            AuthenticatorStateCreate: unknown;
                            AuthenticatorStateExpire: {
                                min_epoch: string | number | bigint;
                                authenticator_obj_initial_shared_version: string | number | bigint;
                            };
                            RandomnessStateCreate: unknown;
                            DenyListStateCreate: unknown;
                            BridgeStateCreate: Iterable<number> & {
                                length: number;
                            };
                            BridgeCommitteeInit: string | number | bigint;
                        }>> & {
                            length: number;
                        };
                        RandomnessStateUpdate: {
                            epoch: string | number | bigint;
                            randomness_round: string | number | bigint;
                            random_bytes: Iterable<number> & {
                                length: number;
                            };
                            randomness_obj_initial_shared_version: string | number | bigint;
                        };
                        ConsensusCommitPrologueV2: {
                            epoch: string | number | bigint;
                            round: string | number | bigint;
                            commit_timestamp_ms: string | number | bigint;
                            consensus_commit_digest: Iterable<number> & {
                                length: number;
                            };
                        };
                        ConsensusCommitPrologueV3: {
                            epoch: string | number | bigint;
                            round: string | number | bigint;
                            sub_dag_index: string | number | bigint;
                            commit_timestamp_ms: string | number | bigint;
                            consensus_commit_digest: Iterable<number> & {
                                length: number;
                            };
                            consensus_determined_version_assignments: {
                                CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                    length: number;
                                }, Iterable<readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint]> & {
                                    length: number;
                                }]> & {
                                    length: number;
                                };
                            };
                        };
                    }>;
                    sender: Iterable<number> & {
                        length: number;
                    };
                    gas_data: {
                        payment: Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                        owner: Iterable<number> & {
                            length: number;
                        };
                        price: string | number | bigint;
                        budget: string | number | bigint;
                    };
                    expiration: import("@mysten/bcs").EnumInputShape<{
                        None: unknown;
                        Epoch: string | number | bigint;
                    }>;
                };
            };
        };
        tx_signatures: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    }> & {
        length: number;
    };
    auth_signature: {};
}>;
export const ModuleId: import("@mysten/bcs").BcsType<{
    address: number[];
    name: string;
}, {
    address: Iterable<number> & {
        length: number;
    };
    name: string;
}>;
export const MoveLocation: import("@mysten/bcs").BcsType<{
    module: {
        address: number[];
        name: string;
    };
    function: number;
    instruction: number;
    function_name: string;
}, {
    module: {
        address: Iterable<number> & {
            length: number;
        };
        name: string;
    };
    function: number;
    instruction: number;
    function_name: string;
}>;
export const MoveLocationOpt: import("@mysten/bcs").BcsType<{
    module: {
        address: number[];
        name: string;
    };
    function: number;
    instruction: number;
    function_name: string;
}, {
    module: {
        address: Iterable<number> & {
            length: number;
        };
        name: string;
    };
    function: number;
    instruction: number;
    function_name: string;
}>;
export const TypeArgumentError: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    TypeNotFound: unknown;
    ConstraintNotSatisfied: unknown;
}, "TypeNotFound" | "ConstraintNotSatisfied">, import("@mysten/bcs").EnumInputShape<{
    TypeNotFound: unknown;
    ConstraintNotSatisfied: unknown;
}>>;
export const PackageUpgradeError: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    UnableToFetchPackage: {
        package_id: number[];
    };
    NotAPackage: {
        object_id: number[];
    };
    IncompatibleUpgrade: unknown;
    DigestDoesNotMatch: {
        digest: number[];
    };
    UnknownUpgradePolicy: {
        policy: number;
    };
    PackageIDDoesNotMatch: {
        package_id: number[];
        ticket_id: number[];
    };
}, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">, import("@mysten/bcs").EnumInputShape<{
    UnableToFetchPackage: {
        package_id: Iterable<number> & {
            length: number;
        };
    };
    NotAPackage: {
        object_id: Iterable<number> & {
            length: number;
        };
    };
    IncompatibleUpgrade: unknown;
    DigestDoesNotMatch: {
        digest: Iterable<number> & {
            length: number;
        };
    };
    UnknownUpgradePolicy: {
        policy: number;
    };
    PackageIDDoesNotMatch: {
        package_id: Iterable<number> & {
            length: number;
        };
        ticket_id: Iterable<number> & {
            length: number;
        };
    };
}>>;
export const ExecutionFailureStatus: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    InsufficientGas: unknown;
    InvalidGasObject: unknown;
    InvariantViolation: unknown;
    FeatureNotYetSupported: unknown;
    MoveObjectTooBig: {
        object_size: string;
        max_object_size: string;
    };
    MovePackageTooBig: {
        object_size: string;
        max_object_size: string;
    };
    CircularObjectOwnership: {
        object: number[];
    };
    InsufficientCoinBalance: unknown;
    CoinBalanceOverflow: unknown;
    PublishErrorNonZeroAddress: unknown;
    SuiMoveVerificationError: unknown;
    MovePrimitiveRuntimeError: {
        module: {
            address: number[];
            name: string;
        };
        function: number;
        instruction: number;
        function_name: string;
    };
    MoveAbort: [{
        module: {
            address: number[];
            name: string;
        };
        function: number;
        instruction: number;
        function_name: string;
    }, string];
    VMVerificationOrDeserializationError: unknown;
    VMInvariantViolation: unknown;
    FunctionNotFound: unknown;
    ArityMismatch: unknown;
    TypeArityMismatch: unknown;
    NonEntryFunctionInvoked: unknown;
    CommandArgumentError: {
        arg_idx: number;
        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            TypeMismatch: unknown;
            InvalidBCSBytes: unknown;
            InvalidUsageOfPureArg: unknown;
            InvalidArgumentToPrivateEntryFunction: unknown;
            IndexOutOfBounds: {
                idx: number;
            };
            SecondaryIndexOutOfBounds: {
                result_idx: number;
                secondary_idx: number;
            };
            InvalidResultArity: {
                result_idx: number;
            };
            InvalidGasCoinUsage: unknown;
            InvalidValueUsage: unknown;
            InvalidObjectByValue: unknown;
            InvalidObjectByMutRef: unknown;
            SharedObjectOperationNotAllowed: unknown;
        }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
    };
    TypeArgumentError: {
        argument_idx: number;
        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            TypeNotFound: unknown;
            ConstraintNotSatisfied: unknown;
        }, "TypeNotFound" | "ConstraintNotSatisfied">;
    };
    UnusedValueWithoutDrop: {
        result_idx: number;
        secondary_idx: number;
    };
    InvalidPublicFunctionReturnType: {
        idx: number;
    };
    InvalidTransferObject: unknown;
    EffectsTooLarge: {
        current_size: string;
        max_size: string;
    };
    PublishUpgradeMissingDependency: unknown;
    PublishUpgradeDependencyDowngrade: unknown;
    PackageUpgradeError: {
        upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            UnableToFetchPackage: {
                package_id: number[];
            };
            NotAPackage: {
                object_id: number[];
            };
            IncompatibleUpgrade: unknown;
            DigestDoesNotMatch: {
                digest: number[];
            };
            UnknownUpgradePolicy: {
                policy: number;
            };
            PackageIDDoesNotMatch: {
                package_id: number[];
                ticket_id: number[];
            };
        }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
    };
    WrittenObjectsTooLarge: {
        current_size: string;
        max_size: string;
    };
    CertificateDenied: unknown;
    SuiMoveVerificationTimedout: unknown;
    SharedObjectOperationNotAllowed: unknown;
    InputObjectDeleted: unknown;
    ExecutionCancelledDueToSharedObjectCongestion: {
        congested_objects: number[][];
    };
    AddressDeniedForCoin: {
        address: number[];
        coin_type: string;
    };
    CoinTypeGlobalPause: {
        coin_type: string;
    };
    ExecutionCancelledDueToRandomnessUnavailable: unknown;
}, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">, import("@mysten/bcs").EnumInputShape<{
    InsufficientGas: unknown;
    InvalidGasObject: unknown;
    InvariantViolation: unknown;
    FeatureNotYetSupported: unknown;
    MoveObjectTooBig: {
        object_size: string | number | bigint;
        max_object_size: string | number | bigint;
    };
    MovePackageTooBig: {
        object_size: string | number | bigint;
        max_object_size: string | number | bigint;
    };
    CircularObjectOwnership: {
        object: Iterable<number> & {
            length: number;
        };
    };
    InsufficientCoinBalance: unknown;
    CoinBalanceOverflow: unknown;
    PublishErrorNonZeroAddress: unknown;
    SuiMoveVerificationError: unknown;
    MovePrimitiveRuntimeError: {
        module: {
            address: Iterable<number> & {
                length: number;
            };
            name: string;
        };
        function: number;
        instruction: number;
        function_name: string;
    };
    MoveAbort: readonly [{
        module: {
            address: Iterable<number> & {
                length: number;
            };
            name: string;
        };
        function: number;
        instruction: number;
        function_name: string;
    }, string | number | bigint];
    VMVerificationOrDeserializationError: unknown;
    VMInvariantViolation: unknown;
    FunctionNotFound: unknown;
    ArityMismatch: unknown;
    TypeArityMismatch: unknown;
    NonEntryFunctionInvoked: unknown;
    CommandArgumentError: {
        arg_idx: number;
        kind: import("@mysten/bcs").EnumInputShape<{
            TypeMismatch: unknown;
            InvalidBCSBytes: unknown;
            InvalidUsageOfPureArg: unknown;
            InvalidArgumentToPrivateEntryFunction: unknown;
            IndexOutOfBounds: {
                idx: number;
            };
            SecondaryIndexOutOfBounds: {
                result_idx: number;
                secondary_idx: number;
            };
            InvalidResultArity: {
                result_idx: number;
            };
            InvalidGasCoinUsage: unknown;
            InvalidValueUsage: unknown;
            InvalidObjectByValue: unknown;
            InvalidObjectByMutRef: unknown;
            SharedObjectOperationNotAllowed: unknown;
        }>;
    };
    TypeArgumentError: {
        argument_idx: number;
        kind: import("@mysten/bcs").EnumInputShape<{
            TypeNotFound: unknown;
            ConstraintNotSatisfied: unknown;
        }>;
    };
    UnusedValueWithoutDrop: {
        result_idx: number;
        secondary_idx: number;
    };
    InvalidPublicFunctionReturnType: {
        idx: number;
    };
    InvalidTransferObject: unknown;
    EffectsTooLarge: {
        current_size: string | number | bigint;
        max_size: string | number | bigint;
    };
    PublishUpgradeMissingDependency: unknown;
    PublishUpgradeDependencyDowngrade: unknown;
    PackageUpgradeError: {
        upgrade_error: import("@mysten/bcs").EnumInputShape<{
            UnableToFetchPackage: {
                package_id: Iterable<number> & {
                    length: number;
                };
            };
            NotAPackage: {
                object_id: Iterable<number> & {
                    length: number;
                };
            };
            IncompatibleUpgrade: unknown;
            DigestDoesNotMatch: {
                digest: Iterable<number> & {
                    length: number;
                };
            };
            UnknownUpgradePolicy: {
                policy: number;
            };
            PackageIDDoesNotMatch: {
                package_id: Iterable<number> & {
                    length: number;
                };
                ticket_id: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    };
    WrittenObjectsTooLarge: {
        current_size: string | number | bigint;
        max_size: string | number | bigint;
    };
    CertificateDenied: unknown;
    SuiMoveVerificationTimedout: unknown;
    SharedObjectOperationNotAllowed: unknown;
    InputObjectDeleted: unknown;
    ExecutionCancelledDueToSharedObjectCongestion: {
        congested_objects: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    };
    AddressDeniedForCoin: {
        address: Iterable<number> & {
            length: number;
        };
        coin_type: string;
    };
    CoinTypeGlobalPause: {
        coin_type: string;
    };
    ExecutionCancelledDueToRandomnessUnavailable: unknown;
}>>;
export const ExecutionStatus: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Success: unknown;
    Failure: {
        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            InsufficientGas: unknown;
            InvalidGasObject: unknown;
            InvariantViolation: unknown;
            FeatureNotYetSupported: unknown;
            MoveObjectTooBig: {
                object_size: string;
                max_object_size: string;
            };
            MovePackageTooBig: {
                object_size: string;
                max_object_size: string;
            };
            CircularObjectOwnership: {
                object: number[];
            };
            InsufficientCoinBalance: unknown;
            CoinBalanceOverflow: unknown;
            PublishErrorNonZeroAddress: unknown;
            SuiMoveVerificationError: unknown;
            MovePrimitiveRuntimeError: {
                module: {
                    address: number[];
                    name: string;
                };
                function: number;
                instruction: number;
                function_name: string;
            };
            MoveAbort: [{
                module: {
                    address: number[];
                    name: string;
                };
                function: number;
                instruction: number;
                function_name: string;
            }, string];
            VMVerificationOrDeserializationError: unknown;
            VMInvariantViolation: unknown;
            FunctionNotFound: unknown;
            ArityMismatch: unknown;
            TypeArityMismatch: unknown;
            NonEntryFunctionInvoked: unknown;
            CommandArgumentError: {
                arg_idx: number;
                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    TypeMismatch: unknown;
                    InvalidBCSBytes: unknown;
                    InvalidUsageOfPureArg: unknown;
                    InvalidArgumentToPrivateEntryFunction: unknown;
                    IndexOutOfBounds: {
                        idx: number;
                    };
                    SecondaryIndexOutOfBounds: {
                        result_idx: number;
                        secondary_idx: number;
                    };
                    InvalidResultArity: {
                        result_idx: number;
                    };
                    InvalidGasCoinUsage: unknown;
                    InvalidValueUsage: unknown;
                    InvalidObjectByValue: unknown;
                    InvalidObjectByMutRef: unknown;
                    SharedObjectOperationNotAllowed: unknown;
                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
            };
            TypeArgumentError: {
                argument_idx: number;
                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    TypeNotFound: unknown;
                    ConstraintNotSatisfied: unknown;
                }, "TypeNotFound" | "ConstraintNotSatisfied">;
            };
            UnusedValueWithoutDrop: {
                result_idx: number;
                secondary_idx: number;
            };
            InvalidPublicFunctionReturnType: {
                idx: number;
            };
            InvalidTransferObject: unknown;
            EffectsTooLarge: {
                current_size: string;
                max_size: string;
            };
            PublishUpgradeMissingDependency: unknown;
            PublishUpgradeDependencyDowngrade: unknown;
            PackageUpgradeError: {
                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    UnableToFetchPackage: {
                        package_id: number[];
                    };
                    NotAPackage: {
                        object_id: number[];
                    };
                    IncompatibleUpgrade: unknown;
                    DigestDoesNotMatch: {
                        digest: number[];
                    };
                    UnknownUpgradePolicy: {
                        policy: number;
                    };
                    PackageIDDoesNotMatch: {
                        package_id: number[];
                        ticket_id: number[];
                    };
                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
            };
            WrittenObjectsTooLarge: {
                current_size: string;
                max_size: string;
            };
            CertificateDenied: unknown;
            SuiMoveVerificationTimedout: unknown;
            SharedObjectOperationNotAllowed: unknown;
            InputObjectDeleted: unknown;
            ExecutionCancelledDueToSharedObjectCongestion: {
                congested_objects: number[][];
            };
            AddressDeniedForCoin: {
                address: number[];
                coin_type: string;
            };
            CoinTypeGlobalPause: {
                coin_type: string;
            };
            ExecutionCancelledDueToRandomnessUnavailable: unknown;
        }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
        command: string;
    };
}, "Success" | "Failure">, import("@mysten/bcs").EnumInputShape<{
    Success: unknown;
    Failure: {
        error: import("@mysten/bcs").EnumInputShape<{
            InsufficientGas: unknown;
            InvalidGasObject: unknown;
            InvariantViolation: unknown;
            FeatureNotYetSupported: unknown;
            MoveObjectTooBig: {
                object_size: string | number | bigint;
                max_object_size: string | number | bigint;
            };
            MovePackageTooBig: {
                object_size: string | number | bigint;
                max_object_size: string | number | bigint;
            };
            CircularObjectOwnership: {
                object: Iterable<number> & {
                    length: number;
                };
            };
            InsufficientCoinBalance: unknown;
            CoinBalanceOverflow: unknown;
            PublishErrorNonZeroAddress: unknown;
            SuiMoveVerificationError: unknown;
            MovePrimitiveRuntimeError: {
                module: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    name: string;
                };
                function: number;
                instruction: number;
                function_name: string;
            };
            MoveAbort: readonly [{
                module: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    name: string;
                };
                function: number;
                instruction: number;
                function_name: string;
            }, string | number | bigint];
            VMVerificationOrDeserializationError: unknown;
            VMInvariantViolation: unknown;
            FunctionNotFound: unknown;
            ArityMismatch: unknown;
            TypeArityMismatch: unknown;
            NonEntryFunctionInvoked: unknown;
            CommandArgumentError: {
                arg_idx: number;
                kind: import("@mysten/bcs").EnumInputShape<{
                    TypeMismatch: unknown;
                    InvalidBCSBytes: unknown;
                    InvalidUsageOfPureArg: unknown;
                    InvalidArgumentToPrivateEntryFunction: unknown;
                    IndexOutOfBounds: {
                        idx: number;
                    };
                    SecondaryIndexOutOfBounds: {
                        result_idx: number;
                        secondary_idx: number;
                    };
                    InvalidResultArity: {
                        result_idx: number;
                    };
                    InvalidGasCoinUsage: unknown;
                    InvalidValueUsage: unknown;
                    InvalidObjectByValue: unknown;
                    InvalidObjectByMutRef: unknown;
                    SharedObjectOperationNotAllowed: unknown;
                }>;
            };
            TypeArgumentError: {
                argument_idx: number;
                kind: import("@mysten/bcs").EnumInputShape<{
                    TypeNotFound: unknown;
                    ConstraintNotSatisfied: unknown;
                }>;
            };
            UnusedValueWithoutDrop: {
                result_idx: number;
                secondary_idx: number;
            };
            InvalidPublicFunctionReturnType: {
                idx: number;
            };
            InvalidTransferObject: unknown;
            EffectsTooLarge: {
                current_size: string | number | bigint;
                max_size: string | number | bigint;
            };
            PublishUpgradeMissingDependency: unknown;
            PublishUpgradeDependencyDowngrade: unknown;
            PackageUpgradeError: {
                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                    UnableToFetchPackage: {
                        package_id: Iterable<number> & {
                            length: number;
                        };
                    };
                    NotAPackage: {
                        object_id: Iterable<number> & {
                            length: number;
                        };
                    };
                    IncompatibleUpgrade: unknown;
                    DigestDoesNotMatch: {
                        digest: Iterable<number> & {
                            length: number;
                        };
                    };
                    UnknownUpgradePolicy: {
                        policy: number;
                    };
                    PackageIDDoesNotMatch: {
                        package_id: Iterable<number> & {
                            length: number;
                        };
                        ticket_id: Iterable<number> & {
                            length: number;
                        };
                    };
                }>;
            };
            WrittenObjectsTooLarge: {
                current_size: string | number | bigint;
                max_size: string | number | bigint;
            };
            CertificateDenied: unknown;
            SuiMoveVerificationTimedout: unknown;
            SharedObjectOperationNotAllowed: unknown;
            InputObjectDeleted: unknown;
            ExecutionCancelledDueToSharedObjectCongestion: {
                congested_objects: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
            };
            AddressDeniedForCoin: {
                address: Iterable<number> & {
                    length: number;
                };
                coin_type: string;
            };
            CoinTypeGlobalPause: {
                coin_type: string;
            };
            ExecutionCancelledDueToRandomnessUnavailable: unknown;
        }>;
        command: string | number | bigint;
    };
}>>;
export const TransactionEventsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const TransactionEffectsV1: import("@mysten/bcs").BcsType<{
    status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Success: unknown;
        Failure: {
            error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                InsufficientGas: unknown;
                InvalidGasObject: unknown;
                InvariantViolation: unknown;
                FeatureNotYetSupported: unknown;
                MoveObjectTooBig: {
                    object_size: string;
                    max_object_size: string;
                };
                MovePackageTooBig: {
                    object_size: string;
                    max_object_size: string;
                };
                CircularObjectOwnership: {
                    object: number[];
                };
                InsufficientCoinBalance: unknown;
                CoinBalanceOverflow: unknown;
                PublishErrorNonZeroAddress: unknown;
                SuiMoveVerificationError: unknown;
                MovePrimitiveRuntimeError: {
                    module: {
                        address: number[];
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                };
                MoveAbort: [{
                    module: {
                        address: number[];
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, string];
                VMVerificationOrDeserializationError: unknown;
                VMInvariantViolation: unknown;
                FunctionNotFound: unknown;
                ArityMismatch: unknown;
                TypeArityMismatch: unknown;
                NonEntryFunctionInvoked: unknown;
                CommandArgumentError: {
                    arg_idx: number;
                    kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        TypeMismatch: unknown;
                        InvalidBCSBytes: unknown;
                        InvalidUsageOfPureArg: unknown;
                        InvalidArgumentToPrivateEntryFunction: unknown;
                        IndexOutOfBounds: {
                            idx: number;
                        };
                        SecondaryIndexOutOfBounds: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidResultArity: {
                            result_idx: number;
                        };
                        InvalidGasCoinUsage: unknown;
                        InvalidValueUsage: unknown;
                        InvalidObjectByValue: unknown;
                        InvalidObjectByMutRef: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                    }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                };
                TypeArgumentError: {
                    argument_idx: number;
                    kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        TypeNotFound: unknown;
                        ConstraintNotSatisfied: unknown;
                    }, "TypeNotFound" | "ConstraintNotSatisfied">;
                };
                UnusedValueWithoutDrop: {
                    result_idx: number;
                    secondary_idx: number;
                };
                InvalidPublicFunctionReturnType: {
                    idx: number;
                };
                InvalidTransferObject: unknown;
                EffectsTooLarge: {
                    current_size: string;
                    max_size: string;
                };
                PublishUpgradeMissingDependency: unknown;
                PublishUpgradeDependencyDowngrade: unknown;
                PackageUpgradeError: {
                    upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        UnableToFetchPackage: {
                            package_id: number[];
                        };
                        NotAPackage: {
                            object_id: number[];
                        };
                        IncompatibleUpgrade: unknown;
                        DigestDoesNotMatch: {
                            digest: number[];
                        };
                        UnknownUpgradePolicy: {
                            policy: number;
                        };
                        PackageIDDoesNotMatch: {
                            package_id: number[];
                            ticket_id: number[];
                        };
                    }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                };
                WrittenObjectsTooLarge: {
                    current_size: string;
                    max_size: string;
                };
                CertificateDenied: unknown;
                SuiMoveVerificationTimedout: unknown;
                SharedObjectOperationNotAllowed: unknown;
                InputObjectDeleted: unknown;
                ExecutionCancelledDueToSharedObjectCongestion: {
                    congested_objects: number[][];
                };
                AddressDeniedForCoin: {
                    address: number[];
                    coin_type: string;
                };
                CoinTypeGlobalPause: {
                    coin_type: string;
                };
                ExecutionCancelledDueToRandomnessUnavailable: unknown;
            }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
            command: string;
        };
    }, "Success" | "Failure">;
    executed_epoch: string;
    gas_used: {
        computationCost: string;
        storageCost: string;
        storageRebate: string;
        nonRefundableStorageFee: string;
    };
    modified_at_versions: [number[], string][];
    shared_objects: [number[], string, number[]][];
    transaction_digest: number[];
    created: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
    mutated: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
    unwrapped: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
    deleted: [number[], string, number[]][];
    unwrapped_then_deleted: [number[], string, number[]][];
    wrapped: [number[], string, number[]][];
    gas_object: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
    events_digest: number[];
    dependencies: number[][];
}, {
    status: import("@mysten/bcs").EnumInputShape<{
        Success: unknown;
        Failure: {
            error: import("@mysten/bcs").EnumInputShape<{
                InsufficientGas: unknown;
                InvalidGasObject: unknown;
                InvariantViolation: unknown;
                FeatureNotYetSupported: unknown;
                MoveObjectTooBig: {
                    object_size: string | number | bigint;
                    max_object_size: string | number | bigint;
                };
                MovePackageTooBig: {
                    object_size: string | number | bigint;
                    max_object_size: string | number | bigint;
                };
                CircularObjectOwnership: {
                    object: Iterable<number> & {
                        length: number;
                    };
                };
                InsufficientCoinBalance: unknown;
                CoinBalanceOverflow: unknown;
                PublishErrorNonZeroAddress: unknown;
                SuiMoveVerificationError: unknown;
                MovePrimitiveRuntimeError: {
                    module: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                };
                MoveAbort: readonly [{
                    module: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, string | number | bigint];
                VMVerificationOrDeserializationError: unknown;
                VMInvariantViolation: unknown;
                FunctionNotFound: unknown;
                ArityMismatch: unknown;
                TypeArityMismatch: unknown;
                NonEntryFunctionInvoked: unknown;
                CommandArgumentError: {
                    arg_idx: number;
                    kind: import("@mysten/bcs").EnumInputShape<{
                        TypeMismatch: unknown;
                        InvalidBCSBytes: unknown;
                        InvalidUsageOfPureArg: unknown;
                        InvalidArgumentToPrivateEntryFunction: unknown;
                        IndexOutOfBounds: {
                            idx: number;
                        };
                        SecondaryIndexOutOfBounds: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidResultArity: {
                            result_idx: number;
                        };
                        InvalidGasCoinUsage: unknown;
                        InvalidValueUsage: unknown;
                        InvalidObjectByValue: unknown;
                        InvalidObjectByMutRef: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                    }>;
                };
                TypeArgumentError: {
                    argument_idx: number;
                    kind: import("@mysten/bcs").EnumInputShape<{
                        TypeNotFound: unknown;
                        ConstraintNotSatisfied: unknown;
                    }>;
                };
                UnusedValueWithoutDrop: {
                    result_idx: number;
                    secondary_idx: number;
                };
                InvalidPublicFunctionReturnType: {
                    idx: number;
                };
                InvalidTransferObject: unknown;
                EffectsTooLarge: {
                    current_size: string | number | bigint;
                    max_size: string | number | bigint;
                };
                PublishUpgradeMissingDependency: unknown;
                PublishUpgradeDependencyDowngrade: unknown;
                PackageUpgradeError: {
                    upgrade_error: import("@mysten/bcs").EnumInputShape<{
                        UnableToFetchPackage: {
                            package_id: Iterable<number> & {
                                length: number;
                            };
                        };
                        NotAPackage: {
                            object_id: Iterable<number> & {
                                length: number;
                            };
                        };
                        IncompatibleUpgrade: unknown;
                        DigestDoesNotMatch: {
                            digest: Iterable<number> & {
                                length: number;
                            };
                        };
                        UnknownUpgradePolicy: {
                            policy: number;
                        };
                        PackageIDDoesNotMatch: {
                            package_id: Iterable<number> & {
                                length: number;
                            };
                            ticket_id: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>;
                };
                WrittenObjectsTooLarge: {
                    current_size: string | number | bigint;
                    max_size: string | number | bigint;
                };
                CertificateDenied: unknown;
                SuiMoveVerificationTimedout: unknown;
                SharedObjectOperationNotAllowed: unknown;
                InputObjectDeleted: unknown;
                ExecutionCancelledDueToSharedObjectCongestion: {
                    congested_objects: Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    };
                };
                AddressDeniedForCoin: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    coin_type: string;
                };
                CoinTypeGlobalPause: {
                    coin_type: string;
                };
                ExecutionCancelledDueToRandomnessUnavailable: unknown;
            }>;
            command: string | number | bigint;
        };
    }>;
    executed_epoch: string | number | bigint;
    gas_used: {
        computationCost: string | number | bigint;
        storageCost: string | number | bigint;
        storageRebate: string | number | bigint;
        nonRefundableStorageFee: string | number | bigint;
    };
    modified_at_versions: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    };
    shared_objects: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    };
    transaction_digest: Iterable<number> & {
        length: number;
    };
    created: Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
    }>]> & {
        length: number;
    };
    mutated: Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
    }>]> & {
        length: number;
    };
    unwrapped: Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
    }>]> & {
        length: number;
    };
    deleted: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    };
    unwrapped_then_deleted: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    };
    wrapped: Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    };
    gas_object: readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
    }>];
    events_digest: Iterable<number> & {
        length: number;
    };
    dependencies: Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    };
}>;
export const UnchangedSharedKind: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    ReadOnlyRoot: [string, number[]];
    MutateDeleted: string;
    ReadDeleted: string;
    Cancelled: string;
    PerEpochConfig: unknown;
}, "ReadOnlyRoot" | "MutateDeleted" | "ReadDeleted" | "Cancelled" | "PerEpochConfig">, import("@mysten/bcs").EnumInputShape<{
    ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
        length: number;
    }];
    MutateDeleted: string | number | bigint;
    ReadDeleted: string | number | bigint;
    Cancelled: string | number | bigint;
    PerEpochConfig: unknown;
}>>;
export const TransactionEffectsV2: import("@mysten/bcs").BcsType<{
    status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Success: unknown;
        Failure: {
            error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                InsufficientGas: unknown;
                InvalidGasObject: unknown;
                InvariantViolation: unknown;
                FeatureNotYetSupported: unknown;
                MoveObjectTooBig: {
                    object_size: string;
                    max_object_size: string;
                };
                MovePackageTooBig: {
                    object_size: string;
                    max_object_size: string;
                };
                CircularObjectOwnership: {
                    object: number[];
                };
                InsufficientCoinBalance: unknown;
                CoinBalanceOverflow: unknown;
                PublishErrorNonZeroAddress: unknown;
                SuiMoveVerificationError: unknown;
                MovePrimitiveRuntimeError: {
                    module: {
                        address: number[];
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                };
                MoveAbort: [{
                    module: {
                        address: number[];
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, string];
                VMVerificationOrDeserializationError: unknown;
                VMInvariantViolation: unknown;
                FunctionNotFound: unknown;
                ArityMismatch: unknown;
                TypeArityMismatch: unknown;
                NonEntryFunctionInvoked: unknown;
                CommandArgumentError: {
                    arg_idx: number;
                    kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        TypeMismatch: unknown;
                        InvalidBCSBytes: unknown;
                        InvalidUsageOfPureArg: unknown;
                        InvalidArgumentToPrivateEntryFunction: unknown;
                        IndexOutOfBounds: {
                            idx: number;
                        };
                        SecondaryIndexOutOfBounds: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidResultArity: {
                            result_idx: number;
                        };
                        InvalidGasCoinUsage: unknown;
                        InvalidValueUsage: unknown;
                        InvalidObjectByValue: unknown;
                        InvalidObjectByMutRef: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                    }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                };
                TypeArgumentError: {
                    argument_idx: number;
                    kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        TypeNotFound: unknown;
                        ConstraintNotSatisfied: unknown;
                    }, "TypeNotFound" | "ConstraintNotSatisfied">;
                };
                UnusedValueWithoutDrop: {
                    result_idx: number;
                    secondary_idx: number;
                };
                InvalidPublicFunctionReturnType: {
                    idx: number;
                };
                InvalidTransferObject: unknown;
                EffectsTooLarge: {
                    current_size: string;
                    max_size: string;
                };
                PublishUpgradeMissingDependency: unknown;
                PublishUpgradeDependencyDowngrade: unknown;
                PackageUpgradeError: {
                    upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        UnableToFetchPackage: {
                            package_id: number[];
                        };
                        NotAPackage: {
                            object_id: number[];
                        };
                        IncompatibleUpgrade: unknown;
                        DigestDoesNotMatch: {
                            digest: number[];
                        };
                        UnknownUpgradePolicy: {
                            policy: number;
                        };
                        PackageIDDoesNotMatch: {
                            package_id: number[];
                            ticket_id: number[];
                        };
                    }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                };
                WrittenObjectsTooLarge: {
                    current_size: string;
                    max_size: string;
                };
                CertificateDenied: unknown;
                SuiMoveVerificationTimedout: unknown;
                SharedObjectOperationNotAllowed: unknown;
                InputObjectDeleted: unknown;
                ExecutionCancelledDueToSharedObjectCongestion: {
                    congested_objects: number[][];
                };
                AddressDeniedForCoin: {
                    address: number[];
                    coin_type: string;
                };
                CoinTypeGlobalPause: {
                    coin_type: string;
                };
                ExecutionCancelledDueToRandomnessUnavailable: unknown;
            }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
            command: string;
        };
    }, "Success" | "Failure">;
    executed_epoch: string;
    gas_used: {
        computationCost: string;
        storageCost: string;
        storageRebate: string;
        nonRefundableStorageFee: string;
    };
    transaction_digest: number[];
    gas_object_index: number;
    events_digest: number[];
    dependencies: number[][];
    lamport_version: string;
    changed_objects: [number[], {
        input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            NotExist: unknown;
            Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
        }, "NotExist" | "Exist">;
        output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            NotExist: unknown;
            ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
            PackageWrite: [string, number[]];
        }, "NotExist" | "ObjectWrite" | "PackageWrite">;
        id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            None: unknown;
            Created: unknown;
            Deleted: unknown;
        }, "None" | "Created" | "Deleted">;
    }][];
    unchanged_shared_objects: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ReadOnlyRoot: [string, number[]];
        MutateDeleted: string;
        ReadDeleted: string;
        Cancelled: string;
        PerEpochConfig: unknown;
    }, "ReadOnlyRoot" | "MutateDeleted" | "ReadDeleted" | "Cancelled" | "PerEpochConfig">][];
    aux_data_digest: number[];
}, {
    status: import("@mysten/bcs").EnumInputShape<{
        Success: unknown;
        Failure: {
            error: import("@mysten/bcs").EnumInputShape<{
                InsufficientGas: unknown;
                InvalidGasObject: unknown;
                InvariantViolation: unknown;
                FeatureNotYetSupported: unknown;
                MoveObjectTooBig: {
                    object_size: string | number | bigint;
                    max_object_size: string | number | bigint;
                };
                MovePackageTooBig: {
                    object_size: string | number | bigint;
                    max_object_size: string | number | bigint;
                };
                CircularObjectOwnership: {
                    object: Iterable<number> & {
                        length: number;
                    };
                };
                InsufficientCoinBalance: unknown;
                CoinBalanceOverflow: unknown;
                PublishErrorNonZeroAddress: unknown;
                SuiMoveVerificationError: unknown;
                MovePrimitiveRuntimeError: {
                    module: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                };
                MoveAbort: readonly [{
                    module: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, string | number | bigint];
                VMVerificationOrDeserializationError: unknown;
                VMInvariantViolation: unknown;
                FunctionNotFound: unknown;
                ArityMismatch: unknown;
                TypeArityMismatch: unknown;
                NonEntryFunctionInvoked: unknown;
                CommandArgumentError: {
                    arg_idx: number;
                    kind: import("@mysten/bcs").EnumInputShape<{
                        TypeMismatch: unknown;
                        InvalidBCSBytes: unknown;
                        InvalidUsageOfPureArg: unknown;
                        InvalidArgumentToPrivateEntryFunction: unknown;
                        IndexOutOfBounds: {
                            idx: number;
                        };
                        SecondaryIndexOutOfBounds: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidResultArity: {
                            result_idx: number;
                        };
                        InvalidGasCoinUsage: unknown;
                        InvalidValueUsage: unknown;
                        InvalidObjectByValue: unknown;
                        InvalidObjectByMutRef: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                    }>;
                };
                TypeArgumentError: {
                    argument_idx: number;
                    kind: import("@mysten/bcs").EnumInputShape<{
                        TypeNotFound: unknown;
                        ConstraintNotSatisfied: unknown;
                    }>;
                };
                UnusedValueWithoutDrop: {
                    result_idx: number;
                    secondary_idx: number;
                };
                InvalidPublicFunctionReturnType: {
                    idx: number;
                };
                InvalidTransferObject: unknown;
                EffectsTooLarge: {
                    current_size: string | number | bigint;
                    max_size: string | number | bigint;
                };
                PublishUpgradeMissingDependency: unknown;
                PublishUpgradeDependencyDowngrade: unknown;
                PackageUpgradeError: {
                    upgrade_error: import("@mysten/bcs").EnumInputShape<{
                        UnableToFetchPackage: {
                            package_id: Iterable<number> & {
                                length: number;
                            };
                        };
                        NotAPackage: {
                            object_id: Iterable<number> & {
                                length: number;
                            };
                        };
                        IncompatibleUpgrade: unknown;
                        DigestDoesNotMatch: {
                            digest: Iterable<number> & {
                                length: number;
                            };
                        };
                        UnknownUpgradePolicy: {
                            policy: number;
                        };
                        PackageIDDoesNotMatch: {
                            package_id: Iterable<number> & {
                                length: number;
                            };
                            ticket_id: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>;
                };
                WrittenObjectsTooLarge: {
                    current_size: string | number | bigint;
                    max_size: string | number | bigint;
                };
                CertificateDenied: unknown;
                SuiMoveVerificationTimedout: unknown;
                SharedObjectOperationNotAllowed: unknown;
                InputObjectDeleted: unknown;
                ExecutionCancelledDueToSharedObjectCongestion: {
                    congested_objects: Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    };
                };
                AddressDeniedForCoin: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    coin_type: string;
                };
                CoinTypeGlobalPause: {
                    coin_type: string;
                };
                ExecutionCancelledDueToRandomnessUnavailable: unknown;
            }>;
            command: string | number | bigint;
        };
    }>;
    executed_epoch: string | number | bigint;
    gas_used: {
        computationCost: string | number | bigint;
        storageCost: string | number | bigint;
        storageRebate: string | number | bigint;
        nonRefundableStorageFee: string | number | bigint;
    };
    transaction_digest: Iterable<number> & {
        length: number;
    };
    gas_object_index: number;
    events_digest: Iterable<number> & {
        length: number;
    };
    dependencies: Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    };
    lamport_version: string | number | bigint;
    changed_objects: Iterable<readonly [Iterable<number> & {
        length: number;
    }, {
        input_state: import("@mysten/bcs").EnumInputShape<{
            NotExist: unknown;
            Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>];
        }>;
        output_state: import("@mysten/bcs").EnumInputShape<{
            NotExist: unknown;
            ObjectWrite: readonly [Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>];
            PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }];
        }>;
        id_operation: import("@mysten/bcs").EnumInputShape<{
            None: unknown;
            Created: unknown;
            Deleted: unknown;
        }>;
    }]> & {
        length: number;
    };
    unchanged_shared_objects: Iterable<readonly [Iterable<number> & {
        length: number;
    }, import("@mysten/bcs").EnumInputShape<{
        ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
            length: number;
        }];
        MutateDeleted: string | number | bigint;
        ReadDeleted: string | number | bigint;
        Cancelled: string | number | bigint;
        PerEpochConfig: unknown;
    }>]> & {
        length: number;
    };
    aux_data_digest: Iterable<number> & {
        length: number;
    };
}>;
export const TransactionEffects: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    V1: {
        status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Success: unknown;
            Failure: {
                error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    InsufficientGas: unknown;
                    InvalidGasObject: unknown;
                    InvariantViolation: unknown;
                    FeatureNotYetSupported: unknown;
                    MoveObjectTooBig: {
                        object_size: string;
                        max_object_size: string;
                    };
                    MovePackageTooBig: {
                        object_size: string;
                        max_object_size: string;
                    };
                    CircularObjectOwnership: {
                        object: number[];
                    };
                    InsufficientCoinBalance: unknown;
                    CoinBalanceOverflow: unknown;
                    PublishErrorNonZeroAddress: unknown;
                    SuiMoveVerificationError: unknown;
                    MovePrimitiveRuntimeError: {
                        module: {
                            address: number[];
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    };
                    MoveAbort: [{
                        module: {
                            address: number[];
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, string];
                    VMVerificationOrDeserializationError: unknown;
                    VMInvariantViolation: unknown;
                    FunctionNotFound: unknown;
                    ArityMismatch: unknown;
                    TypeArityMismatch: unknown;
                    NonEntryFunctionInvoked: unknown;
                    CommandArgumentError: {
                        arg_idx: number;
                        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            TypeMismatch: unknown;
                            InvalidBCSBytes: unknown;
                            InvalidUsageOfPureArg: unknown;
                            InvalidArgumentToPrivateEntryFunction: unknown;
                            IndexOutOfBounds: {
                                idx: number;
                            };
                            SecondaryIndexOutOfBounds: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidResultArity: {
                                result_idx: number;
                            };
                            InvalidGasCoinUsage: unknown;
                            InvalidValueUsage: unknown;
                            InvalidObjectByValue: unknown;
                            InvalidObjectByMutRef: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                        }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                    };
                    TypeArgumentError: {
                        argument_idx: number;
                        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            TypeNotFound: unknown;
                            ConstraintNotSatisfied: unknown;
                        }, "TypeNotFound" | "ConstraintNotSatisfied">;
                    };
                    UnusedValueWithoutDrop: {
                        result_idx: number;
                        secondary_idx: number;
                    };
                    InvalidPublicFunctionReturnType: {
                        idx: number;
                    };
                    InvalidTransferObject: unknown;
                    EffectsTooLarge: {
                        current_size: string;
                        max_size: string;
                    };
                    PublishUpgradeMissingDependency: unknown;
                    PublishUpgradeDependencyDowngrade: unknown;
                    PackageUpgradeError: {
                        upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            UnableToFetchPackage: {
                                package_id: number[];
                            };
                            NotAPackage: {
                                object_id: number[];
                            };
                            IncompatibleUpgrade: unknown;
                            DigestDoesNotMatch: {
                                digest: number[];
                            };
                            UnknownUpgradePolicy: {
                                policy: number;
                            };
                            PackageIDDoesNotMatch: {
                                package_id: number[];
                                ticket_id: number[];
                            };
                        }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                    };
                    WrittenObjectsTooLarge: {
                        current_size: string;
                        max_size: string;
                    };
                    CertificateDenied: unknown;
                    SuiMoveVerificationTimedout: unknown;
                    SharedObjectOperationNotAllowed: unknown;
                    InputObjectDeleted: unknown;
                    ExecutionCancelledDueToSharedObjectCongestion: {
                        congested_objects: number[][];
                    };
                    AddressDeniedForCoin: {
                        address: number[];
                        coin_type: string;
                    };
                    CoinTypeGlobalPause: {
                        coin_type: string;
                    };
                    ExecutionCancelledDueToRandomnessUnavailable: unknown;
                }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
                command: string;
            };
        }, "Success" | "Failure">;
        executed_epoch: string;
        gas_used: {
            computationCost: string;
            storageCost: string;
            storageRebate: string;
            nonRefundableStorageFee: string;
        };
        modified_at_versions: [number[], string][];
        shared_objects: [number[], string, number[]][];
        transaction_digest: number[];
        created: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
        mutated: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
        unwrapped: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
        deleted: [number[], string, number[]][];
        unwrapped_then_deleted: [number[], string, number[]][];
        wrapped: [number[], string, number[]][];
        gas_object: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
        events_digest: number[];
        dependencies: number[][];
    };
    V2: {
        status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Success: unknown;
            Failure: {
                error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    InsufficientGas: unknown;
                    InvalidGasObject: unknown;
                    InvariantViolation: unknown;
                    FeatureNotYetSupported: unknown;
                    MoveObjectTooBig: {
                        object_size: string;
                        max_object_size: string;
                    };
                    MovePackageTooBig: {
                        object_size: string;
                        max_object_size: string;
                    };
                    CircularObjectOwnership: {
                        object: number[];
                    };
                    InsufficientCoinBalance: unknown;
                    CoinBalanceOverflow: unknown;
                    PublishErrorNonZeroAddress: unknown;
                    SuiMoveVerificationError: unknown;
                    MovePrimitiveRuntimeError: {
                        module: {
                            address: number[];
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    };
                    MoveAbort: [{
                        module: {
                            address: number[];
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, string];
                    VMVerificationOrDeserializationError: unknown;
                    VMInvariantViolation: unknown;
                    FunctionNotFound: unknown;
                    ArityMismatch: unknown;
                    TypeArityMismatch: unknown;
                    NonEntryFunctionInvoked: unknown;
                    CommandArgumentError: {
                        arg_idx: number;
                        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            TypeMismatch: unknown;
                            InvalidBCSBytes: unknown;
                            InvalidUsageOfPureArg: unknown;
                            InvalidArgumentToPrivateEntryFunction: unknown;
                            IndexOutOfBounds: {
                                idx: number;
                            };
                            SecondaryIndexOutOfBounds: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidResultArity: {
                                result_idx: number;
                            };
                            InvalidGasCoinUsage: unknown;
                            InvalidValueUsage: unknown;
                            InvalidObjectByValue: unknown;
                            InvalidObjectByMutRef: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                        }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                    };
                    TypeArgumentError: {
                        argument_idx: number;
                        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            TypeNotFound: unknown;
                            ConstraintNotSatisfied: unknown;
                        }, "TypeNotFound" | "ConstraintNotSatisfied">;
                    };
                    UnusedValueWithoutDrop: {
                        result_idx: number;
                        secondary_idx: number;
                    };
                    InvalidPublicFunctionReturnType: {
                        idx: number;
                    };
                    InvalidTransferObject: unknown;
                    EffectsTooLarge: {
                        current_size: string;
                        max_size: string;
                    };
                    PublishUpgradeMissingDependency: unknown;
                    PublishUpgradeDependencyDowngrade: unknown;
                    PackageUpgradeError: {
                        upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            UnableToFetchPackage: {
                                package_id: number[];
                            };
                            NotAPackage: {
                                object_id: number[];
                            };
                            IncompatibleUpgrade: unknown;
                            DigestDoesNotMatch: {
                                digest: number[];
                            };
                            UnknownUpgradePolicy: {
                                policy: number;
                            };
                            PackageIDDoesNotMatch: {
                                package_id: number[];
                                ticket_id: number[];
                            };
                        }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                    };
                    WrittenObjectsTooLarge: {
                        current_size: string;
                        max_size: string;
                    };
                    CertificateDenied: unknown;
                    SuiMoveVerificationTimedout: unknown;
                    SharedObjectOperationNotAllowed: unknown;
                    InputObjectDeleted: unknown;
                    ExecutionCancelledDueToSharedObjectCongestion: {
                        congested_objects: number[][];
                    };
                    AddressDeniedForCoin: {
                        address: number[];
                        coin_type: string;
                    };
                    CoinTypeGlobalPause: {
                        coin_type: string;
                    };
                    ExecutionCancelledDueToRandomnessUnavailable: unknown;
                }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
                command: string;
            };
        }, "Success" | "Failure">;
        executed_epoch: string;
        gas_used: {
            computationCost: string;
            storageCost: string;
            storageRebate: string;
            nonRefundableStorageFee: string;
        };
        transaction_digest: number[];
        gas_object_index: number;
        events_digest: number[];
        dependencies: number[][];
        lamport_version: string;
        changed_objects: [number[], {
            input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                NotExist: unknown;
                Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
            }, "NotExist" | "Exist">;
            output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                NotExist: unknown;
                ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
                PackageWrite: [string, number[]];
            }, "NotExist" | "ObjectWrite" | "PackageWrite">;
            id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                None: unknown;
                Created: unknown;
                Deleted: unknown;
            }, "None" | "Created" | "Deleted">;
        }][];
        unchanged_shared_objects: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ReadOnlyRoot: [string, number[]];
            MutateDeleted: string;
            ReadDeleted: string;
            Cancelled: string;
            PerEpochConfig: unknown;
        }, "ReadOnlyRoot" | "MutateDeleted" | "ReadDeleted" | "Cancelled" | "PerEpochConfig">][];
        aux_data_digest: number[];
    };
}, "V1" | "V2">, import("@mysten/bcs").EnumInputShape<{
    V1: {
        status: import("@mysten/bcs").EnumInputShape<{
            Success: unknown;
            Failure: {
                error: import("@mysten/bcs").EnumInputShape<{
                    InsufficientGas: unknown;
                    InvalidGasObject: unknown;
                    InvariantViolation: unknown;
                    FeatureNotYetSupported: unknown;
                    MoveObjectTooBig: {
                        object_size: string | number | bigint;
                        max_object_size: string | number | bigint;
                    };
                    MovePackageTooBig: {
                        object_size: string | number | bigint;
                        max_object_size: string | number | bigint;
                    };
                    CircularObjectOwnership: {
                        object: Iterable<number> & {
                            length: number;
                        };
                    };
                    InsufficientCoinBalance: unknown;
                    CoinBalanceOverflow: unknown;
                    PublishErrorNonZeroAddress: unknown;
                    SuiMoveVerificationError: unknown;
                    MovePrimitiveRuntimeError: {
                        module: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    };
                    MoveAbort: readonly [{
                        module: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, string | number | bigint];
                    VMVerificationOrDeserializationError: unknown;
                    VMInvariantViolation: unknown;
                    FunctionNotFound: unknown;
                    ArityMismatch: unknown;
                    TypeArityMismatch: unknown;
                    NonEntryFunctionInvoked: unknown;
                    CommandArgumentError: {
                        arg_idx: number;
                        kind: import("@mysten/bcs").EnumInputShape<{
                            TypeMismatch: unknown;
                            InvalidBCSBytes: unknown;
                            InvalidUsageOfPureArg: unknown;
                            InvalidArgumentToPrivateEntryFunction: unknown;
                            IndexOutOfBounds: {
                                idx: number;
                            };
                            SecondaryIndexOutOfBounds: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidResultArity: {
                                result_idx: number;
                            };
                            InvalidGasCoinUsage: unknown;
                            InvalidValueUsage: unknown;
                            InvalidObjectByValue: unknown;
                            InvalidObjectByMutRef: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                        }>;
                    };
                    TypeArgumentError: {
                        argument_idx: number;
                        kind: import("@mysten/bcs").EnumInputShape<{
                            TypeNotFound: unknown;
                            ConstraintNotSatisfied: unknown;
                        }>;
                    };
                    UnusedValueWithoutDrop: {
                        result_idx: number;
                        secondary_idx: number;
                    };
                    InvalidPublicFunctionReturnType: {
                        idx: number;
                    };
                    InvalidTransferObject: unknown;
                    EffectsTooLarge: {
                        current_size: string | number | bigint;
                        max_size: string | number | bigint;
                    };
                    PublishUpgradeMissingDependency: unknown;
                    PublishUpgradeDependencyDowngrade: unknown;
                    PackageUpgradeError: {
                        upgrade_error: import("@mysten/bcs").EnumInputShape<{
                            UnableToFetchPackage: {
                                package_id: Iterable<number> & {
                                    length: number;
                                };
                            };
                            NotAPackage: {
                                object_id: Iterable<number> & {
                                    length: number;
                                };
                            };
                            IncompatibleUpgrade: unknown;
                            DigestDoesNotMatch: {
                                digest: Iterable<number> & {
                                    length: number;
                                };
                            };
                            UnknownUpgradePolicy: {
                                policy: number;
                            };
                            PackageIDDoesNotMatch: {
                                package_id: Iterable<number> & {
                                    length: number;
                                };
                                ticket_id: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                    };
                    WrittenObjectsTooLarge: {
                        current_size: string | number | bigint;
                        max_size: string | number | bigint;
                    };
                    CertificateDenied: unknown;
                    SuiMoveVerificationTimedout: unknown;
                    SharedObjectOperationNotAllowed: unknown;
                    InputObjectDeleted: unknown;
                    ExecutionCancelledDueToSharedObjectCongestion: {
                        congested_objects: Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        };
                    };
                    AddressDeniedForCoin: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        coin_type: string;
                    };
                    CoinTypeGlobalPause: {
                        coin_type: string;
                    };
                    ExecutionCancelledDueToRandomnessUnavailable: unknown;
                }>;
                command: string | number | bigint;
            };
        }>;
        executed_epoch: string | number | bigint;
        gas_used: {
            computationCost: string | number | bigint;
            storageCost: string | number | bigint;
            storageRebate: string | number | bigint;
            nonRefundableStorageFee: string | number | bigint;
        };
        modified_at_versions: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        };
        shared_objects: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        };
        transaction_digest: Iterable<number> & {
            length: number;
        };
        created: Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>]> & {
            length: number;
        };
        mutated: Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>]> & {
            length: number;
        };
        unwrapped: Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>]> & {
            length: number;
        };
        deleted: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        };
        unwrapped_then_deleted: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        };
        wrapped: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        };
        gas_object: readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
        }>];
        events_digest: Iterable<number> & {
            length: number;
        };
        dependencies: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
    };
    V2: {
        status: import("@mysten/bcs").EnumInputShape<{
            Success: unknown;
            Failure: {
                error: import("@mysten/bcs").EnumInputShape<{
                    InsufficientGas: unknown;
                    InvalidGasObject: unknown;
                    InvariantViolation: unknown;
                    FeatureNotYetSupported: unknown;
                    MoveObjectTooBig: {
                        object_size: string | number | bigint;
                        max_object_size: string | number | bigint;
                    };
                    MovePackageTooBig: {
                        object_size: string | number | bigint;
                        max_object_size: string | number | bigint;
                    };
                    CircularObjectOwnership: {
                        object: Iterable<number> & {
                            length: number;
                        };
                    };
                    InsufficientCoinBalance: unknown;
                    CoinBalanceOverflow: unknown;
                    PublishErrorNonZeroAddress: unknown;
                    SuiMoveVerificationError: unknown;
                    MovePrimitiveRuntimeError: {
                        module: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    };
                    MoveAbort: readonly [{
                        module: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, string | number | bigint];
                    VMVerificationOrDeserializationError: unknown;
                    VMInvariantViolation: unknown;
                    FunctionNotFound: unknown;
                    ArityMismatch: unknown;
                    TypeArityMismatch: unknown;
                    NonEntryFunctionInvoked: unknown;
                    CommandArgumentError: {
                        arg_idx: number;
                        kind: import("@mysten/bcs").EnumInputShape<{
                            TypeMismatch: unknown;
                            InvalidBCSBytes: unknown;
                            InvalidUsageOfPureArg: unknown;
                            InvalidArgumentToPrivateEntryFunction: unknown;
                            IndexOutOfBounds: {
                                idx: number;
                            };
                            SecondaryIndexOutOfBounds: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidResultArity: {
                                result_idx: number;
                            };
                            InvalidGasCoinUsage: unknown;
                            InvalidValueUsage: unknown;
                            InvalidObjectByValue: unknown;
                            InvalidObjectByMutRef: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                        }>;
                    };
                    TypeArgumentError: {
                        argument_idx: number;
                        kind: import("@mysten/bcs").EnumInputShape<{
                            TypeNotFound: unknown;
                            ConstraintNotSatisfied: unknown;
                        }>;
                    };
                    UnusedValueWithoutDrop: {
                        result_idx: number;
                        secondary_idx: number;
                    };
                    InvalidPublicFunctionReturnType: {
                        idx: number;
                    };
                    InvalidTransferObject: unknown;
                    EffectsTooLarge: {
                        current_size: string | number | bigint;
                        max_size: string | number | bigint;
                    };
                    PublishUpgradeMissingDependency: unknown;
                    PublishUpgradeDependencyDowngrade: unknown;
                    PackageUpgradeError: {
                        upgrade_error: import("@mysten/bcs").EnumInputShape<{
                            UnableToFetchPackage: {
                                package_id: Iterable<number> & {
                                    length: number;
                                };
                            };
                            NotAPackage: {
                                object_id: Iterable<number> & {
                                    length: number;
                                };
                            };
                            IncompatibleUpgrade: unknown;
                            DigestDoesNotMatch: {
                                digest: Iterable<number> & {
                                    length: number;
                                };
                            };
                            UnknownUpgradePolicy: {
                                policy: number;
                            };
                            PackageIDDoesNotMatch: {
                                package_id: Iterable<number> & {
                                    length: number;
                                };
                                ticket_id: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                    };
                    WrittenObjectsTooLarge: {
                        current_size: string | number | bigint;
                        max_size: string | number | bigint;
                    };
                    CertificateDenied: unknown;
                    SuiMoveVerificationTimedout: unknown;
                    SharedObjectOperationNotAllowed: unknown;
                    InputObjectDeleted: unknown;
                    ExecutionCancelledDueToSharedObjectCongestion: {
                        congested_objects: Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        };
                    };
                    AddressDeniedForCoin: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        coin_type: string;
                    };
                    CoinTypeGlobalPause: {
                        coin_type: string;
                    };
                    ExecutionCancelledDueToRandomnessUnavailable: unknown;
                }>;
                command: string | number | bigint;
            };
        }>;
        executed_epoch: string | number | bigint;
        gas_used: {
            computationCost: string | number | bigint;
            storageCost: string | number | bigint;
            storageRebate: string | number | bigint;
            nonRefundableStorageFee: string | number | bigint;
        };
        transaction_digest: Iterable<number> & {
            length: number;
        };
        gas_object_index: number;
        events_digest: Iterable<number> & {
            length: number;
        };
        dependencies: Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        };
        lamport_version: string | number | bigint;
        changed_objects: Iterable<readonly [Iterable<number> & {
            length: number;
        }, {
            input_state: import("@mysten/bcs").EnumInputShape<{
                NotExist: unknown;
                Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>];
            }>;
            output_state: import("@mysten/bcs").EnumInputShape<{
                NotExist: unknown;
                ObjectWrite: readonly [Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>];
                PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }];
            }>;
            id_operation: import("@mysten/bcs").EnumInputShape<{
                None: unknown;
                Created: unknown;
                Deleted: unknown;
            }>;
        }]> & {
            length: number;
        };
        unchanged_shared_objects: Iterable<readonly [Iterable<number> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }];
            MutateDeleted: string | number | bigint;
            ReadDeleted: string | number | bigint;
            Cancelled: string | number | bigint;
            PerEpochConfig: unknown;
        }>]> & {
            length: number;
        };
        aux_data_digest: Iterable<number> & {
            length: number;
        };
    };
}>>;
export const ExecutionData: import("@mysten/bcs").BcsType<{
    transaction: {
        data: {
            intent_message: {
                intent: {
                    scope: number;
                    version: number;
                    app_id: number;
                };
                value: {
                    V1: {
                        kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            ProgrammableTransaction: {
                                inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Pure: number[];
                                    Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        ImmOrOwnedObject: [number[], string, number[]];
                                        SharedObject: {
                                            id: number[];
                                            initial_shared_version: string;
                                            mutable: boolean;
                                        };
                                        Receiving: [number[], string, number[]];
                                    }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                                }, "Pure" | "Object">[];
                                commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    MoveCall: {
                                        package: number[];
                                        module: string;
                                        function: string;
                                        type_arguments: any[];
                                        arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                                    };
                                    TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                                    SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                    MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                    Publish: [number[][], number[][]];
                                    MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                    Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: [number, number];
                                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                                }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                            };
                            ChangeEpoch: {
                                epoch: string;
                                protocol_version: string;
                                storage_charge: string;
                                computation_charge: string;
                                storage_rebate: string;
                                non_refundable_storage_fee: string;
                                epoch_start_timestamp_ms: string;
                                system_packages: [string, number[][], number[][]][];
                            };
                            Genesis: {
                                objects: {
                                    RawObject: {
                                        data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            Move: {
                                                type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                                    Other: {
                                                        address: number[];
                                                        module: string;
                                                        name: string;
                                                        type_args: any[];
                                                    };
                                                    GasCoin: unknown;
                                                    StakedSui: unknown;
                                                    Coin: unknown;
                                                }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                                has_public_transfer: boolean;
                                                version: string;
                                                contents: number[];
                                            };
                                            Package: {
                                                id: number[];
                                                version: string;
                                                module_map: Map<string, number[]>;
                                                type_origin_table: {
                                                    module_name: string;
                                                    datatype_name: string;
                                                    package: number[];
                                                }[];
                                                linkage_table: Map<number[], {
                                                    upgraded_id: number[];
                                                    upgraded_version: string;
                                                }>;
                                            };
                                        }, "Move" | "Package">;
                                        owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            AddressOwner: number[];
                                            ObjectOwner: number[];
                                            Shared: {
                                                initial_shared_version: string;
                                            };
                                            Immutable: unknown;
                                        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                                    };
                                    $kind: "RawObject";
                                }[];
                            };
                            ConsensusCommitPrologue: {
                                epoch: string;
                                round: string;
                                commit_timestamp_ms: string;
                            };
                            AuthenticatorStateUpdate: {
                                epoch: string;
                                round: string;
                                new_active_jwks: {
                                    jwk_id: {
                                        iss: string;
                                        kid: string;
                                    };
                                    jwk: {
                                        kty: string;
                                        e: string;
                                        n: string;
                                        alg: string;
                                    };
                                    epoch: string;
                                }[];
                                authenticator_obj_initial_shared_version: string;
                            };
                            EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ChangeEpoch: {
                                    epoch: string;
                                    protocol_version: string;
                                    storage_charge: string;
                                    computation_charge: string;
                                    storage_rebate: string;
                                    non_refundable_storage_fee: string;
                                    epoch_start_timestamp_ms: string;
                                    system_packages: [string, number[][], number[][]][];
                                };
                                AuthenticatorStateCreate: unknown;
                                AuthenticatorStateExpire: {
                                    min_epoch: string;
                                    authenticator_obj_initial_shared_version: string;
                                };
                                RandomnessStateCreate: unknown;
                                DenyListStateCreate: unknown;
                                BridgeStateCreate: number[];
                                BridgeCommitteeInit: string;
                            }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
                            RandomnessStateUpdate: {
                                epoch: string;
                                randomness_round: string;
                                random_bytes: number[];
                                randomness_obj_initial_shared_version: string;
                            };
                            ConsensusCommitPrologueV2: {
                                epoch: string;
                                round: string;
                                commit_timestamp_ms: string;
                                consensus_commit_digest: number[];
                            };
                            ConsensusCommitPrologueV3: {
                                epoch: string;
                                round: string;
                                sub_dag_index: string;
                                commit_timestamp_ms: string;
                                consensus_commit_digest: number[];
                                consensus_determined_version_assignments: {
                                    CancelledTransactions: [number[], [number[], string][]][];
                                    $kind: "CancelledTransactions";
                                };
                            };
                        }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
                        sender: number[];
                        gas_data: {
                            payment: [number[], string, number[]][];
                            owner: number[];
                            price: string;
                            budget: string;
                        };
                        expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            None: unknown;
                            Epoch: string;
                        }, "None" | "Epoch">;
                    };
                    $kind: "V1";
                };
            };
            tx_signatures: number[][];
        }[];
        auth_signature: {};
    };
    effects: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        V1: {
            status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Success: unknown;
                Failure: {
                    error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        InsufficientGas: unknown;
                        InvalidGasObject: unknown;
                        InvariantViolation: unknown;
                        FeatureNotYetSupported: unknown;
                        MoveObjectTooBig: {
                            object_size: string;
                            max_object_size: string;
                        };
                        MovePackageTooBig: {
                            object_size: string;
                            max_object_size: string;
                        };
                        CircularObjectOwnership: {
                            object: number[];
                        };
                        InsufficientCoinBalance: unknown;
                        CoinBalanceOverflow: unknown;
                        PublishErrorNonZeroAddress: unknown;
                        SuiMoveVerificationError: unknown;
                        MovePrimitiveRuntimeError: {
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        };
                        MoveAbort: [{
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, string];
                        VMVerificationOrDeserializationError: unknown;
                        VMInvariantViolation: unknown;
                        FunctionNotFound: unknown;
                        ArityMismatch: unknown;
                        TypeArityMismatch: unknown;
                        NonEntryFunctionInvoked: unknown;
                        CommandArgumentError: {
                            arg_idx: number;
                            kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                TypeMismatch: unknown;
                                InvalidBCSBytes: unknown;
                                InvalidUsageOfPureArg: unknown;
                                InvalidArgumentToPrivateEntryFunction: unknown;
                                IndexOutOfBounds: {
                                    idx: number;
                                };
                                SecondaryIndexOutOfBounds: {
                                    result_idx: number;
                                    secondary_idx: number;
                                };
                                InvalidResultArity: {
                                    result_idx: number;
                                };
                                InvalidGasCoinUsage: unknown;
                                InvalidValueUsage: unknown;
                                InvalidObjectByValue: unknown;
                                InvalidObjectByMutRef: unknown;
                                SharedObjectOperationNotAllowed: unknown;
                            }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                        };
                        TypeArgumentError: {
                            argument_idx: number;
                            kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                TypeNotFound: unknown;
                                ConstraintNotSatisfied: unknown;
                            }, "TypeNotFound" | "ConstraintNotSatisfied">;
                        };
                        UnusedValueWithoutDrop: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidPublicFunctionReturnType: {
                            idx: number;
                        };
                        InvalidTransferObject: unknown;
                        EffectsTooLarge: {
                            current_size: string;
                            max_size: string;
                        };
                        PublishUpgradeMissingDependency: unknown;
                        PublishUpgradeDependencyDowngrade: unknown;
                        PackageUpgradeError: {
                            upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                UnableToFetchPackage: {
                                    package_id: number[];
                                };
                                NotAPackage: {
                                    object_id: number[];
                                };
                                IncompatibleUpgrade: unknown;
                                DigestDoesNotMatch: {
                                    digest: number[];
                                };
                                UnknownUpgradePolicy: {
                                    policy: number;
                                };
                                PackageIDDoesNotMatch: {
                                    package_id: number[];
                                    ticket_id: number[];
                                };
                            }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                        };
                        WrittenObjectsTooLarge: {
                            current_size: string;
                            max_size: string;
                        };
                        CertificateDenied: unknown;
                        SuiMoveVerificationTimedout: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                        InputObjectDeleted: unknown;
                        ExecutionCancelledDueToSharedObjectCongestion: {
                            congested_objects: number[][];
                        };
                        AddressDeniedForCoin: {
                            address: number[];
                            coin_type: string;
                        };
                        CoinTypeGlobalPause: {
                            coin_type: string;
                        };
                        ExecutionCancelledDueToRandomnessUnavailable: unknown;
                    }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
                    command: string;
                };
            }, "Success" | "Failure">;
            executed_epoch: string;
            gas_used: {
                computationCost: string;
                storageCost: string;
                storageRebate: string;
                nonRefundableStorageFee: string;
            };
            modified_at_versions: [number[], string][];
            shared_objects: [number[], string, number[]][];
            transaction_digest: number[];
            created: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
            mutated: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
            unwrapped: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
            deleted: [number[], string, number[]][];
            unwrapped_then_deleted: [number[], string, number[]][];
            wrapped: [number[], string, number[]][];
            gas_object: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
            events_digest: number[];
            dependencies: number[][];
        };
        V2: {
            status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Success: unknown;
                Failure: {
                    error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        InsufficientGas: unknown;
                        InvalidGasObject: unknown;
                        InvariantViolation: unknown;
                        FeatureNotYetSupported: unknown;
                        MoveObjectTooBig: {
                            object_size: string;
                            max_object_size: string;
                        };
                        MovePackageTooBig: {
                            object_size: string;
                            max_object_size: string;
                        };
                        CircularObjectOwnership: {
                            object: number[];
                        };
                        InsufficientCoinBalance: unknown;
                        CoinBalanceOverflow: unknown;
                        PublishErrorNonZeroAddress: unknown;
                        SuiMoveVerificationError: unknown;
                        MovePrimitiveRuntimeError: {
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        };
                        MoveAbort: [{
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, string];
                        VMVerificationOrDeserializationError: unknown;
                        VMInvariantViolation: unknown;
                        FunctionNotFound: unknown;
                        ArityMismatch: unknown;
                        TypeArityMismatch: unknown;
                        NonEntryFunctionInvoked: unknown;
                        CommandArgumentError: {
                            arg_idx: number;
                            kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                TypeMismatch: unknown;
                                InvalidBCSBytes: unknown;
                                InvalidUsageOfPureArg: unknown;
                                InvalidArgumentToPrivateEntryFunction: unknown;
                                IndexOutOfBounds: {
                                    idx: number;
                                };
                                SecondaryIndexOutOfBounds: {
                                    result_idx: number;
                                    secondary_idx: number;
                                };
                                InvalidResultArity: {
                                    result_idx: number;
                                };
                                InvalidGasCoinUsage: unknown;
                                InvalidValueUsage: unknown;
                                InvalidObjectByValue: unknown;
                                InvalidObjectByMutRef: unknown;
                                SharedObjectOperationNotAllowed: unknown;
                            }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                        };
                        TypeArgumentError: {
                            argument_idx: number;
                            kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                TypeNotFound: unknown;
                                ConstraintNotSatisfied: unknown;
                            }, "TypeNotFound" | "ConstraintNotSatisfied">;
                        };
                        UnusedValueWithoutDrop: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidPublicFunctionReturnType: {
                            idx: number;
                        };
                        InvalidTransferObject: unknown;
                        EffectsTooLarge: {
                            current_size: string;
                            max_size: string;
                        };
                        PublishUpgradeMissingDependency: unknown;
                        PublishUpgradeDependencyDowngrade: unknown;
                        PackageUpgradeError: {
                            upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                UnableToFetchPackage: {
                                    package_id: number[];
                                };
                                NotAPackage: {
                                    object_id: number[];
                                };
                                IncompatibleUpgrade: unknown;
                                DigestDoesNotMatch: {
                                    digest: number[];
                                };
                                UnknownUpgradePolicy: {
                                    policy: number;
                                };
                                PackageIDDoesNotMatch: {
                                    package_id: number[];
                                    ticket_id: number[];
                                };
                            }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                        };
                        WrittenObjectsTooLarge: {
                            current_size: string;
                            max_size: string;
                        };
                        CertificateDenied: unknown;
                        SuiMoveVerificationTimedout: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                        InputObjectDeleted: unknown;
                        ExecutionCancelledDueToSharedObjectCongestion: {
                            congested_objects: number[][];
                        };
                        AddressDeniedForCoin: {
                            address: number[];
                            coin_type: string;
                        };
                        CoinTypeGlobalPause: {
                            coin_type: string;
                        };
                        ExecutionCancelledDueToRandomnessUnavailable: unknown;
                    }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
                    command: string;
                };
            }, "Success" | "Failure">;
            executed_epoch: string;
            gas_used: {
                computationCost: string;
                storageCost: string;
                storageRebate: string;
                nonRefundableStorageFee: string;
            };
            transaction_digest: number[];
            gas_object_index: number;
            events_digest: number[];
            dependencies: number[][];
            lamport_version: string;
            changed_objects: [number[], {
                input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    NotExist: unknown;
                    Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
                }, "NotExist" | "Exist">;
                output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    NotExist: unknown;
                    ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                    }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
                    PackageWrite: [string, number[]];
                }, "NotExist" | "ObjectWrite" | "PackageWrite">;
                id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    None: unknown;
                    Created: unknown;
                    Deleted: unknown;
                }, "None" | "Created" | "Deleted">;
            }][];
            unchanged_shared_objects: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ReadOnlyRoot: [string, number[]];
                MutateDeleted: string;
                ReadDeleted: string;
                Cancelled: string;
                PerEpochConfig: unknown;
            }, "ReadOnlyRoot" | "MutateDeleted" | "ReadDeleted" | "Cancelled" | "PerEpochConfig">][];
            aux_data_digest: number[];
        };
    }, "V1" | "V2">;
}, {
    transaction: {
        data: Iterable<{
            intent_message: {
                intent: {
                    scope: number;
                    version: number;
                    app_id: number;
                };
                value: {
                    V1: {
                        kind: import("@mysten/bcs").EnumInputShape<{
                            ProgrammableTransaction: {
                                inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    Pure: Iterable<number> & {
                                        length: number;
                                    };
                                    Object: import("@mysten/bcs").EnumInputShape<{
                                        ImmOrOwnedObject: readonly [Iterable<number> & {
                                            length: number;
                                        }, string | number | bigint, Iterable<number> & {
                                            length: number;
                                        }];
                                        SharedObject: {
                                            id: Iterable<number> & {
                                                length: number;
                                            };
                                            initial_shared_version: string | number | bigint;
                                            mutable: boolean;
                                        };
                                        Receiving: readonly [Iterable<number> & {
                                            length: number;
                                        }, string | number | bigint, Iterable<number> & {
                                            length: number;
                                        }];
                                    }>;
                                }>> & {
                                    length: number;
                                };
                                commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    MoveCall: {
                                        package: Iterable<number> & {
                                            length: number;
                                        };
                                        module: string;
                                        function: string;
                                        type_arguments: Iterable<any> & {
                                            length: number;
                                        };
                                        arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>> & {
                                            length: number;
                                        };
                                    };
                                    TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>> & {
                                        length: number;
                                    }, import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>];
                                    SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>> & {
                                        length: number;
                                    }];
                                    MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>> & {
                                        length: number;
                                    }];
                                    Publish: readonly [Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }, Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }];
                                    MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>> & {
                                        length: number;
                                    }];
                                    Upgrade: readonly [Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }, Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }, Iterable<number> & {
                                        length: number;
                                    }, import("@mysten/bcs").EnumInputShape<{
                                        GasCoin: unknown;
                                        Input: number;
                                        Result: number;
                                        NestedResult: readonly [number, number];
                                    }>];
                                }>> & {
                                    length: number;
                                };
                            };
                            ChangeEpoch: {
                                epoch: string | number | bigint;
                                protocol_version: string | number | bigint;
                                storage_charge: string | number | bigint;
                                computation_charge: string | number | bigint;
                                storage_rebate: string | number | bigint;
                                non_refundable_storage_fee: string | number | bigint;
                                epoch_start_timestamp_ms: string | number | bigint;
                                system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }, Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                }]> & {
                                    length: number;
                                };
                            };
                            Genesis: {
                                objects: Iterable<{
                                    RawObject: {
                                        data: import("@mysten/bcs").EnumInputShape<{
                                            Move: {
                                                type: import("@mysten/bcs").EnumInputShape<{
                                                    Other: {
                                                        address: Iterable<number> & {
                                                            length: number;
                                                        };
                                                        module: string;
                                                        name: string;
                                                        type_args: Iterable<any> & {
                                                            length: number;
                                                        };
                                                    };
                                                    GasCoin: unknown;
                                                    StakedSui: unknown;
                                                    Coin: unknown;
                                                }>;
                                                has_public_transfer: boolean;
                                                version: string | number | bigint;
                                                contents: Iterable<number> & {
                                                    length: number;
                                                };
                                            };
                                            Package: {
                                                id: Iterable<number> & {
                                                    length: number;
                                                };
                                                version: string | number | bigint;
                                                module_map: Map<string, Iterable<number> & {
                                                    length: number;
                                                }>;
                                                type_origin_table: Iterable<{
                                                    module_name: string;
                                                    datatype_name: string;
                                                    package: Iterable<number> & {
                                                        length: number;
                                                    };
                                                }> & {
                                                    length: number;
                                                };
                                                linkage_table: Map<Iterable<number> & {
                                                    length: number;
                                                }, {
                                                    upgraded_id: Iterable<number> & {
                                                        length: number;
                                                    };
                                                    upgraded_version: string | number | bigint;
                                                }>;
                                            };
                                        }>;
                                        owner: import("@mysten/bcs").EnumInputShape<{
                                            AddressOwner: Iterable<number> & {
                                                length: number;
                                            };
                                            ObjectOwner: Iterable<number> & {
                                                length: number;
                                            };
                                            Shared: {
                                                initial_shared_version: string | number | bigint;
                                            };
                                            Immutable: unknown;
                                        }>;
                                    };
                                }> & {
                                    length: number;
                                };
                            };
                            ConsensusCommitPrologue: {
                                epoch: string | number | bigint;
                                round: string | number | bigint;
                                commit_timestamp_ms: string | number | bigint;
                            };
                            AuthenticatorStateUpdate: {
                                epoch: string | number | bigint;
                                round: string | number | bigint;
                                new_active_jwks: Iterable<{
                                    jwk_id: {
                                        iss: string;
                                        kid: string;
                                    };
                                    jwk: {
                                        kty: string;
                                        e: string;
                                        n: string;
                                        alg: string;
                                    };
                                    epoch: string | number | bigint;
                                }> & {
                                    length: number;
                                };
                                authenticator_obj_initial_shared_version: string | number | bigint;
                            };
                            EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                                ChangeEpoch: {
                                    epoch: string | number | bigint;
                                    protocol_version: string | number | bigint;
                                    storage_charge: string | number | bigint;
                                    computation_charge: string | number | bigint;
                                    storage_rebate: string | number | bigint;
                                    non_refundable_storage_fee: string | number | bigint;
                                    epoch_start_timestamp_ms: string | number | bigint;
                                    system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }, Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }]> & {
                                        length: number;
                                    };
                                };
                                AuthenticatorStateCreate: unknown;
                                AuthenticatorStateExpire: {
                                    min_epoch: string | number | bigint;
                                    authenticator_obj_initial_shared_version: string | number | bigint;
                                };
                                RandomnessStateCreate: unknown;
                                DenyListStateCreate: unknown;
                                BridgeStateCreate: Iterable<number> & {
                                    length: number;
                                };
                                BridgeCommitteeInit: string | number | bigint;
                            }>> & {
                                length: number;
                            };
                            RandomnessStateUpdate: {
                                epoch: string | number | bigint;
                                randomness_round: string | number | bigint;
                                random_bytes: Iterable<number> & {
                                    length: number;
                                };
                                randomness_obj_initial_shared_version: string | number | bigint;
                            };
                            ConsensusCommitPrologueV2: {
                                epoch: string | number | bigint;
                                round: string | number | bigint;
                                commit_timestamp_ms: string | number | bigint;
                                consensus_commit_digest: Iterable<number> & {
                                    length: number;
                                };
                            };
                            ConsensusCommitPrologueV3: {
                                epoch: string | number | bigint;
                                round: string | number | bigint;
                                sub_dag_index: string | number | bigint;
                                commit_timestamp_ms: string | number | bigint;
                                consensus_commit_digest: Iterable<number> & {
                                    length: number;
                                };
                                consensus_determined_version_assignments: {
                                    CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                        length: number;
                                    }, Iterable<readonly [Iterable<number> & {
                                        length: number;
                                    }, string | number | bigint]> & {
                                        length: number;
                                    }]> & {
                                        length: number;
                                    };
                                };
                            };
                        }>;
                        sender: Iterable<number> & {
                            length: number;
                        };
                        gas_data: {
                            payment: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                            owner: Iterable<number> & {
                                length: number;
                            };
                            price: string | number | bigint;
                            budget: string | number | bigint;
                        };
                        expiration: import("@mysten/bcs").EnumInputShape<{
                            None: unknown;
                            Epoch: string | number | bigint;
                        }>;
                    };
                };
            };
            tx_signatures: Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            };
        }> & {
            length: number;
        };
        auth_signature: {};
    };
    effects: import("@mysten/bcs").EnumInputShape<{
        V1: {
            status: import("@mysten/bcs").EnumInputShape<{
                Success: unknown;
                Failure: {
                    error: import("@mysten/bcs").EnumInputShape<{
                        InsufficientGas: unknown;
                        InvalidGasObject: unknown;
                        InvariantViolation: unknown;
                        FeatureNotYetSupported: unknown;
                        MoveObjectTooBig: {
                            object_size: string | number | bigint;
                            max_object_size: string | number | bigint;
                        };
                        MovePackageTooBig: {
                            object_size: string | number | bigint;
                            max_object_size: string | number | bigint;
                        };
                        CircularObjectOwnership: {
                            object: Iterable<number> & {
                                length: number;
                            };
                        };
                        InsufficientCoinBalance: unknown;
                        CoinBalanceOverflow: unknown;
                        PublishErrorNonZeroAddress: unknown;
                        SuiMoveVerificationError: unknown;
                        MovePrimitiveRuntimeError: {
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        };
                        MoveAbort: readonly [{
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, string | number | bigint];
                        VMVerificationOrDeserializationError: unknown;
                        VMInvariantViolation: unknown;
                        FunctionNotFound: unknown;
                        ArityMismatch: unknown;
                        TypeArityMismatch: unknown;
                        NonEntryFunctionInvoked: unknown;
                        CommandArgumentError: {
                            arg_idx: number;
                            kind: import("@mysten/bcs").EnumInputShape<{
                                TypeMismatch: unknown;
                                InvalidBCSBytes: unknown;
                                InvalidUsageOfPureArg: unknown;
                                InvalidArgumentToPrivateEntryFunction: unknown;
                                IndexOutOfBounds: {
                                    idx: number;
                                };
                                SecondaryIndexOutOfBounds: {
                                    result_idx: number;
                                    secondary_idx: number;
                                };
                                InvalidResultArity: {
                                    result_idx: number;
                                };
                                InvalidGasCoinUsage: unknown;
                                InvalidValueUsage: unknown;
                                InvalidObjectByValue: unknown;
                                InvalidObjectByMutRef: unknown;
                                SharedObjectOperationNotAllowed: unknown;
                            }>;
                        };
                        TypeArgumentError: {
                            argument_idx: number;
                            kind: import("@mysten/bcs").EnumInputShape<{
                                TypeNotFound: unknown;
                                ConstraintNotSatisfied: unknown;
                            }>;
                        };
                        UnusedValueWithoutDrop: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidPublicFunctionReturnType: {
                            idx: number;
                        };
                        InvalidTransferObject: unknown;
                        EffectsTooLarge: {
                            current_size: string | number | bigint;
                            max_size: string | number | bigint;
                        };
                        PublishUpgradeMissingDependency: unknown;
                        PublishUpgradeDependencyDowngrade: unknown;
                        PackageUpgradeError: {
                            upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                UnableToFetchPackage: {
                                    package_id: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                NotAPackage: {
                                    object_id: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                IncompatibleUpgrade: unknown;
                                DigestDoesNotMatch: {
                                    digest: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                UnknownUpgradePolicy: {
                                    policy: number;
                                };
                                PackageIDDoesNotMatch: {
                                    package_id: Iterable<number> & {
                                        length: number;
                                    };
                                    ticket_id: Iterable<number> & {
                                        length: number;
                                    };
                                };
                            }>;
                        };
                        WrittenObjectsTooLarge: {
                            current_size: string | number | bigint;
                            max_size: string | number | bigint;
                        };
                        CertificateDenied: unknown;
                        SuiMoveVerificationTimedout: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                        InputObjectDeleted: unknown;
                        ExecutionCancelledDueToSharedObjectCongestion: {
                            congested_objects: Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            };
                        };
                        AddressDeniedForCoin: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            coin_type: string;
                        };
                        CoinTypeGlobalPause: {
                            coin_type: string;
                        };
                        ExecutionCancelledDueToRandomnessUnavailable: unknown;
                    }>;
                    command: string | number | bigint;
                };
            }>;
            executed_epoch: string | number | bigint;
            gas_used: {
                computationCost: string | number | bigint;
                storageCost: string | number | bigint;
                storageRebate: string | number | bigint;
                nonRefundableStorageFee: string | number | bigint;
            };
            modified_at_versions: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            };
            shared_objects: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            };
            transaction_digest: Iterable<number> & {
                length: number;
            };
            created: Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>]> & {
                length: number;
            };
            mutated: Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>]> & {
                length: number;
            };
            unwrapped: Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>]> & {
                length: number;
            };
            deleted: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            };
            unwrapped_then_deleted: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            };
            wrapped: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            };
            gas_object: readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
            }>];
            events_digest: Iterable<number> & {
                length: number;
            };
            dependencies: Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            };
        };
        V2: {
            status: import("@mysten/bcs").EnumInputShape<{
                Success: unknown;
                Failure: {
                    error: import("@mysten/bcs").EnumInputShape<{
                        InsufficientGas: unknown;
                        InvalidGasObject: unknown;
                        InvariantViolation: unknown;
                        FeatureNotYetSupported: unknown;
                        MoveObjectTooBig: {
                            object_size: string | number | bigint;
                            max_object_size: string | number | bigint;
                        };
                        MovePackageTooBig: {
                            object_size: string | number | bigint;
                            max_object_size: string | number | bigint;
                        };
                        CircularObjectOwnership: {
                            object: Iterable<number> & {
                                length: number;
                            };
                        };
                        InsufficientCoinBalance: unknown;
                        CoinBalanceOverflow: unknown;
                        PublishErrorNonZeroAddress: unknown;
                        SuiMoveVerificationError: unknown;
                        MovePrimitiveRuntimeError: {
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        };
                        MoveAbort: readonly [{
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, string | number | bigint];
                        VMVerificationOrDeserializationError: unknown;
                        VMInvariantViolation: unknown;
                        FunctionNotFound: unknown;
                        ArityMismatch: unknown;
                        TypeArityMismatch: unknown;
                        NonEntryFunctionInvoked: unknown;
                        CommandArgumentError: {
                            arg_idx: number;
                            kind: import("@mysten/bcs").EnumInputShape<{
                                TypeMismatch: unknown;
                                InvalidBCSBytes: unknown;
                                InvalidUsageOfPureArg: unknown;
                                InvalidArgumentToPrivateEntryFunction: unknown;
                                IndexOutOfBounds: {
                                    idx: number;
                                };
                                SecondaryIndexOutOfBounds: {
                                    result_idx: number;
                                    secondary_idx: number;
                                };
                                InvalidResultArity: {
                                    result_idx: number;
                                };
                                InvalidGasCoinUsage: unknown;
                                InvalidValueUsage: unknown;
                                InvalidObjectByValue: unknown;
                                InvalidObjectByMutRef: unknown;
                                SharedObjectOperationNotAllowed: unknown;
                            }>;
                        };
                        TypeArgumentError: {
                            argument_idx: number;
                            kind: import("@mysten/bcs").EnumInputShape<{
                                TypeNotFound: unknown;
                                ConstraintNotSatisfied: unknown;
                            }>;
                        };
                        UnusedValueWithoutDrop: {
                            result_idx: number;
                            secondary_idx: number;
                        };
                        InvalidPublicFunctionReturnType: {
                            idx: number;
                        };
                        InvalidTransferObject: unknown;
                        EffectsTooLarge: {
                            current_size: string | number | bigint;
                            max_size: string | number | bigint;
                        };
                        PublishUpgradeMissingDependency: unknown;
                        PublishUpgradeDependencyDowngrade: unknown;
                        PackageUpgradeError: {
                            upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                UnableToFetchPackage: {
                                    package_id: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                NotAPackage: {
                                    object_id: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                IncompatibleUpgrade: unknown;
                                DigestDoesNotMatch: {
                                    digest: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                UnknownUpgradePolicy: {
                                    policy: number;
                                };
                                PackageIDDoesNotMatch: {
                                    package_id: Iterable<number> & {
                                        length: number;
                                    };
                                    ticket_id: Iterable<number> & {
                                        length: number;
                                    };
                                };
                            }>;
                        };
                        WrittenObjectsTooLarge: {
                            current_size: string | number | bigint;
                            max_size: string | number | bigint;
                        };
                        CertificateDenied: unknown;
                        SuiMoveVerificationTimedout: unknown;
                        SharedObjectOperationNotAllowed: unknown;
                        InputObjectDeleted: unknown;
                        ExecutionCancelledDueToSharedObjectCongestion: {
                            congested_objects: Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            };
                        };
                        AddressDeniedForCoin: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            coin_type: string;
                        };
                        CoinTypeGlobalPause: {
                            coin_type: string;
                        };
                        ExecutionCancelledDueToRandomnessUnavailable: unknown;
                    }>;
                    command: string | number | bigint;
                };
            }>;
            executed_epoch: string | number | bigint;
            gas_used: {
                computationCost: string | number | bigint;
                storageCost: string | number | bigint;
                storageRebate: string | number | bigint;
                nonRefundableStorageFee: string | number | bigint;
            };
            transaction_digest: Iterable<number> & {
                length: number;
            };
            gas_object_index: number;
            events_digest: Iterable<number> & {
                length: number;
            };
            dependencies: Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            };
            lamport_version: string | number | bigint;
            changed_objects: Iterable<readonly [Iterable<number> & {
                length: number;
            }, {
                input_state: import("@mysten/bcs").EnumInputShape<{
                    NotExist: unknown;
                    Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }], import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                    }>];
                }>;
                output_state: import("@mysten/bcs").EnumInputShape<{
                    NotExist: unknown;
                    ObjectWrite: readonly [Iterable<number> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                    }>];
                    PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                }>;
                id_operation: import("@mysten/bcs").EnumInputShape<{
                    None: unknown;
                    Created: unknown;
                    Deleted: unknown;
                }>;
            }]> & {
                length: number;
            };
            unchanged_shared_objects: Iterable<readonly [Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                MutateDeleted: string | number | bigint;
                ReadDeleted: string | number | bigint;
                Cancelled: string | number | bigint;
                PerEpochConfig: unknown;
            }>]> & {
                length: number;
            };
            aux_data_digest: Iterable<number> & {
                length: number;
            };
        };
    }>;
}>;
export const FullCheckpointContents: import("@mysten/bcs").BcsType<{
    transactions: {
        transaction: {
            data: {
                intent_message: {
                    intent: {
                        scope: number;
                        version: number;
                        app_id: number;
                    };
                    value: {
                        V1: {
                            kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ProgrammableTransaction: {
                                    inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Pure: number[];
                                        Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            ImmOrOwnedObject: [number[], string, number[]];
                                            SharedObject: {
                                                id: number[];
                                                initial_shared_version: string;
                                                mutable: boolean;
                                            };
                                            Receiving: [number[], string, number[]];
                                        }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                                    }, "Pure" | "Object">[];
                                    commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        MoveCall: {
                                            package: number[];
                                            module: string;
                                            function: string;
                                            type_arguments: any[];
                                            arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                                GasCoin: unknown;
                                                Input: number;
                                                Result: number;
                                                NestedResult: [number, number];
                                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                                        };
                                        TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                                        SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                        MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                        Publish: [number[][], number[][]];
                                        MakeMoveVec: [any, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                                        Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: [number, number];
                                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                                    }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                                };
                                ChangeEpoch: {
                                    epoch: string;
                                    protocol_version: string;
                                    storage_charge: string;
                                    computation_charge: string;
                                    storage_rebate: string;
                                    non_refundable_storage_fee: string;
                                    epoch_start_timestamp_ms: string;
                                    system_packages: [string, number[][], number[][]][];
                                };
                                Genesis: {
                                    objects: {
                                        RawObject: {
                                            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                                Move: {
                                                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                                        Other: {
                                                            address: number[];
                                                            module: string;
                                                            name: string;
                                                            type_args: any[];
                                                        };
                                                        GasCoin: unknown;
                                                        StakedSui: unknown;
                                                        Coin: unknown;
                                                    }, "GasCoin" | "Other" | "StakedSui" | "Coin">;
                                                    has_public_transfer: boolean;
                                                    version: string;
                                                    contents: number[];
                                                };
                                                Package: {
                                                    id: number[];
                                                    version: string;
                                                    module_map: Map<string, number[]>;
                                                    type_origin_table: {
                                                        module_name: string;
                                                        datatype_name: string;
                                                        package: number[];
                                                    }[];
                                                    linkage_table: Map<number[], {
                                                        upgraded_id: number[];
                                                        upgraded_version: string;
                                                    }>;
                                                };
                                            }, "Move" | "Package">;
                                            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                                AddressOwner: number[];
                                                ObjectOwner: number[];
                                                Shared: {
                                                    initial_shared_version: string;
                                                };
                                                Immutable: unknown;
                                            }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">;
                                        };
                                        $kind: "RawObject";
                                    }[];
                                };
                                ConsensusCommitPrologue: {
                                    epoch: string;
                                    round: string;
                                    commit_timestamp_ms: string;
                                };
                                AuthenticatorStateUpdate: {
                                    epoch: string;
                                    round: string;
                                    new_active_jwks: {
                                        jwk_id: {
                                            iss: string;
                                            kid: string;
                                        };
                                        jwk: {
                                            kty: string;
                                            e: string;
                                            n: string;
                                            alg: string;
                                        };
                                        epoch: string;
                                    }[];
                                    authenticator_obj_initial_shared_version: string;
                                };
                                EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    ChangeEpoch: {
                                        epoch: string;
                                        protocol_version: string;
                                        storage_charge: string;
                                        computation_charge: string;
                                        storage_rebate: string;
                                        non_refundable_storage_fee: string;
                                        epoch_start_timestamp_ms: string;
                                        system_packages: [string, number[][], number[][]][];
                                    };
                                    AuthenticatorStateCreate: unknown;
                                    AuthenticatorStateExpire: {
                                        min_epoch: string;
                                        authenticator_obj_initial_shared_version: string;
                                    };
                                    RandomnessStateCreate: unknown;
                                    DenyListStateCreate: unknown;
                                    BridgeStateCreate: number[];
                                    BridgeCommitteeInit: string;
                                }, "AuthenticatorStateExpire" | "ChangeEpoch" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit">[];
                                RandomnessStateUpdate: {
                                    epoch: string;
                                    randomness_round: string;
                                    random_bytes: number[];
                                    randomness_obj_initial_shared_version: string;
                                };
                                ConsensusCommitPrologueV2: {
                                    epoch: string;
                                    round: string;
                                    commit_timestamp_ms: string;
                                    consensus_commit_digest: number[];
                                };
                                ConsensusCommitPrologueV3: {
                                    epoch: string;
                                    round: string;
                                    sub_dag_index: string;
                                    commit_timestamp_ms: string;
                                    consensus_commit_digest: number[];
                                    consensus_determined_version_assignments: {
                                        CancelledTransactions: [number[], [number[], string][]][];
                                        $kind: "CancelledTransactions";
                                    };
                                };
                            }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ConsensusCommitPrologue" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ProgrammableTransaction" | "RandomnessStateUpdate" | "Genesis" | "EndOfEpochTransaction">;
                            sender: number[];
                            gas_data: {
                                payment: [number[], string, number[]][];
                                owner: number[];
                                price: string;
                                budget: string;
                            };
                            expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                None: unknown;
                                Epoch: string;
                            }, "None" | "Epoch">;
                        };
                        $kind: "V1";
                    };
                };
                tx_signatures: number[][];
            }[];
            auth_signature: {};
        };
        effects: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            V1: {
                status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            MovePackageTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            CircularObjectOwnership: {
                                object: number[];
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: [{
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }, "TypeNotFound" | "ConstraintNotSatisfied">;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    UnableToFetchPackage: {
                                        package_id: number[];
                                    };
                                    NotAPackage: {
                                        object_id: number[];
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: number[];
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: number[];
                                        ticket_id: number[];
                                    };
                                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: number[][];
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                        }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computationCost: string;
                    storageCost: string;
                    storageRebate: string;
                    nonRefundableStorageFee: string;
                };
                modified_at_versions: [number[], string][];
                shared_objects: [number[], string, number[]][];
                transaction_digest: number[];
                created: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
                mutated: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
                unwrapped: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
                deleted: [number[], string, number[]][];
                unwrapped_then_deleted: [number[], string, number[]][];
                wrapped: [number[], string, number[]][];
                gas_object: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
                events_digest: number[];
                dependencies: number[][];
            };
            V2: {
                status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            MovePackageTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            CircularObjectOwnership: {
                                object: number[];
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: [{
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed">;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }, "TypeNotFound" | "ConstraintNotSatisfied">;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    UnableToFetchPackage: {
                                        package_id: number[];
                                    };
                                    NotAPackage: {
                                        object_id: number[];
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: number[];
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: number[];
                                        ticket_id: number[];
                                    };
                                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: number[][];
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                        }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computationCost: string;
                    storageCost: string;
                    storageRebate: string;
                    nonRefundableStorageFee: string;
                };
                transaction_digest: number[];
                gas_object_index: number;
                events_digest: number[];
                dependencies: number[][];
                lamport_version: string;
                changed_objects: [number[], {
                    input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        NotExist: unknown;
                        Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
                    }, "NotExist" | "Exist">;
                    output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        NotExist: unknown;
                        ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                        }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">];
                        PackageWrite: [string, number[]];
                    }, "NotExist" | "ObjectWrite" | "PackageWrite">;
                    id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        None: unknown;
                        Created: unknown;
                        Deleted: unknown;
                    }, "None" | "Created" | "Deleted">;
                }][];
                unchanged_shared_objects: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ReadOnlyRoot: [string, number[]];
                    MutateDeleted: string;
                    ReadDeleted: string;
                    Cancelled: string;
                    PerEpochConfig: unknown;
                }, "ReadOnlyRoot" | "MutateDeleted" | "ReadDeleted" | "Cancelled" | "PerEpochConfig">][];
                aux_data_digest: number[];
            };
        }, "V1" | "V2">;
    }[];
    user_signatures: number[][][];
}, {
    transactions: Iterable<{
        transaction: {
            data: Iterable<{
                intent_message: {
                    intent: {
                        scope: number;
                        version: number;
                        app_id: number;
                    };
                    value: {
                        V1: {
                            kind: import("@mysten/bcs").EnumInputShape<{
                                ProgrammableTransaction: {
                                    inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                                        Pure: Iterable<number> & {
                                            length: number;
                                        };
                                        Object: import("@mysten/bcs").EnumInputShape<{
                                            ImmOrOwnedObject: readonly [Iterable<number> & {
                                                length: number;
                                            }, string | number | bigint, Iterable<number> & {
                                                length: number;
                                            }];
                                            SharedObject: {
                                                id: Iterable<number> & {
                                                    length: number;
                                                };
                                                initial_shared_version: string | number | bigint;
                                                mutable: boolean;
                                            };
                                            Receiving: readonly [Iterable<number> & {
                                                length: number;
                                            }, string | number | bigint, Iterable<number> & {
                                                length: number;
                                            }];
                                        }>;
                                    }>> & {
                                        length: number;
                                    };
                                    commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                                        MoveCall: {
                                            package: Iterable<number> & {
                                                length: number;
                                            };
                                            module: string;
                                            function: string;
                                            type_arguments: Iterable<any> & {
                                                length: number;
                                            };
                                            arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                                GasCoin: unknown;
                                                Input: number;
                                                Result: number;
                                                NestedResult: readonly [number, number];
                                            }>> & {
                                                length: number;
                                            };
                                        };
                                        TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>> & {
                                            length: number;
                                        }, import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>];
                                        SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>> & {
                                            length: number;
                                        }];
                                        MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>> & {
                                            length: number;
                                        }];
                                        Publish: readonly [Iterable<Iterable<number> & {
                                            length: number;
                                        }> & {
                                            length: number;
                                        }, Iterable<Iterable<number> & {
                                            length: number;
                                        }> & {
                                            length: number;
                                        }];
                                        MakeMoveVec: readonly [any, Iterable<import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>> & {
                                            length: number;
                                        }];
                                        Upgrade: readonly [Iterable<Iterable<number> & {
                                            length: number;
                                        }> & {
                                            length: number;
                                        }, Iterable<Iterable<number> & {
                                            length: number;
                                        }> & {
                                            length: number;
                                        }, Iterable<number> & {
                                            length: number;
                                        }, import("@mysten/bcs").EnumInputShape<{
                                            GasCoin: unknown;
                                            Input: number;
                                            Result: number;
                                            NestedResult: readonly [number, number];
                                        }>];
                                    }>> & {
                                        length: number;
                                    };
                                };
                                ChangeEpoch: {
                                    epoch: string | number | bigint;
                                    protocol_version: string | number | bigint;
                                    storage_charge: string | number | bigint;
                                    computation_charge: string | number | bigint;
                                    storage_rebate: string | number | bigint;
                                    non_refundable_storage_fee: string | number | bigint;
                                    epoch_start_timestamp_ms: string | number | bigint;
                                    system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }, Iterable<Iterable<number> & {
                                        length: number;
                                    }> & {
                                        length: number;
                                    }]> & {
                                        length: number;
                                    };
                                };
                                Genesis: {
                                    objects: Iterable<{
                                        RawObject: {
                                            data: import("@mysten/bcs").EnumInputShape<{
                                                Move: {
                                                    type: import("@mysten/bcs").EnumInputShape<{
                                                        Other: {
                                                            address: Iterable<number> & {
                                                                length: number;
                                                            };
                                                            module: string;
                                                            name: string;
                                                            type_args: Iterable<any> & {
                                                                length: number;
                                                            };
                                                        };
                                                        GasCoin: unknown;
                                                        StakedSui: unknown;
                                                        Coin: unknown;
                                                    }>;
                                                    has_public_transfer: boolean;
                                                    version: string | number | bigint;
                                                    contents: Iterable<number> & {
                                                        length: number;
                                                    };
                                                };
                                                Package: {
                                                    id: Iterable<number> & {
                                                        length: number;
                                                    };
                                                    version: string | number | bigint;
                                                    module_map: Map<string, Iterable<number> & {
                                                        length: number;
                                                    }>;
                                                    type_origin_table: Iterable<{
                                                        module_name: string;
                                                        datatype_name: string;
                                                        package: Iterable<number> & {
                                                            length: number;
                                                        };
                                                    }> & {
                                                        length: number;
                                                    };
                                                    linkage_table: Map<Iterable<number> & {
                                                        length: number;
                                                    }, {
                                                        upgraded_id: Iterable<number> & {
                                                            length: number;
                                                        };
                                                        upgraded_version: string | number | bigint;
                                                    }>;
                                                };
                                            }>;
                                            owner: import("@mysten/bcs").EnumInputShape<{
                                                AddressOwner: Iterable<number> & {
                                                    length: number;
                                                };
                                                ObjectOwner: Iterable<number> & {
                                                    length: number;
                                                };
                                                Shared: {
                                                    initial_shared_version: string | number | bigint;
                                                };
                                                Immutable: unknown;
                                            }>;
                                        };
                                    }> & {
                                        length: number;
                                    };
                                };
                                ConsensusCommitPrologue: {
                                    epoch: string | number | bigint;
                                    round: string | number | bigint;
                                    commit_timestamp_ms: string | number | bigint;
                                };
                                AuthenticatorStateUpdate: {
                                    epoch: string | number | bigint;
                                    round: string | number | bigint;
                                    new_active_jwks: Iterable<{
                                        jwk_id: {
                                            iss: string;
                                            kid: string;
                                        };
                                        jwk: {
                                            kty: string;
                                            e: string;
                                            n: string;
                                            alg: string;
                                        };
                                        epoch: string | number | bigint;
                                    }> & {
                                        length: number;
                                    };
                                    authenticator_obj_initial_shared_version: string | number | bigint;
                                };
                                EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    ChangeEpoch: {
                                        epoch: string | number | bigint;
                                        protocol_version: string | number | bigint;
                                        storage_charge: string | number | bigint;
                                        computation_charge: string | number | bigint;
                                        storage_rebate: string | number | bigint;
                                        non_refundable_storage_fee: string | number | bigint;
                                        epoch_start_timestamp_ms: string | number | bigint;
                                        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                            length: number;
                                        }> & {
                                            length: number;
                                        }, Iterable<Iterable<number> & {
                                            length: number;
                                        }> & {
                                            length: number;
                                        }]> & {
                                            length: number;
                                        };
                                    };
                                    AuthenticatorStateCreate: unknown;
                                    AuthenticatorStateExpire: {
                                        min_epoch: string | number | bigint;
                                        authenticator_obj_initial_shared_version: string | number | bigint;
                                    };
                                    RandomnessStateCreate: unknown;
                                    DenyListStateCreate: unknown;
                                    BridgeStateCreate: Iterable<number> & {
                                        length: number;
                                    };
                                    BridgeCommitteeInit: string | number | bigint;
                                }>> & {
                                    length: number;
                                };
                                RandomnessStateUpdate: {
                                    epoch: string | number | bigint;
                                    randomness_round: string | number | bigint;
                                    random_bytes: Iterable<number> & {
                                        length: number;
                                    };
                                    randomness_obj_initial_shared_version: string | number | bigint;
                                };
                                ConsensusCommitPrologueV2: {
                                    epoch: string | number | bigint;
                                    round: string | number | bigint;
                                    commit_timestamp_ms: string | number | bigint;
                                    consensus_commit_digest: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                ConsensusCommitPrologueV3: {
                                    epoch: string | number | bigint;
                                    round: string | number | bigint;
                                    sub_dag_index: string | number | bigint;
                                    commit_timestamp_ms: string | number | bigint;
                                    consensus_commit_digest: Iterable<number> & {
                                        length: number;
                                    };
                                    consensus_determined_version_assignments: {
                                        CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                            length: number;
                                        }, Iterable<readonly [Iterable<number> & {
                                            length: number;
                                        }, string | number | bigint]> & {
                                            length: number;
                                        }]> & {
                                            length: number;
                                        };
                                    };
                                };
                            }>;
                            sender: Iterable<number> & {
                                length: number;
                            };
                            gas_data: {
                                payment: Iterable<readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }]> & {
                                    length: number;
                                };
                                owner: Iterable<number> & {
                                    length: number;
                                };
                                price: string | number | bigint;
                                budget: string | number | bigint;
                            };
                            expiration: import("@mysten/bcs").EnumInputShape<{
                                None: unknown;
                                Epoch: string | number | bigint;
                            }>;
                        };
                    };
                };
                tx_signatures: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
            }> & {
                length: number;
            };
            auth_signature: {};
        };
        effects: import("@mysten/bcs").EnumInputShape<{
            V1: {
                status: import("@mysten/bcs").EnumInputShape<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumInputShape<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            MovePackageTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            CircularObjectOwnership: {
                                object: Iterable<number> & {
                                    length: number;
                                };
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: readonly [{
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string | number | bigint];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                }>;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }>;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                    UnableToFetchPackage: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    NotAPackage: {
                                        object_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                        ticket_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                };
                            };
                            AddressDeniedForCoin: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computationCost: string | number | bigint;
                    storageCost: string | number | bigint;
                    storageRebate: string | number | bigint;
                    nonRefundableStorageFee: string | number | bigint;
                };
                modified_at_versions: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                };
                shared_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                created: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>]> & {
                    length: number;
                };
                mutated: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>]> & {
                    length: number;
                };
                unwrapped: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>]> & {
                    length: number;
                };
                deleted: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                unwrapped_then_deleted: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                wrapped: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                gas_object: readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                }>];
                events_digest: Iterable<number> & {
                    length: number;
                };
                dependencies: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
            };
            V2: {
                status: import("@mysten/bcs").EnumInputShape<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumInputShape<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            MovePackageTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            CircularObjectOwnership: {
                                object: Iterable<number> & {
                                    length: number;
                                };
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: readonly [{
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string | number | bigint];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                }>;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }>;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                    UnableToFetchPackage: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    NotAPackage: {
                                        object_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                        ticket_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                };
                            };
                            AddressDeniedForCoin: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computationCost: string | number | bigint;
                    storageCost: string | number | bigint;
                    storageRebate: string | number | bigint;
                    nonRefundableStorageFee: string | number | bigint;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                gas_object_index: number;
                events_digest: Iterable<number> & {
                    length: number;
                };
                dependencies: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
                lamport_version: string | number | bigint;
                changed_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, {
                    input_state: import("@mysten/bcs").EnumInputShape<{
                        NotExist: unknown;
                        Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }], import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                        }>];
                    }>;
                    output_state: import("@mysten/bcs").EnumInputShape<{
                        NotExist: unknown;
                        ObjectWrite: readonly [Iterable<number> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                        }>];
                        PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                    }>;
                    id_operation: import("@mysten/bcs").EnumInputShape<{
                        None: unknown;
                        Created: unknown;
                        Deleted: unknown;
                    }>;
                }]> & {
                    length: number;
                };
                unchanged_shared_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    MutateDeleted: string | number | bigint;
                    ReadDeleted: string | number | bigint;
                    Cancelled: string | number | bigint;
                    PerEpochConfig: unknown;
                }>]> & {
                    length: number;
                };
                aux_data_digest: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }> & {
        length: number;
    };
    user_signatures: Iterable<Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }> & {
        length: number;
    };
}>;
export const ZkLoginPublicIdentifier: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}>;
export const PublicKey: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Ed25519: number[];
    Secp256k1: number[];
    Secp256r1: number[];
    ZkLogin: number[];
}, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">, import("@mysten/bcs").EnumInputShape<{
    Ed25519: Iterable<number> & {
        length: number;
    };
    Secp256k1: Iterable<number> & {
        length: number;
    };
    Secp256r1: Iterable<number> & {
        length: number;
    };
    ZkLogin: Iterable<number> & {
        length: number;
    };
}>>;
export const MultiSigPublicKey: import("@mysten/bcs").BcsType<{
    pk_map: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Ed25519: number[];
        Secp256k1: number[];
        Secp256r1: number[];
        ZkLogin: number[];
    }, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">, number][];
    threshold: number;
}, {
    pk_map: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
        Ed25519: Iterable<number> & {
            length: number;
        };
        Secp256k1: Iterable<number> & {
            length: number;
        };
        Secp256r1: Iterable<number> & {
            length: number;
        };
        ZkLogin: Iterable<number> & {
            length: number;
        };
    }>, number]> & {
        length: number;
    };
    threshold: number;
}>;
export const MultiSig: import("@mysten/bcs").BcsType<{
    sigs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Ed25519: number[];
        Secp256k1: number[];
        Secp256r1: number[];
        ZkLogin: number[];
    }, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">[];
    bitmap: number;
    multisig_pk: {
        pk_map: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Ed25519: number[];
            Secp256k1: number[];
            Secp256r1: number[];
            ZkLogin: number[];
        }, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">, number][];
        threshold: number;
    };
}, {
    sigs: Iterable<import("@mysten/bcs").EnumInputShape<{
        Ed25519: Iterable<number> & {
            length: number;
        };
        Secp256k1: Iterable<number> & {
            length: number;
        };
        Secp256r1: Iterable<number> & {
            length: number;
        };
        ZkLogin: Iterable<number> & {
            length: number;
        };
    }>> & {
        length: number;
    };
    bitmap: number;
    multisig_pk: {
        pk_map: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
            Ed25519: Iterable<number> & {
                length: number;
            };
            Secp256k1: Iterable<number> & {
                length: number;
            };
            Secp256r1: Iterable<number> & {
                length: number;
            };
            ZkLogin: Iterable<number> & {
                length: number;
            };
        }>, number]> & {
            length: number;
        };
        threshold: number;
    };
}>;
export const ObjectInfoRequestKind: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    LatestObjectInfo: unknown;
    PastObjectInfoDebug: string;
}, "LatestObjectInfo" | "PastObjectInfoDebug">, import("@mysten/bcs").EnumInputShape<{
    LatestObjectInfo: unknown;
    PastObjectInfoDebug: string | number | bigint;
}>>;
export const TypedStoreError: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    RocksDBError: string;
    SerializationError: string;
    UnregisteredColumn: string;
    CrossDBBatch: unknown;
    MetricsReporting: unknown;
    RetryableTransactionError: unknown;
}, "RocksDBError" | "SerializationError" | "UnregisteredColumn" | "CrossDBBatch" | "MetricsReporting" | "RetryableTransactionError">, import("@mysten/bcs").EnumInputShape<{
    RocksDBError: string;
    SerializationError: string;
    UnregisteredColumn: string;
    CrossDBBatch: unknown;
    MetricsReporting: unknown;
    RetryableTransactionError: unknown;
}>>;
