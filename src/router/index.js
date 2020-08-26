import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/Create')
  },
  {
    path: '/orders/:id',
    name: 'Detailed',
    component: () => import('@/views/Detailed')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
