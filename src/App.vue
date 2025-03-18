<script setup>
import { ref } from 'vue';
import { decodeCredential } from 'vue3-google-login'
const user = ref({});
const callback = (response) => {
  const userData = decodeCredential(response.credential)
  user.value = userData;
  console.log("Handle the userData", userData)
}
</script>

<template>
  <div>
    <GoogleLogin :callback="callback"  />
    <ul v-if="user">
      <li>
        <a href="">Name: {{ user?.name }}</a>
      </li>

      <li>
        <a href="">Name: {{ user?.email }}</a>
      </li>

      <li>
        <a href="">
          <img :src="user?.picture" class="logo" alt="">
        </a>
      </li>
    </ul>
  </div>

</template>



<style scoped>
.logo {
  height: 1em;
  will-change: filter;
  padding-top: 10px;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
