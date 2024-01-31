import { LoginEmailAndPasswordUseCase } from
'../../../domain/use-cases/auth/loginEmailAndPassword.usecase'; import {
useAuthStore } from '../../stores/auth.store';
<template>
  <h1 class="text-3x1">Register</h1>
  <form @submit.prevent="registerWithEmailAndPassword">
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
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Confirm password</span>
      </div>
      <input
        v-model="authForm.confirmPassword"
        type="text"
        class="input input-bordered w-full max-w-xs"
      />
    </label>

    <button type="submit" class="btn btn-block mt-5">Register</button>
  </form>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/presentation/stores/auth.store";
import { onMounted } from "vue";

const { registerWithEmailAndPassword, authForm, resetForm } = useAuthStore();

onMounted(() => {
  resetForm();
});
</script>
