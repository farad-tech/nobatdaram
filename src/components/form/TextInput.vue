<script setup>

import { ref, watch } from 'vue';

const error = ref('');

const props = defineProps({
  modelValue: String,
  label: String,
});

const emit = defineEmits(['update:modelValue', 'getError']);

const Text = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  Text.value = newValue;
});

watch(Text, (newValue) => {
  emit('update:modelValue', newValue);
});

function validateInput() {
  const regex = /^\S.*\S$|^\S$/;
  var errorObject = {};

  if (!regex.test(Text.value)) {
    error.value = `Invalid ${props.label}.`;
  } else {
    error.value = '';
  }

  if (error.value == '') {
    errorObject = {Text: false};
  } else {
    errorObject = {Text: true};
  }
  
  emit('getError', errorObject);
}

</script>

<template>
  <div class="mb-4">
    <label class="mb-2">{{ props.label }}</label>

    <input @input="validateInput()" v-model="Text" type="text" class="input input-bordered w-full"
      :placeholder="`Enter ${props.label} here ...`" />

    <div v-if="error" role="alert" class="alert alert-error my-2 text-sm">
      <span>{{ error }}</span>
    </div>
  </div>
</template>