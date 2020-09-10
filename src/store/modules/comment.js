const state = {
  refreshComment: false
}

const mutations = {
  REFRESH_COMMENT: (state) => {
    state.refreshComment = !state.refreshComment
  }
}

const actions = {
  // get user info
  refreshComment({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('REFRESH_COMMENT', state)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
