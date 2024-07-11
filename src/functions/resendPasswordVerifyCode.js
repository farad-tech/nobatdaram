import baseAxios from '@/functions/baseAxios'
import apiConfig from './apiConfig'
import Toast from './Toast'
import messages from './Messages'

export default function resendPasswordVerifyCode(phoneoremail) {
  baseAxios
    .post('auth/get-reset-password-code', {phoneoremail}, apiConfig())
    .then((success) => {
      Toast.fire({
        icon: 'success',
        text: messages.code_sent
      })
    })
    .catch((error) => {
      if (error.response.status == 429) {
        Toast.fire({
          icon: 'info',
          text: messages.code_has_been_sent
        })
      } else {
        Toast.fire({
          icon: 'error',
          text: messages.error
        })
      }
    })
}
