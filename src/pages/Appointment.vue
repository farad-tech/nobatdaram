<template>
  <p class="font-bold mb-3 text-sm relative">
    <span class="animate-ping inline-flex h-2 w-2 rounded-full bg-success opacity-75 me-2"></span>
    لیست نوبتهای حال حاضر
  </p>
  <div class="my-2 rounded-2xl shadow-sm bg-white hover:shadow-md">
    <div class="flex flex-row-reverse text-danger p-1">
      <XCircleIcon class="h-6 w-6"/>
    </div>
    <div class="flex justify-between align-middle px-2 pb-2">
      <div class="flex align-middle w-3/5">

        <div>
          <p class="text-gray">نوبت از</p>
          <p class="text-lg line-clamp-1">آرایشگاه آث در تالش در گیلان</p>
        </div>

      </div>

      <div>
        <p class="text-gray">تاریخ</p>
        <p class="text-lg">12 مهر 1402 - 16:00</p>
      </div>
    </div>

  </div>
  تکرار نوبتهای قبلی <br>
</template>

<script setup>
  import { XCircleIcon } from '@heroicons/vue/24/outline';
</script>