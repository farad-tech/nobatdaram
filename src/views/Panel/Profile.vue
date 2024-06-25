<script setup>
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
import { ref } from 'vue';
import { XCircleIcon } from '@heroicons/vue/24/solid';
import ProfileHeader from '@/components/layouts/ProfileHeader.vue';
import Swal from 'sweetalert2'

const activeMenu = ref('Yours');

const Menus = [
  'Yours',
  'Customers',
];

const changeMenu = (menuName) => {

  activeMenu.value = menuName;

}

const cancelAppointment = () => {

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
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
  
}

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

    <div class="block rounded-xl bg-base-300 hover:bg-base-200 w-full shadow-xl p-2 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <Avatar class="w-12 me-2" />
          <div>
            <p>name</p>
            <p class="text-sm">2024 - 06 - 27</p>
          </div>
        </div>
        <div>
          <XCircleIcon @click="cancelAppointment" class="cursor-pointer w-8 text-red-300" />
        </div>
      </div>
    </div>

  </div>

  <FooterNav />

</template>