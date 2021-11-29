import { serviceNewId } from '~/services/idService'

const ALL_ROUTES = Object.freeze([
  {
    id: serviceNewId(),

    active: true,
    description: 'Home',
    navbarVisible: false,
    path: '/',
  },

  {
    id: serviceNewId(),

    active: true,
    description: 'Projects',
    navbarVisible: true,
    path: '/projects',
  },
])

export const activeRoutes = ALL_ROUTES.filter(({ active }) => active)

export const navbarVisibleRoutes = ALL_ROUTES.filter(
  ({ active, navbarVisible }) => active && navbarVisible
)
