<template>
  <div class="my-2 rounded-2xl shadow-sm bg-white hover:shadow-md">
    <div class="flex flex-row-reverse text-danger p-1">
      <!-- Cancel Icon -->
      <slot></slot>
    </div>
    <div class="flex justify-between align-middle px-2 pb-2">
      <div class="flex align-middle w-3/5">

        <div>
          <p class="text-gray">نوبت</p>
          <p class="line-clamp-1">{{ name }}</p>
          <p v-if="phone" class="flex mt-2"><PhoneIcon class="h-5 me-1 text-gray"/><a :href="'tel:' + phone">{{ phone }}</a></p>
        </div>

      </div>

      <div>
        <p class="text-gray flex align-middle">
          <ClockIcon class="h-6 me-1" /> <span>تاریخ</span>
        </p>
        <p class="">{{ date }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  name: String,
  date: String,
  id: String,
  phone: String,
})

import { ClockIcon, PhoneIcon } from '@heroicons/vue/24/outline';
</script>