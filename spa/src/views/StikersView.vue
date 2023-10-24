<template>
  <div>
    <h1>Search Stickers</h1>
    <Search @buscar="getStickers" />
    <loading v-if="loading" />
    <div class="row">
      <div
        v-for="stiker in stickers"
        class="col-12 col-md-4 g-3"
        :key="stiker.id"
      >
        <Card :gif="stiker" />
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
      stickers: [],
      loading: true,
    };
  },
  created() {
    this.getStickers();
  },
  methods: {
    async getStickers(busqueda = "pokemon") {
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
      this.stickers = [];

      const res = await fetch(
        `https://api.giphy.com/v1/stickers/search?api_key=tWlXk5v1JEmJNNmPG8xK8LUsJxGwF0Zu&q=${busqueda}`
      );
      const { data } = await res.json();
      this.stickers = data;

      this.loading = false;
    },
  },
};
</script>
