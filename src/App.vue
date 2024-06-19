<template>
  <div class="level-one-container">
    <p>main page</p>
    <button @click="clicked">Send request</button>
  </div>
</template>

<script setup>
name: "App";
import axios from "axios";

const clicked = () => {
  axios
    .get("https://test-backend-38j6.onrender.com/")
    .then(function (response) {
      console.log(response);
    });
};
</script>
