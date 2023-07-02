import type { Plugin } from 'vue'
import { routeNames } from '@/router/route-names'
import { EElComponentSize, EElComponentType, EELButtonType, EELButtonSize } from '@/types/enums'

export const globalProperties = {
  $elComponentSize: EElComponentSize,
  $elComponentType: EElComponentType,
  $elButtonType: EELButtonType,
  $elButtonSize: EELButtonSize,
  $routeNames: routeNames
}

export const VueGlobalPropertiesPlugin: Plugin = {
  install: (app) => {
    for (const i in globalProperties) {
      app.config.globalProperties[i] = globalProperties[i as keyof typeof globalProperties]
    }
  }
}
