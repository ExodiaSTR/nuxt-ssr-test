declare global {
  import { Context } from '@nuxt/types'
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type noop = () => void

  type Callback = {
    callback: noop
  }

  interface Window {
    // глобальный объект карт и его АПИ
    L: {}
    $nuxt: any
    Cypress?: boolean
    appReady?: boolean
  }

  interface Grecaptcha {
    ready(callback: () => void): void;
    execute(siteKey?: string, options: { action: string }): Promise<string>;
  }

  let grecaptcha: Grecaptcha
}

/**
 * Временное решение, пока команда накста не пофиксит формирование типов при сборке
 * накст-модулей
 */
interface Metrika {
  reachGoal: (identifyer: string) => void
  hit: (url: string) => void
}

declare module '#app' {
  interface NuxtApp {
    $metrika: Metrika
  }
}


export { }
