import axios from "axios";
import getCookie from "./getCookie";
import router from "../router";
import app_url_address from "./app_url_address";

async function checkAuthBool() {
  const APP_URL = app_url_address();

  return axios({
    method: "get",

    url: APP_URL + "api/appointment",

    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getCookie("access_token"),
    },
  });
}

export default function checkAuth() {
  checkAuthBool()
    .then(function (response) {
      if (response.status == 200) {
        return true;
      } else {
        return router.push({ name: "login" });
      }
    })
    .catch(function (error) {
      router.push({ name: "login" });
    });
}
