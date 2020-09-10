import router from './router'
import { getRefreshToken, getAccessToken, setAccessToken, setRefreshToken } from '@/utils/auth' // get token from cookie
import { refreshToken, githubLogout, refreshPageNoCode } from '@/api/githubLogin'
import { clientID, clientSecret } from '@/settings'
import store from '@/store'

router.beforeEach(async(to, from, next) => {
  const hasRefreshToken = getRefreshToken()
  const query = to.query
  if (!hasRefreshToken && !query.code) {
    githubLogout()
  } else if (!hasRefreshToken && query.code) {
    const newQuery = JSON.parse(JSON.stringify(to.query))
    delete newQuery.code
    const accessData = {
      client_id: clientID,
      client_secret: clientSecret,
      code: query.code
    }
    store.dispatch('githubUser/login', accessData).then(() => {
      store.dispatch('githubUser/getInfo').then(() => {
        refreshPageNoCode(router, to, newQuery)
      }).catch( error => {
        if (error) {
          githubLogout()
          refreshPageNoCode(router, to, newQuery)
        }
      })
    }).catch((error) => {
      if (error) {
        githubLogout()
        refreshPageNoCode(router, to, newQuery)
      }
    })
  } else {
    const hasAccessToken = getAccessToken()
    if (!hasAccessToken) {
      console.log('refresh token')
      const accessData = {
        client_id: clientID,
        client_secret: clientSecret
      }
      refreshToken(accessData).then(response => {
        const { data } = response
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
        store.dispatch('githubUser/getInfo').catch( error => {
          if (error) {
            githubLogout()
          }
        })
      })
    }
    store.dispatch('githubUser/getInfo').catch( error => {
      if (error) {
        githubLogout()
      }
    })
  }
  scrollTo(0, 0)
  next()
})
