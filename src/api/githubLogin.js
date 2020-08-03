import request from '@/utils/request'
import { removeAllToken } from '@/utils/auth'

export function githubLogin(data) {
  return request({
    url: '/github/login',
    method: 'post',
    data: data
  })
}

export function githubLogout() {
  return new Promise((resolve, reject) => {
    removeAllToken()
    localStorage.removeItem('name')
    localStorage.removeItem('avatar_url')
    resolve()
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
