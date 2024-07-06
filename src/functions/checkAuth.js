import router from "@/router";
import Cookies from "js-cookie";
import baseAxios from '@/functions/baseAxios';
import Toast from "./Toast";
import messages from "./Messages";

const checkAuth = () => {

  const token = Cookies.get('auth-token');

  if(!token) {
    router.push({name: 'login'})
    Toast.fire({
      'icon': 'warning',
      'text': messages.invalid_token,
    })
  } else {
    
    baseAxios.get('check-auth', { headers: {
      Authorization: 'Bearer ' + token
    }}).catch((error) => {
      Toast.fire({
        'icon': 'warning',
        'text': messages.invalid_token,
      })
      router.push({name: 'login'})
    })

  }
}

export default checkAuth;