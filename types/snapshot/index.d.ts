export function get_db(db_folder?: string): ClassicLevel<string, string>;
export function download_and_store_objects({ network, epoch, known_types, save_objects, start_bucket, start_part, concurrent_downloads, obj_folder, include_refs, db, }: {
    network: any;
    epoch: any;
    known_types: any;
    save_objects?: boolean;
    start_bucket?: number;
    start_part?: number;
    concurrent_downloads?: number;
    obj_folder?: string;
    include_refs?: boolean;
    db: any;
}): Promise<void>;
export function read_snapshot_objects(db: any): AsyncGenerator<any, void, unknown>;
import { ClassicLevel } from 'classic-level';
