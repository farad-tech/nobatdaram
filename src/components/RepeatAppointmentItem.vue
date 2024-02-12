<template>
  <div class="mb-2 bg-white rounded-2xl p-1 border border-secondary hover:shadow-md">
    <div class="py-3">
      <div class="flex justify-between align-middle px-2">
        <div class="flex align-middle w-3/5">

          <div>
            <p class="text-gray">نوبت</p>
            <p class="line-clamp-1">{{ name }}</p>
            <p v-if="phone" class="flex mt-2">
              <PhoneIcon class="h-5 me-1 text-gray" /><a :href="'tel:' + phone">{{ phone }}</a>
            </p>
          </div>

        </div>

        <div>
          <p class="text-gray flex align-middle">
            <ClockIcon class="h-6 me-1" /> <span>تاریخ</span>
          </p>
          <p class="">{{ date }}</p>

          <div class="flex justify-end mt-2">
            <ArrowPathIcon class="h-7 w-14 text-primary bg-secondary rounded-full py-1 click shadow-md" />
          </div>
        </div>
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

import { ClockIcon, PhoneIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';

</script>