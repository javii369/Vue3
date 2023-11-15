<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView v-slot="{ Component }">
    <transition>
      <keep-alive> <component :is="Component" /> </keep-alive>
    </transition>
  </RouterView>
</template>
