import { readdirSync, statSync, existsSync } from 'fs'
import path from 'path'

import logger from './logger.js'

const log = logger(import.meta)

export function get_local_checkpoints(checkpoints_folder) {
  const file_paths = []

  log.info({ checkpoints_folder }, 'Reading local checkpoints')

  const read_directory = directory => {
    const items = readdirSync(directory)
    for (const item of items) {
      const full_path = path.join(directory, item)
      const stat = statSync(full_path)

      if (stat.isDirectory()) {
        read_directory(full_path)
      } else if (item.endsWith('.chk')) {
        file_paths.push(full_path)
      }
    }
  }

  if (existsSync(checkpoints_folder)) read_directory(checkpoints_folder)

  log.info({ file_paths: file_paths.length }, 'Found files')

  return file_paths
    .map(file_path => +path.basename(file_path, '.chk'))
    .sort((a, b) => a - b)
}
