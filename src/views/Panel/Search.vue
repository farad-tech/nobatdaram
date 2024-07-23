<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
import { ref, watch } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import debounce from 'lodash.debounce'
import baseAxios from '@/functions/baseAxios';
import apiConfig from '@/functions/apiConfig';
import Toast from '@/functions/Toast';
import messages from '@/functions/Messages';

const searchKeyword = ref();
const profiles = ref({});
const loaded = ref(true);
const type_of_profiles = ref();

const type_of_profiles_array = [
  'Result',
  'Recent'
];

type_of_profiles.value = type_of_profiles_array[1];

const update = debounce(() => {

  if (searchKeyword.value) {
    loaded.value = false;
    baseAxios
      .get(`/profile/search?keyword=${searchKeyword.value}`, apiConfig())
      .then((success) => {
        loaded.value = true;
        profiles.value = success.data;
        type_of_profiles.value = type_of_profiles_array[0];
      })
      .catch((error) => {
        type_of_profiles.value = type_of_profiles_array[1];
        loaded.value = true;

        Toast.fire({
          icon: 'error',
          text: messages.error,
        })
      })

  } else {

    profiles.value = {};
    load_recents();
  }

}, 500)

watch(searchKeyword, () => {
  update()
})

const load_recents = () => {

  type_of_profiles.value = type_of_profiles_array[1];
  loaded.value = false;
  baseAxios
      .get(`/profile/recent`, apiConfig())
      .then((success) => {
        loaded.value = true;
        profiles.value = success.data;
      })
      .catch((error) => {
        loaded.value = true;

        Toast.fire({
          icon: 'error',
          text: messages.error,
        })
      })

}

load_recents();


</script>

<template>
  <div class=" min-h-screen">
    <HeaderNav />

    <label class="input input-bordered flex items-center gap-2">
      <input v-model="searchKeyword" type="text" class="grow" placeholder="Search" />
      <MagnifyingGlassIcon class="w-4 h-4" />
    </label>

    <div class="divider">{{type_of_profiles}}</div>

    <div v-if="loaded">
      <div v-if="profiles.length > 0">
        <router-link v-for="profile in profiles" :to="{ name: 'get-appointment', query: {id: profile.user_id} }"
          class="block rounded-xl bg-base-300 hover:bg-base-200 w-full shadow-xl p-2 py-3 mb-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <Avatar :image-src="profile.avatar" class="w-12 me-2" />
              <div>
                <p>{{profile.name}}</p>
              </div>
            </div>
            <div>
              <ChevronRightIcon class="w-6" />
            </div>
          </div>
        </router-link>
      </div>

      <p v-else class="text-center">...</p>
    </div>

    <div v-else>
      <div class="skeleton w-full h-20 mb-2"></div>
      <div class="skeleton w-full h-20 mb-2"></div>
      <div class="skeleton w-full h-20 mb-2"></div>
      <div class="skeleton w-full h-20 mb-2"></div>
    </div>

  </div>

  <FooterNav />

</template>