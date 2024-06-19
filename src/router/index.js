import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Auth/LoginView.vue'
import ForgetPassword from '@/views/Auth/ForgetPassword.vue'
import VerifyCode from '@/views/Auth/VerifyCode.vue'
import ResetPassword from '@/views/Auth/ResetPassword.vue'

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
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
  ]
})

export default router
