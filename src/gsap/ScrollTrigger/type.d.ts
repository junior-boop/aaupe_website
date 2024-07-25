// ScrollTrigger.d.ts

declare namespace gsap {
  interface ScrollTrigger {
    /** Attaches a ScrollTrigger to an animation. */
    static create(vars: ScrollTriggerVars): ScrollTrigger;

    /** Checks if ScrollTrigger should be enabled. */
    static isEnabled(): boolean;

    /** Enables/disables ScrollTrigger. */
    static enable(enable?: boolean, refresh?: boolean): void;

    /** Refreshes all ScrollTrigger instances. */
    static refresh(safe?: boolean): void;

    /** Gets all ScrollTriggers that match the specified scroller. */
    static getAll(scroller?: Element | Window): ScrollTrigger[];

    /** Gets the ScrollTrigger associated with a particular animation. */
    static getById(id: string): ScrollTrigger | undefined;

    /** Allows you to add custom properties/methods to all ScrollTrigger instances. */
    static defaults(obj: object): void;

    /** Kills a ScrollTrigger instance. */
    kill(reset?: boolean): void;

    /** Disables a ScrollTrigger instance. */
    disable(reset?: boolean, allowAnimation?: boolean): void;

    /** Enables a disabled ScrollTrigger instance. */
    enable(reset?: boolean, allowAnimation?: boolean): void;

    /** Forces the ScrollTrigger to recalculate its start and end positions. */
    refresh(): void;

    /** Gets or sets a ScrollTrigger-related variable. */
    vars(key: string, value?: any): any;

    /** Returns the current progress of the ScrollTrigger (0-1). */
    progress(): number;

    /** Returns the current scroll position of the scroller. */
    scroll(): number;

    /** Returns the start position of the ScrollTrigger. */
    start(): number;

    /** Returns the end position of the ScrollTrigger. */
    end(): number;

    /** Returns the latest velocity of the scroll. */
    getVelocity(): number;

    /** Pins an element for a ScrollTrigger instance. */
    pin(element: Element | string, pinSpacing?: boolean | string): void;

    /** Converts a value from one range to another. */
    static matchMedia(config: object): void;
  }

  interface ScrollTriggerVars {
    trigger?: Element | string;
    start?: string | number | Function;
    end?: string | number | Function;
    scroller?: Element | Window;
    markers?: boolean;
    pin?: boolean | Element | string;
    pinSpacing?: boolean | string;
    anticipatePin?: number;

    onEnter?: Function;
    onLeave?: Function;
    onEnterBack?: Function;
    onLeaveBack?: Function;
    onUpdate?: Function;
    onToggle?: Function;
    onRefresh?: Function;

    scrub?: boolean | number;
    snap?: number | number[] | Function;
    pinReparent?: boolean;
    invalidateOnRefresh?: boolean;
    anticipatePin?: number;
    fastScrollEnd?: boolean | number;

    horizontal?: boolean;
    containerAnimation?: gsap.core.Animation;
    toggleActions?: string;
    toggleClass?: string | object;
    id?: string;
    preventOverlaps?: boolean | string;

    [key: string]: any;
  }

  interface TweenVars {
    scrollTrigger?: ScrollTriggerVars;
  }
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: typeof gsap.ScrollTrigger;
  export { ScrollTrigger as default };
}

declare module "gsap/dist/ScrollTrigger" {
  export * from "gsap/ScrollTrigger";
  export { ScrollTrigger as default } from "gsap/ScrollTrigger";
}

declare module "gsap/src/ScrollTrigger" {
  export * from "gsap/ScrollTrigger";
  export { ScrollTrigger as default } from "gsap/ScrollTrigger";
}

declare module "gsap/all" {
  export * from "gsap/ScrollTrigger";
}

declare module "gsap-trial/ScrollTrigger" {
  export * from "gsap/ScrollTrigger";
  export { ScrollTrigger as default } from "gsap/ScrollTrigger";
}

declare module "gsap-trial/dist/ScrollTrigger" {
  export * from "gsap/ScrollTrigger";
  export { ScrollTrigger as default } from "gsap/ScrollTrigger";
}

declare module "gsap-trial/src/ScrollTrigger" {
  export * from "gsap/ScrollTrigger";
  export { ScrollTrigger as default } from "gsap/ScrollTrigger";
}

declare module "gsap-trial/all" {
  export * from "gsap/ScrollTrigger";
}
