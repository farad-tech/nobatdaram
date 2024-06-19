import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Auth/LoginView.vue'
import ForgetPassword from '@/views/Auth/ForgetPassword.vue'
import VerifyCode from '@/views/Auth/VerifyCode.vue'

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
    {
      path: '/verify-code',
      name: 'verify-code',
      component: VerifyCode,
    }
  ]
})

export default router
