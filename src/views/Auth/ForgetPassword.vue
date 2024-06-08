<script setup>
// Initialization for ES Users
import {
  Input,
  Ripple,
  initTWE,
} from "tw-elements";

import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'

initTWE({ Input, Ripple });
</script>

<template>
  <section class="h-screen bg-neutral-50">
    <div class="h-full text-center">
      <!-- Left column container with background-->
      <div class="h-full flex items-center justify-center">

        <form class="mb-12 bg-white shadow-md py-6 px-4 rounded-lg w-full w-11/12">

          <h1 class=" mb-30 text-xl font-bold text-center">Nobatdaram Login</h1>
          <h2 class=" mb-10 text-lg text-center">Forget Password</h2>

          <!-- Email input -->
          <div class="relative mb-6 border" data-twe-input-wrapper-init>
            <input type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2" placeholder="Email address or phone number" />
            <label for="exampleFormControlInput2"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Email
              address or phone number
            </label>
          </div>

          <!-- Login button -->
          <div class="text-center lg:text-left">

            <button type="button"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init data-twe-ripple-color="light">
              Get code
            </button>

            <!-- Register link -->
            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
              <router-link :to="{name: 'login'}"
                class="text-danger flex justify-center transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 items-center">Back to login page <ArrowLongRightIcon class=" w-6 mx-1"/></router-link>
            </p>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>