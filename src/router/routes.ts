import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    alias: '/index',
    name: 'Home',
    component: () => import('@/view/home/index.vue')
  },
  {
    path: '/about:id',
    name: 'About',
    component: () => import('@/view/about/index.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/view/404.vue')
  }
]

export default routes
