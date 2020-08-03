import request from '@/utils/request'

export function githubLogin(data) {
  return request({
    url: '/github/login',
    method: 'post',
    data: data
  })
}

export function githubGetInfo() {
  return request({
    url: '/github/getInfo',
    method: 'get'
  })
}

export function refreshToken(data) {
  return request({
    url: '/github/refreshToken',
    method: 'post',
    data: data
  })
}
