import { githubLogin, githubGetInfo } from '@/api/githubLogin'
import { getToken, setToken } from '@/utils/auth'

const state = {
  name: '',
  avatar: '',
  token: getToken()
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
        githubLogin(data).then(response => {
          console.log(response)
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve(data.token)
        }).catch(error => {
          reject(error)
        })
    })
  },

  getInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      githubGetInfo(data).then(response => {
        const { data } = response
        const { name, avatar_url } = data
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar_url)
        sessionStorage.setItem('name', name)
        sessionStorage.setItem('avatar_url', avatar_url)
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
