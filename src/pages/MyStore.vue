<template>
  <TitleText>
    مغازه‌ی من
  </TitleText>

  <!-- <div class="mt-4 py-8 rounded-2xl border-dashed border-2 border-gray bg-white shadow-lg text-center">
    <PlusIcon class="text-neutral h-28 mx-auto" />
    <p class="text-gray">مغازه خود را اضافه کنید</p>
  </div> -->

  <Store avatar="https://ui-avatars.com/api/?name=ف&color=FFFFFF&background=C70039" name="آرایشگاه آث"
    tagline="آرایشگاه مردانه" phone="09051873547" id="1" address="گیلان، تالش، میدان امام خمینی جنب درمانگاه شفا" />

  <router-link class="navbar-item" active-class="navbar-item-active" :to="{ name: 'manage-appointments' }">
    <div class="p-2 bg-white rounded-lg shadow-md flex justify-between">
      <div>
        مدیریت نوبتها (3 نوبت)
      </div>
      <ChevronLeftIcon class="h-6 w-6 text-gray"/>
    </div>
  </router-link>

  <!--
  مدیریت خدمات <br>
  آدرس با نقشه <br>
  -->
  
  <router-view></router-view>

</template>

<script setup>

import { ChevronLeftIcon } from '@heroicons/vue/24/outline';
import Store from './../components/Store.vue';
import AppointmentItem from '../components/AppointmentItem.vue';
import TitleText from '../components/TitleText.vue';
import { RouterLink } from 'vue-router';

</script>