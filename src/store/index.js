import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    films: []
  },
  mutations: {   // repository
    increment (state) {
      state.count++
    },
    changeFilms (state, value) {
      state.films = value
    }
  },
  getters: {
    count: (state) => {
      return state.count
    },
    films: (state) => {
      return state.films
    }
  },
  actions: {    // service
    doAlert: () => {
      alert('Hey you call me!')
    },
    doIncrement: ({commit, dispatch}) => {
      // increment
      commit('increment')
      dispatch('doAlert')
    },
    getFilms: ({commit}) => {
      alert('You call vuex action')
    }
  }
})

export default store

store.commit('increment')
console.log(store.state.count)
