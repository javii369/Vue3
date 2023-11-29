<template>
  <div v-for="product in availableProducts" class="card" :key="product.id">
    <img :src="product.img" alt="product" class="product-image" />
    <h2>{{ product.name }}</h2>
    <h3>${{ product.value }}</h3>
    <button @click="addProduct(product)">+</button>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/product.store";

const { products, addProduct } = useProductStore();
const availableProducts = products.available;
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
}
button {
  width: 100%;
  font-size: 1.2rem;
  margin-top: 1rem;
}
.product-image {
  width: 50%; /* O ajusta el tamaño según tus necesidades */
  max-height: 100%; /* Ajusta la altura máxima según tus necesidades */
  object-fit: cover; /* Esto asegura que la imagen mantiene su relación de aspecto y cubre el contenedor */
  margin: 0;
}
</style>
