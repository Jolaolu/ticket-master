import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    loading: false
  },
  getters: {
    events: state => state.events,
    loading: state => state.loading
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_EVENTS (state, payload) {
      state.events = payload
    }
  },
  actions: {
    getEvents ({ commit }) {
      commit('SET_LOADING', true)
      return new Promise((resolve, reject) => {
        axios.get('events')
          .then(response => {
            const events = []
            response.data.data.events.map(event => {
              axios.get(`ticket-types/events/${event.id}`)
                .then(response => {
                  const tickets = response.data.data
                  events.push({ tickets: tickets, ...event })
                })
                .catch(err => {
                  reject(err)
                })
            })
            commit('SET_EVENTS', events)
            console.log(events)
            commit('SET_LOADING', false)
            resolve(response)
          })
          .catch(err => {
            commit('SET_LOADING', false)
            reject(err)
          })
      })
    }
  }
})
