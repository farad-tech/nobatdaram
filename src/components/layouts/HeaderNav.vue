<script setup>
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import Swal from 'sweetalert2'

const logout = () => {

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