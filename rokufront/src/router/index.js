import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/UserSelect',
    name: 'UserSelect',
    component: () => import("../views/UserSelect.vue"),
    params: true
  },

  {
    path: '/Home',
    name: 'UserHome',
    component: () => import("../views/Home.vue"),
    params: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
