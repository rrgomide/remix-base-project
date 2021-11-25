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
    description: 'Simple Projects',
    navbarVisible: true,
    path: '/simple-projects',
  },

  {
    id: serviceNewId(),

    active: true,
    description: 'Documentation',
    navbarVisible: true,
    path: '/remix-documentation',
  },
])

export const CONFIG = Object.freeze({
  activeRoutes: ALL_ROUTES.filter(({ active }) => active),

  navbarVisibleRoutes: ALL_ROUTES.filter(
    ({ active, navbarVisible }) => active && navbarVisible
  ),
})
