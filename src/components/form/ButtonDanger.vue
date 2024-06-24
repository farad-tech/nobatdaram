<script setup>

</script>

<template>
  <button type="submit"
    class="inline-block w-full rounded bg-red-500 px-7 pb-2 my-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    data-twe-ripple-init data-twe-ripple-color="light">
    <slot></slot>
  </button>
</template>