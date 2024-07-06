import router from "@/router";
import Cookies from "js-cookie";
import baseAxios from '@/functions/baseAxios';
import Toast from "./Toast";
import messages from "./Messages";
import apiConfig from "./apiConfig";

const checkAuth = () => {

  const token = Cookies.get('auth-token');

  if(!token) {

    router.push({name: 'login'})
    Toast.fire({
      'icon': 'warning',
      'text': messages.invalid_token,
    })

  } else {
    baseAxios.get('check-auth', apiConfig()).then((result) => {
      if(result.status == 202) {

        Toast.fire({
          'icon': 'info',
          'text': messages.should_verify_account,
        })


        router.push({name: 'verify-code'})

      }
    }).catch((error) => {

      Toast.fire({
        'icon': 'warning',
        'text': messages.invalid_token,
      })

      console.log(error);

      router.push({name: 'login'})

    })

  }
}

export default checkAuth;