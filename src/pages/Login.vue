<template>
  <div class="bg-white shadow-md rounded-lg p-3">
    <p class="font-bold">ورود به نوبت دارم</p>

    <div v-if="step == 1">
      <p class="text-gray mb-5">جهت ورود یا ثبت نام شماره همراه خود را وارد کنید</p>

      <label>شماره همراه</label>
      <input maxlength="11" v-model="phone" class="text-input border border-gray mt-3" type="text"
        placeholder="مثال: 09123456789" @input="phoneRegex()" />
      <span class="text-sm text-danger">{{ regex }}</span>

      <button class="flex align-middle justify-center" :disabled="!result" :class="buttonClass" @click="submitStep1">
        <span class="me-1 text-white" v-html="spinner"></span>
        <span>دریافت کد تایید</span>
      </button>
    </div>


    <div v-if="step == 2">
      <p class="text-gray mb-5">جهت ورود یا ثبت نام کد تایید دریافتی را وارد کنید</p>

      <label>کد تایید</label>
      <input maxlength="5" v-model="code" class="text-input border border-gray mt-3" type="text" />
      <span class="text-sm text-danger">{{ code_error }}</span>

      <button :class="activeButton" @click="submitStep2">
        <span class="me-1 text-white" v-html="spinner2"></span>
        <span>ورود</span>
      </button>
    </div>


  </div>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import router from '../router';
import app_url_address from '../custom-javascript/app_url_address';

const phone = ref();
const regex = ref();
const result = ref(false);
const buttonClass = ref();
const step = ref(1);
const code = ref();
const spinner = ref();
const spinner2 = ref();
const code_error = ref();
const APP_URL = app_url_address();

const activeButton = 'bg-primary text-white w-full mt-7 p-2 rounded-full click';
const disableButton = 'bg-neutral text-dark w-full mt-7 p-2 rounded-full';

buttonClass.value = disableButton;

function phoneRegex() {

  const re = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

  result.value = re.test(phone.value);

  if (result.value) {
    regex.value = '';
  } else {
    regex.value = "شماره همراه باید مطابق الگو باشد: 09123456789";
  }

  if (result.value) {
    buttonClass.value = activeButton;
  } else {
    buttonClass.value = disableButton;
  }

}

function submitStep1() {

  spinner.value = '<svg class="animate-spin h-5 w-5" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 39.1v16.7c0 10.8 7.3 20.2 17.7 23.1C383.2 100.4 440 171.5 440 256c0 101.7-82.3 184-184 184-101.7 0-184-82.3-184-184 0-84.5 56.8-155.6 134.3-177.2C216.7 75.9 224 66.5 224 55.7V39.1c0-15.7-14.8-27.2-30-23.2C86.6 43.5 7.4 141.2 8 257.3c.7 137.1 111.5 247 248.5 246.7C393.3 503.7 504 392.8 504 256c0-115.6-79.1-212.8-186.2-240.2C302.7 11.9 288 23.5 288 39.1z"/></svg>';

  axios({
    method: 'post',

    url: APP_URL + 'api/login',

    data: {
      "phone_number": phone.value,
    },

    headers: {
      "Accept": "application/json",
    }

  })
    .then(function (response) {

      spinner.value = '';

      if (response.status == 200) {

        if (response.data.status) {
          step.value = 2;
        }

      } else {

        regex.value = 'خطایی رخ داد، لطفا مجدد امتحان کنید.';

      }

    })
    .catch(function (error) {
      spinner.value = '';

      console.log(error);

      regex.value = 'خطایی رخ داد، لطفا مجدد امتحان کنید.';
    });
}

function submitStep2() {


  code_error.value = '';

  axios({

    method: 'post',

    url: APP_URL + 'api/login/check-code',

    data: {
      "code": code.value,
      "phone_number": phone.value,
    },

    headers: {
      "Accept": "application/json",
    }
  })
    .then(function (response) {

      spinner.value = '';

      if (response.status == 200) {

        let access_token = response.data.message;

        document.cookie =
        "access_token=" + access_token + ";" + 30 * 24 * 60 * 60 + ";path=/";

        router.push({ name: 'appointment' });

      } else {
        code_error.value = 'خطایی رخ داد، لطفا مجدد امتحان کنید.';
      }

    })
    .catch(function (error) {
      spinner.value = '';

      console.log(error);

      code_error.value = 'خطایی رخ داد، لطفا مجدد امتحان کنید.';
    });


}

</script>