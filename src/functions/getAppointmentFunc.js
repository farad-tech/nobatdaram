import baseAxios from './baseAxios'
import apiConfig from './apiConfig'
import Toast from './Toast'
import messages from './Messages'

const getAppointmentFunc = (appointable_id, start_at) => {

  baseAxios.post('appointment',{appointable_id, start_at}, apiConfig())
    .then((success) => {
      Toast.fire({
        'icon': 'success',
        'text': messages.appointment_set
      });

      window.location.reload()
    })
    .catch((error) => {

      Toast.fire({
        icon: 'error',
        text: messages.error
      })
    })

}

export default getAppointmentFunc;