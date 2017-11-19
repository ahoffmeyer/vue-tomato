import * as types from '../mutations'

const settings = {
  'time': 25
}

const times = [
  5, 10, 15, 20, 25
]

const state = {
  running: 0,
  total: settings.time,
  time: settings.time,
  cnfTimes: times
}

const progress = () => {
  return Math.floor((state.time / state.total) * 100)
}

const getters = {
  getTime: state => state.time,
  getRunning: state => state.running,
  getTimes: state => state.cnfTimes,
  getProgress: state => progress(),
  getPercentageW: state => 'width: ' + progress() + '%'
}

// recursive timer
const interval = ({ commit }) => setTimeout(() => {
  if (state.running === 0) {
    return
  } else {
    commit(types.COUNTDOWN_TIMER)
  }

  if (state.running === 1 && state.time >= 0) {
    return interval({ commit })
  } else {
    commit(types.RESET_TIMER)
  }
}, 1000)

const actions = {
  setTime ({ commit }, time) {
    // reset the current timer
    commit(types.RESET_TIMER)
    // then set a new time
    commit(types.SET_TIME, time)
  },
  startTimer ({ commit }) {
    commit(types.START_TIMER)
    interval({ commit })
  },
  stopTimer ({ commit }) {
    commit(types.STOP_TIMER)
  },
  resetTimer ({ commit }) {
    commit(types.RESET_TIMER)
  }
}

const mutations = {
  [types.SET_TIME] (state, time) {
    state.total = state.time = time
  },
  [types.RESET_TIMER] (state) {
    state.running = 0
    state.time = state.total
  },
  [types.START_TIMER] (state) {
    state.running = 1
  },
  [types.STOP_TIMER] (state) {
    state.running = 0
  },
  [types.COUNTDOWN_TIMER] (state) {
    return state.time--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
