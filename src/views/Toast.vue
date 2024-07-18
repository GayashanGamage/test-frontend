<template>
  <div class="level-one-container">
    <MenuBar></MenuBar>
    <p>Toas notification</p>
    <button @click="notify">Notify</button>
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
const toast = useToast({ position: "bottom" });

const notify = () => {
  toast.info("Something Wrong");
};
</script>
