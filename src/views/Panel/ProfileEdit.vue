<script setup>
import TextInput from '@/components/form/TextInput.vue'
import Button from '@/components/form/Button.vue'
import HeaderNav from '@/components/layouts/HeaderNav.vue'
import FooterNav from '@/components/layouts/FooterNav.vue'
import Avatar from '@/components/elements/Avatar.vue'
import Return from '@/components/elements/Return.vue'
import { ref } from 'vue';
import { TrashIcon } from '@heroicons/vue/24/solid';
import baseAxios from '@/functions/baseAxios';
import apiConfig from '@/functions/apiConfig'
import router from '@/router'
import Toast from '@/functions/Toast'
import messages from '@/functions/Messages'
import removeAvatar from '@/functions/removeAvatar'

const imageUrl = ref(localStorage.getItem('avatar'));
const name = ref(localStorage.getItem('name'));
const Errors = ref(false);
const avatarFile = ref(null);
const loading = ref(false);
const preview = ref('');

function assignError(errorObject) {

  if (errorObject.Text) {
    Errors.value = errorObject.Text
  } else {
    Errors.value = false
  }
}

const onFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    avatarFile.value = file;

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
  if (Object.keys(ErrorList).length > 0) {
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

  loading.value = true;

  const postData = {
    name: name.value
  }

  if(avatarFile.value) {
    postData.avatar = avatarFile.value
  }

  baseAxios
    .postForm('profile', postData, apiConfig())
    .then((success) => {
      loading.value = false;
      Toast.fire({
        icon: 'success',
        text: messages.profile_updated,
      })
      router.push({name: 'profile'})

    })
    .catch((error) => {
      loading.value = false;
      Toast.fire({
        icon: 'error',
        text: messages.error,
      })

    });

}
</script>

<template>

  <div class=" min-h-screen">
    <HeaderNav />

    <Return to="profile">Back to profile</Return>

    <h1>Edit profile</h1>

    <img :src="preview" alt="">

    <form @submit.prevent="formSubmit">
      <div class="text-center">
        <label for="avatar-profile" class="cursor-pointer">
          <Avatar :imageSrc="imageUrl" :isOnline="false" />
        </label>
        <div class="flex items-center justify-center relative -top-8">
          <span role="button" class="p-1 border border-red-500 rounded-full bg-neutral-100" @click="removeAvatar()">
            <TrashIcon class="w-4 h-4 text-red-500" />
          </span>
        </div>
      </div>

      <input hidden id="avatar-profile" type="file" @change="onFileChange"
        class="file-input file-input-bordered w-full max-w-xs" />

      <TextInput v-model="name" label="Full name" @getError="assignError" />

      <div class="text-center">
        

        <span v-if="loading" class="loading loading-bars loading-sm"></span>

        <Button v-else>Save</Button>

      </div>
    </form>

  </div>

  <FooterNav />

</template>