<template>
  <form @submit.prevent="getData()" class="row g-3 align-items-center">
    <div class="col-auto">
      <label class="col-font-label">Search:</label>
    </div>
    <input v-model.trim="busqueda" class="form-control" type="text" />
    <div class="col-auto">
      <button class="btn btn-warning fw-bold" type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    busqueda: "",
  }),
  methods: {
    getData() {
      this.$emit("buscar", this.busqueda);
      this.busqueda = "";
    },
  },
};
</script>
