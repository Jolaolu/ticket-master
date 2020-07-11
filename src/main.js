import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('Footer', Footer)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
