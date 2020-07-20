import request from '@/utils/request'

export function listArticle(params) {
	return request({
		url: '/article/list',
		method: 'get',
		params
	})
}

export function getArticle(id) {
	return request({
		url: '/article/get',
		method: 'get',
		params: { id }
	})
}

export function getCategory() {
	return request({
		url: '/article/category',
		method: 'get'
	})
}

export function listTag() {
	return request({
		url: '/article/listTag',
		method: 'get'
	})
}
