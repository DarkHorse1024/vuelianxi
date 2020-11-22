import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import text from '../views/text.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/text/:id',
    component: () => import( '../views/text.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
