import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/registerView.vue";
import BlogView from "../views/blog/BlogView.vue";
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
      component: LoginView,
    },
    {
      path: "/auth/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/app",
      name: "blog",
      component: BlogView,
    },

    //component: () => import(""),
  ],
});

export default router;
