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
  ],
});

export default router;
