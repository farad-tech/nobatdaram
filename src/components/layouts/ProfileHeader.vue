<script setup>
import Avatar from '@/components/elements/Avatar.vue'
import { PencilIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const editable = ref(false);

</script>

<template>
  <div class="h-36 border-b border-neutral-600 bg-base-100 sticky z-50 top-0">
    <div class="relative h-full">
      <div class="absolute bottom-2 left-2 ">
          <p v-if="!editable" class="mb-1 flex items-center">
            Farhad Karami
          </p>
          <router-link v-else :to="{ name: 'edit-profile' }" class="mb-1 flex items-center">Farhad Karami
            <PencilIcon class="w-4 h-4 text-warning mx-2" />
          </router-link>
          <p class="text-sm">+989352760807</p>
          <!-- <p class="text-sm">farhadkarami@yahoo.com</p> -->
        </div>

      <div class="rounded-full absolute -bottom-6 right-2">
        <Avatar imageSrc="" :isOnline="false" />
      </div>
    </div>
  </div>
</template>