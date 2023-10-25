<template lang="pug">
Lista(:elementos="juegos")
</template>

<script>
import Lista from "./components/Lista.vue";
export default {
  components: { Lista },
  data: () => ({
    juegos: ["CSGO", "Minecraft", "PUBG"],
  }),
};
</script>

<style>
.elemento1 {
  color: blue;
}
#elemento2 {
  color: purple;
}
</style>
