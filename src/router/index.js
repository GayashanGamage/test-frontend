import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Main from "@/views/Main.vue";
import Members from "@/views/Members.vue";
import Storage from "@/views/Storage.vue";
import Test from "@/views/Test.vue";
import Toast from "@/views/Toast.vue";
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
      path: "/storage",
      component: Storage,
    },
    {
      path: "/toast",
      component: Toast,
    },
    {
      path: "/member",
      component: Members,
      children: [
        {
          path: "login",
          component: Login,
        },
        {
          path: "register",
          component: Register,
        },
      ],
    },
  ],
});

export default router;
