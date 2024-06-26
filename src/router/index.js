import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
import Test from "@/views/Test.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/test",
      component: Test,
    },
    {
      path: "/",
      component: Main,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
