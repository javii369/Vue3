import ModalVue from "@/components/Modal.vue";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const modalValue = reactive({
    open: false,
  });

  const openModal = () => {
    modalValue.open = true;
  };

  const closeModal = () => {
    modalValue.open = false;
  };
  return { modalValue, openModal, closeModal };
});
