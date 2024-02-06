<template>

  <nav class="fixed bottom-0 left-0 w-full p-3 px-6">
    <div class="rounded-full shadow-lg bg-white p-2">
      <div class="flex justify-around align-middle">

        <router-link class="navbar-item" active-class="navbar-item-active" to="/my-store">
          <BuildingStorefrontIcon/>
        </router-link>

        <router-link class="navbar-item" active-class="navbar-item-active" to="/user">
          <UserCircleIcon/>
        </router-link>

        <router-link class="navbar-item" active-class="navbar-item-active" to="/previous-appointments">
          <ClockIcon/>
        </router-link>
        
        <router-link class="navbar-item" active-class="navbar-item-active" to="/">
          <CalendarDaysIcon/>
        </router-link>
      
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>

import { UserCircleIcon, CalendarDaysIcon, ClockIcon, BuildingStorefrontIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router';

</script>