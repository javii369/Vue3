<template>
  <input type="text" v-model="form.name[number - 1]" />
  <select v-model="form.level[number - 1]" name="level">
    <option value="null" disabled>Selecciona una opcion</option>
    <option>Basico</option>
    <option>Intermedio</option>
    <option>Avanzado</option>
  </select>
</template>

<script setup>
import { onUnmounted } from "vue";

const { number, form } = defineProps(["number", "form"]);

onUnmounted(() => {
  form.name.pop(number - 1);
  form.level.pop(number - 1);
});
</script>
