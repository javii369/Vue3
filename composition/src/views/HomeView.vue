<template>
  <div>
    <h1>Refs</h1>
    <hr />
    <form>
      <div>
        <lavel>
          Tecnology:
          <input type="number" min="1" max="5" v-model="form.number" />
        </lavel>
      </div>
      <div v-for="number in form.number" :key="number">
        <inputs :number="number" :form="form" />
      </div>
    </form>
    <pre>{{ form.name }} - {{ form.level }}</pre>
  </div>
</template>

<script setup>
import Inputs from "../components/Inputs.vue";
import { reactive } from "vue";

const form = reactive({
  name: [],
  level: [],
  number: 1,
});

/*
Composition Api
export default {
  setup() {
    const msg = "Composition API";
    return { msg };
  },
};

Options Api
export defaut{
  data: () => ({msg: "csds"
  })
}*/
</script>
