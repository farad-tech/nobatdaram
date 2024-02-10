<template>
  <nav class="fixed top-0 left-0 w-full p-3 px-6 search-bar flex">
    <!-- <div class="rounded-full shadow-lg bg-white p-2">
      <div class="flex justify-between align-middle"> -->
        <div class="relative w-11/12 click">
          <label class="absolute top-2 right-3" for="search">
            <MagnifyingGlassIcon class="h-6 w-6 text-primary" />
          </label>

          <input
            id="search"
            type="text"
            class="search-input"
            placeholder="نام آرایشگاه، مطب و ... را جستجو کنید" 
          />
        </div>
      <!-- </div>
    </div> -->
    <span class="w-1/12 flex flex-row-reverse">
      <BellIcon class="w-6 my-auto text-warning click" />
    </span>
  </nav>
</template>

<script setup>

import { MagnifyingGlassIcon, BellIcon } from '@heroicons/vue/24/outline'

</script>