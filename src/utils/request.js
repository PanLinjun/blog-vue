import axios from 'axios'

var baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = '/api'
}

if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://119.45.62.78:3001'
}

const service = axios.create({
  baseURL: baseURL,
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    return response.data
  }
)

export default service
