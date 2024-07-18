<template>
  <div class="level-one-container">
    <!-- menu bar -->
    <MenuBar></MenuBar>
    <!-- local storage -->
    <h3>Local Storage</h3>
    <input type="text" id="Uname" />
    <button @click="setLocal">set LocaStorage</button>
    <button @click="deleteLocal">delete</button>
    <p>{{ userName }}</p>
    <hr />
    <!-- cookies -->
    <h3>Cookie storage</h3>
    <input type="text" id="city" />
    <button @click="setCookie">set Cookies</button>
    <button @click="deleteCookie">delete</button>
    <!-- <p>{{ city }}</p> -->
    <hr />
    <!-- session -->
    <h3>Session storage</h3>
    <input type="text" id="country" />
    <button @click="setSession">set Session</button>
    <button @click="deleteSessoin">delete</button>
    <!-- <p>{{ country }}</p> -->
    <hr />
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import { onBeforeMount, ref } from "vue";
const userName = ref();

// local storage
const setLocal = () => {
  localStorage.setItem("name", document.getElementById("Uname").value);
};

const deleteLocal = () => {
  localStorage.removeItem("name");
};

// cookie storage
const setCookie = () => {
  city = document.getElementById("city").value;
  document.cookie = "city =" + city + "; path=/;";
};

const deleteCookie = () => {
  document.cookie =
    "city =" + city + "; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

// session storage
const setSession = () => {
  country = document.getElementById("country").value;
  sessionStorage.setItem("country", country);
};

const deleteSessoin = () => {
  sessionStorage.removeItem("country");
};

onBeforeMount(() => {
  userName.value = localStorage.getItem("name");
});
console.log(document.cookie);
</script>
