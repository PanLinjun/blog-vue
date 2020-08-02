import request from '@/utils/request'

export function githubLogin(data) {
  return request({
    url: '/github/login',
    method: 'post',
    data: data,
    timeout: 1000 * 60
  })
}

export function githubGetInfo() {
  return request({
    url: '/github/getInfo',
    method: 'get'
  })
}
