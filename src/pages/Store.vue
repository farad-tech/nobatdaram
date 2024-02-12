<template>
  <TitleText>
    دریافت نوبت آرایشگاه آث
  </TitleText>

  <StoreProf
    avatar="https://ui-avatars.com/api/?name=ف&color=FFFFFF&background=C70039"
    name="آرایشگاه آث"
    tagline="آرایشگاه مردانه"
    phone="09051873547"
    id="1"
    address="گیلان، تالش، میدان امام خمینی جنب درمانگاه شفا"
    :editable="false"

  />

  <div class="text-danger">
    محل تنظیم زمان
  </div>

  <div class="text-center my-5 bg-primary text-white rounded-xl py-2 shadow-sm click">
    دریافت نوبت
  </div>

</template>

<script setup>
  import TitleText from '../components/TitleText.vue';
  import StoreProf from '../components/Store.vue';  

</script>