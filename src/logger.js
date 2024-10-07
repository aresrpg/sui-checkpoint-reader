import { dirname, relative } from 'path'
import { fileURLToPath } from 'url'

import pino from 'pino'

const { PINO_TOKEN } = process.env

const root = dirname(fileURLToPath(import.meta.url))
const strip_extension = path => path.slice(0, path.lastIndexOf('.'))

// specifying PINO_TOKEN allows for integration with Logtail
// at AresRPG we use BetterStack.com
const logtail_transport = PINO_TOKEN
  ? pino.transport({
      target: '@logtail/pino',
      options: { sourceToken: PINO_TOKEN },
    })
  : null

/**
 * Creates a Pino logger instance with console and Logtail output
 * @param {{url?: string|URL|null, name?: string}} options - The options for creating the logger
 * @returns {import('pino').Logger}
 */
export default function logger({
  url = null,
  name = strip_extension(relative(root, fileURLToPath(url))),
}) {
  const streams = [{ stream: process.stdout, level: 'debug' }]

  if (PINO_TOKEN) streams.push({ stream: logtail_transport, level: 'trace' })

  // @ts-ignore
  return pino(
    {
      base: { name },
      level: 'trace',
    },
    pino.multistream(streams),
  )
}
