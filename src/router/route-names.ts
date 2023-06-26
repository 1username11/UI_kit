import { colorsRouteNames } from '@/views/colors/colors.routes'
import { iconsRouteNames } from '@/views/icons/icons.routes'
import { typographyRouteNames } from '@/views/typography/typography.routes'
import { componentsRouteNames } from '@/views/components/components.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...typographyRouteNames,
  ...colorsRouteNames,
  ...iconsRouteNames,
  ...componentsRouteNames,

  additionalDefaultLayoutRoute: 'additionalDefaultLayoutRoute',
  additionalNoLayoutRoute: 'additionalNoLayoutRoute'
}
