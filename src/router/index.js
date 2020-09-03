import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'article',
        component: () => import('@/views/article/index')
      },
      {
        path: 'about',
        component: () => import('@/views/about/index')
      },
      {
        path: 'content',
        component: () => import('@/views/content/index')
      }
    ]
  },
  {
    path: '/home',
    component: () => import('@/views/home/index')
  }
]

const createRouter = () => new VueRouter({
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export default router
