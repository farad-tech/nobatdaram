import { VueElement, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

const app_url = "https://127.0.0.1:8000/";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

console.log(getCookie('access_token'));


const app = createApp(App)
app.use(router)
app.component('DatePicker', Vue3PersianDatetimePicker)
app.mount('#app')

