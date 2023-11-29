import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface Product {
  id: number;
  img: string;
  name: string;
  value: number;
}

interface SelectedProduct extends Product {
  quantity: number;
}

interface Products {
  available: Product[];
  selected: SelectedProduct[];
  quantity: () => number;
}

export const useProductStore = defineStore("product", () => {
  const products: Products = reactive<Products>({
    available: [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Nike",
        value: 120,
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "AirPods II",
        value: 199,
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Dove",
        value: 30,
      },
    ],
    selected: [],
    quantity: () =>
      products.selected.length > 0
        ? products.selected
            .map((product) => product.quantity)
            .reduce((a, b) => a + b)
        : 0,
  });

  const addProduct = (product: Product) => {
    const productIndex = products.selected.findIndex(
      (p) => p.name === product.name
    );

    if (productIndex !== -1) {
      products.selected[productIndex].quantity += 1;
      return;
    }
    products.selected.push({
      ...product,
      quantity: 1,
    });
  };

  return { products, addProduct };
});
