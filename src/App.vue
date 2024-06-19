<template>
  <div class="level-one-container">
    <p>main page</p>
    <input type="text" placeholder="First Name" v-model="firstName" /><br />
    <input type="text" placeholder="Last Name" v-model="lastName" /><br />
    <input type="password" v-model="pw" /><br />
    <button @click="clicked">Send request</button>
  </div>
</template>

<script setup>
name: "App";
import axios from "axios";
import { ref } from "vue";

const firstName = ref();
const lastName = ref();
const pw = ref();

const clicked = () => {
  axios
    .post("https://test-backend-38j6.onrender.com/user", {
      firstName: firstName.value,
      lastName: lastName.value,
      password: pw.value,
    })
    .then(function (response) {
      console.log(response);
    });
};
</script>
