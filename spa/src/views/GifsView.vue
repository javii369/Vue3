<template>
  <div>
    <h1>Search Gif</h1>
    <Search @buscar="getGifs" />
    <loading v-if="loading" />
    <div class="row">
      <div v-for="gif in gifs" class="col-12 col-md-4 g-3" :key="gif.id">
        <Card :gif="gif" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Loading from "../components/Loading.vue";
import Search from "../components/Search.vue";
import swal from "sweetalert2";

export default {
  components: { Card, Search, Loading },
  data() {
    return {
      gifs: [],
      loading: true,
    };
  },
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(busqueda = "pokemon") {
      if (busqueda.trim() === "") {
        swal.fire({
          title: "Sin busqueda",
          icon: "error",
          showConfirmButton: false,
          showCloseButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
        return;
      }

      this.loading = true;
      this.gifs = [];

      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=tWlXk5v1JEmJNNmPG8xK8LUsJxGwF0Zu&q=${busqueda}`
      );
      const { data } = await res.json();
      this.gifs = data;

      this.loading = false;
    },
  },
};
</script>
