import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import admin from './modules/admin'
import githubUser from './modules/githubUser'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    admin,
    githubUser
  },
  getters
})

export default store
