import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const EventDetailsView = () => import('@/views/Event.vue')
const CartView = () => import('@/views/CartManagementView.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EventsListing',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'EventDetailsView',
    component: EventDetailsView,
    props: true
  },
  {
    path: '/event/:id/checkout',
    name: 'CartManagementView',
    component: CartView,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
