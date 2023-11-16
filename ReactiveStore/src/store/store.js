import { reactive } from "vue";

const store = reactive({
  saldo: 1000,
  modif(value) {
    this.saldo += value;
  },
});
export default store;
