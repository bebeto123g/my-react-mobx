import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

export const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    isAuth: false,
    title: 'Главная',
  },
  {
    path: '/about',
    component: AboutPage,
    exact: true,
    isAuth: false,
    title: 'О проекте',
  },
]
