import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/Loader'
import mixins from './utils/mixins'
import VueIziToast from 'vue-izitoast'

import 'izitoast/dist/css/iziToast.min.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://eventsflw.herokuapp.com/v1'

Vue.use(VueIziToast)
Vue.component('NavBar', NavBar)
Vue.component('Footer', Footer)
Vue.component('Loader', Loader)
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
