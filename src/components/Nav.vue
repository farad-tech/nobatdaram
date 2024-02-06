<template>

  <nav class="fixed bottom-0 left-0 w-full p-3 px-12">
    <div class="rounded-full shadow-lg bg-white p-2">
      <div class="flex justify-around align-middle">

        <UserCircleIcon class="navbar-item"/>
        <ClockIcon class="navbar-item"/>
        <CalendarDaysIcon class="navbar-item active"/>
        <BuildingStorefrontIcon class="navbar-item"/>
      
      </div>
    </div>
  </nav>

</template>

<script setup>

import { UserCircleIcon, CalendarDaysIcon, ClockIcon, BuildingStorefrontIcon } from '@heroicons/vue/24/outline'

</script>