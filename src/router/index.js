import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../modules/home/index-view.vue'
import HealthTips from '../modules/health-tips/index-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      layout: "HomeLayout"
    }
  },
  {
    path: '/health-tips',
    name: 'health-tips',
    component: HealthTips,
    meta:{
      layout: "HomeLayout"
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
