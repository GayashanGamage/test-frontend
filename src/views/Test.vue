<template>
  <div class="level-one-container">
    <input type="text" v-model="users['fname']" /><br />
    <!-- <input type="text" :value="users['lname']" /> -->
    <p>{{ users["fname"] }}</p>
    <button @click="show">Show values</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
name: "Test";

// const users = ref("chami");

const users = ref({ fname: "chami", lname: "senanayake" });
// const users = ref({
//   fname: ref("chami"),
//   lname: ref("senanayake"),
// });

const show = () => {
  console.log(users.value);
};
</script>

<style scoped></style>
