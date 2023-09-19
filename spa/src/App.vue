<template>
  <div>
    <nav>
      <router-link to="*"></router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>
