<script setup>
import Avatar from '@/components/elements/Avatar.vue'
import { PencilIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import baseAxios from '@/functions/baseAxios';
import apiConfig from '@/functions/apiConfig';
import Toast from '@/functions/Toast';
import messages from '@/functions/Messages';

const editable = ref(true);
const data = ref({});
const loaded = ref(false);

baseAxios
  .get('profile', apiConfig())
  .then((success) => {
    data.value = success.data;
    loaded.value = true;
  })
  .catch((fail) => {
    loaded.value = true;
    Toast.fire({
      icon: 'error',
      text: messages.error,
    })
  })


</script>

<template>
  <div class="h-36 border-b border-neutral-600 bg-base-100 sticky z-50 top-0">
    <div class="relative h-full">

      <div v-if="loaded" class="absolute bottom-2 left-2">
        <p v-if="!editable" class="mb-1 flex items-center">
          {{ data.name }}
        </p>
        <router-link v-else :to="{ name: 'edit-profile' }" class="mb-1 flex items-center">{{ data.name }}
          <PencilIcon class="w-4 h-4 text-warning mx-2" />
        </router-link>
        <p class="text-sm">{{ data.phoneoremail }}</p>
        <!-- <p class="text-sm">farhadkarami@yahoo.com</p> -->
      </div>

      <div v-else class="absolute bottom-2 left-2">
        <div class="skeleton h-5 w-28 mb-1"></div>
        <div class="skeleton h-5 w-32"></div>
      </div>


      <div v-if="loaded" class="rounded-full absolute -bottom-6 right-2">
        <Avatar :imageSrc="data.avatar" :isOnline="false" />
      </div>

    </div>
  </div>
</template>