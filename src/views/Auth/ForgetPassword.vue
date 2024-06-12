<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import EmailOrPhoneInput from '@/components/form/EmailOrPhone.vue'
import { ref } from 'vue'

const EmailOrPhone = ref(null);

const formSubmit = () => {
  alert(EmailOrPhone.value)
}

</script>

<template>
  <section class="h-screen">
    <div class="h-full">
      <div class="h-full flex items-center justify-center">

        <form class="mb-12  shadow-md py-6 px-4 rounded-lg w-full" @submit.prevent="formSubmit">

          <h1 class=" mb-30 text-xl font-bold text-center">Nobatdaram Login</h1>
          <h2 class=" mb-10 text-lg text-center">Forget Password</h2>

          <EmailOrPhoneInput v-model="EmailOrPhone" error=""/>

          <!-- Login button -->
          <div class="text-center lg:text-left">

            <button type="submit"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init data-twe-ripple-color="light">
              Get code
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