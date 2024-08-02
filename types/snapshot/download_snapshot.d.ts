export function download_snapshot({ network, epoch, concurrent_downloads, save, start_bucket, start_part, obj_folder, }: {
    network: any;
    epoch: any;
    concurrent_downloads?: number;
    save: any;
    start_bucket: any;
    start_part: any;
    obj_folder: any;
}): AsyncGenerator<{
    bucket_num: number;
    part_num: number;
    buffer: Buffer;
    file_compression: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        None: unknown;
        Zstd: unknown;
    }, "None" | "Zstd">;
    file_type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Object: unknown;
        Reference: unknown;
    }, "Object" | "Reference">;
    sha3_digest: number[];
}[], void, unknown>;
