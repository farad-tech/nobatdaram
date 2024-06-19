<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import VerifyCodeInput from '@/components/form/VerifyCode.vue'
import { ref } from 'vue'
import resendVerifyCode from '@/functions/resendVerifyCode';

const timerBaseNumber = 120;
const VerifyCode = ref(null);
const Errors = ref([]);
const timer = ref(timerBaseNumber);
const timeInterval = ref();

function assignError(errorObject) {

  if (errorObject.VerifyCode != undefined) {
    if (errorObject.VerifyCode === true) {
      Errors.value['VerifyCode'] = true;
    } else {
      Errors.value['VerifyCode'] = false;
    }
  }

}

const formSubmit = () => {

  const ErrorList = Errors.value;

  if (Object.keys(ErrorList).length === 0) {
    return;
  } else {
    for (const key in ErrorList) {
      if (ErrorList.hasOwnProperty.call(ErrorList, key)) {

        const error = ErrorList[key];
        if (error || VerifyCode.value == null) {

          return;

        }

      } ``
    }
  }

  alert('submit');
}

const resendVerifyCodeAndSetTimeout = (to) => {

  resendVerifyCode(to);

  VerifyCodeInterval()
}

const VerifyCodeInterval = () => {
  timer.value = timerBaseNumber;
  timeInterval.value = setInterval(() => {
    timer.value = timer.value - 1;

    if (timer.value <= 0) {
      clearInterval(timeInterval.value);
    }
  }, 1000);
}
VerifyCodeInterval()


</script>

<template>
  <section class="h-screen">
    <div class="h-full">
      <p class=" text-red-700 ">تایمر برای ارسال مجدد کد تایید باید پیاده سازی شود</p>
      <div class="h-full flex items-center justify-center">

        <form class="mb-12  shadow-md py-6 px-4 rounded-lg w-full" @submit.prevent="formSubmit">

          <h1 class=" mb-30 text-xl font-bold text-center">Nobatdaram Login</h1>
          <h2 class=" mb-10 text-lg text-center">Verify Code</h2>

          <VerifyCodeInput v-model="VerifyCode" @getError="assignError" />

          <div class="flex items-center my-5">

            <button v-show="timer <= 0" type="button"
              @click="resendVerifyCodeAndSetTimeout('farhadkarami@yahoo.com')">Resend code</button>

              <div v-show="timer > 0">

                <span>0{{  Math.floor(timer / 60) }}</span>
                <span class="mx-1">:</span>
                <span v-if="(timer % 60) < 10">0</span>
                <span>{{ (timer % 60) }}</span>

              </div>

          </div>

          <!-- Login button -->
          <div class="text-center lg:text-left">

            <button type="submit"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init data-twe-ripple-color="light">
              Verify code
            </button>

            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
              <router-link :to="{ name: 'forget-password' }"
                class="text-danger flex justify-center transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 items-center">Back
                to forget password page
                <ArrowLongRightIcon class=" w-6 mx-1" />
              </router-link>
            </p>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>