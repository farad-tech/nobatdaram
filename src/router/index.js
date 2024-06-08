import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Auth/LoginView.vue'
import ForgetPassword from '@/views/Auth/ForgetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPassword
    },
  ]
})

export default router
