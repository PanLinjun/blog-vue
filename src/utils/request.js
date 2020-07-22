import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['Authorization'] = `Bearer ${getToken()}`
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  }
)

export default service
