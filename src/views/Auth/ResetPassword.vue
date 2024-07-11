<script setup>
import { ref } from 'vue';
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import EmailOrPhoneInput from '@/components/form/EmailOrPhone.vue';
import PasswordInput from '@/components/form/Password.vue';
import Cookies from 'js-cookie'
import apiConfig from '@/functions/apiConfig'
import messages from '@/functions/Messages'
import Toast from '@/functions/Toast'
import router from '@/router'
import baseAxios from '@/functions/baseAxios'

const loading = ref(false);
const Password = ref(null);
const Password_confirmation = ref(null);
const Errors = ref([]);

function assignError(errorObject) {

  if (errorObject.Password != undefined) {
    if (errorObject.Password === true) {
      Errors.value['Password'] = true;
    } else {
      Errors.value['Password'] = false;
    }
  }


  if (errorObject.Password_confirmation != undefined) {
    if (errorObject.Password_confirmation === true) {
      Errors.value['Password_confirmation'] = true;
    } else {
      Errors.value['Password_confirmation'] = false;
    }
  }
}

function formSubmit() {
  const ErrorList = Errors.value;

  if (Object.keys(ErrorList).length === 0) {
    return;
  } else {
    for (const key in ErrorList) {
      if (ErrorList.hasOwnProperty.call(ErrorList, key)) {
        const error = ErrorList[key];
        if (error || Password.value == null || Password_confirmation.value == null) {

          return;

        }

      }
    }
  }

  loading.value = true;

  const token = Cookies.get('reset-password-token');
  const phoneoremail = Cookies.get('reset-password-phoneoremail');
  const password = Password.value;
  const password_confirmation = Password_confirmation.value;

  const data = {
    token,
    phoneoremail,
    password,
    password_confirmation
  };

  baseAxios.post('auth/reset-password', data, apiConfig()).then((success) => {
    loading.value = false;

    Toast.fire({
      icon: 'success',
      text: messages.password_changed
    });

    router.push({ name: 'login' });
  }).catch((error) => {
    loading.value = false;

    var text;
    switch (error.response.status) {
      case 403:
        text = messages.permission_denied
        break;
      case 422:
        text = messages.invalid_entries
        break;

      default:
        text = messages.error
        break;
    }

    Toast.fire({
      icon: 'warning',
      text: text
    });

  })
}

</script>

<template>
  <section class="h-screen">
    <div class="h-full">
      <div class="h-full flex items-center justify-center">

        <form class="mb-12 shadow-md py-6 px-4 rounded-lg w-full" @submit.prevent="formSubmit">

          <h1 class=" mb-10 text-xl font-bold text-center">Nobatdaram Reset Password</h1>

          <PasswordInput v-model="Password" @getError="assignError" />

          <PasswordInput v-model="Password_confirmation" @getError="assignError" label="Password confirmation" />

          <!-- Login button -->
          <div class="text-center">


            <span v-if="loading" class="loading loading-bars loading-sm"></span>

            <button v-else type="submit"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init data-twe-ripple-color="light">
              Reset password
            </button>

            <!-- Register link -->
            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
              <router-link :to="{ name: 'login' }"
                class="text-danger flex justify-center transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 items-center">Back
                to login page
                <ArrowLongRightIcon class=" w-6 mx-1" />
              </router-link>
            </p>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>