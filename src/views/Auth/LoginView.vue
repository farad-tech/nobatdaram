<script setup>
import { EyeIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';

const passwordInput = ref(null);

function togglePasswordShow() {
  if (passwordInput.value.getAttribute('type') == 'password') {

    passwordInput.value.setAttribute('type', 'text')

  } else {

    passwordInput.value.setAttribute('type', 'password')

  }
}

</script>

<template>
  <section class="h-screen">
    <div class="h-full">
      <!-- Left column container with background-->
      <div class="h-full flex items-center justify-center">

        <form class="mb-12 shadow-md py-6 px-4 rounded-lg w-full">

          <h1 class=" mb-10 text-xl font-bold text-center">Nobatdaram Login</h1>

          <div class="mb-4">
            <label class="mb-2">Email or Phone number</label>
            <input type="text" class="input input-bordered w-full" />
          </div>

          <div class="mb-4">
            <label class="mb-2">Password</label>
            <div class="flex items-center justify-between">
              <input ref="passwordInput" type="password" class="input input-bordered w-11/12" />
              <EyeIcon @click="togglePasswordShow" class="w-6 cursor-pointer" />
            </div>
          </div>

          <div class="mb-6 flex items-center justify-between">
            <!--Forgot password link-->
            <Router-link :to="{ name: 'forget-password' }">Forgot password?</Router-link>
          </div>

          <!-- Login button -->
          <div class="text-center lg:text-left">

            <button type="button"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init data-twe-ripple-color="light">
              Login
            </button>

            <!-- Register link -->
            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account?
              <a href="#!"
                class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Register</a>
            </p>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>