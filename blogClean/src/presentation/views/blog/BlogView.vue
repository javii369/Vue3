<template>
  <AppLayout>
    <h1 class="text-center text-2x1 font-bold">WELCOME</h1>
    <CreatePublicationForm />
    <PublicationsList />
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AppLayout from "../../layouts/AppLayout.vue";
import { usepublications } from "../../stores/publications.store";
import CreatePublicationForm from "@/presentation/components/Forms/CreatePublicationForm.vue";
import PublicationsList from "@/presentation/components/Publications/PublicationsList.vue";

const { findAll } = usepublications();

onMounted(() => {
  findAll();
});
</script>
