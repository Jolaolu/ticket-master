import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mixins from '../utils/mixins'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    eventsData: {
      events: [],
      pageInfo: {},
      tickets: []
    },
    loading: false
  },
  getters: {
    events: state => state.eventsData.events,
    loading: state => state.loading,
    pageInfo: state => state.eventsData.pageInfo,
    tickets: state => state.tickets
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    CLEAR (state) {
      state.tickets = ''
      window.href('/')
    },
    SET_EVENTS (state, payload) {
      state.eventsData.events.push(...payload)
    },
    SET_PAGE_DATA (state, payload) {
      Vue.set(state.eventsData, 'pageInfo', payload)
    },
    INCREMENT_TICKET (state, payload) {
      const ticket = state.tickets.find(t => t.id === payload)
      ticket.count++
      if (ticket.count >= ticket.qty_available) {
        ticket.count = ticket.qty_available
      }
    },
    DECREMENT_TICKET (state, payload) {
      const ticket = state.tickets.find(t => t.id === payload)
      ticket.count--
      if (ticket.count <= 0) {
        ticket.count = 0
      }
    },
    SET_TICKETS (state, payload) {
      state.tickets = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('SET_LOADING', payload)
    },
    clear ({ commit }) {
      commit('CLEAR ')
    },
    async getEvents ({ commit, dispatch }, page) {
      commit('SET_LOADING', true)
      try {
        const { data } = await axios.get(`events?page${page}`)
        const events = await Promise.all(
          data.data.events.map(async event => {
            const { data } = await axios.get(`ticket-types/events/${event.id}`)
            event.tickets = data.data
            return event
          })
        )
        commit('SET_EVENTS', events)
        commit('SET_PAGE_DATA', data.data.pageInfo)
        commit('SET_LOADING', false)
      } catch (error) {
        mixins.methods.handleError(error)
      }
    },
    registerFree ({ commit }, { id, data }) {
      return new Promise((resolve, reject) => {
        axios.post(`events/${id}/register`, data)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    incrementTicket ({ commit }, id) {
      commit('INCREMENT_TICKET', id)
    },
    decrementTicket ({ commit }, id) {
      commit('DECREMENT_TICKET', id)
    },
    setTickets ({ commit }, tickets) {
      const newTickets = tickets.map(e => {
        e.count = 0
        return e
      })
      commit('SET_TICKETS', newTickets)
    }
  },
  plugins: [vuexLocal.plugin]
})
