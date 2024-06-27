<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <MenuBar></MenuBar>
    </div>
    <div class="level-two-container"></div>
    <p>plaform js testing</p>
    <p>{{ name }}</p>
    <p>{{ version }}</p>
    <p>{{ os_family }}</p>
    <p>{{ os_version }}</p>
    <p>{{ hardware_arch }}</p>
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import platform from "platform";
name: "Test";

const name = platform.name;
const version = platform.version;
const os_family = platform.os.family;
const os_version = platform.os.version;
const hardware_arch = platform.os.architecture;
console.log(platform.layout);
</script>

<style scoped></style>
