<template>
  <header>
    <div class="navbar bg-neutral text-neutral-content">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl">Blog Vue</a>
      </div>

      <div class="navbar-end">
        <button
          type="button"
          @click="logoutSesion"
          class="btn btn-ghost text-xl"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/presentation/stores/auth.store";

const router = useRouter();
const { logout } = useAuthStore();

const logoutSesion = async () => {
  await logout();
  router.replace({ name: "login" });
};
</script>
