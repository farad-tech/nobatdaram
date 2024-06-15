<script setup>

import { ref, watch } from 'vue';

const error = ref('');

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue', 'getError']);

const EmailOrPhone = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  EmailOrPhone.value = newValue;
});

watch(EmailOrPhone, (newValue) => {
  emit('update:modelValue', newValue);
});

function validateInput() {
  const regex = /(^\+[1-9]\d{1,14}$)|(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)/;
  var errorObject = {};

  if (!regex.test(EmailOrPhone.value)) {
    error.value = 'Invalid mobile number or email address.';
  } else {
    error.value = '';
  }

  if (error.value == '') {
    errorObject = {EmailOrPhone: false};
  } else {
    errorObject = {EmailOrPhone: true};
  }
  
  emit('getError', errorObject);
}

</script>

<template>
  <div class="mb-4">
    <label class="mb-2">Email or Phone number</label>

    <input @input="validateInput()" v-model="EmailOrPhone" type="text" class="input input-bordered w-full"
      placeholder="Phone number with country prefix +..." />

    <div v-if="error" role="alert" class="alert alert-error my-2 text-sm">
      <span>{{ error }}</span>
    </div>
  </div>
</template>