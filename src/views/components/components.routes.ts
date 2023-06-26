import type { RouteRecordRaw } from 'vue-router'

export const componentsRouteNames = {
  components: 'components'
}

export const componentsRoutes: Array<RouteRecordRaw> = [
  {
    path: 'components',
    name: componentsRouteNames.components,
    component: () => import('./Components.vue')
  }
]
