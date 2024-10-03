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
