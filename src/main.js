import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import mixins from './utils/mixins'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://eventsflw.herokuapp.com/v1'

Vue.component('NavBar', NavBar)
Vue.component('Footer', Footer)
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
