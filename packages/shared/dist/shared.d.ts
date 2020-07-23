
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
export declare const babelParserDefautPlugins: readonly ["bigInt", "optionalChaining", "nullishCoalescingOperator"];

/**
 * @private
 */
export declare const camelize: (str: string) => string;

/**
 * @private
 */
export declare const capitalize: (str: string) => string;

export declare const def: (obj: object, key: string | symbol, value: any) => void;

export declare const EMPTY_ARR: [];

export declare const EMPTY_OBJ: {
    readonly [key: string]: any;
};

export declare function escapeHtml(string: unknown): string;

export declare function escapeHtmlComment(src: string): string;

export declare const extend: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};

export declare function generateCodeFrame(source: string, start?: number, end?: number): string;

export declare const getGlobalThis: () => any;

export declare const hasChanged: (value: any, oldValue: any) => boolean;

export declare const hasOwn: (val: object, key: string | symbol) => key is never;

/**
 * @private
 */
export declare const hyphenate: (str: string) => string;

export declare const invokeArrayFns: (fns: Function[], arg?: any) => void;

export declare const isArray: (arg: any) => arg is any[];

/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
export declare const isBooleanAttr: (key: string) => boolean;

export declare const isDate: (val: unknown) => val is Date;

export declare const isFunction: (val: unknown) => val is Function;

export declare const isGloballyWhitelisted: (key: string) => boolean;

export declare const isHTMLTag: (key: string) => boolean;

/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
export declare const isKnownAttr: (key: string) => boolean;

/**
 * CSS properties that accept plain numbers
 */
export declare const isNoUnitNumericStyleProp: (key: string) => boolean;

export declare const isObject: (val: unknown) => val is Record<any, any>;

export declare const isOn: (key: string) => boolean;

export declare const isPlainObject: (val: unknown) => val is object;

export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;

export declare const isReservedProp: (key: string) => boolean;

export declare const isSpecialBooleanAttr: (key: string) => boolean;

export declare function isSSRSafeAttrName(name: string): boolean;

export declare const isString: (val: unknown) => val is string;

export declare const isSVGTag: (key: string) => boolean;

export declare const isSymbol: (val: unknown) => val is symbol;

export declare const isVoidTag: (key: string) => boolean;

export declare function looseEqual(a: any, b: any): boolean;

export declare function looseIndexOf(arr: any[], val: any): number;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
export declare function makeMap(str: string, expectsLowerCase?: boolean): (key: string) => boolean;

export declare const mockError: () => void;

export declare function mockWarn(asError?: boolean): void;

/**
 * Always return false.
 */
export declare const NO: () => boolean;

export declare const NOOP: () => void;

export declare function normalizeClass(value: unknown): string;

export declare type NormalizedStyle = Record<string, string | number>;

export declare function normalizeStyle(value: unknown): NormalizedStyle | undefined;

export declare const objectToString: () => string;

export declare function parseStringStyle(cssText: string): NormalizedStyle;

export declare const PatchFlagNames: {
    [x: number]: string;
};

export declare const enum PatchFlags {
    TEXT = 1,
    CLASS = 2,
    STYLE = 4,
    PROPS = 8,
    FULL_PROPS = 16,
    HYDRATE_EVENTS = 32,
    STABLE_FRAGMENT = 64,
    KEYED_FRAGMENT = 128,
    UNKEYED_FRAGMENT = 256,
    NEED_PATCH = 512,
    DYNAMIC_SLOTS = 1024,
    HOISTED = -1,
    BAIL = -2
}

export declare const propsToAttrMap: Record<string, string | undefined>;

export declare const remove: <T>(arr: T[], el: T) => void;

export declare const enum ShapeFlags {
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 2,
    STATEFUL_COMPONENT = 4,
    TEXT_CHILDREN = 8,
    ARRAY_CHILDREN = 16,
    SLOTS_CHILDREN = 32,
    TELEPORT = 64,
    SUSPENSE = 128,
    COMPONENT_SHOULD_KEEP_ALIVE = 256,
    COMPONENT_KEPT_ALIVE = 512,
    COMPONENT = 6
}

export declare const enum SlotFlags {
    /**
     * Stable slots that only reference slot props or context state. The slot
     * can fully capture its own dependencies so when passed down the parent won't
     * need to force the child to update.
     */
    STABLE = 1,
    /**
     * Slots that reference scope variables (v-for or an outer slot prop), or
     * has conditional structure (v-if, v-for). The parent will need to force
     * the child to update because the slot does not fully capture its dependencies.
     */
    DYNAMIC = 2,
    /**
     * `<slot/>` being forwarded into a child component. Whether the parent needs
     * to update the child is dependent on what kind of slots the parent itself
     * received. This has to be refined at runtime, when the child's vnode
     * is being created (in `normalizeChildren`)
     */
    FORWARDED = 3
}

export declare function stringifyStyle(styles: NormalizedStyle | undefined): string;

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
export declare const toDisplayString: (val: unknown) => string;

export declare const toNumber: (val: any) => any;

export declare const toRawType: (value: unknown) => string;

export declare const toTypeString: (value: unknown) => string;

export { }