<script setup>
import { ref } from 'vue';
import EmailOrPhoneInput from '@/components/form/EmailOrPhone.vue';
import PasswordInput from '@/components/form/Password.vue';

const EmailOrPhone = ref(null);
const Password = ref(null);
const Errors = ref([]);

function assignError(errorObject) {

  if (errorObject.EmailOrPhone != undefined) {
    if (errorObject.EmailOrPhone === true) {
      Errors.value['EmailOrPhone'] = true;
    } else {
      Errors.value['EmailOrPhone'] = false;
    }
  }


  if (errorObject.Password != undefined) {
    if (errorObject.Password === true) {
      Errors.value['Password'] = true;
    } else {
      Errors.value['Password'] = false;
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
        if (error || Password.value == null || EmailOrPhone.value == null) {

          return;

        }

      }
    }
  }

  alert('submit');
}

</script>

<template>
  <section class="h-screen">
    <div class="h-full">
      <div class="h-full flex items-center justify-center">

        <form class="mb-12 shadow-md py-6 px-4 rounded-lg w-full" @submit.prevent="formSubmit">

          <h1 class="mb-1 text-xl font-bold text-center">Nobatdaram Login & Register</h1>
          <p class="mb-10">You can also register into Nobatdaram with following form</p>

          <EmailOrPhoneInput v-model="EmailOrPhone" @getError="assignError" />

          <PasswordInput v-model="Password" @getError="assignError" />

          <div class="mb-6 flex items-center justify-between">
            <!--Forgot password link-->
            <Router-link :to="{ name: 'forget-password' }">Forgot password?</Router-link>
          </div>

          <!-- Login button -->
          <div class="text-center">

            <button type="submit"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init data-twe-ripple-color="light">
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>