<script setup>

import { ref, watch } from 'vue';

const error = ref('');

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue', 'getError']);

const VerifyCode = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  VerifyCode.value = newValue;
});

watch(VerifyCode, (newValue) => {
  emit('update:modelValue', newValue);
});

function validateInput() {
  const regex = /\b\d{5}\b/;
  var errorObject = {};

  if (!regex.test(VerifyCode.value)) {
    error.value = 'Code must be five digits';
  } else {
    error.value = '';
  }

  if (error.value == '') {
    errorObject = {VerifyCode: false};
  } else {
    errorObject = {VerifyCode: true};
  }
  
  emit('getError', errorObject);
}

</script>

<template>
  <div class="mb-4">
    <label class="mb-2">VerifyCode</label>

    <input @input="validateInput()" v-model="VerifyCode" type="text" class="input input-bordered w-full"
      placeholder="Enter Received verify code ..." />

    <div v-if="error" role="alert" class="alert alert-error my-2 text-sm">
      <span>{{ error }}</span>
    </div>
  </div>
</template>