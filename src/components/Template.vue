<template>
  <div class="bg-light h-full min-h-screen w-screen pt-14 pb-20 px-6">
    <Header v-if="showSides"></Header>
    <slot></slot>

    <Nav v-if="showSides"></Nav>
  </div>
</template>

<script setup>
import Nav from './Nav.vue';
import Header from './Header.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const path = ref(route.name);
const showSides = ref(true);

if (path.value == 'login') {
  showSides.value = false;
}

</script>