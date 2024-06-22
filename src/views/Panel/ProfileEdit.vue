<script setup>
import TextInput from '@/components/form/TextInput.vue'
import Button from '@/components/form/Button.vue'
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
import { ref } from 'vue';
import { TrashIcon, ArrowLongLeftIcon } from '@heroicons/vue/24/solid';

const imageUrl = ref(null);
const name = ref(null);
const Errors = ref({});


function assignError(errorObject) {

if (errorObject.Text != undefined) {
  if (errorObject.Text === true) {
    Errors.value['Text'] = true;
  } else {
    Errors.value['Text'] = false;
  }
}

}

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    imageUrl.value = null;
  }
};

const formSubmit = () => {

  const ErrorList = Errors.value;

  if (Object.keys(ErrorList).length === 0) {
    return;
  } else {
    for (const key in ErrorList) {
      if (ErrorList.hasOwnProperty.call(ErrorList, key)) {

        const error = ErrorList[key];
        if (error || name.value == null) {

          return;

        }

      }
    }
  }

  alert('submit');
}
</script>

<template>

  <div class=" min-h-screen">
    <HeaderNav />

    <router-link :to="{ name: 'profile' }" class="flex items-center">
      <ArrowLongLeftIcon class="w-6 h-6 me-1" /> Back to profile
    </router-link>

    <h1>Edit profile</h1>

    <form @submit.prevent="formSubmit">
      <div class="text-center">
        <label for="avatar-profile" class="cursor-pointer">
          <Avatar :imageSrc="imageUrl" :isOnline="false" />
        </label>
        <div class="flex items-center justify-center relative -top-8">
          <button class="p-1 border border-red-500 rounded-full">
            <TrashIcon class="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      <input hidden id="avatar-profile" type="file" @change="onFileChange"
        class="file-input file-input-bordered w-full max-w-xs" />


      <TextInput v-model="name" label="Full name" @getError="assignError"/>

      <div class="text-center">
        <Button>Save</Button>
      </div>
    </form>

  </div>

  <FooterNav />

</template>