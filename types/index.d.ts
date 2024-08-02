export function format_objects(objects: any, known_types: any): any;
export function read_checkpoints({ from, to, get_remote_checkpoint, concurrent_downloads, known_types, object_filter, checkpoints_folder, process_checkpoint, cleanup_checkpoints, }: {
    from?: number;
    to?: number;
    get_remote_checkpoint?: (num: any) => Promise<ArrayBuffer>;
    concurrent_downloads?: number;
    known_types?: {};
    object_filter?: () => boolean;
    checkpoints_folder?: string;
    process_checkpoint?: (data: any, index: any) => Promise<void>;
    cleanup_checkpoints?: boolean;
}): Promise<void>;
export function premap_transaction(transaction: any): any;
