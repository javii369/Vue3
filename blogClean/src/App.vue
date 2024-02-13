<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { getCurrentUser } from "vuefire";

const router = useRouter();
onMounted(async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    router.replace({ name: "blog" });
  }
});
</script>

<template>
  <RouterView />
</template>
