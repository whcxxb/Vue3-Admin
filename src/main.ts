import { createApp } from 'vue'
import './style/base.less'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

// message弹窗样式
import 'element-plus/es/components/message/style/css'
// console.log(import.meta.env.BASE_URL)
// console.log(import.meta.env.PROD)
// console.log(import.meta.env.DEV)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

// 自定义全局指令
app.directive('focus', {
  mounted: (el: HTMLElement) => el.focus()
})
