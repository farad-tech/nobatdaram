<script setup>
import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  to: String,
});
</script>

<template>
  <router-link :to="{ name: props.to }" class="flex items-center">
    <ArrowLongLeftIcon class="w-6 h-6 me-1" />
    <slot></slot>
  </router-link>
</template>