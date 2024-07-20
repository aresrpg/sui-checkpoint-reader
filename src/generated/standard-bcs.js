/* eslint-disable @typescript-eslint/naming-convention */
import { bcs } from '@mysten/bcs'

const String = bcs.struct('String', {
  bytes: bcs.vector(bcs.u8()),
})

export default {
  ascii: {
    Char: bcs.struct('Char', {
      byte: bcs.u8(),
    }),
    String: bcs.struct('String', {
      bytes: bcs.vector(bcs.u8()),
    }),
  },

  bit_vector: {
    BitVector: bcs.struct('BitVector', {
      length: bcs.u64(),
      bit_field: bcs.vector(bcs.bool()),
    }),
  },

  fixed_point32: {
    FixedPoint32: bcs.struct('FixedPoint32', {
      value: bcs.u64(),
    }),
  },

  option: {
    Option: T0 =>
      bcs.struct(`Option<>`, {
        vec: bcs.vector(T0),
      }),
  },

  string: {
    String: bcs.struct('String', {
      bytes: bcs.vector(bcs.u8()),
    }),
  },

  type_name: {
    TypeName: bcs.struct('TypeName', {
      name: String,
    }),
  },
}
