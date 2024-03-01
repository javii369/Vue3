<template>
  <div class="my-2" v-for="publication in data.publications">
    <div class="card card-compact w-auto bg-base-100 shadow-sm">
      <figure>
        <img :src="publication.img" class="h-72" :alt="publication.id" />
      </figure>
      <div class="card-body">
        <h2>{{ publication.uid }}</h2>
        <p class="card-title">{{ publication.body }}</p>
        <div class="card-actions justify-end">{{ publication.createdAt }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usepublications } from "../../stores/publications.store";

const { data } = usepublications();

console.log(data.publications);
</script>
