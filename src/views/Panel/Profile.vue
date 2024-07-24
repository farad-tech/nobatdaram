<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
import { ref } from 'vue';
import { XCircleIcon, ChevronRightIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';
import ProfileHeader from '@/components/layouts/ProfileHeader.vue';
import Swal from 'sweetalert2'
import baseAxios from '@/functions/baseAxios';
import apiConfig from '@/functions/apiConfig';
import addZero from '@/functions/addZero';
import messages from '@/functions/Messages';
import Toast from '@/functions/Toast';

const activeMenu = ref('yours');
const appointment_list = ref({});
const loaded = ref(false);

const Menus = [
  'yours',
  'customers',
];

const changeMenu = (menuName) => {

  activeMenu.value = menuName;

  load_appointments(menuName)

}

const cancelAppointment = (appointment_id) => {

  Swal.fire({
    title: "Are you sure?",
    text: "You are about to cancel appointment.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      baseAxios.delete(`appointment/${appointment_id}`, apiConfig())
        .then((success) => {

          Toast.fire({
            icon: 'success',
            text: messages.appointment_canceled,
          });
          load_appointments(activeMenu.value)

        })
        .catch((error) => { console.log(error) })


    }
  });

}


const load_appointments = (mode = 'yours') => {
  loaded.value = false;
  baseAxios
    .get(`/appointment/${mode}`, apiConfig())
    .then((result) => {
      loaded.value = true;
      appointment_list.value = result.data;
    })
    .catch((error) => {
      loaded.value = true;
      console.log(error);
    })

}

load_appointments();


</script>

<template>

  <div class=" min-h-screen">
    <HeaderNav />

    <ProfileHeader />


    <div class="text-center mt-10">Appointments</div>

    <div class="my-5 text-center text-xs">
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li v-for="Menu in Menus">
          <a @click="changeMenu(Menu)" :class="{ 'active': activeMenu == Menu }">{{ Menu }}</a>
        </li>
      </ul>
    </div>

    <!-- <div>
      <div v-for="i in 1" class="skeleton w-full h-12 mb-2"></div>
    </div> -->

    <div v-if="loaded">

      <div v-for="appointment in appointment_list"
        class="block rounded-xl bg-base-300 hover:bg-base-200 w-full shadow-xl p-2 py-3 mb-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Avatar v-if="activeMenu == 'yours' " :image-src="appointment.profile.avatar" class="w-12 me-2" />
            <Avatar v-else :image-src="appointment.gotten_from_profile.avatar" class="w-12 me-2" />
            <div>
              <p v-if="activeMenu == 'yours' ">{{ appointment.profile.name }}</p>
              <p v-else >{{ appointment.gotten_from_profile.name }}</p>
              <p class="text-xs flex items-center">
                <CalendarDaysIcon class="h-4 me-1" />
                {{
                  `${addZero(new Date(appointment.start_at).getFullYear())}/${addZero(new
                    Date(appointment.start_at).getMonth() + 1)}/${addZero(new Date(appointment.start_at).getDate())} -
                ${addZero(new Date(appointment.start_at).getHours())}:${addZero(new
                      Date(appointment.start_at).getMinutes())}`
                }}
                <ChevronRightIcon class="h-3" />
                {{
                  `${addZero(new Date(appointment.end_at).getHours())}:${addZero(new
                    Date(appointment.end_at).getMinutes())}`
                }}
              </p>
            </div>
          </div>
          <div>
            <XCircleIcon @click="cancelAppointment(appointment.id)" class="cursor-pointer w-8 text-red-300" />
          </div>
        </div>
      </div>

    </div>

    <div v-else>
      <div class="skeleton w-full h-16 mb-2"></div>
      <div class="skeleton w-full h-16 mb-2"></div>
      <div class="skeleton w-full h-16 mb-2"></div>
      <div class="skeleton w-full h-16 mb-2"></div>
    </div>

    <div class="text-center text-gray-500" v-if="appointment_list.length == 0">{{ messages.empty_list }}</div>

  </div>

  <FooterNav />

</template>