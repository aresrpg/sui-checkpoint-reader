declare namespace _default {
    namespace ascii {
        let Char: import("@mysten/bcs").BcsType<{
            byte: number;
        }, {
            byte: number;
        }>;
        let String: import("@mysten/bcs").BcsType<{
            bytes: number[];
        }, {
            bytes: Iterable<number> & {
                length: number;
            };
        }>;
    }
    namespace bit_vector {
        let BitVector: import("@mysten/bcs").BcsType<{
            length: string;
            bit_field: boolean[];
        }, {
            length: string | number | bigint;
            bit_field: Iterable<boolean> & {
                length: number;
            };
        }>;
    }
    namespace fixed_point32 {
        let FixedPoint32: import("@mysten/bcs").BcsType<{
            value: string;
        }, {
            value: string | number | bigint;
        }>;
    }
    namespace option {
        function Option(T0: any): import("@mysten/bcs").BcsType<{
            vec: any[];
        }, {
            vec: Iterable<any> & {
                length: number;
            };
        }>;
    }
    namespace string {
        let String_1: import("@mysten/bcs").BcsType<{
            bytes: number[];
        }, {
            bytes: Iterable<number> & {
                length: number;
            };
        }>;
        export { String_1 as String };
    }
    namespace type_name {
        let TypeName: import("@mysten/bcs").BcsType<{
            name: {
                bytes: number[];
            };
        }, {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }
}
export default _default;
