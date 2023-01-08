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
    component: () => import('@/view/about/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    alias: '/forget',
    name: 'register',
    component: () => import('@/view/login/register.vue'),
    meta: {
      title: '注册'
    },
    beforeEnter: (to) => {
      if (to.path === '/forget') {
        to.meta.title = '忘记密码'
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/view/404.vue')
  }
]

export default routes
