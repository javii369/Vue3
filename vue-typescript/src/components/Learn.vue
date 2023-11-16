<template>
  <div>
    <h1>name: {{ person.name }}</h1>
    <h1>surname: {{ person.surname }}</h1>
    <h1>age: {{ person.age }}</h1>
    <h1>student: {{ person.student }}</h1>
    <button @click="person.creecer">glow</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Person } from "../interfaces/Person";

const person = ref<Person>({
  name: "Luis",
  surname: "G",
  age: 20,
  student: true,
  creecer() {
    this.age++;
  },
});

// Resto del código del script setup
</script>

<style scoped>
/* Estilos específicos para Learn.vue */
</style>
