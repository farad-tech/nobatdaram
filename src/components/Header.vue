<template>
  <nav class="fixed top-0 left-0 w-full p-3 px-6 search-bar">
    <!-- <div class="rounded-full shadow-lg bg-white p-2">
      <div class="flex justify-between align-middle"> -->
        <div class="relative">
          <MagnifyingGlassIcon class="h-6 w-6 absolute top-2 right-3 text-neutral" />

          <input
            type="text"
            class="search-input"
            placeholder="نام آرایشگاه، مطب و ... را جستجو کنید" 
          />
        </div>
      <!-- </div>
    </div> -->
  </nav>
</template>

<script setup>

import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

</script>