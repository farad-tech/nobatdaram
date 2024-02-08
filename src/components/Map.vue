<script setup>
  //...
  import {MapComponent, MapTypes} from "@neshan-maps-platform/mapbox-gl-vue";
  import "@neshan-maps-platform/mapbox-gl-vue/dist/style.css";
  //...
</script>

<template>
  <!--  Your component structure-->
  <MapComponent :options="{mapKey:'web.31c2132e81f34be9bca4b6dc70cd3bbb',mapType:MapTypes.neshanVectorNight}"/>
  <!--  Your component structure-->
</template>

<style>
.mapboxgl-map {
  height: 250px !important;
  width: 100% !important;
  border-radius: 20px;
}
</style>