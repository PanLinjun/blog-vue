import request from '@/utils/request'

export function listComment(owner_id) {
  return request({
    url: '/comment/list',
    method: 'get',
    params: { owner_id: owner_id }
  })
}

export function addComment(data) {
  return request({
    url: '/comment/add',
    method: 'post',
    data: data
  })
}
