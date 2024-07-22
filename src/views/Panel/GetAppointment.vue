<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import ProfileHeader from '@/components/layouts/ProfileHeader.vue'
import ButtonSubmit from '@/components/form/Button.vue'
import ButtonDanger from '@/components/form/ButtonDanger.vue'
import Return from '@/components/elements/Return.vue'
import { ref } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import { useRoute } from 'vue-router';
import Toast from '@/functions/Toast'
import messages from '@/functions/Messages'
import baseAxios from '@/functions/baseAxios'
import apiConfig from '@/functions/apiConfig'
import addZero from '@/functions/addZero'
import setCurrentDay from '@/functions/setCurrentDay'
import getAppointment from '@/functions/getAppointmentFunc'

const selectedSlot = ref(null);
const profile_id = ref(null);
const slots = ref({});
const loaded = ref(false);
const day = ref(0);
const selectedDate = ref();
const timeoutLength = ref(6);
// const submitLoader = ref(false);

const submitForm = () => {

  // const submitLoader = ref(true);
  if (selectedSlot.value !== null) {
    // console.log(selectedSlot.value)
    getAppointment(profile_id.value, selectedSlot.value)
  }

}

const clear = () => {
  selectedSlot.value = null;
}

if (useRoute().query.id) {

  profile_id.value = useRoute().query.id;

}

const loadSlots = (addDay) => {

  loaded.value = false;

  day.value = day.value + addDay;

  if (day.value < 0) {
    day.value = 0;
  }

  selectedDate.value = setCurrentDay(day.value);
  baseAxios
    .get(`appointment?appointable_id=${profile_id.value}&day=${day.value}`, apiConfig())
    .then((success) => {
      loaded.value = true;
      slots.value = success.data
    })
    .catch((error) => {
      loaded.value = true;
      Toast.fire({
        icon: 'error',
        text: messages.error
      });
    })

  timeoutLength.value = 0;
}

loadSlots(0);

</script>

<template>
  <div class=" min-h-screen">
    <HeaderNav />


    <Return to="search">Back to search</Return>


    <ProfileHeader :id="profile_id" />

    <div class="my-10 text-center">
      <p>Get Appointment</p>

      <!-- <div role="alert" class="alert alert-success my-5">
        <CheckIcon class="w-6 h-6" />
        <span>The appointment arranged</span>
      </div> -->

      <div class="flex justify-between items-center my-10">
        <button class="btn btn-sm" @click="loadSlots(-1)">
          <ChevronLeftIcon class="w-6" />
        </button>
        <div>
          <div class="mb-2">
            {{ selectedDate }}
          </div>
        </div>
        <button class="btn btn-sm" @click="loadSlots(1)">
          <ChevronRightIcon class="w-6" />
        </button>
      </div>

      <div class="flex flex-wrap mb-5">

        <div v-if="!loaded" v-for="i in 18" class="p-1 w-4/12">
          <div class="skeleton h-12 w-full"></div>
        </div>

        <div v-else v-for="slot in slots" class=" w-4/12 p-1">

          <div class="form-control">
            <label class="label cursor-pointer btn justify-around">
              <span class="text-sm font-normal">
                {{
                  `${addZero(new Date(slot.start_at * 1000).getHours())}:${addZero(new Date(slot.start_at *
                    1000).getMinutes())}`
                  + ' ' +
                  `${addZero(new Date(slot.end_at * 1000).getHours())}:${addZero(new Date(slot.end_at *
                    1000).getMinutes())}`
                }}
              </span>
              <input v-model="selectedSlot" type="radio" name="radio-10" class="radio radio-xs checked:bg-blue-300"
                :class="{ 'bg-red-500': !slot.enable }" :disabled="!slot.enable" :value="slot.start_at" />
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