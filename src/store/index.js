import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import config from './modules/config'
import timer from './modules/timer'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    config,
    timer
  }
})
