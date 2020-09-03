import request from '@/utils/request'

export function listComment(params) {
  return request({
    url: '/comment/list',
    method: 'get',
    params: { ...params }
  })
}

export function addComment(data) {
  return request({
    url: '/comment/add',
    method: 'post',
    data: data
  })
}
