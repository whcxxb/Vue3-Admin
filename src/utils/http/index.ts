import axios, { AxiosRequestConfig } from 'axios'
import { useUserStore } from '@/store/user'
import router from '@/router'
// console.log('地址', import.meta.env.VITE_BASE_URL)
const baseURL: string = import.meta.env.VITE_BASE_URL
const http = axios.create({
  // baseURL: 'http://101.42.17.104:3100/api',
  baseURL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})
const userStore = useUserStore()

// 请求拦截器
http.interceptors.request.use(
  (config: any) => {
    //排除登录请求和注册请求
    if (config.url === '/login' || config.url === '/register') {
      return config
    }
    if (userStore.token) {
      // config.headers = { Authorization: 'Bearer ' + userStore.token }
      config.headers.Authorization = 'Bearer ' + userStore.token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      const data = error.response.data
      console.log('------异常响应------', error.response.status)
      switch (error.response.status) {
        case 403:
          console.error('拒绝访问')
          break
        case 500:
          console.error('Token失效，请重新登录')
          break
        case 404:
          console.error('很抱歉，资源未找到!')
          break
        case 504:
          console.error('网络超时!')
          break
        case 401:
          console.error('未授权，请重新登录!')
          console.log(router)
          userStore.removeUserInfo()
          router.replace({
            path: '/login'
          })
          break
        default:
          console.error(data.message)
          break
      }
    }
    return Promise.reject(error)
  }
)

export default http
