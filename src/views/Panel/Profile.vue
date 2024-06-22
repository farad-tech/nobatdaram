<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
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

  <div class=" min-h-screen">
    <HeaderNav />

    <div class="h-36 border-b border-neutral-600 bg-base-100 sticky z-50 top-0">
      <div class="relative h-full">
        <div class="absolute bottom-2 left-2 ">
          <router-link :to="{ name: 'edit-profile' }" class="mb-1 flex items-center">Farhad Karami
            <PencilIcon class="w-4 h-4 text-warning mx-2" />
          </router-link>
          <p class="text-sm">+989352760807</p>
          <!-- <p class="text-sm">farhadkarami@yahoo.com</p> -->
        </div>

        <div class="rounded-full absolute -bottom-6 right-2">
          <Avatar imageSrc="" :isOnline="false"/>
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
      <div v-for="i in 1" class="skeleton w-full h-12 mb-2"></div>
    </div>

  </div>

  <FooterNav />

</template>