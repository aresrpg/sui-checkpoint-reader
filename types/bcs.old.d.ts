export const SuiAddress: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
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
                        type_params: any[];
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
                        type_params: Iterable<any> & {
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
                                kind: string;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: string;
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
                                upgrade_error: string;
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
                                congested_objects: string;
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                        }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computation_cost: string;
                    storage_cost: string;
                    storage_rebate: string;
                    non_refundable_storage_fee: string;
                };
                modified_at_versions: [number[], string][];
                shared_objects: {
                    address: number[];
                    version: string;
                    digest: number[];
                }[];
                transaction_digest: number[];
                created: [{
                    address: number[];
                    version: string;
                    digest: number[];
                }, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
                mutated: [{
                    address: number[];
                    version: string;
                    digest: number[];
                }, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
                unwrapped: [{
                    address: number[];
                    version: string;
                    digest: number[];
                }, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                }, "AddressOwner" | "ObjectOwner" | "Shared" | "Immutable">][];
                deleted: {
                    address: number[];
                    version: string;
                    digest: number[];
                }[];
                unwrapped_then_deleted: {
                    address: number[];
                    version: string;
                    digest: number[];
                }[];
                wrapped: {
                    address: number[];
                    version: string;
                    digest: number[];
                }[];
                gas_object: [{
                    address: number[];
                    version: string;
                    digest: number[];
                }, import("@mysten/bcs").EnumOutputShapeWithKeys<{
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
                                kind: string;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: string;
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
                                upgrade_error: string;
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
                                congested_objects: string;
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                        }, "SharedObjectOperationNotAllowed" | "CommandArgumentError" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "InvalidTransferObject" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computation_cost: string;
                    storage_cost: string;
                    storage_rebate: string;
                    non_refundable_storage_fee: string;
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
                    type_params: any[];
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
                            type_params: any[];
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
                            type_params: any[];
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
                                kind: string;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: string;
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
                                upgrade_error: string;
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
                                congested_objects: string;
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
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computation_cost: string | number | bigint;
                    storage_cost: string | number | bigint;
                    storage_rebate: string | number | bigint;
                    non_refundable_storage_fee: string | number | bigint;
                };
                modified_at_versions: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                };
                shared_objects: Iterable<{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                created: Iterable<readonly [{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
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
                }>]> & {
                    length: number;
                };
                mutated: Iterable<readonly [{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
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
                }>]> & {
                    length: number;
                };
                unwrapped: Iterable<readonly [{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
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
                }>]> & {
                    length: number;
                };
                deleted: Iterable<{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                unwrapped_then_deleted: Iterable<{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                wrapped: Iterable<{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                gas_object: readonly [{
                    address: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    digest: Iterable<number> & {
                        length: number;
                    };
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
                                kind: string;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: string;
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
                                upgrade_error: string;
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
                                congested_objects: string;
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
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computation_cost: string | number | bigint;
                    storage_cost: string | number | bigint;
                    storage_rebate: string | number | bigint;
                    non_refundable_storage_fee: string | number | bigint;
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
                    type_params: Iterable<any> & {
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
                            type_params: Iterable<any> & {
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
                            type_params: Iterable<any> & {
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
