import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import path from "path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => "../views/auth/LoginView.vue",
    },
    {
      path: "/auth/register",
      name: "register",
      component: () => "../views/auth/registerView.vue",
    },
    {
      path: "/app",
      name: "blog",
      component: () => "../views/blog/BlogView.vue",
    },

    //component: () => import(""),
  ],
});

export default router;
