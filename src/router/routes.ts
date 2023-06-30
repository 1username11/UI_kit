import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { typographyRoutes } from '@/views/typography/typography.routes'
import { colorsRoutes } from '@/views/colors/colors.routes'
import { iconsRoutes } from '@/views/icons/icons.routes'
import { componentsRoutes } from '@/views/components/components.routes'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.fonts },
  component: DefaultLayout,
  children: [
    // list of views that use default layout
    ...typographyRoutes,
    ...colorsRoutes,
    ...iconsRoutes,
    ...componentsRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
