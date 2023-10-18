<template>
  <div>
    <nav-bar />
    <div class="container mt-3 border">
      <router-view />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: { RouterLink, NavBar },
};
</script>

<style scoped>
.container {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
}
</style>
