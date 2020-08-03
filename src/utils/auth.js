import Cookies from 'js-cookie'

var access_expireTime = new Date(new Date().getTime() + 6 * 60 * 60 * 1000)
var refresh_expireTime = new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)

const AccessTokenKey = 'Github-Access-Token'
const RefreshTokenKey = 'Github-Refresh-Token'

export function getAccessToken() {
  return Cookies.get(AccessTokenKey)
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}

export function setAccessToken(token) {
  return Cookies.set(AccessTokenKey, token, { expires: access_expireTime })
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token, { expires: refresh_expireTime })
}

export function removeToken() {
  Cookies.remove(getAccessToken)
  Cookies.remove(RefreshTokenKey)
}
