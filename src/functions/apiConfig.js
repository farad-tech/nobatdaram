import Cookies from "js-cookie";

export default function apiConfig()
{

  var headers = {
    Authorization: `Bearer ${Cookies.get('auth-token')}`,
  }

  var config = {headers}

  return config;
}