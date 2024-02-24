<template>
  <TitleText>
    دریافت نوبت آرایشگاه آث
  </TitleText>

  <StoreProf avatar="https://ui-avatars.com/api/?name=ف&color=FFFFFF&background=C70039" name="آرایشگاه آث"
    tagline="آرایشگاه مردانه" phone="09051873547" id="1" address="گیلان، تالش، میدان امام خمینی جنب درمانگاه شفا"
    :editable="false" />

  <date-picker
    v-model="date"
    type="datetime"
    :min="currentDate"
    :disable="disabledDates"
    simple
    jumpMinute="5"
    roundMinute="true"
  />

  <div class="text-center my-5 bg-primary text-white rounded-xl py-2 shadow-sm click">
    دریافت نوبت
  </div>
</template>

<script setup>

import { ref } from 'vue';
import TitleText from '../components/TitleText.vue';
import StoreProf from '../components/Store.vue';
import fixNumbers from '../custom-javascript/fixNumbers';

const date = ref('');

var currentDate = new Date();
currentDate = fixNumbers(currentDate.toLocaleString('fa-IR'));

var reserved = ['1402/11/25 17:00','1402/11/25 17:05','1402/11/25 17:10','1402/11/25 17:15'];
var weekend  = ['Friday'];
var disabledDates = reserved.concat(weekend);

</script>