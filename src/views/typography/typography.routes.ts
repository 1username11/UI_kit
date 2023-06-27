import type { RouteRecordRaw } from 'vue-router'

export const typographyRouteNames = {
  fonts: 'fonts'
}

export const typographyRoutes: Array<RouteRecordRaw> = [
  {
    path: 'fonts',
    name: typographyRouteNames.fonts,
    component: () => import('./Fonts.vue')
  }
]
