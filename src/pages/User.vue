<template>
  <User
    avatar="https://ui-avatars.com/api/?name=ف&color=FFFFFF&background=C70039"
    name="فرهاد کرمی"
    tagline="برنامه نویس"
    phone="09352760807"
    id="1"
  />

  <div class="card hover:shadow-lg hover:-translate-x-1">
    <ArrowLeftEndOnRectangleIcon class="h-6 w-6 text-danger" />
    <p class="text-danger">خروج از حساب کاربری</p>
  </div>
</template>

<script setup>
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline';
import User from '../components/User.vue';
</script>
