import type { RouteRecordRaw } from 'vue-router'

export const typographyRouteNames = {
  typography: 'typography'
}

export const typographyRoutes: Array<RouteRecordRaw> = [
  {
    path: 'typography',
    name: typographyRouteNames.typography,
    component: () => import('./Typography.vue')
  }
]
