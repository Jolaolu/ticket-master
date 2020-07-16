import Vue from 'vue'
import Vuex from 'vuex'
import { getAllEvents } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: {},
    loading: false
  },
  getters: {
    eventsData: state => state.eventsData,
    loading: state => state.loading
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_EVENTS (state, payload) {
      // console.log(payload)
      state.eventsData = { ...payload }
    }
  },
  actions: {
    getEvents ({ commit }) {
      commit('SET_LOADING', true)
      getAllEvents()
        .then(response => {
          console.log(response)
          commit('SET_EVENTS', response)
        })
      // commit('SET_EVENTS', data)
      // console.log(data)
      // localStorage.setItem('events', data)
      commit('SET_LOADING', false)
    }
  }
})
