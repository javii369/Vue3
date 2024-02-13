<template>
  <Header />
  <main>
    <slot></slot>
  </main>
</template>
<script setup lang="ts">
import Header from "../components/Structures/Header.vue";
</script>
