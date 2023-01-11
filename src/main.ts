import { createApp } from 'vue'
import './style/base.less'
import './assets/iconfont/iconfont.js'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

// 弹窗样式
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/el-message-box.css'
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
