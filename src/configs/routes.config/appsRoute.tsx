import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
  {
    key: 'app.home',
    path: '/',
    component: lazy(() => import('@/views/home')),
    authority: [],
  },
  {
    key: 'app.account',
    path: '/account',
    component: lazy(() => import('@/views/account')),
    authority: [],
  },
  {
    key: 'app.myfavs',
    path: '/myfavs',
    component: lazy(() => import('@/views/account')),
    authority: [],
  },
  {
    key: 'app.mytrips',
    path: '/mytrips',
    component: lazy(() => import('@/views/account')),
    authority: [],
  },
  {
    key: 'app.myreward',
    path: '/myreward',
    component: lazy(() => import('@/views/account')),
    authority: [],
  },
  {
    key: 'app.myaddress',
    path: '/myaddress',
    component: lazy(() => import('@/views/account')),
    authority: [],
  },
  {
    key: 'app.resetpw',
    path: '/resetpw',
    component: lazy(() => import('@/views/account')),
    authority: [],
  },
  {
    key: 'app.deleteaccount',
    path: '/deleteaccount',
    component: lazy(() => import('@/views/deleteaccount')),
    authority: [],
  },
  {
    key: 'app.about-us',
    path: '/aboutus',
    component: lazy(() => import('@/views/aboutus')),
    authority: [],
  },
  {
    key: 'app.carregistermode',
    path: '/carregistermode',
    component: lazy(() => import('@/views/carregistermode')),
    authority: [],
  },
  {
    key: 'app.carregister.selfdrive',
    path: '/carregister/selfdrive',
    component: lazy(() => import('@/views/selfdrive')),
    authority: [],
  },
  {
    key: 'app.car',
    path: '/car/:slug/:id',
    component: lazy(() => import('@/views/car')),
    authority: [],
  },
]

export default appsRoute
