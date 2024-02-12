<template>
  <div>
    <Titletext>
      مشاغل خدماتی
    </Titletext>
  </div>

  <router-link :to="{ name: 'store' }">
    <User avatar='String' name='String' tagline='String' phone='String' id='String' :editable=false />
  </router-link>
  

  <router-view></router-view>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Titletext from "../components/titletext.vue";
import User from "../components/User.vue";

</script>