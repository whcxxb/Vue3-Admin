import http from './index'

// get
export const getAction = (url: string, params?: any) => {
  return http.get(url, { params })
}
// post
export const postAction = (url: string, params?: any) => {
  return http.post(url, params)
}
// put
export const putAction = (url: string, params?: any) => {
  return http.put(url, params)
}

// upload
export const uploadFileAction = (url: string, params?: any) => {
  return http.post(url, params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
