export namespace async_iterable {
    /**
     * Creates an asynchronous iterable from a given iterable or async iterator.
     * @template T
     * @param {Iterable<T> | AsyncIterable<T> | AsyncIterator<T>} input - The input iterable or async iterator.
     * @returns {AsyncIterableHelper<T>}
     */
    function from<T>(input: Iterable<T> | AsyncIterable<T> | AsyncIterator<T>): AsyncIterableHelper<T>;
    /**
     * Converts an input to an async iterable if it is not already.
     * @template T
     * @param {Iterable<T> | AsyncIterable<T> | AsyncIterator<T>} input - The input iterable or async iterator.
     * @returns {AsyncIterable<T>}
     */
    function _to_async_iterable<T>(input: Iterable<T> | AsyncIterable<T> | AsyncIterator<T>): AsyncIterable<T>;
}
export type AsyncIterableHelper<T> = {
    /**
     * - The internal async iterable.
     */
    iterable: AsyncIterable<T>;
    /**
     * - Maps each item using the provided async function.
     */
    map: <U>(mapper: (item: T) => U | Promise<U>) => AsyncIterableHelper<U>;
    /**
     * - Maps and flattens each item using the provided async function.
     */
    flat_map: <U>(mapper: (item: T) => U[] | Iterable<U> | AsyncIterable<U> | Promise<U[]> | Promise<Iterable<U>>) => AsyncIterableHelper<U>;
    /**
     * - Filters each item using the provided async predicate function.
     */
    filter: (predicate: (item: T) => boolean | Promise<boolean>) => AsyncIterableHelper<T>;
    /**
     * - Performs the provided async function once for each item of the iterable.
     */
    for_each: (action: (item: T) => void | Promise<void>) => Promise<void>;
    /**
     * - Converts the iterable to an array.
     */
    to_array: () => Promise<T[]>;
    /**
     * - Reduces the iterable to a single value using the provided async reducer function.
     */
    reduce: <U>(reducer: (acc: U, item: T) => U | Promise<U>, initialValue: U) => Promise<U>;
};
