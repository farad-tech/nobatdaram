<template>
  <TitleText>
    مدیریت نوبت ها
  </TitleText>

  <AppointmentItem name="فرهاد کرمی" phone="09305590348" date="1402 20 بهمن 16:00">
    <XCircleIcon class="h-6 w-6" />
  </AppointmentItem>
</template>

<script setup>

import TitleText from '../../components/TitleText.vue';
import AppointmentItem from '../../components/AppointmentItem.vue';
import { XCircleIcon } from '@heroicons/vue/24/outline';
</script>