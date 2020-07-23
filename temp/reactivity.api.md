## API Report File for "@vue/reactivity"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export function computed<T>(getter: ComputedGetter<T>): ComputedRef<T>;

// @public (undocumented)
export function computed<T>(options: WritableComputedOptions<T>): WritableComputedRef<T>;

// @public (undocumented)
export type ComputedGetter<T> = (ctx?: any) => T;

// @public (undocumented)
export interface ComputedRef<T = any> extends WritableComputedRef<T> {
    // (undocumented)
    readonly value: T;
}

// @public (undocumented)
export type ComputedSetter<T> = (v: T) => void;

// Warning: (ae-forgotten-export) The symbol "CustomRefFactory" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function customRef<T>(factory: CustomRefFactory<T>): Ref<T>;

// Warning: (ae-forgotten-export) The symbol "DebuggerEventExtraInfo" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type DebuggerEvent = {
    effect: ReactiveEffect;
    target: object;
    type: TrackOpTypes | TriggerOpTypes;
    key: any;
} & DebuggerEventExtraInfo;

// Warning: (ae-forgotten-export) The symbol "Builtin" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type DeepReadonly<T> = T extends Builtin ? T : T extends Map<infer K, infer V> ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> : T extends ReadonlyMap<infer K, infer V> ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>> : T extends WeakMap<infer K, infer V> ? WeakMap<DeepReadonly<K>, DeepReadonly<V>> : T extends Set<infer U> ? ReadonlySet<DeepReadonly<U>> : T extends ReadonlySet<infer U> ? ReadonlySet<DeepReadonly<U>> : T extends WeakSet<infer U> ? WeakSet<DeepReadonly<U>> : T extends Promise<infer U> ? Promise<DeepReadonly<U>> : T extends {} ? {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
} : Readonly<T>;

// @public (undocumented)
export function effect<T = any>(fn: () => T, options?: ReactiveEffectOptions): ReactiveEffect<T>;

// @public (undocumented)
export function enableTracking(): void;

// @public (undocumented)
export function isProxy(value: unknown): boolean;

// @public (undocumented)
export function isReactive(value: unknown): boolean;

// @public (undocumented)
export function isReadonly(value: unknown): boolean;

// @public (undocumented)
export function isRef<T>(r: Ref<T> | unknown): r is Ref<T>;

// @public (undocumented)
export const ITERATE_KEY: unique symbol;

// @public (undocumented)
export function markRaw<T extends object>(value: T): T;

// @public (undocumented)
export function pauseTracking(): void;

// Warning: (ae-forgotten-export) The symbol "UnwrapNestedRefs" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>;

// @public (undocumented)
export interface ReactiveEffect<T = any> {
    // (undocumented)
    (): T;
    // (undocumented)
    active: boolean;
    // Warning: (ae-forgotten-export) The symbol "Dep" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    deps: Array<Dep>;
    // (undocumented)
    id: number;
    // (undocumented)
    _isEffect: true;
    // (undocumented)
    options: ReactiveEffectOptions;
    // (undocumented)
    raw: () => T;
}

// @public (undocumented)
export interface ReactiveEffectOptions {
    // (undocumented)
    lazy?: boolean;
    // (undocumented)
    onStop?: () => void;
    // (undocumented)
    onTrack?: (event: DebuggerEvent) => void;
    // (undocumented)
    onTrigger?: (event: DebuggerEvent) => void;
    // (undocumented)
    scheduler?: (job: ReactiveEffect) => void;
}

// @public (undocumented)
export const enum ReactiveFlags {
    // (undocumented)
    IS_REACTIVE = "__v_isReactive",
    // (undocumented)
    IS_READONLY = "__v_isReadonly",
    // (undocumented)
    RAW = "__v_raw",
    // (undocumented)
    REACTIVE = "__v_reactive",
    // (undocumented)
    READONLY = "__v_readonly",
    // (undocumented)
    SKIP = "__v_skip"
}

// @public (undocumented)
export function readonly<T extends object>(target: T): DeepReadonly<UnwrapNestedRefs<T>>;

// @public (undocumented)
export interface Ref<T = any> {
    [RefSymbol]: true;
    // (undocumented)
    value: T;
}

// @public (undocumented)
export function ref<T extends object>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>;

// @public (undocumented)
export function ref<T>(value: T): Ref<UnwrapRef<T>>;

// @public (undocumented)
export function ref<T = any>(): Ref<T | undefined>;

// @public
export interface RefUnwrapBailTypes {
}

// @public (undocumented)
export function resetTracking(): void;

// @public (undocumented)
export function shallowReactive<T extends object>(target: T): T;

// @public (undocumented)
export function shallowReadonly<T extends object>(target: T): Readonly<{
    [K in keyof T]: UnwrapNestedRefs<T[K]>;
}>;

// @public (undocumented)
export function shallowRef<T>(value: T): T extends Ref ? T : Ref<T>;

// @public (undocumented)
export function shallowRef<T = any>(): Ref<T | undefined>;

// @public (undocumented)
function stop_2(effect: ReactiveEffect): void;

export { stop_2 as stop }

// @public (undocumented)
export function toRaw<T>(observed: T): T;

// @public (undocumented)
export function toRef<T extends object, K extends keyof T>(object: T, key: K): Ref<T[K]>;

// @public (undocumented)
export type ToRefs<T = any> = {
    [K in keyof T]: Ref<T[K]>;
};

// @public (undocumented)
export function toRefs<T extends object>(object: T): ToRefs<T>;

// @public (undocumented)
export function track(target: object, type: TrackOpTypes, key: unknown): void;

// @public (undocumented)
export const enum TrackOpTypes {
    // (undocumented)
    GET = "get",
    // (undocumented)
    HAS = "has",
    // (undocumented)
    ITERATE = "iterate"
}

// @public (undocumented)
export function trigger(target: object, type: TriggerOpTypes, key?: unknown, newValue?: unknown, oldValue?: unknown, oldTarget?: Map<unknown, unknown> | Set<unknown>): void;

// @public (undocumented)
export const enum TriggerOpTypes {
    // (undocumented)
    ADD = "add",
    // (undocumented)
    CLEAR = "clear",
    // (undocumented)
    DELETE = "delete",
    // (undocumented)
    SET = "set"
}

// @public (undocumented)
export function triggerRef(ref: Ref): void;

// @public (undocumented)
export function unref<T>(ref: T): T extends Ref<infer V> ? V : T;

// Warning: (ae-forgotten-export) The symbol "UnwrapRefSimple" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type UnwrapRef<T> = T extends Ref<infer V> ? UnwrapRefSimple<V> : UnwrapRefSimple<T>;

// @public (undocumented)
export interface WritableComputedOptions<T> {
    // (undocumented)
    get: ComputedGetter<T>;
    // (undocumented)
    set: ComputedSetter<T>;
}

// @public (undocumented)
export interface WritableComputedRef<T> extends Ref<T> {
    // (undocumented)
    readonly effect: ReactiveEffect<T>;
}


// (No @packageDocumentation comment for this package)

```