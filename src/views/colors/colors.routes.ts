import type { RouteRecordRaw } from 'vue-router'

export const colorsRouteNames = {
  colors: 'colors'
}

export const colorsRoutes: Array<RouteRecordRaw> = [
  {
    path: 'colors',
    name: colorsRouteNames.colors,
    component: () => import('./Colors.vue')
  }
]
