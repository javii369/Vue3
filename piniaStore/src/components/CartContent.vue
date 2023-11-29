<template>
  <div class="empty" v-if="products.quantity() === 0">
    <h2>x</h2>
    <h3>Empty Cart</h3>
  </div>
  <template v-else>
    <div v-for="product in products.selected" class="cart">
      <h2>{{ product.name }}</h2>
      <div class="detail">
        <h3>Price: {{ product.value }}</h3>
        <h4>Quantity: {{ product.quantity }}</h4>
      </div>
      <div>
        <img :src="product.img" width="100" haight="100" alt="product_image" />
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/product.store";

const { products } = useProductStore();
</script>

<style scopet>
.empty {
  color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.cart {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  margin: 1rem 0px;
  padding: 1rem;
  border-radius: 6px;
}
</style>
