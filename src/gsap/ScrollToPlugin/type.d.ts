// ScrollToPlugin.d.ts

declare namespace gsap {
  interface TweenVars {
    scrollTo?: number | string | Element | Window | ScrollToVars;
  }

  interface ScrollToVars {
    x?: number | string | Element | Window;
    y?: number | string | Element | Window;
    offsetX?: number;
    offsetY?: number;
    autoKill?: boolean;
    onAutoKill?: Function;
    onInterrupt?: Function;
  }

  interface ScrollToPluginStatic {
    /**
     * Gets the current scroll position of the specified target.
     * @param target - The target to check (window, element, etc.)
     * @param horizontal - Whether to get the horizontal scroll position (default is vertical)
     */
    getOffset(target: string | Element | Window, horizontal?: boolean): number;

    /**
     * Registers the ScrollToPlugin with GSAP.
     */
    register(core: typeof gsap): void;

    /**
     * Allows you to define a maximum or minimum scroll position for a particular element.
     * @param target - The target element
     * @param vars - Configuration object for max/min scroll positions
     */
    max(target: string | Element, vars: { x?: number; y?: number }): void;

    /**
     * Removes previously set max/min scroll positions for an element.
     * @param target - The target element
     */
    removeMax(target: string | Element): void;
  }
}

declare module "gsap/ScrollToPlugin" {
  export const ScrollToPlugin: gsap.ScrollToPluginStatic;
  export { ScrollToPlugin as default };
}

declare module "gsap/dist/ScrollToPlugin" {
  export * from "gsap/ScrollToPlugin";
  export { ScrollToPlugin as default } from "gsap/ScrollToPlugin";
}

declare module "gsap/src/ScrollToPlugin" {
  export * from "gsap/ScrollToPlugin";
  export { ScrollToPlugin as default } from "gsap/ScrollToPlugin";
}

declare module "gsap/all" {
  export * from "gsap/ScrollToPlugin";
}

declare module "gsap-trial/ScrollToPlugin" {
  export * from "gsap/ScrollToPlugin";
  export { ScrollToPlugin as default } from "gsap/ScrollToPlugin";
}

declare module "gsap-trial/dist/ScrollToPlugin" {
  export * from "gsap/ScrollToPlugin";
  export { ScrollToPlugin as default } from "gsap/ScrollToPlugin";
}

declare module "gsap-trial/src/ScrollToPlugin" {
  export * from "gsap/ScrollToPlugin";
  export { ScrollToPlugin as default } from "gsap/ScrollToPlugin";
}

declare module "gsap-trial/all" {
  export * from "gsap/ScrollToPlugin";
}
