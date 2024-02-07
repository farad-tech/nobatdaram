<template>

  <TitleText> 
    <span class="animate-ping inline-flex h-2 w-2 rounded-full bg-success opacity-75 me-2"></span>
    لیست نوبتهای حال حاضر  
  </TitleText>

  <Item store="آرایشگاه آث در تالش در گیلان" date="12 مهر 1402 - 16:00" id="1">
    <XCircleIcon class="h-6 w-6" />
  </Item>

  <TitleText>
    نوبتهای پرتکرار
  </TitleText>

  <Item />
</template>

<script setup>
import Item from './../components/AppointmentItem.vue';
import TitleText from  './../components/TitleText.vue';
import { XCircleIcon } from '@heroicons/vue/24/outline';

</script>