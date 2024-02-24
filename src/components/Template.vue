<template>
  <div class="bg-light h-full min-h-screen w-screen pt-14 pb-20 px-6">
    <Header></Header>
    <slot></slot>

    <Nav></Nav>
  </div>
</template>

<script setup>
import Nav from './Nav.vue';
import Header from './Header.vue';


</script>