declare namespace _default {
    export namespace authenticator_state {
        let ActiveJwk: import("@mysten/bcs").BcsType<{
            jwk_id: {
                iss: {
                    bytes: number[];
                };
                kid: {
                    bytes: number[];
                };
            };
            jwk: {
                kty: {
                    bytes: number[];
                };
                e: {
                    bytes: number[];
                };
                n: {
                    bytes: number[];
                };
                alg: {
                    bytes: number[];
                };
            };
            epoch: string;
        }, {
            jwk_id: {
                iss: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                kid: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            jwk: {
                kty: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                e: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                n: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                alg: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            epoch: string | number | bigint;
        }>;
        let AuthenticatorState: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            version: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            version: string | number | bigint;
        }>;
        let AuthenticatorStateInner: import("@mysten/bcs").BcsType<{
            version: string;
            active_jwks: {
                jwk_id: {
                    iss: {
                        bytes: number[];
                    };
                    kid: {
                        bytes: number[];
                    };
                };
                jwk: {
                    kty: {
                        bytes: number[];
                    };
                    e: {
                        bytes: number[];
                    };
                    n: {
                        bytes: number[];
                    };
                    alg: {
                        bytes: number[];
                    };
                };
                epoch: string;
            }[];
        }, {
            version: string | number | bigint;
            active_jwks: Iterable<{
                jwk_id: {
                    iss: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    kid: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                };
                jwk: {
                    kty: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    e: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    n: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    alg: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                };
                epoch: string | number | bigint;
            }> & {
                length: number;
            };
        }>;
        let JWK: import("@mysten/bcs").BcsType<{
            kty: {
                bytes: number[];
            };
            e: {
                bytes: number[];
            };
            n: {
                bytes: number[];
            };
            alg: {
                bytes: number[];
            };
        }, {
            kty: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            e: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            n: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            alg: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
        let JwkId: import("@mysten/bcs").BcsType<{
            iss: {
                bytes: number[];
            };
            kid: {
                bytes: number[];
            };
        }, {
            iss: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            kid: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace bag {
        let Bag: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            size: string | number | bigint;
        }>;
    }
    export namespace balance {
        function Balance(T0: any): import("@mysten/bcs").BcsType<{
            value: string;
        }, {
            value: string | number | bigint;
        }>;
        function Supply(T0: any): import("@mysten/bcs").BcsType<{
            value: string;
        }, {
            value: string | number | bigint;
        }>;
    }
    export namespace bcs {
        let BCS: import("@mysten/bcs").BcsType<{
            bytes: number[];
        }, {
            bytes: Iterable<number> & {
                length: number;
            };
        }>;
    }
    export namespace bls12381 {
        let G1: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
        let G2: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
        let GT: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
        let Scalar: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
    }
    export namespace borrow {
        let Borrow: import("@mysten/bcs").BcsType<{
            ref: string;
            obj: {
                bytes: string;
            };
        }, {
            ref: any;
            obj: {
                bytes: any;
            };
        }>;
        function Referent(T0: any): import("@mysten/bcs").BcsType<{
            id: string;
            value: {
                vec: any[];
            };
        }, {
            id: any;
            value: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace clock {
        let Clock: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            timestamp_ms: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            timestamp_ms: string | number | bigint;
        }>;
    }
    export namespace coin {
        function Coin(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            balance: {
                value: string | number | bigint;
            };
        }>;
        function CoinMetadata(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            decimals: number;
            name: {
                bytes: number[];
            };
            symbol: {
                bytes: number[];
            };
            description: {
                bytes: number[];
            };
            icon_url: {
                vec: any[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            decimals: number;
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            symbol: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            description: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            icon_url: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
        }>;
        function CurrencyCreated(T0: any): import("@mysten/bcs").BcsType<{
            decimals: number;
        }, {
            decimals: number;
        }>;
        function DenyCap(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
        }>;
        function DenyCapV2(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            allow_global_pause: boolean;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            allow_global_pause: boolean;
        }>;
        function RegulatedCoinMetadata(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            coin_metadata_object: {
                bytes: string;
            };
            deny_cap_object: {
                bytes: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            coin_metadata_object: {
                bytes: any;
            };
            deny_cap_object: {
                bytes: any;
            };
        }>;
        function TreasuryCap(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            total_supply: {
                value: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            total_supply: {
                value: string | number | bigint;
            };
        }>;
    }
    export namespace config {
        function Config(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
        }>;
        function Setting(T0: any): import("@mysten/bcs").BcsType<{
            data: {
                vec: any[];
            };
        }, {
            data: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
        }>;
        function SettingData(T0: any): import("@mysten/bcs").BcsType<{
            newer_value_epoch: string;
            newer_value: {
                vec: any[];
            };
            older_value_opt: {
                vec: any[];
            };
        }, {
            newer_value_epoch: string | number | bigint;
            newer_value: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            older_value_opt: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace deny_list {
        let AddressKey: import("@mysten/bcs").BcsType<{
            pos0: string;
        }, {
            pos0: any;
        }>;
        let ConfigKey: import("@mysten/bcs").BcsType<{
            per_type_index: string;
            per_type_key: number[];
        }, {
            per_type_index: string | number | bigint;
            per_type_key: Iterable<number> & {
                length: number;
            };
        }>;
        let ConfigWriteCap: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
        let DenyList: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            lists: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            lists: {
                id: {
                    id: {
                        bytes: any;
                    };
                };
                size: string | number | bigint;
            };
        }>;
        let GlobalPauseKey: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
        let PerTypeConfigCreated: import("@mysten/bcs").BcsType<{
            key: {
                per_type_index: string;
                per_type_key: number[];
            };
            config_id: {
                bytes: string;
            };
        }, {
            key: {
                per_type_index: string | number | bigint;
                per_type_key: Iterable<number> & {
                    length: number;
                };
            };
            config_id: {
                bytes: any;
            };
        }>;
        let PerTypeList: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            denied_count: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
            denied_addresses: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            denied_count: {
                id: {
                    id: {
                        bytes: any;
                    };
                };
                size: string | number | bigint;
            };
            denied_addresses: {
                id: {
                    id: {
                        bytes: any;
                    };
                };
                size: string | number | bigint;
            };
        }>;
    }
    export namespace display {
        function Display(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            fields: {
                contents: {
                    key: unknown;
                    value: unknown;
                }[];
            };
            version: number;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            fields: {
                contents: Iterable<{
                    key: unknown;
                    value: unknown;
                }> & {
                    length: number;
                };
            };
            version: number;
        }>;
        function DisplayCreated(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
        }, {
            id: {
                bytes: any;
            };
        }>;
        function VersionUpdated(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
            version: number;
            fields: {
                contents: {
                    key: unknown;
                    value: unknown;
                }[];
            };
        }, {
            id: {
                bytes: any;
            };
            version: number;
            fields: {
                contents: Iterable<{
                    key: unknown;
                    value: unknown;
                }> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace dynamic_field {
        function Field(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            name: unknown;
            value: unknown;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            name: unknown;
            value: unknown;
        }>;
    }
    export namespace dynamic_object_field {
        function Wrapper(T0: any): import("@mysten/bcs").BcsType<{
            name: unknown;
        }, {
            name: unknown;
        }>;
    }
    export namespace groth16 {
        let Curve: import("@mysten/bcs").BcsType<{
            id: number;
        }, {
            id: number;
        }>;
        let PreparedVerifyingKey: import("@mysten/bcs").BcsType<{
            vk_gamma_abc_g1_bytes: number[];
            alpha_g1_beta_g2_bytes: number[];
            gamma_g2_neg_pc_bytes: number[];
            delta_g2_neg_pc_bytes: number[];
        }, {
            vk_gamma_abc_g1_bytes: Iterable<number> & {
                length: number;
            };
            alpha_g1_beta_g2_bytes: Iterable<number> & {
                length: number;
            };
            gamma_g2_neg_pc_bytes: Iterable<number> & {
                length: number;
            };
            delta_g2_neg_pc_bytes: Iterable<number> & {
                length: number;
            };
        }>;
        let ProofPoints: import("@mysten/bcs").BcsType<{
            bytes: number[];
        }, {
            bytes: Iterable<number> & {
                length: number;
            };
        }>;
        let PublicProofInputs: import("@mysten/bcs").BcsType<{
            bytes: number[];
        }, {
            bytes: Iterable<number> & {
                length: number;
            };
        }>;
    }
    export namespace group_ops {
        function Element(T0: any): import("@mysten/bcs").BcsType<{
            bytes: number[];
        }, {
            bytes: Iterable<number> & {
                length: number;
            };
        }>;
    }
    export namespace kiosk {
        let Borrow_1: import("@mysten/bcs").BcsType<{
            kiosk_id: {
                bytes: string;
            };
            item_id: {
                bytes: string;
            };
        }, {
            kiosk_id: {
                bytes: any;
            };
            item_id: {
                bytes: any;
            };
        }>;
        export { Borrow_1 as Borrow };
        export let Item: import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
        }, {
            id: {
                bytes: any;
            };
        }>;
        export function ItemDelisted(T0: any): import("@mysten/bcs").BcsType<{
            kiosk: {
                bytes: string;
            };
            id: {
                bytes: string;
            };
        }, {
            kiosk: {
                bytes: any;
            };
            id: {
                bytes: any;
            };
        }>;
        export function ItemListed(T0: any): import("@mysten/bcs").BcsType<{
            kiosk: {
                bytes: string;
            };
            id: {
                bytes: string;
            };
            price: string;
        }, {
            kiosk: {
                bytes: any;
            };
            id: {
                bytes: any;
            };
            price: string | number | bigint;
        }>;
        export function ItemPurchased(T0: any): import("@mysten/bcs").BcsType<{
            kiosk: {
                bytes: string;
            };
            id: {
                bytes: string;
            };
            price: string;
        }, {
            kiosk: {
                bytes: any;
            };
            id: {
                bytes: any;
            };
            price: string | number | bigint;
        }>;
        export let Kiosk: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            profits: {
                value: string;
            };
            owner: string;
            item_count: number;
            allow_extensions: boolean;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            profits: {
                value: string | number | bigint;
            };
            owner: any;
            item_count: number;
            allow_extensions: boolean;
        }>;
        export let KioskOwnerCap: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            for: {
                bytes: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            for: {
                bytes: any;
            };
        }>;
        export let Listing: import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
            is_exclusive: boolean;
        }, {
            id: {
                bytes: any;
            };
            is_exclusive: boolean;
        }>;
        export let Lock: import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
        }, {
            id: {
                bytes: any;
            };
        }>;
        export function PurchaseCap(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            kiosk_id: {
                bytes: string;
            };
            item_id: {
                bytes: string;
            };
            min_price: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            kiosk_id: {
                bytes: any;
            };
            item_id: {
                bytes: any;
            };
            min_price: string | number | bigint;
        }>;
    }
    export namespace kiosk_extension {
        let Extension: import("@mysten/bcs").BcsType<{
            storage: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
            permissions: string;
            is_enabled: boolean;
        }, {
            storage: {
                id: {
                    id: {
                        bytes: any;
                    };
                };
                size: string | number | bigint;
            };
            permissions: string | number | bigint;
            is_enabled: boolean;
        }>;
        function ExtensionKey(T0: any): import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
    }
    export namespace linked_table {
        function LinkedTable(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
            head: {
                vec: any[];
            };
            tail: {
                vec: any[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            size: string | number | bigint;
            head: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            tail: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
        }>;
        function Node(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            prev: {
                vec: any[];
            };
            next: {
                vec: any[];
            };
            value: unknown;
        }, {
            prev: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            next: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            value: unknown;
        }>;
    }
    export namespace object {
        let ID: import("@mysten/bcs").BcsType<{
            bytes: string;
        }, {
            bytes: any;
        }>;
        let UID: import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
        }, {
            id: {
                bytes: any;
            };
        }>;
    }
    export namespace object_bag {
        let ObjectBag: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            size: string | number | bigint;
        }>;
    }
    export namespace object_table {
        function ObjectTable(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            size: string | number | bigint;
        }>;
    }
    export namespace _package {
        let Publisher: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            package: {
                bytes: number[];
            };
            module_name: {
                bytes: number[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            package: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            module_name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
        let UpgradeCap: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            package: {
                bytes: string;
            };
            version: string;
            policy: number;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            package: {
                bytes: any;
            };
            version: string | number | bigint;
            policy: number;
        }>;
        let UpgradeReceipt: import("@mysten/bcs").BcsType<{
            cap: {
                bytes: string;
            };
            package: {
                bytes: string;
            };
        }, {
            cap: {
                bytes: any;
            };
            package: {
                bytes: any;
            };
        }>;
        let UpgradeTicket: import("@mysten/bcs").BcsType<{
            cap: {
                bytes: string;
            };
            package: {
                bytes: string;
            };
            policy: number;
            digest: number[];
        }, {
            cap: {
                bytes: any;
            };
            package: {
                bytes: any;
            };
            policy: number;
            digest: Iterable<number> & {
                length: number;
            };
        }>;
    }
    export { _package as package };
    export namespace priority_queue {
        function Entry(T0: any): import("@mysten/bcs").BcsType<{
            priority: string;
            value: unknown;
        }, {
            priority: string | number | bigint;
            value: unknown;
        }>;
        function PriorityQueue(T0: any): import("@mysten/bcs").BcsType<{
            entries: {
                key: unknown;
                value: unknown;
            }[];
        }, {
            entries: Iterable<{
                key: unknown;
                value: unknown;
            }> & {
                length: number;
            };
        }>;
    }
    export namespace random {
        let Random: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            inner: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                version: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            inner: {
                id: {
                    id: {
                        bytes: any;
                    };
                };
                version: string | number | bigint;
            };
        }>;
        let RandomGenerator: import("@mysten/bcs").BcsType<{
            seed: number[];
            counter: number;
            buffer: number[];
        }, {
            seed: Iterable<number> & {
                length: number;
            };
            counter: number;
            buffer: Iterable<number> & {
                length: number;
            };
        }>;
        let RandomInner: import("@mysten/bcs").BcsType<{
            version: string;
            epoch: string;
            randomness_round: string;
            random_bytes: number[];
        }, {
            version: string | number | bigint;
            epoch: string | number | bigint;
            randomness_round: string | number | bigint;
            random_bytes: Iterable<number> & {
                length: number;
            };
        }>;
    }
    export namespace sui {
        let SUI: import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
    }
    export namespace table {
        function Table(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            size: string | number | bigint;
        }>;
    }
    export namespace table_vec {
        function TableVec(T0: any): import("@mysten/bcs").BcsType<{
            contents: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                size: string;
            };
        }, {
            contents: {
                id: {
                    id: {
                        bytes: any;
                    };
                };
                size: string | number | bigint;
            };
        }>;
    }
    export namespace token {
        function ActionRequest(T0: any): import("@mysten/bcs").BcsType<{
            name: {
                bytes: number[];
            };
            amount: string;
            sender: string;
            recipient: {
                vec: any[];
            };
            spent_balance: {
                vec: any[];
            };
            approvals: {
                contents: any[];
            };
        }, {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            amount: string | number | bigint;
            sender: any;
            recipient: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            spent_balance: {
                vec: Iterable<any> & {
                    length: number;
                };
            };
            approvals: {
                contents: Iterable<any> & {
                    length: number;
                };
            };
        }>;
        function RuleKey(T0: any): import("@mysten/bcs").BcsType<{
            is_protected: boolean;
        }, {
            is_protected: boolean;
        }>;
        function Token(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            balance: {
                value: string | number | bigint;
            };
        }>;
        function TokenPolicy(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            spent_balance: {
                value: string;
            };
            rules: {
                contents: {
                    key: unknown;
                    value: unknown;
                }[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            spent_balance: {
                value: string | number | bigint;
            };
            rules: {
                contents: Iterable<{
                    key: unknown;
                    value: unknown;
                }> & {
                    length: number;
                };
            };
        }>;
        function TokenPolicyCap(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            for: {
                bytes: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            for: {
                bytes: any;
            };
        }>;
        function TokenPolicyCreated(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
            is_mutable: boolean;
        }, {
            id: {
                bytes: any;
            };
            is_mutable: boolean;
        }>;
    }
    export namespace transfer {
        function Receiving(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
            version: string;
        }, {
            id: {
                bytes: any;
            };
            version: string | number | bigint;
        }>;
    }
    export namespace transfer_policy {
        export function RuleKey_1(T0: any): import("@mysten/bcs").BcsType<{
            dummy_field: boolean;
        }, {
            dummy_field: boolean;
        }>;
        export { RuleKey_1 as RuleKey };
        export function TransferPolicy(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            balance: {
                value: string;
            };
            rules: {
                contents: any[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            balance: {
                value: string | number | bigint;
            };
            rules: {
                contents: Iterable<any> & {
                    length: number;
                };
            };
        }>;
        export function TransferPolicyCap(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            policy_id: {
                bytes: string;
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            policy_id: {
                bytes: any;
            };
        }>;
        export function TransferPolicyCreated(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
        }, {
            id: {
                bytes: any;
            };
        }>;
        export function TransferPolicyDestroyed(T0: any): import("@mysten/bcs").BcsType<{
            id: {
                bytes: string;
            };
        }, {
            id: {
                bytes: any;
            };
        }>;
        export function TransferRequest(T0: any): import("@mysten/bcs").BcsType<{
            item: {
                bytes: string;
            };
            paid: string;
            from: {
                bytes: string;
            };
            receipts: {
                contents: any[];
            };
        }, {
            item: {
                bytes: any;
            };
            paid: string | number | bigint;
            from: {
                bytes: any;
            };
            receipts: {
                contents: Iterable<any> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace tx_context {
        let TxContext: import("@mysten/bcs").BcsType<{
            sender: string;
            tx_hash: number[];
            epoch: string;
            epoch_timestamp_ms: string;
            ids_created: string;
        }, {
            sender: any;
            tx_hash: Iterable<number> & {
                length: number;
            };
            epoch: string | number | bigint;
            epoch_timestamp_ms: string | number | bigint;
            ids_created: string | number | bigint;
        }>;
    }
    export namespace url {
        let Url: import("@mysten/bcs").BcsType<{
            url: {
                bytes: number[];
            };
        }, {
            url: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace vec_map {
        export function Entry_1(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            key: unknown;
            value: unknown;
        }, {
            key: unknown;
            value: unknown;
        }>;
        export { Entry_1 as Entry };
        export function VecMap(T0: any, T1: any): import("@mysten/bcs").BcsType<{
            contents: {
                key: unknown;
                value: unknown;
            }[];
        }, {
            contents: Iterable<{
                key: unknown;
                value: unknown;
            }> & {
                length: number;
            };
        }>;
    }
    export namespace vec_set {
        function VecSet(T0: any): import("@mysten/bcs").BcsType<{
            contents: any[];
        }, {
            contents: Iterable<any> & {
                length: number;
            };
        }>;
    }
    export namespace versioned {
        let VersionChangeCap: import("@mysten/bcs").BcsType<{
            versioned_id: {
                bytes: string;
            };
            old_version: string;
        }, {
            versioned_id: {
                bytes: any;
            };
            old_version: string | number | bigint;
        }>;
        let Versioned: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            version: string;
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            version: string | number | bigint;
        }>;
    }
    export namespace zklogin_verified_id {
        let VerifiedID: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            owner: string;
            key_claim_name: {
                bytes: number[];
            };
            key_claim_value: {
                bytes: number[];
            };
            issuer: {
                bytes: number[];
            };
            audience: {
                bytes: number[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            owner: any;
            key_claim_name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            key_claim_value: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            issuer: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            audience: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }
    export namespace zklogin_verified_issuer {
        let VerifiedIssuer: import("@mysten/bcs").BcsType<{
            id: {
                id: {
                    bytes: string;
                };
            };
            owner: string;
            issuer: {
                bytes: number[];
            };
        }, {
            id: {
                id: {
                    bytes: any;
                };
            };
            owner: any;
            issuer: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }
}
export default _default;
