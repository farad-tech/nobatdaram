<script setup>
import messages from '@/functions/Messages';
import Toast from '@/functions/Toast';
import router from '@/router';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'

const logout = () => {

  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log out!"
  }).then((result) => {

    if (result.isConfirmed) {

      Cookies.remove('auth-token')
      Toast.fire({
        'icon': 'info',
        'title': messages.successful_logout,
      })
      router.push({name: 'login'})
    }
  });

}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <!-- <img src="" alt="logo"/> -->
      Nobatdaram
    </div>
    <div class="flex-none">
      <ArrowLeftStartOnRectangleIcon @click="logout" class="w-5 h-5 text-red-400" />
    </div>
  </div>
</template>