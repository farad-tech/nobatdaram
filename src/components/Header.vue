<template>

  <nav v-if="headerShow" class="fixed top-0 left-0 w-full p-3 px-6 search-bar flex">

    <span class="w-1/12 flex flex-row-reverse bg-white rounded-full shadow-sm justify-center click">
      <BellIcon class="w-6 my-auto text-warning" />
    </span>

    <div class="relative w-11/12 click mx-1">
      <label class="absolute top-2 right-3" for="search">
        <MagnifyingGlassIcon class="h-6 w-6 text-primary" />
      </label>

      <input id="search" type="text" class="search-input" placeholder="نام آرایشگاه، مطب و ... را جستجو کنید" />
    </div>

    <span @click="$router.go(-1)"
      class="w-1/12 flex flex-row-reverse bg-white rounded-full shadow-sm justify-center click">
      <ArrowLeftIcon class="w-4 my-auto" />
    </span>

    <!-- <div class="bg-white py-2 rounded-lg shadow-lg mt-1 absolute w-9/12 top-16">

      <div class="bg-light mb-3 px-2 py-2 border-b border-neutral click">
        <p class="font-bold">آرایشگاه آث</p>
        <p class="font-gray text-sm">آرایشگاه آث</p>
      </div>

      <div class="bg-light mb-3 px-2 py-2 border-b border-neutral">
        <p class="font-bold">آرایشگاه آث</p>
        <p class="font-gray text-sm">آرایشگاه آث</p>
      </div>

    </div> -->

  </nav>
</template>

<script setup>

import { MagnifyingGlassIcon, BellIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const fullUrl = window.location.href;

const headerShow = ref(true);

if(fullUrl.includes('login')) {
  headerShow.value = false;
}

</script>