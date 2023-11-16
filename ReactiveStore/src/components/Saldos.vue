<template>
  <div>
    <h1>Saldo: ${{ store.saldo }}</h1>
    <button @click="store.modif(300)">+300</button>
    <button @click="store.modif(-100)">-100</button>
  </div>
</template>

<script setup>
import store from "../store/store";
</script>

<style></style>
