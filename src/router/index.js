import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const EventDetailsView = () => import(/* webpackChunkName: "event" */ '@/views/Event.vue')
const CartView = () => import(/* webpackChunkName: "cart" */ '@/views/CartManagementView.vue')

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
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
