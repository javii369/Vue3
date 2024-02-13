import { LoginEmailAndPasswordUseCase } from
'../../../domain/use-cases/auth/loginEmailAndPassword.usecase'; import {
useAuthStore } from '../../stores/auth.store';
<template>
  <h1 class="text-3x1">Login</h1>
  <form @submit.prevent="login">
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Email</span>
      </div>
      <input
        v-model="authForm.email"
        type="email"
        placeholder="example@example.com"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Password</span>
      </div>
      <input
        v-model="authForm.password"
        type="text"
        class="input input-bordered w-full max-w-xs"
      />
    </label>

    <button type="submit" class="btn btn-block mt-5">Sing In</button>
    <button
      @click="loginWithGoogle"
      type="button"
      class="btn btn-block mt-5 btn-error"
    >
      Login Whit Google
    </button>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { useAuthStore } from "@/presentation/stores/auth.store";

const router = useRouter();

const { loginWithEmailAndPassword, authForm, loginWithGoogle } = useAuthStore();

const login = async () => {
  const user = await loginWithEmailAndPassword();
  if (user) {
    return router.replace({ name: "blog" });
  }
};

const loginGoogle = async () => {
  const user = await loginWithGoogle();
  if (user) {
    return router.replace({ name: "blog" });
  }
};
</script>
