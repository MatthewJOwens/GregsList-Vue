import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "cars" */ '../views/Cars.vue')
    }
  },
  {
    path: '/cars/:carId',
    name: 'CarDetails',
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "car-details" */ '../views/CarDetails.vue')
    }
  },
  {
    path: '/houses',
    name: 'Houses',
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "cars" */ '../views/Houses.vue')
    }
  },
  {
    path: '/houses/:houseId',
    name: 'HouseDetails',
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "house-details" */ '../views/HouseDetails.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      // @ts-ignore
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  routes
})

export default router
