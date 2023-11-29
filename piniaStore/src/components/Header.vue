<template>
  <div class="header">
    <h1>Shop</h1>
    <h2 @click="openModal()" :class="products.quantity() > 0 ? 'pop' : ''">
      Articles: {{ products.quantity() }}
    </h2>
    <Modal v-if="modalValue.open" />
  </div>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";

import { useProductStore } from "../stores/product.store";
import { useModalStore } from "../stores/modal.store";

const { products } = useProductStore();
const { modalValue, openModal } = useModalStore();
</script>

<style scoped>
.header {
  background-color: #111;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.pop {
  cursor: pointer;
}

.pop:hover {
  color: #f2f2f2;
  font-weight: bolder;
}
</style>
