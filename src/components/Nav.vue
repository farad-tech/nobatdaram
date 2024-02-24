<template>

  <nav v-if="authed" class="fixed bottom-0 left-0 w-full p-3 px-6">
    <div class="rounded-full shadow-lg bg-white p-2">
      <div class="flex justify-around align-middle">
        <router-link class="navbar-item click" active-class="navbar-item-active" to="/">
          <CalendarDaysIcon/>
        </router-link>
        
        <router-link class="navbar-item click" active-class="navbar-item-active" to="/previous-appointments">
          <ClockIcon/>
        </router-link>
        
        <router-link class="navbar-item click" active-class="navbar-item-active" to="/user">
          <UserCircleIcon/>
        </router-link>
        
        <router-link class="navbar-item click" active-class="navbar-item-active" to="/my-store">
          <BuildingStorefrontIcon/>
        </router-link>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>

import { UserCircleIcon, CalendarDaysIcon, ClockIcon, BuildingStorefrontIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const authed = ref(false);

</script>