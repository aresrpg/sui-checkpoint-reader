/**
 * Creates a Pino logger instance with console and Logtail output
 * @param {{url?: string|URL|null, name?: string}} options - The options for creating the logger
 * @returns {import('pino').Logger}
 */
export default function logger({ url, name, }: {
    url?: string | URL | null;
    name?: string;
}): import("pino").Logger;
