import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventsData: {
      events: [],
      pageInfo: {}
    },
    loading: false
  },
  getters: {
    events: state => state.eventsData.events,
    loading: state => state.loading,
    pageInfo: state => state.eventsData.pageInfo
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_EVENTS (state, payload) {
      state.eventsData.events = payload
    },
    SET_PAGE_DATA (state, payload) {
      Vue.set(state.eventsData, 'pageInfo', payload)
    }
  },
  actions: {
    async getEvents ({ commit, dispatch }) {
      commit('SET_LOADING', true)
      try {
        const { data } = await axios.get('events')
        const events = await Promise.all(
          data.data.events.map(async event => {
            const { data } = await axios.get(`ticket-types/events/${event.id}`)
            event.tickets = data.data
            return event
          })
        )
        commit('SET_LOADING', false)
        commit('SET_EVENTS', events)
        commit('SET_PAGE_DATA', data.data.pageInfo)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
