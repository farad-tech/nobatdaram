<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import ProfileHeader from '@/components/layouts/ProfileHeader.vue'
import ButtonSubmit from '@/components/form/Button.vue'
import ButtonDanger from '@/components/form/ButtonDanger.vue'
import Return from '@/components/elements/Return.vue'
import { ref } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon } from '@heroicons/vue/24/solid';

const date = new Date();
const selectedSlot = ref(null);

const submitForm = () => {

  if (selectedSlot.value !== null) {
    alert('submit')
  }

}

const clear = () => {
  selectedSlot.value = null;
}

</script>

<template>
  <div class=" min-h-screen">
    <HeaderNav />


    <Return to="search">Back to search</Return>


    <ProfileHeader />

    <div class="my-10 text-center">
      <p>Get Appointment</p>

      <div role="alert" class="alert alert-success my-5">
        <CheckIcon class="w-6 h-6" />
        <span>The appointment arranged</span>
      </div>

      <div class="flex justify-between items-center my-10">
        <button class="btn btn-sm">
          <ChevronLeftIcon class="w-6" />
        </button>
        <div>
          <div class="mb-2">
            {{ date.getFullYear() }}
          </div>
          <div>
            {{ date.getMonth() + ' - ' + date.getDate() }}
          </div>
        </div>
        <button class="btn btn-sm">
          <ChevronRightIcon class="w-6" />
        </button>
      </div>

      <div class="flex flex-wrap mb-5">

        <div v-for="i in 12" class="p-1 w-4/12">
          <div class="skeleton h-12 w-full"></div>
        </div>

        <div v-for="i in 12" class=" w-4/12 p-1">
          <div class="form-control">
            <label class="label cursor-pointer btn justify-around">
              <span class="text-sm font-normal">09 - 09:30</span>
              <input v-model="selectedSlot" type="radio" name="radio-10" class="radio radio-xs checked:bg-blue-300"
                :value="i" />
            </label>
          </div>
        </div>
      </div>

      <ButtonSubmit @click="submitForm">Get Appointment</ButtonSubmit>
      <ButtonDanger @click="clear">Clear</ButtonDanger>

    </div>

  </div>

  <FooterNav />

</template>