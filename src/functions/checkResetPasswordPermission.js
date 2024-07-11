import router from '@/router'
import Cookies from 'js-cookie'
import baseAxios from '@/functions/baseAxios'
import Toast from './Toast'
import messages from './Messages'
import apiConfig from './apiConfig'

const checkResetPasswordToken = () => {
  const token = Cookies.get('reset-password-token')

  if (!token) {
    router.push({ name: 'login' })
    Toast.fire({
      icon: 'warning',
      text: messages.permission_denied
    })
  } else {
    baseAxios
      .post('auth/check-reset-password-token', {'token': token, 'phoneoremail': Cookies.get('reset-password-phoneoremail')}, apiConfig())
      .then((result) => {})
      .catch((error) => {

        console.log(error);

        Toast.fire({
          icon: 'warning',
          text: messages.permission_denied
        })

        router.push({ name: 'login' })

      })
  }
}

export default checkResetPasswordToken
