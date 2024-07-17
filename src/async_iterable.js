/**
 * @template T
 * @typedef {Object} AsyncIterableHelper
 * @property {AsyncIterable<T>} iterable - The internal async iterable.
 * @property {<U>(mapper: (item: T) => U | Promise<U>) => AsyncIterableHelper<U>} map - Maps each item using the provided async function.
 * @property {<U>(mapper: (item: T) => U[] | Iterable<U> | AsyncIterable<U> | Promise<U[]> | Promise<Iterable<U>>) => AsyncIterableHelper<U>} flat_map - Maps and flattens each item using the provided async function.
 * @property {(predicate: (item: T) => boolean | Promise<boolean>) => AsyncIterableHelper<T>} filter - Filters each item using the provided async predicate function.
 * @property {(action: (item: T) => void | Promise<void>) => Promise<void>} for_each - Performs the provided async function once for each item of the iterable.
 * @property {() => Promise<T[]>} to_array - Converts the iterable to an array.
 * @property {<U>(reducer: (acc: U, item: T) => U | Promise<U>, initialValue: U) => Promise<U>} reduce - Reduces the iterable to a single value using the provided async reducer function.
 */

export const async_iterable = {
  /**
   * Creates an asynchronous iterable from a given iterable or async iterator.
   * @template T
   * @param {Iterable<T> | AsyncIterable<T> | AsyncIterator<T>} input - The input iterable or async iterator.
   * @returns {AsyncIterableHelper<T>}
   */
  from(input) {
    return {
      iterable: async_iterable._to_async_iterable(input),

      /**
       * Maps each item of the iterable using the provided async function.
       * @template U
       * @param {function(T): U | Promise<U>} mapper - The async function to apply to each item.
       * @returns {AsyncIterableHelper<U>}
       */
      map(mapper) {
        return async_iterable.from(
          async function* () {
            for await (const item of this.iterable) {
              yield await mapper(item)
            }
          }.call(this),
        )
      },

      /**
       * Maps each item of the iterable to an array or iterable using the provided async function and flattens the result.
       * @template U
       * @param {function(T): U[] | Iterable<U> | AsyncIterable<U> | Promise<U[]> | Promise<Iterable<U>>} mapper - The async function to apply to each item.
       * @returns {AsyncIterableHelper<U>}
       */
      flat_map(mapper) {
        return async_iterable.from(
          async function* () {
            for await (const item of this.iterable) {
              const mapped = await mapper(item)
              if (Symbol.asyncIterator in mapped) {
                for await (const sub_item of mapped) {
                  yield sub_item
                }
              } else if (Symbol.iterator in mapped) {
                for (const sub_item of mapped) {
                  yield sub_item
                }
              }
            }
          }.call(this),
        )
      },

      /**
       * Filters each item of the iterable using the provided async predicate function.
       * @param {function(T): boolean | Promise<boolean>} predicate - The async function to test each item.
       * @returns {AsyncIterableHelper<T>}
       */
      filter(predicate) {
        return async_iterable.from(
          async function* () {
            for await (const item of this.iterable) {
              if (await predicate(item)) {
                yield item
              }
            }
          }.call(this),
        )
      },

      /**
       * Performs the provided async function once for each item of the iterable.
       * @param {function(T): void | Promise<void>} action - The async function to perform for each item.
       * @returns {Promise<void>}
       */
      async for_each(action) {
        for await (const item of this.iterable) {
          await action(item)
        }
      },

      /**
       * Converts the iterable to an array.
       * @returns {Promise<T[]>}
       */
      async to_array() {
        const result = []
        for await (const item of this.iterable) {
          result.push(item)
        }
        return result
      },

      /**
       * Reduces the iterable to a single value using the provided async reducer function.
       * @template U
       * @param {function(U, T): U | Promise<U>} reducer - The async reducer function.
       * @param {U} initial_value - The initial value to start the reduction.
       * @returns {Promise<U>}
       */
      async reduce(reducer, initial_value) {
        let accumulator = initial_value
        for await (const item of this.iterable) {
          accumulator = await reducer(accumulator, item)
        }
        return accumulator
      },
    }
  },

  /**
   * Converts an input to an async iterable if it is not already.
   * @template T
   * @param {Iterable<T> | AsyncIterable<T> | AsyncIterator<T>} input - The input iterable or async iterator.
   * @returns {AsyncIterable<T>}
   */
  _to_async_iterable(input) {
    if (Symbol.asyncIterator in input) {
      return input
    }
    if (Symbol.iterator in input) {
      return (async function* () {
        for (const item of input) {
          yield item
        }
      })()
    }
    if (typeof input.next === 'function') {
      return (async function* () {
        let result
        while (!(result = await input.next()).done) {
          yield result.value
        }
      })()
    }
    throw new TypeError(
      'Input must be an Iterable, AsyncIterable, or AsyncIterator.',
    )
  },
}
