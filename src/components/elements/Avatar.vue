<script setup>
import { ref } from 'vue';

const props = defineProps({
  imageSrc: String,
  isOnline: Boolean,
});

const avatarSrc = ref();

if(props.imageSrc) {
  avatarSrc.value = props.imageSrc;
} else {
  avatarSrc.value = 'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg';
}

</script>

<template>
  <div class="avatar" :class="{'online': props.isOnline}">
    <div class="w-24 rounded-full">
      <img :src="avatarSrc" />
    </div>
  </div>
</template>