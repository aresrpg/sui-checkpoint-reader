import { readdirSync, statSync, existsSync } from 'fs'
import path from 'path'

export function get_local_checkpoints(checkpoints_folder) {
  const file_paths = []

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

  file_paths.sort((a, b) => {
    const numA = parseInt(path.basename(a, '.chk'), 10)
    const numB = parseInt(path.basename(b, '.chk'), 10)
    return numA - numB
  })

  return file_paths
}
