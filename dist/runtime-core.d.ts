import { camelize } from '@vue/shared';
import { capitalize } from '@vue/shared';
import { ComputedGetter } from '@vue/reactivity';
import { ComputedRef } from '@vue/reactivity';
import { customRef } from '@vue/reactivity';
import { DebuggerEvent } from '@vue/reactivity';
import { DeepReadonly } from '@vue/reactivity';
import { isProxy } from '@vue/reactivity';
import { isReactive } from '@vue/reactivity';
import { isReadonly } from '@vue/reactivity';
import { isRef } from '@vue/reactivity';
import { markRaw } from '@vue/reactivity';
import { reactive } from '@vue/reactivity';
import { ReactiveEffect } from '@vue/reactivity';
import { ReactiveEffectOptions } from '@vue/reactivity';
import { readonly } from '@vue/reactivity';
import { Ref } from '@vue/reactivity';
import { ref } from '@vue/reactivity';
import { shallowReactive } from '@vue/reactivity';
import { shallowReadonly } from '@vue/reactivity';
import { shallowRef } from '@vue/reactivity';
import { SlotFlags } from '@vue/shared';
import { toDisplayString } from '@vue/shared';
import { toRaw } from '@vue/reactivity';
import { toRef } from '@vue/reactivity';
import { ToRefs } from '@vue/reactivity';
import { toRefs } from '@vue/reactivity';
import { TrackOpTypes } from '@vue/reactivity';
import { TriggerOpTypes } from '@vue/reactivity';
import { triggerRef } from '@vue/reactivity';
import { unref } from '@vue/reactivity';
import { UnwrapRef } from '@vue/reactivity';
import { WritableComputedOptions } from '@vue/reactivity';
import { WritableComputedRef } from '@vue/reactivity';

/**
 * Default allowed non-declared props on ocmponent in TSX
 */
export declare interface AllowedComponentProps {
    class?: unknown;
    style?: unknown;
}

export declare interface App<HostElement = any> {
    version: string;
    config: AppConfig;
    use(plugin: Plugin_2, ...options: any[]): this;
    mixin(mixin: ComponentOptions): this;
    component(name: string): PublicAPIComponent | undefined;
    component(name: string, component: PublicAPIComponent): this;
    directive(name: string): Directive | undefined;
    directive(name: string, directive: Directive): this;
    mount(rootContainer: HostElement | string, isHydrate?: boolean): ComponentPublicInstance;
    unmount(rootContainer: HostElement | string): void;
    provide<T>(key: InjectionKey<T> | string, value: T): this;
    _component: Component;
    _props: Data | null;
    _container: HostElement | null;
    _context: AppContext;
}

export declare interface AppConfig {
    readonly isNativeTag?: (tag: string) => boolean;
    performance: boolean;
    optionMergeStrategies: Record<string, OptionMergeFunction>;
    globalProperties: Record<string, any>;
    isCustomElement: (tag: string) => boolean;
    errorHandler?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => void;
    warnHandler?: (msg: string, instance: ComponentPublicInstance | null, trace: string) => void;
}

export declare interface AppContext {
    app: App;
    config: AppConfig;
    mixins: ComponentOptions[];
    components: Record<string, PublicAPIComponent>;
    directives: Record<string, Directive>;
    provides: Record<string | symbol, any>;
    reload?: () => void;
}

declare interface AppRecord {
    id: number;
    app: App;
    version: string;
    types: Record<string, string | Symbol>;
}

export declare type AsyncComponentLoader<T = any> = () => Promise<AsyncComponentResolveResult<T>>;

export declare interface AsyncComponentOptions<T = any> {
    loader: AsyncComponentLoader<T>;
    loadingComponent?: PublicAPIComponent;
    errorComponent?: PublicAPIComponent;
    delay?: number;
    timeout?: number;
    suspensible?: boolean;
    onError?: (error: Error, retry: () => void, fail: () => void, attempts: number) => any;
}

declare type AsyncComponentResolveResult<T = PublicAPIComponent> = T | {
    default: T;
};

export declare const BaseTransition: new () => {
    $props: BaseTransitionProps<any>;
};

export declare interface BaseTransitionProps<HostElement = RendererElement> {
    mode?: 'in-out' | 'out-in' | 'default';
    appear?: boolean;
    persisted?: boolean;
    onBeforeEnter?: (el: HostElement) => void;
    onEnter?: (el: HostElement, done: () => void) => void;
    onAfterEnter?: (el: HostElement) => void;
    onEnterCancelled?: (el: HostElement) => void;
    onBeforeLeave?: (el: HostElement) => void;
    onLeave?: (el: HostElement, done: () => void) => void;
    onAfterLeave?: (el: HostElement) => void;
    onLeaveCancelled?: (el: HostElement) => void;
    onBeforeAppear?: (el: HostElement) => void;
    onAppear?: (el: HostElement, done: () => void) => void;
    onAfterAppear?: (el: HostElement) => void;
    onAppearCancelled?: (el: HostElement) => void;
}

declare const enum BooleanFlags {
    shouldCast = 0,
    shouldCastTrue = 1
}

export declare function callWithAsyncErrorHandling(fn: Function | Function[], instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any[];

export declare function callWithErrorHandling(fn: Function, instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any;
export { camelize }
export { capitalize }

declare interface ClassComponent {
    new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>;
    __vccOpts: ComponentOptions;
}

export declare function cloneVNode<T, U>(vnode: VNode<T, U>, extraProps?: Data & VNodeProps | null, children?: unknown): VNode<T, U>;

declare const Comment_2: unique symbol;
export { Comment_2 as Comment }

declare interface CompiledSlotDescriptor {
    name: string;
    fn: Slot;
}

export declare type Component = ComponentOptions | FunctionalComponent<any>;

/**
 * Interface for declaring custom options.
 *
 * @example
 * ```ts
 * declare module '@vue/runtime-core' {
 *   interface ComponentCustomOptions {
 *     beforeRouteUpdate?(
 *       to: Route,
 *       from: Route,
 *       next: () => void
 *     ): void
 *   }
 * }
 * ```
 */
export declare interface ComponentCustomOptions {
}

/**
 * Custom properties added to component instances in any way and can be accessed through `this`
 *
 * @example
 * Here is an example of adding a property `$router` to every component instance:
 * ```ts
 * import { createApp } from 'vue'
 * import { Router, createRouter } from 'vue-router'
 *
 * declare module '@vue/runtime-core' {
 *   interface ComponentCustomProperties {
 *     $router: Router
 *   }
 * }
 *
 * // effectively adding the router to every component instance
 * const app = createApp({})
 * const router = createRouter()
 * app.config.globalProperties.$router = router
 *
 * const vm = app.mount('#app')
 * // we can access the router from the instance
 * vm.$router.push('/')
 * ```
 */
export declare interface ComponentCustomProperties {
}

/**
 * For extending allowed non-declared props on components in TSX
 */
export declare interface ComponentCustomProps {
}

declare type ComponentInjectOptions = string[] | Record<string | symbol, string | symbol | {
    from: string | symbol;
    default?: unknown;
}>;

/**
 * We expose a subset of properties on the internal instance as they are
 * useful for advanced external libraries and tools.
 */
export declare interface ComponentInternalInstance {
    uid: number;
    type: Component;
    parent: ComponentInternalInstance | null;
    root: ComponentInternalInstance;
    appContext: AppContext;
    /**
     * Vnode representing this component in its parent's vdom tree
     */
    vnode: VNode;
    /**
     * The pending new vnode from parent updates
     * @internal
     */
    next: VNode | null;
    /**
     * Root vnode of this component's own vdom tree
     */
    subTree: VNode;
    /**
     * The reactive effect for rendering and patching the component. Callable.
     */
    update: ReactiveEffect;
    /**
     * The render function that returns vdom tree.
     * @internal
     */
    render: InternalRenderFunction | null;
    /**
     * Object containing values this component provides for its descendents
     * @internal
     */
    provides: Data;
    /**
     * Tracking reactive effects (e.g. watchers) associated with this component
     * so that they can be automatically stopped on component unmount
     * @internal
     */
    effects: ReactiveEffect[] | null;
    /**
     * cache for proxy access type to avoid hasOwnProperty calls
     * @internal
     */
    accessCache: Data | null;
    /**
     * cache for render function values that rely on _ctx but won't need updates
     * after initialized (e.g. inline handlers)
     * @internal
     */
    renderCache: (Function | VNode)[];
    /**
     * Asset hashes that prototypally inherits app-level asset hashes for fast
     * resolution
     * @internal
     */
    components: Record<string, Component>;
    /**
     * @internal
     */
    directives: Record<string, Directive>;
    proxy: ComponentPublicInstance | null;
    /**
     * alternative proxy used only for runtime-compiled render functions using
     * `with` block
     * @internal
     */
    withProxy: ComponentPublicInstance | null;
    /**
     * This is the target for the public instance proxy. It also holds properties
     * injected by user options (computed, methods etc.) and user-attached
     * custom properties (via `this.x = ...`)
     * @internal
     */
    ctx: Data;
    data: Data;
    props: Data;
    attrs: Data;
    slots: InternalSlots;
    refs: Data;
    emit: EmitFn;
    emitted: Record<string, boolean> | null;
    /**
     * setup related
     * @internal
     */
    setupState: Data;
    /**
     * @internal
     */
    setupContext: SetupContext | null;
    /**
     * suspense related
     * @internal
     */
    suspense: SuspenseBoundary | null;
    /**
     * @internal
     */
    asyncDep: Promise<any> | null;
    /**
     * @internal
     */
    asyncResolved: boolean;
    isMounted: boolean;
    isUnmounted: boolean;
    isDeactivated: boolean;
    /**
     * @internal
     */
    [LifecycleHooks.BEFORE_CREATE]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.CREATED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.BEFORE_MOUNT]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.MOUNTED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.BEFORE_UPDATE]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.UPDATED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.BEFORE_UNMOUNT]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.UNMOUNTED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.RENDER_TRACKED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.RENDER_TRIGGERED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.ACTIVATED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.DEACTIVATED]: LifecycleHook;
    /**
     * @internal
     */
    [LifecycleHooks.ERROR_CAPTURED]: LifecycleHook;
}

declare interface ComponentInternalOptions {
    /**
     * @internal
     */
    __props?: NormalizedPropsOptions | [];
    /**
     * @internal
     */
    __emits?: ObjectEmitsOptions;
    /**
     * @internal
     */
    __scopeId?: string;
    /**
     * @internal
     */
    __cssModules?: Data;
    /**
     * @internal
     */
    __hmrId?: string;
    /**
     * This one should be exposed so that devtools can make use of it
     */
    __file?: string;
}

export declare type ComponentObjectPropsOptions<P = Data> = {
    [K in keyof P]: Prop<P[K]> | null;
};

export declare type ComponentOptions = ComponentOptionsWithoutProps<any, any, any, any, any> | ComponentOptionsWithObjectProps<any, any, any, any, any> | ComponentOptionsWithArrayProps<any, any, any, any, any>;

export declare interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin, E extends EmitsOptions, EE extends string = string> extends LegacyOptions<Props, D, C, M, Mixin, Extends>, ComponentInternalOptions, ComponentCustomOptions {
    setup?: (this: void, props: Props, ctx: SetupContext<E>) => RawBindings | RenderFunction | void;
    name?: string;
    template?: string | object;
    render?: Function;
    components?: Record<string, PublicAPIComponent>;
    directives?: Record<string, Directive>;
    inheritAttrs?: boolean;
    emits?: E | EE[];
    /**
     * SSR only. This is produced by compiler-ssr and attached in compiler-sfc
     * not user facing, so the typing is lax and for test only.
     *
     * @internal
     */
    ssrRender?: (ctx: any, push: (item: any) => void, parentInstance: ComponentInternalInstance, attrs: Data | undefined, $props: ComponentInternalInstance['props'], $setup: ComponentInternalInstance['setupState'], $data: ComponentInternalInstance['data'], $options: ComponentInternalInstance['ctx']) => void;
    /**
     * marker for AsyncComponentWrapper
     * @internal
     */
    __asyncLoader?: () => Promise<Component>;
    /**
     * cache for merged $options
     * @internal
     */
    __merged?: ComponentOptions;
    call?: (this: unknown, ...args: unknown[]) => never;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
}

export declare type ComponentOptionsMixin = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>;

export declare type ComponentOptionsWithArrayProps<PropNames extends string = string, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<{
    [key in PropNames]?: any;
}>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    props: PropNames[];
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;

export declare type ComponentOptionsWithObjectProps<PropsOptions = ComponentObjectPropsOptions, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<ExtractPropTypes<PropsOptions>>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    props: PropsOptions;
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;

export declare type ComponentOptionsWithoutProps<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    props?: undefined;
} & ThisType<CreateComponentPublicInstance<{}, RawBindings, D, C, M, Mixin, Extends, E, Readonly<Props>>>;

export declare type ComponentPropsOptions<P = Data> = ComponentObjectPropsOptions<P> | string[];

export declare type ComponentPublicInstance<P = {}, // props type extracted from props option
B = {}, // raw bindings returned from setup()
D = {}, // return from data()
C extends ComputedOptions = {}, M extends MethodOptions = {}, E extends EmitsOptions = {}, PublicProps = P, Options = ComponentOptionsBase<any, any, any, any, any, any, any, any>> = {
    $: ComponentInternalInstance;
    $data: D;
    $props: P & PublicProps;
    $attrs: Data;
    $refs: Data;
    $slots: Slots;
    $root: ComponentPublicInstance | null;
    $parent: ComponentPublicInstance | null;
    $emit: EmitFn<E>;
    $el: any;
    $options: Options;
    $forceUpdate: ReactiveEffect;
    $nextTick: typeof nextTick;
    $watch: typeof instanceWatch;
} & P & UnwrapRef<B> & D & ExtractComputedReturns<C> & M & ComponentCustomProperties;

declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance> = {
    new (): T;
};

declare type ComponentWatchOptionItem = WatchOptionItem | WatchOptionItem[];

declare type ComponentWatchOptions = Record<string, ComponentWatchOptionItem>;

export declare function computed<T>(getter: ComputedGetter<T>): ComputedRef<T>;

export declare function computed<T>(options: WritableComputedOptions<T>): WritableComputedRef<T>;

declare type ComputedOptions = Record<string, ComputedGetter<any> | WritableComputedOptions<any>>;
export { ComputedRef }

declare interface Constructor<P = any> {
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
    new (): {
        $props: P;
    };
}

export declare type CreateAppFunction<HostElement> = (rootComponent: PublicAPIComponent, rootProps?: Data | null) => App<HostElement>;

/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
export declare function createBlock(type: VNodeTypes | ClassComponent, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[]): VNode;

/**
 * @private
 */
export declare function createCommentVNode(text?: string, asBlock?: boolean): VNode;

declare function createComponentInstance(vnode: VNode, parent: ComponentInternalInstance | null, suspense: SuspenseBoundary | null): ComponentInternalInstance;

declare type CreateComponentPublicInstance<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, PublicProps = P, PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>, PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>, PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>, PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>, PublicC extends ComputedOptions = UnwrapMixinsType<PublicMixin, 'C'> & EnsureNonVoid<C>, PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> & EnsureNonVoid<M>> = ComponentPublicInstance<PublicP, PublicB, PublicD, PublicC, PublicM, E, PublicProps, ComponentOptionsBase<P, B, D, C, M, Mixin, Extends, E>>;

export declare function createHydrationRenderer(options: RendererOptions<Node, Element>): HydrationRenderer;

declare function createRecord(id: string): boolean;

/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
export declare function createRenderer<HostNode = RendererNode, HostElement = RendererElement>(options: RendererOptions<HostNode, HostElement>): Renderer<HostElement>;

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
export declare function createSlots(slots: Record<string, Slot>, dynamicSlots: (CompiledSlotDescriptor | CompiledSlotDescriptor[] | undefined)[]): Record<string, Slot>;

/**
 * @private
 */
export declare function createStaticVNode(content: string, numberOfNodes: number): VNode;

/**
 * @private
 */
export declare function createTextVNode(text?: string, flag?: number): VNode;

export declare const createVNode: typeof _createVNode;

declare function _createVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, isBlockNode?: boolean): VNode;
export { customRef }

declare type Data = Record<string, unknown>;
export { DebuggerEvent }

declare type DebuggerHook = (e: DebuggerEvent) => void;
export { DeepReadonly }

declare type DefaultFactory<T> = () => T | null | undefined;

export declare function defineAsyncComponent<T extends PublicAPIComponent = {
    new (): ComponentPublicInstance;
}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T;

export declare function defineComponent<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, {}, {}, {}, {}, {}, {}, VNodeProps & Props & AllowedComponentProps & ComponentCustomProps>> & FunctionalComponent<Props>;

export declare function defineComponent<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>): ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, VNodeProps & Props & AllowedComponentProps & ComponentCustomProps>> & ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;

export declare function defineComponent<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>): ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Readonly<{
    [key in PropNames]?: any;
}>, RawBindings, D, C, M, Mixin, Extends, E, AllowedComponentProps & ComponentCustomProps>> & ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>;

export declare function defineComponent<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>): ComponentPublicInstanceConstructor<CreateComponentPublicInstance<ExtractPropTypes<PropsOptions, false>, RawBindings, D, C, M, Mixin, Extends, E, VNodeProps & AllowedComponentProps & ComponentCustomProps>> & ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;

export declare let devtools: DevtoolsHook;

declare interface DevtoolsHook {
    emit: (event: string, ...payload: any[]) => void;
    on: (event: string, handler: Function) => void;
    once: (event: string, handler: Function) => void;
    off: (event: string, handler: Function) => void;
    appRecords: AppRecord[];
}

export declare type Directive<T = any, V = any> = ObjectDirective<T, V> | FunctionDirective<T, V>;

export declare type DirectiveArguments = Array<[Directive] | [Directive, any] | [Directive, any, string] | [Directive, any, string, DirectiveModifiers]>;

export declare interface DirectiveBinding<V = any> {
    instance: ComponentPublicInstance | null;
    value: V;
    oldValue: V | null;
    arg?: string;
    modifiers: DirectiveModifiers;
    dir: ObjectDirective<any, V>;
}

export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;

declare type DirectiveModifiers = Record<string, boolean>;

declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends any[] ? (event: Options[0], ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{
    [key in Event]: Options[key] extends ((...args: infer Args) => any) ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;
}[Event]>;

declare type EmitsOptions = ObjectEmitsOptions | string[];

declare type EnsureNonVoid<T> = T extends void ? {} : T;

declare type ErrorCapturedHook = (err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void;

export declare const enum ErrorCodes {
    SETUP_FUNCTION = 0,
    RENDER_FUNCTION = 1,
    WATCH_GETTER = 2,
    WATCH_CALLBACK = 3,
    WATCH_CLEANUP = 4,
    NATIVE_EVENT_HANDLER = 5,
    COMPONENT_EVENT_HANDLER = 6,
    VNODE_HOOK = 7,
    DIRECTIVE_HOOK = 8,
    TRANSITION_HOOK = 9,
    APP_ERROR_HANDLER = 10,
    APP_WARN_HANDLER = 11,
    FUNCTION_REF = 12,
    ASYNC_COMPONENT_LOADER = 13,
    SCHEDULER = 14
}

declare type ErrorTypes = LifecycleHooks | ErrorCodes;

declare type ExtractComputedReturns<T extends any> = {
    [key in keyof T]: T[key] extends {
        get: (...args: any[]) => infer TReturn;
    } ? TReturn : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never;
};

declare type ExtractMixin<T> = {
    Mixin: MixinToOptionTypes<T>;
}[T extends ComponentOptionsMixin ? 'Mixin' : never];

export declare type ExtractPropTypes<O, MakeDefaultRequired extends boolean = true> = O extends object ? {
    [K in RequiredKeys<O, MakeDefaultRequired>]: InferPropType<O[K]>;
} & {
    [K in OptionalKeys<O, MakeDefaultRequired>]?: InferPropType<O[K]>;
} : {
    [K in string]: any;
};

export declare const Fragment: {
    new (): {
        $props: VNodeProps;
    };
    __isFragment: true;
};

export declare interface FunctionalComponent<P = {}, E extends EmitsOptions = {}> extends ComponentInternalOptions {
    (props: P, ctx: SetupContext<E>): any;
    props?: ComponentPropsOptions<P>;
    emits?: E | (keyof E)[];
    inheritAttrs?: boolean;
    displayName?: string;
}

export declare type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>;

export declare const getCurrentInstance: () => ComponentInternalInstance | null;

export declare function getTransitionRawChildren(children: VNode[], keepComment?: boolean): VNode[];

export declare function h(type: string, children?: RawChildren): VNode;

export declare function h(type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;

export declare function h(type: typeof Fragment, children?: VNodeArrayChildren): VNode;

export declare function h(type: typeof Fragment, props?: RawProps | null, children?: VNodeArrayChildren): VNode;

export declare function h(type: typeof Teleport, props: RawProps & TeleportProps, children: RawChildren): VNode;

export declare function h(type: typeof Suspense, children?: RawChildren): VNode;

export declare function h(type: typeof Suspense, props?: (RawProps & SuspenseProps) | null, children?: RawChildren | RawSlots): VNode;

export declare function h<P, E extends EmitsOptions = {}>(type: FunctionalComponent<P, E>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;

export declare function h(type: Component, children?: RawChildren): VNode;

export declare function h<Options extends ComponentOptions | FunctionalComponent<{}>>(type: NotDefinedComponent<Options>, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;

export declare function h(type: Constructor, children?: RawChildren): VNode;

export declare function h<P>(type: Constructor<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;

export declare function handleError(err: unknown, instance: ComponentInternalInstance | null, type: ErrorTypes): void;

export declare interface HMRRuntime {
    createRecord: typeof createRecord;
    rerender: typeof rerender;
    reload: typeof reload;
}

declare function hydrateSuspense(node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean, rendererInternals: RendererInternals, hydrateNode: (node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean) => Node | null): Node | null;

declare function hydrateTeleport(node: Node, vnode: TeleportVNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean, { o: { nextSibling, parentNode, querySelector } }: RendererInternals<Node, Element>, hydrateChildren: (node: Node | null, vnode: VNode, container: Element, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean) => Node | null): Node | null;

export declare interface HydrationRenderer extends Renderer<Element> {
    hydrate: RootHydrateFunction;
}

declare type InferPropType<T> = T extends null ? any : T extends {
    type: null | true;
} ? any : T extends ObjectConstructor | {
    type: ObjectConstructor;
} ? Record<string, any> : T extends BooleanConstructor | {
    type: BooleanConstructor;
} ? boolean : T extends Prop<infer V> ? V : T;

export declare function inject<T>(key: InjectionKey<T> | string): T | undefined;

export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T;

export declare interface InjectionKey<T> extends Symbol {
}

declare function instanceWatch(this: ComponentInternalInstance, source: string | Function, cb: Function, options?: WatchOptions): WatchStopHandle;

/**
 * @internal
 */
declare type InternalRenderFunction = {
    (ctx: ComponentPublicInstance, cache: ComponentInternalInstance['renderCache'], $props: ComponentInternalInstance['props'], $setup: ComponentInternalInstance['setupState'], $data: ComponentInternalInstance['data'], $options: ComponentInternalInstance['ctx']): VNodeChild;
    _rc?: boolean;
};

declare type InternalSlots = {
    [name: string]: Slot | undefined;
};

declare type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true ? OptionTypesType<{}, {}, {}, {}, {}> : UnionToIntersection<ExtractMixin<T>>;

declare type InvalidateCbRegistrator = (cb: () => void) => void;

declare type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin ? ComponentOptionsMixin extends T ? true : false : false;
export { isProxy }
export { isReactive }
export { isReadonly }
export { isRef }

export declare function isVNode(value: any): value is VNode;

export declare const KeepAlive: new () => {
    $props: VNodeProps & KeepAliveProps;
};

export declare interface KeepAliveProps {
    include?: MatchPattern;
    exclude?: MatchPattern;
    max?: number | string;
}

declare interface LegacyOptions<Props, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin> {
    [key: string]: any;
    data?: (this: CreateComponentPublicInstance<Props>, vm: CreateComponentPublicInstance<Props>) => D;
    computed?: C;
    methods?: M;
    watch?: ComponentWatchOptions;
    provide?: Data | Function;
    inject?: ComponentInjectOptions;
    mixins?: Mixin[];
    extends?: Extends;
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    activated?(): void;
    deactivated?(): void;
    beforeUnmount?(): void;
    unmounted?(): void;
    renderTracked?: DebuggerHook;
    renderTriggered?: DebuggerHook;
    errorCaptured?: ErrorCapturedHook;
}

declare type LifecycleHook = Function[] | null;

declare const enum LifecycleHooks {
    BEFORE_CREATE = "bc",
    CREATED = "c",
    BEFORE_MOUNT = "bm",
    MOUNTED = "m",
    BEFORE_UPDATE = "bu",
    UPDATED = "u",
    BEFORE_UNMOUNT = "bum",
    UNMOUNTED = "um",
    DEACTIVATED = "da",
    ACTIVATED = "a",
    RENDER_TRIGGERED = "rtg",
    RENDER_TRACKED = "rtc",
    ERROR_CAPTURED = "ec"
}

declare type MapOldSources<T, Immediate> = {
    [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? (V | undefined) : V : T[K] extends object ? Immediate extends true ? (T[K] | undefined) : T[K] : never;
};

declare type MapSources<T> = {
    [K in keyof T]: T[K] extends WatchSource<infer V> ? V : T[K] extends object ? T[K] : never;
};
export { markRaw }

declare type MatchPattern = string | RegExp | string[] | RegExp[];

export declare function mergeProps(...args: (Data & VNodeProps)[]): Record<string, unknown> & VNodeProps;

declare interface MethodOptions {
    [key: string]: Function;
}

declare type MixinToOptionTypes<T> = T extends ComponentOptionsBase<infer P, infer B, infer D, infer C, infer M, infer Mixin, infer Extends, any> ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}> & IntersectionMixin<Mixin> & IntersectionMixin<Extends> : never;

declare type MountChildrenFn = (children: VNodeArrayChildren, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean, start?: number) => void;

declare type MountComponentFn = (initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;

declare type MoveFn = (vnode: VNode, container: RendererElement, anchor: RendererNode | null, type: MoveType, parentSuspense?: SuspenseBoundary | null) => void;

declare function moveTeleport(vnode: VNode, container: RendererElement, parentAnchor: RendererNode | null, { o: { insert }, m: move }: RendererInternals, moveType?: TeleportMoveTypes): void;

declare const enum MoveType {
    ENTER = 0,
    LEAVE = 1,
    REORDER = 2
}

declare type NextFn = (vnode: VNode) => RendererNode | null;

export declare function nextTick(fn?: () => void): Promise<void>;

declare type NormalizedProp = null | (PropOptions & {
    [BooleanFlags.shouldCast]?: boolean;
    [BooleanFlags.shouldCastTrue]?: boolean;
});

declare type NormalizedPropsOptions = [Record<string, NormalizedProp>, string[]];

declare function normalizeSuspenseChildren(vnode: VNode): {
    content: VNode;
    fallback: VNode;
};

declare function normalizeVNode(child: VNodeChild): VNode;

declare type NotDefinedComponent<T extends Component> = T extends Constructor ? never : T;

declare const NULL_DYNAMIC_COMPONENT: unique symbol;

export declare interface ObjectDirective<T = any, V = any> {
    beforeMount?: DirectiveHook<T, null, V>;
    mounted?: DirectiveHook<T, null, V>;
    beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;
    updated?: DirectiveHook<T, VNode<any, T>, V>;
    beforeUnmount?: DirectiveHook<T, null, V>;
    unmounted?: DirectiveHook<T, null, V>;
    getSSRProps?: SSRDirectiveHook;
}

declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;

export declare function onActivated(hook: Function, target?: ComponentInternalInstance | null): void;

export declare const onBeforeMount: (hook: () => any, target?: ComponentInternalInstance | null) => false | void;

export declare const onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null) => false | void;

export declare const onBeforeUpdate: (hook: () => any, target?: ComponentInternalInstance | null) => false | void;

export declare function onDeactivated(hook: Function, target?: ComponentInternalInstance | null): void;

export declare const onErrorCaptured: (hook: ErrorCapturedHook, target?: ComponentInternalInstance | null) => void;

export declare const onMounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | void;

export declare const onRenderTracked: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | void;

export declare const onRenderTriggered: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | void;

export declare const onUnmounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | void;

export declare const onUpdated: (hook: () => any, target?: ComponentInternalInstance | null) => false | void;

/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
export declare function openBlock(disableTracking?: boolean): void;

declare type OptionalKeys<T, MakeDefaultRequired> = Exclude<keyof T, RequiredKeys<T, MakeDefaultRequired>>;

export declare type OptionMergeFunction = (to: unknown, from: unknown, instance: any, key: string) => any;

declare type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M';

declare type OptionTypesType<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}> = {
    P: P;
    B: B;
    D: D;
    C: C;
    M: M;
};

declare type PatchBlockChildrenFn = (oldChildren: VNode[], newChildren: VNode[], fallbackContainer: RendererElement, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean) => void;

declare type PatchChildrenFn = (n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized?: boolean) => void;

declare type PatchFn = (n1: VNode | null, // null means this is a mount
n2: VNode, container: RendererElement, anchor?: RendererNode | null, parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, isSVG?: boolean, optimized?: boolean) => void;

declare type Plugin_2 = PluginInstallFunction & {
    install?: PluginInstallFunction;
} | {
    install: PluginInstallFunction;
};
export { Plugin_2 as Plugin }

declare type PluginInstallFunction = (app: App, ...options: any[]) => any;

/**
 * @private
 */
export declare function popScopeId(): void;

export declare type Prop<T> = PropOptions<T> | PropType<T>;

declare type PropConstructor<T = any> = {
    new (...args: any[]): T & object;
} | {
    (): T;
} | PropMethod<T>;

declare type PropMethod<T, TConstructor = any> = T extends (...args: any) => any ? {
    new (): TConstructor;
    (): T;
    readonly prototype: TConstructor;
} : never;

declare interface PropOptions<T = any> {
    type?: PropType<T> | true | null;
    required?: boolean;
    default?: T | DefaultFactory<T> | null | undefined;
    validator?(value: unknown): boolean;
}

export declare type PropType<T> = PropConstructor<T> | PropConstructor<T>[];

export declare function provide<T>(key: InjectionKey<T> | string, value: T): void;

declare type PublicAPIComponent = Component | {
    new (...args: any[]): CreateComponentPublicInstance<any, any, any, any, any>;
};

/**
 * @private
 */
export declare function pushScopeId(id: string): void;

export declare function queuePostFlushCb(cb: Function | Function[]): void;

declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);

declare type RawProps = VNodeProps & {
    __v_isVNode?: never;
    [Symbol.iterator]?: never;
} & {
    [key: string]: any;
};

declare type RawSlots = {
    [name: string]: unknown;
    $stable?: boolean;
    /**
     * for tracking slot owner instance. This is attached during
     * normalizeChildren when the component vnode is created.
     * @internal
     */
    _ctx?: ComponentInternalInstance | null;
    /**
     * indicates compiler generated slots
     * we use a reserved property instead of a vnode patchFlag because the slots
     * object may be directly passed down to a child component in a manual
     * render function, and the optimization hint need to be on the slot object
     * itself to be preserved.
     * @internal
     */
    _?: SlotFlags;
};
export { reactive }
export { ReactiveEffect }
export { ReactiveEffectOptions }
export { readonly }
export { Ref }
export { ref }

/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
export declare function registerRuntimeCompiler(_compile: any): void;

declare function reload(id: string, newComp: ComponentOptions): void;

declare type RemoveFn = (vnode: VNode) => void;

declare function renderComponentRoot(instance: ComponentInternalInstance): VNode;

export declare interface Renderer<HostElement = RendererElement> {
    render: RootRenderFunction<HostElement>;
    createApp: CreateAppFunction<HostElement>;
}

export declare interface RendererElement extends RendererNode {
}

declare interface RendererInternals<HostNode = RendererNode, HostElement = RendererElement> {
    p: PatchFn;
    um: UnmountFn;
    r: RemoveFn;
    m: MoveFn;
    mt: MountComponentFn;
    mc: MountChildrenFn;
    pc: PatchChildrenFn;
    pbc: PatchBlockChildrenFn;
    n: NextFn;
    o: RendererOptions<HostNode, HostElement>;
}

export declare interface RendererNode {
    [key: string]: any;
}

export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {
    patchProp(el: HostElement, key: string, prevValue: any, nextValue: any, isSVG?: boolean, prevChildren?: VNode<HostNode, HostElement>[], parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, unmountChildren?: UnmountChildrenFn): void;
    forcePatchProp?(el: HostElement, key: string): boolean;
    insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;
    remove(el: HostNode): void;
    createElement(type: string, isSVG?: boolean, isCustomizedBuiltIn?: string): HostElement;
    createText(text: string): HostNode;
    createComment(text: string): HostNode;
    setText(node: HostNode, text: string): void;
    setElementText(node: HostElement, text: string): void;
    parentNode(node: HostNode): HostElement | null;
    nextSibling(node: HostNode): HostNode | null;
    querySelector?(selector: string): HostElement | null;
    setScopeId?(el: HostElement, id: string): void;
    cloneNode?(node: HostNode): HostNode;
    insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean): HostElement[];
}

export declare type RenderFunction = () => VNodeChild;

/**
 * v-for string
 * @private
 */
export declare function renderList(source: string, renderItem: (value: string, index: number) => VNodeChild): VNodeChild[];

/**
 * v-for number
 */
export declare function renderList(source: number, renderItem: (value: number, index: number) => VNodeChild): VNodeChild[];

/**
 * v-for array
 */
export declare function renderList<T>(source: T[], renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];

/**
 * v-for iterable
 */
export declare function renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];

/**
 * v-for object
 */
export declare function renderList<T>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => VNodeChild): VNodeChild[];

/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
export declare function renderSlot(slots: Slots, name: string, props?: Data, fallback?: () => VNodeArrayChildren): VNode;

declare type RequiredKeys<T, MakeDefaultRequired> = {
    [K in keyof T]: T[K] extends {
        required: true;
    } | (MakeDefaultRequired extends true ? {
        default: any;
    } : never) ? K : never;
}[keyof T];

declare function rerender(id: string, newRender?: Function): void;

/**
 * @private
 */
export declare function resolveComponent(name: string): Component | string | undefined;

/**
 * @private
 */
export declare function resolveDirective(name: string): Directive | undefined;

/**
 * @private
 */
export declare function resolveDynamicComponent(component: unknown): VNodeTypes;

export declare function resolveTransitionHooks(vnode: VNode, { appear, persisted, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled }: BaseTransitionProps<any>, state: TransitionState, instance: ComponentInternalInstance): TransitionHooks;

export declare type RootHydrateFunction = (vnode: VNode<Node, Element>, container: Element) => void;

export declare type RootRenderFunction<HostElement = RendererElement> = (vnode: VNode | null, container: HostElement) => void;

/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
export declare function setBlockTracking(value: number): void;

declare function setCurrentRenderingInstance(instance: ComponentInternalInstance | null): void;

export declare function setDevtoolsHook(hook: DevtoolsHook): void;

export declare function setTransitionHooks(vnode: VNode, hooks: TransitionHooks): void;

declare function setupComponent(instance: ComponentInternalInstance, isSSR?: boolean): Promise<void> | undefined;

export declare interface SetupContext<E = EmitsOptions> {
    attrs: Data;
    slots: Slots;
    emit: EmitFn<E>;
}

declare type SetupRenderEffectFn = (instance: ComponentInternalInstance, initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;
export { shallowReactive }
export { shallowReadonly }
export { shallowRef }

export declare type Slot = (...args: any[]) => VNode[];

export declare type Slots = Readonly<InternalSlots>;

export declare const ssrContextKey: unique symbol;

declare type SSRDirectiveHook = (binding: DirectiveBinding, vnode: VNode) => Data | undefined;

/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */
export declare const ssrUtils: {
    createComponentInstance: typeof createComponentInstance;
    setupComponent: typeof setupComponent;
    renderComponentRoot: typeof renderComponentRoot;
    setCurrentRenderingInstance: typeof setCurrentRenderingInstance;
    isVNode: typeof isVNode;
    normalizeVNode: typeof normalizeVNode;
    normalizeSuspenseChildren: typeof normalizeSuspenseChildren;
};

export declare const Static: unique symbol;

export declare const Suspense: {
    new (): {
        $props: VNodeProps & SuspenseProps;
    };
    __isSuspense: true;
};

export declare interface SuspenseBoundary {
    vnode: VNode<RendererNode, RendererElement, SuspenseProps>;
    parent: SuspenseBoundary | null;
    parentComponent: ComponentInternalInstance | null;
    isSVG: boolean;
    optimized: boolean;
    container: RendererElement;
    hiddenContainer: RendererElement;
    anchor: RendererNode | null;
    subTree: VNode;
    fallbackTree: VNode;
    deps: number;
    isHydrating: boolean;
    isResolved: boolean;
    isUnmounted: boolean;
    effects: Function[];
    resolve(): void;
    recede(): void;
    move(container: RendererElement, anchor: RendererNode | null, type: MoveType): void;
    next(): RendererNode | null;
    registerDep(instance: ComponentInternalInstance, setupRenderEffect: SetupRenderEffectFn): void;
    unmount(parentSuspense: SuspenseBoundary | null, doRemove?: boolean): void;
}

declare const SuspenseImpl: {
    __isSuspense: boolean;
    process(n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean, rendererInternals: RendererInternals): void;
    hydrate: typeof hydrateSuspense;
};

export declare interface SuspenseProps {
    onResolve?: () => void;
    onRecede?: () => void;
}

export declare const Teleport: {
    new (): {
        $props: VNodeProps & TeleportProps;
    };
    __isTeleport: true;
};

declare const TeleportImpl: {
    __isTeleport: boolean;
    process(n1: TeleportVNode | null, n2: TeleportVNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean, internals: RendererInternals): void;
    remove(vnode: VNode, { r: remove, o: { remove: hostRemove } }: RendererInternals): void;
    move: typeof moveTeleport;
    hydrate: typeof hydrateTeleport;
};

declare const enum TeleportMoveTypes {
    TARGET_CHANGE = 0,
    TOGGLE = 1,
    REORDER = 2
}

export declare interface TeleportProps {
    to: string | RendererElement;
    disabled?: boolean;
}

declare type TeleportVNode = VNode<RendererNode, RendererElement, TeleportProps>;

declare const Text_2: unique symbol;
export { Text_2 as Text }
export { toDisplayString }

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
export declare function toHandlers(obj: Record<string, any>): Record<string, any>;
export { toRaw }
export { toRef }
export { ToRefs }
export { toRefs }
export { TrackOpTypes }

/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
export declare function transformVNodeArgs(transformer?: typeof vnodeArgsTransformer): void;

export declare interface TransitionHooks<HostElement extends RendererElement = RendererElement> {
    persisted: boolean;
    beforeEnter(el: HostElement): void;
    enter(el: HostElement): void;
    leave(el: HostElement, remove: () => void): void;
    afterLeave?(): void;
    delayLeave?(el: HostElement, earlyRemove: () => void, delayedLeave: () => void): void;
    delayedLeave?(): void;
}

export declare interface TransitionState {
    isMounted: boolean;
    isLeaving: boolean;
    isUnmounting: boolean;
    leavingVNodes: Map<any, Record<string, VNode>>;
}
export { TriggerOpTypes }
export { triggerRef }

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

declare type UnmountChildrenFn = (children: VNode[], parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, start?: number) => void;

declare type UnmountFn = (vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean) => void;
export { unref }

declare type UnwrapMixinsType<T, Type extends OptionTypesKeys> = T extends OptionTypesType ? T[Type] : never;
export { UnwrapRef }

export declare const useSSRContext: <T = Record<string, any>>() => T | undefined;

export declare function useTransitionState(): TransitionState;

export declare const version: string;

export declare interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = {
    [key: string]: any;
}> {
    /**
     * @internal
     */
    __v_isVNode: true;
    /**
     * @internal
     */
    __v_skip: true;
    type: VNodeTypes;
    props: (VNodeProps & ExtraProps) | null;
    key: string | number | null;
    ref: VNodeNormalizedRef | null;
    scopeId: string | null;
    children: VNodeNormalizedChildren;
    component: ComponentInternalInstance | null;
    suspense: SuspenseBoundary | null;
    dirs: DirectiveBinding[] | null;
    transition: TransitionHooks<HostElement> | null;
    el: HostNode | null;
    anchor: HostNode | null;
    target: HostElement | null;
    targetAnchor: HostNode | null;
    staticCount: number;
    shapeFlag: number;
    patchFlag: number;
    dynamicProps: string[] | null;
    dynamicChildren: VNode[] | null;
    appContext: AppContext | null;
}

declare let vnodeArgsTransformer: ((args: Parameters<typeof _createVNode>, instance: ComponentInternalInstance | null) => Parameters<typeof _createVNode>) | undefined;

export declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;

export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;

declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;

declare type VNodeMountHook = (vnode: VNode) => void;

export declare type VNodeNormalizedChildren = string | VNodeArrayChildren | RawSlots | null;

declare type VNodeNormalizedRef = [ComponentInternalInstance, VNodeRef];

export declare type VNodeProps = {
    key?: string | number;
    ref?: VNodeRef;
    onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];
    onVnodeMounted?: VNodeMountHook | VNodeMountHook[];
    onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];
    onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];
    onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];
    onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];
};

declare type VNodeRef = string | Ref | ((ref: object | null, refs: Record<string, any>) => void);

export declare type VNodeTypes = string | VNode | Component | typeof Text_2 | typeof Static | typeof Comment_2 | typeof Fragment | typeof TeleportImpl | typeof SuspenseImpl;

declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;

export declare function warn(msg: string, ...args: any[]): void;

export declare function watch<T extends Readonly<Array<WatchSource<unknown> | object>>, Immediate extends Readonly<boolean> = false>(sources: T, cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;

export declare function watch<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? (T | undefined) : T>, options?: WatchOptions<Immediate>): WatchStopHandle;

export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? (T | undefined) : T>, options?: WatchOptions<Immediate>): WatchStopHandle;

export declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV, onInvalidate: InvalidateCbRegistrator) => any;

export declare type WatchEffect = (onInvalidate: InvalidateCbRegistrator) => void;

export declare function watchEffect(effect: WatchEffect, options?: WatchOptionsBase): WatchStopHandle;

declare type WatchOptionItem = string | WatchCallback | {
    handler: WatchCallback;
} & WatchOptions;

export declare interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {
    immediate?: Immediate;
    deep?: boolean;
}

export declare interface WatchOptionsBase {
    flush?: 'pre' | 'post' | 'sync';
    onTrack?: ReactiveEffectOptions['onTrack'];
    onTrigger?: ReactiveEffectOptions['onTrigger'];
}

export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);

export declare type WatchStopHandle = () => void;

/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */
export declare function withCtx(fn: Slot, ctx?: ComponentInternalInstance | null): Slot;

/**
 * Adds directives to a VNode.
 */
export declare function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;

/**
 * @private
 */
export declare function withScopeId(id: string): <T extends Function>(fn: T) => T;
export { WritableComputedOptions }
export { WritableComputedRef }

export { }