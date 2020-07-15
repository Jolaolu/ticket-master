import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import mixins from './utils/mixins'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('Footer', Footer)

Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
