export function parse_reference({ buffer, file_compression }: {
    buffer: any;
    file_compression: any;
}): Promise<{
    address: string;
    version: bigint;
    digest: string;
}[]>;
export function parse_objects({ buffer, file_compression }: {
    buffer: any;
    file_compression: any;
}): Promise<({
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
    Wrapped?: never;
    $kind: "Normal";
} | {
    Wrapped: {
        object_id: number[];
        version: string;
    };
    Normal?: never;
    $kind: "Wrapped";
})[]>;
