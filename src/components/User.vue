<template>
  <div class="card justify-between flex-wrap">
    <div class="flex">
      <img class="block rounded-full h-12 w-12 me-4 bg-neutral" :src="avatar" />

      <div class="flex flex-col justify-center">
        <p>{{ name }}</p>
        <p class="text-gray">{{ tagline }}</p>
      </div>
    </div>

    <PencilSquareIcon v-if="editable" class="w-6 h-6 text-warning click" />

    <div class="w-full mt-4 flex">
      <span class="block rounded-full h-12 w-12 me-4"></span>
      <div>
        <p>شماره تماس</p>
        <p class="text-gray">{{ phone }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PencilSquareIcon } from '@heroicons/vue/24/outline';

defineProps({
  avatar: String,
  name: String,
  tagline: String,
  phone: String,
  id: String,
  editable: Boolean,
})

</script>