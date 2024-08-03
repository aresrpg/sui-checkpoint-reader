export function get_db(db_folder?: string): ClassicLevel<string, string>;
export function download_and_store_objects({ network, epoch, known_types, save_objects, start_bucket, start_part, concurrent_downloads, db_folder, obj_folder, }: {
    network: any;
    epoch: any;
    known_types: any;
    save_objects?: boolean;
    start_bucket?: number;
    start_part?: number;
    concurrent_downloads?: number;
    db_folder?: string;
    obj_folder?: string;
}): Promise<void>;
export function read_snapshot_objects(db_folder?: string): AsyncGenerator<any, void, unknown>;
import { ClassicLevel } from 'classic-level';
