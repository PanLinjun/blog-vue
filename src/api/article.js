import request from '@/utils/request'

export function listArticle(params) {
	return request({
		url: '/article/list',
		method: 'get',
		params
	})
}

export function createArticle(article) {
	return request({
		url: '/article/create',
		method: 'post',
		data: article
	})
}

export function updateArticle(article) {
	return request({
		url: '/article/updateArticle',
		method: 'post',
		data: article
	})
}

export function getArticle(id) {
	return request({
		url: '/article/get',
		method: 'get',
		params: { id }
	})
}

export function deleteArticle(id) {
	return request({
		url: '/article/delete',
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

export function createCategory(category) {
	return request({
		url: '/article/createCategory',
		method: 'post',
		data: category
	})
}

export function deleteCategory(value) {
	return request({
		url: '/article/deleteCategory',
		method: 'get',
		params: { value }
	})
}

export function listTag() {
	return request({
		url: '/article/listTag',
		method: 'get'
	})
}

export function createTag(tag) {
	return request({
		url: '/article/createTag',
		method: 'post',
		data: tag
	})
}

export function deleteTag(value) {
	return request({
		url: '/article/deleteTag',
		method: 'get',
		params: { value }
	})
}
