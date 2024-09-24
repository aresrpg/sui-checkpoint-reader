export function IntentMessage(value: any): import("@mysten/bcs").BcsType<{
    intent: {
        scope: number;
        version: number;
        app_id: number;
    };
    value: unknown;
}, {
    intent: {
        scope: number;
        version: number;
        app_id: number;
    };
    value: unknown;
}>;
export const LiveObject: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
    Normal: {
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
        previous_transaction: number[];
        storage_rebate: string;
    };
    Wrapped: {
        object_id: number[];
        version: string;
    };
}, "Normal" | "Wrapped">, import("@mysten/bcs").EnumInputShape<{
    Normal: {
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
        previous_transaction: Iterable<number> & {
            length: number;
        };
        storage_rebate: string | number | bigint;
    };
    Wrapped: {
        object_id: Iterable<number> & {
            length: number;
        };
        version: string | number | bigint;
    };
}>>;
export const Manifest: import("@mysten/bcs").BcsType<{
    V1: {
        snapshot_version: number;
        address_length: string;
        file_metadata: {
            file_type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Object: unknown;
                Reference: unknown;
            }, "Object" | "Reference">;
            bucket_num: number;
            part_num: number;
            file_compression: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                None: unknown;
                Zstd: unknown;
            }, "None" | "Zstd">;
            sha3_digest: number[];
        }[];
        epoch: string;
    };
    $kind: "V1";
}, {
    V1: {
        snapshot_version: number;
        address_length: string | number | bigint;
        file_metadata: Iterable<{
            file_type: import("@mysten/bcs").EnumInputShape<{
                Object: unknown;
                Reference: unknown;
            }>;
            bucket_num: number;
            part_num: number;
            file_compression: import("@mysten/bcs").EnumInputShape<{
                None: unknown;
                Zstd: unknown;
            }>;
            sha3_digest: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        };
        epoch: string | number | bigint;
    };
}>;
export const CheckpointData: import("@mysten/bcs").BcsType<{
    checkpoint_summary: {
        data: unknown;
        auth_signature: unknown;
    };
    checkpoint_contents: {
        V1: {
            transactions: {
                transaction: number[];
                effects: number[];
            }[];
            user_signatures: number[][][];
        };
        $kind: "V1";
    };
    transactions: {
        transaction: {
            data: unknown;
            auth_signature: unknown;
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
        events: {
            data: {
                package_id: number[];
                transaction_module: string;
                sender: number[];
                type: {
                    address: number[];
                    module: string;
                    name: string;
                    type_args: any[];
                };
                contents: number[];
            }[];
        };
        input_objects: {
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
            previous_transaction: number[];
            storage_rebate: string;
        }[];
        output_objects: {
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
            previous_transaction: number[];
            storage_rebate: string;
        }[];
    }[];
}, {
    checkpoint_summary: {
        data: unknown;
        auth_signature: unknown;
    };
    checkpoint_contents: {
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
    };
    transactions: Iterable<{
        transaction: {
            data: unknown;
            auth_signature: unknown;
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
        events: {
            data: Iterable<{
                package_id: Iterable<number> & {
                    length: number;
                };
                transaction_module: string;
                sender: Iterable<number> & {
                    length: number;
                };
                type: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    module: string;
                    name: string;
                    type_args: Iterable<any> & {
                        length: number;
                    };
                };
                contents: Iterable<number> & {
                    length: number;
                };
            }> & {
                length: number;
            };
        };
        input_objects: Iterable<{
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
            previous_transaction: Iterable<number> & {
                length: number;
            };
            storage_rebate: string | number | bigint;
        }> & {
            length: number;
        };
        output_objects: Iterable<{
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
            previous_transaction: Iterable<number> & {
                length: number;
            };
            storage_rebate: string | number | bigint;
        }> & {
            length: number;
        };
    }> & {
        length: number;
    };
}>;
