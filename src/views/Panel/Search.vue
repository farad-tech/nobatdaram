<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import ProfileHeader from '@/components/layouts/ProfileHeader.vue'
import ButtonSubmit from '@/components/form/Button.vue'
import ButtonDanger from '@/components/form/ButtonDanger.vue'
import Avatar from '@/components/elements/Avatar.vue'
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

</script>

<template>
  <div class=" min-h-screen">
    <HeaderNav />

    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Search" />
      <MagnifyingGlassIcon class="w-4 h-4" />
    </label>

    <!-- <div class="divider">Result</div> -->
    <div class="divider">Recent</div>

    <router-link :to="{name: 'get-appointment'}" class="block rounded-xl bg-base-300 hover:bg-base-200 w-full shadow-xl p-2 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <Avatar class="w-12 me-2" />
          <div>
            <p>name</p>
          </div>
        </div>
        <div>
          <ChevronRightIcon class="w-6" />
        </div>
      </div>
    </router-link>

  </div>

  <FooterNav />

</template>