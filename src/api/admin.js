import request from '@/utils/request'

export function getAdmin(username) {
  return request({
    url: '/admin/get',
    method: 'get',
    params: { username }
  })
}

