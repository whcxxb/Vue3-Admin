import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
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
    // 对响应数据做点什么
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
