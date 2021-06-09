import { lazy } from 'react'
import HomePage from '../views/HomePage'

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
    component: lazy(() => import('../views/AboutPage')),
    exact: true,
    isAuth: false,
    title: 'О проекте',
  },
  {
    path: '/news',
    component: lazy(() => import('../views/NewsPage')),
    exact: true,
    isAuth: false,
    title: 'Новости',
  },
]
