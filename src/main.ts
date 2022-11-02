import { createApp } from 'vue'
import './style/base.less'
import App from './App.vue'
import './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.mount('#app')
