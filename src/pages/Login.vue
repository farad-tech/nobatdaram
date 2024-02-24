<template>
  <div class="bg-white shadow-md rounded-lg p-3">
    <p class="font-bold">ورود به نوبت دارم</p>

    <div v-if="step == 1">
      <p class="text-gray mb-5">جهت ورود یا ثبت نام شماره همراه خود را وارد کنید</p>

      <label>شماره همراه</label>
      <input maxlength="11" v-model="phone" class="text-input border border-gray mt-3" type="text"
        placeholder="مثال: 09123456789" @input="phoneRegex()" />
      <span class="text-sm text-danger">{{ regex }}</span>

      <button :disabled="!result" :class="buttonClass" @click="submitStep1">دریافت کد تایید</button>
    </div>


    <div v-if="step == 2">
      <p class="text-gray mb-5">جهت ورود یا ثبت نام کد تایید دریافتی را وارد کنید</p>

      <label>کد تایید</label>
      <input maxlength="5" v-model="code" class="text-input border border-gray mt-3" type="text"/>

      <p dir="ltr" class="mt-2 text-primary">{{ resend }}</p>
      <p v-if="resendAllowed" dir="ltr" class="mt-2 text-primary" @click="">دریافت مجدد کد</p>

      <button :disabled="!result" :class="activeButton" @click="submitStep2">ورود</button>
    </div>


  </div>
</template>

<script setup>

import { ref } from 'vue';

const phone = ref();
const regex = ref();
const result = ref(false);
const buttonClass = ref();
const step = ref(2);
const code = ref();
const timer = ref(120);
const resend = ref();
const resendAllowed = ref(false);
const intertval = ref();

const activeButton = 'bg-primary text-white w-full mt-7 p-2 rounded-full click';
const disableButton = 'bg-neutral text-dark w-full mt-7 p-2 rounded-full';

buttonClass.value = disableButton;

function phoneRegex() {

  const re = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

  result.value = re.test(phone.value);

  if (result.value) {
    regex.value = '';
  } else {
    regex.value = "شماره همراه باید مطابق الگو باشد: 09123456789";
  }

  if (result.value) {
    buttonClass.value = activeButton;
  } else {
    buttonClass.value = disableButton;
  }

}

function submitStep1() {
  step.value = 2;
}

function submitStep2() {
  step.value = 1;
}

if(step.value == 2) {
  intertval.value = setInterval(resendCode, 1000)
}

function resendCode() {
  timer.value = timer.value - 1;

  let currentTime = timer.value;

  let minute = Math.floor(currentTime / 60);
  let second = (currentTime - (minute * 60));

  if(second < 10) {
    second = "0" + second;
  }
  
  if(minute < 10) {
    minute = "0" + minute;
  }

  if(currentTime <= 0) {
    resend.value = "";
    resendAllowed.value = true;
    clearInterval(intertval.value);
  } else {
    resend.value = minute + ':' + second + ' دریافت مجدد تا ';
  }

}

</script>