import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/dashboard',
    component: () => import('@/view/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/view/dashboard/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/view/users/index.vue'),
        meta: {
          title: '用户管理'
        }
      }
    ]
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
