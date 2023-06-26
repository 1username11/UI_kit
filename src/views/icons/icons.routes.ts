import type { RouteRecordRaw } from 'vue-router'

export const iconsRouteNames = {
  icons: 'icons'
}

export const iconsRoutes: Array<RouteRecordRaw> = [
  {
    path: 'icons',
    name: iconsRouteNames.icons,
    component: () => import('./Icons.vue')
  }
]
