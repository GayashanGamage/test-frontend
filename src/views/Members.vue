<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <MenuBar></MenuBar>
    </div>
    <div class="level-two-container content">
      <div class="level-three-container">
        <div class="level-four-container">
          <router-link to="/member/register" class="log-link"
            >Register</router-link
          >
          <router-link to="/member/login" class="log-link">Login</router-link>
        </div>
        <div class="level-four-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
name: "Members";
</script>

<style scoped>
.content {
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.level-three-container {
  width: 40vw;
  height: 50vh;
  border: 1px solid black;
  border-radius: 4px;
}
.level-four-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.log-link {
  padding: 8px;
  text-decoration: none;
  color: black;
}
.log-link:hover {
  color: blue;
}
</style>
