import { githubLogin, githubGetInfo } from '@/api/githubLogin'
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from '@/utils/auth'

const state = {
  name: '',
  avatar: '',
  access_token: getAccessToken(),
  refresh_token: getRefreshToken()
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ACCESS_TOKEN: (state, token) => {
    state.access_token = token
  },
  SET_REFRESH_TOKEN: (state, token) => {
    state.refresh_token = token
  }
}

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
        githubLogin(data).then(response => {
          console.log(response)
          const { data } = response
          commit('SET_ACCESS_TOKEN', data.access_token)
          commit('SET_REFRESH_TOKEN', data.refresh_token)
          setAccessToken(data.access_token)
          setRefreshToken(data.refresh_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
    })
  },

  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      githubGetInfo().then(response => {
        const { data } = response
        const { login, avatar_url } = data
        commit('SET_NAME', login)
        commit('SET_AVATAR', avatar_url)
        localStorage.setItem('name', login)
        localStorage.setItem('avatar_url', avatar_url)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
