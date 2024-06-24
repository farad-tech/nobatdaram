<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
import { ref } from 'vue';
import { PencilIcon } from '@heroicons/vue/24/solid';
import ProfileHeader from '@/components/layouts/ProfileHeader.vue';

const activeMenu = ref('Appointments');

const Menus = [
  'Appointments',
  'History',
];

const changeMenu = (menuName) => {

  activeMenu.value = menuName;

}

</script>

<template>

  <div class=" min-h-screen">
    <HeaderNav />

    <ProfileHeader />

    <div class="my-10 text-center">
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li v-for="Menu in Menus">
          <a @click="changeMenu(Menu)" :class="{ 'active': activeMenu == Menu }">{{ Menu }}</a>
        </li>
      </ul>
    </div>

    <div>
      <div v-for="i in 1" class="skeleton w-full h-12 mb-2"></div>
    </div>

  </div>

  <FooterNav />

</template>