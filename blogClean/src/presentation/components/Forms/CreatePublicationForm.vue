<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-control">
      <div class="label">
        <span class="label-text">Create a Publication</span>
      </div>
      <input
        @change="handleUploadImage"
        type="file"
        class="file-input file-input-bordered w-full my-2"
      />

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

const { create, uploadImage, getDownloadURL } = usepublications();
const auth = useFirebaseAuth();

const publicationForm = reactive<{ body: string; img?: string }>({
  body: "",
  img: "",
});

const clearForm = () => {
  publicationForm.body = "";
  publicationForm.img = "";
};

const handleUploadImage = async (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files?.length >= 0) {
    return;
  }

  try {
    const file = target.files![0];

    await uploadImage(file);

    const downloadLink = await getDownloadURL(file);

    publicationForm.img = downloadLink!;
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async () => {
  if (publicationForm.body.length < 10) {
    return;
  }

  const uid = auth!.currentUser!.uid;
  const formatData = formatPublicationDataSourcesAdaper(publicationForm, uid);

  await create(formatData);
  clearForm();
};
</script>
