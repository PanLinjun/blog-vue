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
        path: 'link',
        component: () => import('@/views/link/index')
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
  // mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
