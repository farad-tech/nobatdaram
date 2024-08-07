import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Auth/LoginView.vue'
import ForgetPassword from '@/views/Auth/ForgetPassword.vue'
import VerifyCode from '@/views/Auth/VerifyCode.vue'
import ResetPassword from '@/views/Auth/ResetPassword.vue'
import Profile from '@/views/Panel/Profile.vue'
import ProfileEdit from '@/views/Panel/ProfileEdit.vue'
import Search from '@/views/Panel/Search.vue'
import GetAppointment from '@/views/Panel/GetAppointment.vue'
import checkResetPasswordPermission from '@/functions/checkResetPasswordPermission'

import checkAuth from '@/functions/checkAuth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // Auth pages
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
      component: ResetPassword,
      beforeEnter: checkResetPasswordPermission,
    },

    // Profile pages
    {
      path: '/',
      name: 'profile',
      component: Profile,
      beforeEnter: checkAuth,
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: ProfileEdit,
      beforeEnter: checkAuth,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: checkAuth,
    },
    {
      path: '/get-appointment',
      name: 'get-appointment',
      component: GetAppointment,
      beforeEnter: checkAuth,
    },
    
  ]
})

export default router
