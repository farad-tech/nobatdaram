<template>
  <TitleText>
    مدیریت خدمات
  </TitleText>

  <div class="relative">
    <input type="text" class="text-input" placeholder="عنوان خدمت را وارد کنید">
    <span class="absolute top-1 left-1 bg-secondary p-1 text-primary rounded-full click">
      <PlusCircleIcon class="h-6 w-6" />
    </span>
  </div>

  <div class="card">
    <div class="flex py-2">
      <div class="w-1/12">1</div>
      <div class="w-9/12 text-sm px-1">اصلاح کامل موی سر و سشوارصلاح کامل موی سر و سشوارصلاح کامل موی سر و سشوار
      </div>
      <div class="w-2/12 text-center px-2">
        <TrashIcon class="text-light rounded-full click bg-danger p-2 w-full m-auto shadow-sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleText from '../../components/TitleText.vue';
import { PlusCircleIcon, TrashIcon } from '@heroicons/vue/24/outline';
</script>
