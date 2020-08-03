import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 1000 * 60
})

service.interceptors.response.use(
  response => {
    return response.data
  }
)

export default service
