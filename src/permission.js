import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from cookie

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  const githubName = sessionStorage.getItem('name')
  if (hasToken && !githubName) {
    console.log('getInfo')
    store.dispatch('githubUser/getInfo', hasToken)
    next()
  }
  next()
})
