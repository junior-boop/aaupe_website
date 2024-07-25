// gsap.d.ts

declare namespace gsap {
  interface TweenVars {
    [key: string]: any;
    delay?: number;
    duration?: number;
    ease?: string | Function;
    repeat?: number;
    repeatDelay?: number;
    yoyo?: boolean;
    yoyoEase?: string | Function;
    onComplete?: Function;
    onStart?: Function;
    onUpdate?: Function;
    onRepeat?: Function;
    stagger?: number | object;
  }

  interface TweenTarget {
    [key: string]: any;
  }

  interface Tween {
    delay(): number;
    delay(value: number): this;
    duration(): number;
    duration(value: number): this;
    pause(): this;
    play(): this;
    progress(): number;
    progress(value: number): this;
    reverse(): this;
    restart(): this;
    resume(): this;
    seek(time: number): this;
    timeScale(): number;
    timeScale(value: number): this;
    kill(): this;
  }

  interface Timeline extends Tween {
    add(child: Tween | Timeline, position?: string | number): this;
    addLabel(label: string, position?: string | number): this;
    addPause(position?: string | number, callback?: Function): this;
    call(callback: Function, params?: any[], position?: string | number): this;
    clear(labels?: boolean): this;
    from(
      targets: TweenTarget,
      vars: TweenVars,
      position?: string | number
    ): this;
    fromTo(
      targets: TweenTarget,
      fromVars: TweenVars,
      toVars: TweenVars,
      position?: string | number
    ): this;
    set(
      targets: TweenTarget,
      vars: TweenVars,
      position?: string | number
    ): this;
    to(targets: TweenTarget, vars: TweenVars, position?: string | number): this;
  }

  interface GSAPStatic {
    to(targets: TweenTarget, vars: TweenVars): Tween;
    from(targets: TweenTarget, vars: TweenVars): Tween;
    fromTo(targets: TweenTarget, fromVars: TweenVars, toVars: TweenVars): Tween;
    set(targets: TweenTarget, vars: TweenVars): Tween;
    timeline(vars?: TweenVars): Timeline;
    delayedCall(delay: number, callback: Function, params?: any[]): Tween;
    getTweensOf(targets: TweenTarget): Tween[];
    getProperty(target: TweenTarget, property: string): any;
    killTweensOf(targets: TweenTarget, properties?: object): void;
    parseEase(ease: string | Function): Function;
    registerPlugin(...args: any[]): void;
    registerEase(name: string, ease: Function): void;
    utils: {
      toArray(targets: TweenTarget): any[];
      selector(selector: string): any;
      mapRange(
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number,
        value: number
      ): number;
      interpolate(
        start: number | string | any[],
        end: number | string | any[],
        progress: number
      ): any;
      shuffle(array: any[]): any[];
    };
  }
}

declare const gsap: gsap.GSAPStatic;

export = gsap;
export as namespace gsap;
