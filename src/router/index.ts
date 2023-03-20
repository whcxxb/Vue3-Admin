import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/store/user'
import routes from './routes'
// import { createPinia } from 'pinia'
// const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 在ts中使用pinia
// const userStore = useUserStore(pinia)

router.beforeEach((to) => {
  console.log('to', to)
  const { title } = to.meta
  document.title = (title as string) || 'blogAdmin'
  const token = JSON.parse(window.localStorage.getItem('user') as string)?.token
  if (!token && to.path !== '/login') {
    return '/login'
  }
  if (token && to.path === '/login') {
    return '/'
  }
  return true
})
// 完成路由跳转后，修改页面标题
router.afterEach((to) => {
  const { title } = to.meta
  document.title = (title as string) || 'blogAdmin'
})
export default router
