<script setup>

import { ref, watch } from 'vue';

const error = ref('');

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const Password = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  Password.value = newValue;
});

watch(Password, (newValue) => {
  emit('update:modelValue', newValue);
});

function validatePassword() {
  const regex = /^.{6,}$/;;

  if (!regex.test(Password.value)) {
    error.value = 'Password must be at least 6 characters.';
  } else {
    error.value = '';
  }
}

</script>

<template>
  <div class="mb-4">
    <label class="mb-2">Password</label>
    <div class="flex items-center justify-between">
      <input @input="validatePassword()" v-model="Password" type="password" class="input input-bordered w-full"
        placeholder="At least 6 characters" />
    </div>
    <div v-if="error" role="alert" class="alert alert-error my-2 text-sm">
      <span>{{ error }}</span>
    </div>
  </div>
</template>