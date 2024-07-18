<template>
  <div class="level-one-container">
    <ul class="menu">
      <li class="menu-item"><router-link to="/">Home</router-link></li>
      <li class="menu-item">
        <router-link to="/test">Platform</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/storage">Storage</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/toast">Toast</router-link>
      </li>
      <li class="menu-item login">
        <router-link to="/member">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
name: "MenuBar";
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
}
.menu-item {
  list-style: none;
  margin-right: 50px;
}
.login {
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
