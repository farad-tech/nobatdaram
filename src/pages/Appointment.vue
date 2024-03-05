<template>
  <TitleText>
    لیست نوبتهای حال حاضر
  </TitleText>

  <!-- <Item name="آرایشگاه آث در تالش در گیلان" date="12 مهر 1402 - 16:00" id="1" phone="09123456789">
    <XCircleIcon class="h-6 w-6 click" />
  </Item> -->

  <p class="mt-4 mb-10 text-sm text-center text-gray">
    موجود نیست
  </p>

  <TitleText>
    نوبتهای پرتکرار
  </TitleText>

  <p class="mt-4 mb-10 text-sm text-center text-gray">
    موجود نیست
  </p>

  <!-- <RepeatItem name="آرایشگاه آث در تالش در گیلان" date="12 مهر 1402 - 16:00" id="1" phone="09123456789" /> -->
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/24/outline';
import Item from './../components/AppointmentItem.vue';
import TitleText from './../components/TitleText.vue';
import RepeatItem from './../components/RepeatAppointmentItem.vue';
import checkAuth from '../custom-javascript/checkAuth';

const props = defineProps({
  APP_URL: String,
});

checkAuth(props.APP_URL);

</script>