import { LoginEmailAndPasswordUseCase } from
'../../../domain/use-cases/auth/loginEmailAndPassword.usecase'; import {
useAuthStore } from '../../stores/auth.store';
<template>
  <h1 class="text-3x1">Login</h1>
  <form @submit.prevent="loginWithEmailAndPassword">
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
    <button type="button" class="btn btn-block mt-5 btn-error" disabled>
      Login Whit Google
    </button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/presentation/stores/auth.store";

const { loginWithEmailAndPassword, authForm } = useAuthStore();
</script>
