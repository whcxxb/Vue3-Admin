import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const { title } = to.meta
  document.title = (title as string) || 'Vue3.0 + TS + Vite + Element Plus'
  // 不能将类型“{}”分配给类型“string
  // const token = localStorage.getItem('token')
  // if (!token && to.path !== '/login') {
  //   return '/login'
  // }
  // if (token && to.path === '/login') {
  //   return '/'
  // }
  return true
})
// 完成路由跳转后，修改页面标题
router.afterEach((to) => {
  const { title } = to.meta
  document.title = (title as string) || 'Vue3.0 + TS + Vite + Element Plus'
})
export default router
