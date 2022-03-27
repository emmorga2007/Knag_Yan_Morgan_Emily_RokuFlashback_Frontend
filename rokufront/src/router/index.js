import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import UserSelect from '../views/UserSelect.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/UserSelect',
    name: 'UserSelect',
    component: UserSelect,
    params: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
