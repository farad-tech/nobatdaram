<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import { ref } from 'vue';
import { PencilIcon } from '@heroicons/vue/24/solid';

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
  <HeaderNav />

  <div class="h-36 border-b border-neutral-600 bg-base-100 sticky top-0">
    <div class="relative h-full">
      <div class="absolute bottom-2 left-2 ">
        <p class="mb-1 flex items-center">Farhad Karami <PencilIcon class="w-4 h-4 text-warning mx-2"/></p>
        <p class="text-sm">+989352760807</p>
        <p class="text-sm">farhadkarami@yahoo.com</p>
      </div>
      <div
        class="w-24 h-24 rounded-full bg-neutral-400 absolute -bottom-6 right-2 flex items-center justify-center p-1">
        <img src="#" class="block w-full h-full bg-neutral-800 rounded-full" />
      </div>
    </div>
  </div>

  <div class="my-10 text-center">
    <ul class="menu menu-horizontal bg-base-200 rounded-box">
      <li v-for="Menu in Menus">
        <a @click="changeMenu(Menu)" :class="{ 'active': activeMenu == Menu }">{{ Menu }}</a>
      </li>
    </ul>
  </div>

  <div>
    <div v-for="i in 20" class="skeleton w-full h-12 mb-2"></div>
  </div>

</template>