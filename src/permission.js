import router from './router'
import { getRefreshToken, getAccessToken, setAccessToken, setRefreshToken } from '@/utils/auth' // get token from cookie
import { refreshToken } from '@/api/githubLogin'
import { clientID, clientSecret } from '@/settings'

router.beforeEach(async(to, from, next) => {
  const hasRefreshToken = getRefreshToken()
  if (!hasRefreshToken) {
    console.log('clear loginInfo')
    localStorage.removeItem('name')
    localStorage.removeItem('avatar_url')
  } else {
    const hasAccessToken = getAccessToken()
    if (!hasAccessToken) {
      console.log('refresh token')
      const accessData = {
        client_id: clientID,
        client_secret: clientSecret
      }
      refreshToken(accessData).then(response => {
        console.log(response)
        const { data } = response
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
      })
    }
  }
  scrollTo(0, 0)
  next()
})
