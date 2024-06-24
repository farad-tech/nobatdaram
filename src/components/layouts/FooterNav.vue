<script setup>
import { UserCircleIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router'
const router = useRouter();

const links = [
  {
    name: 'profile',
    icon: UserCircleIcon
  },
  {
    name: 'get-appointment',
    icon: CalendarDaysIcon
  },
];

</script>

<template>
  <div class="btm-nav sticky bottom-0">

    <button v-for="link in links" :class="{'active': router.currentRoute._value.name == link.name}">
      <router-link :to="{ name: link.name }" class="w-full h-full flex items-center justify-center">
        <component :is="link.icon" class="w-6 h-6"></component>
      </router-link>
    </button>

  </div>
</template>