<template>
  <div class="level-one-container">
    <input
      type="text"
      placeholder="first name"
      v-model="userData['firsName']"
    />
    <input type="text" placeholder="last name" v-model="userData['lastName']" />
    <input type="text" placeholder="e mail" v-model="userData['email']" />
    <input
      type="password"
      placeholder="password"
      v-model="userData['password']"
    />
    <input type="password" placeholder="re-enter password" v-model="password" />
    <button @click="buttonClick">Register</button>
    <p v-show="message">password is not mached</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
name: "Register";

const userData = ref({
  firsName: null,
  lastName: null,
  email: null,
  password: null,
});
const password = ref();
const message = ref(false);

const buttonClick = () => {
  if (userData.value["password"] === password.value) {
    message.value = false;
    axios
      .post("https://api.gamage.me/user-register", {
        firstName: userData.value["firsName"],
        lastName: userData.value["lastName"],
        email: userData.value["email"],
        password: userData.value["password"],
      })
      .then(function (response) {
        console.log(response);
      });
  } else {
    message.value = true;
  }
};
</script>
