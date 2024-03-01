<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-control">
      <div class="label">
        <span class="label-text">Create a Publication</span>
      </div>
      <textarea
        class="textarea textarea-bordered h-24"
        placeholder="¿que quieres publicar?"
        v-model="publicationForm.body"
      ></textarea>
      <button class="btn btn-neutral">send</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { usepublications } from "../../stores/publications.store";
import { formatPublicationDataSourcesAdaper } from "@/adapters/datasoruces/formatPublication.datasources";
import { useFirebaseAuth } from "vuefire";

const { create } = usepublications();
const auth = useFirebaseAuth();

const publicationForm = reactive({
  body: "",
});
const handleSubmit = async () => {
  if (publicationForm.body.length < 10) {
    return;
  }

  const uid = auth!.currentUser!.uid;
  const formatData = formatPublicationDataSourcesAdaper(publicationForm, uid);
  await create(formatData);

  publicationForm.body = "";
};
</script>
