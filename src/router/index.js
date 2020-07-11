import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const EventDetailsView = () => import('@/views/Event.vue')
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
