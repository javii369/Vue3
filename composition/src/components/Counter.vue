<template>
  <div>
    <div>
      <h2>Value: {{ count }}</h2>
      <Button @cambiar="aumentar" title="Aumentar" />
      <Button @cambiar="disminuir" title="Disminuir" />
    </div>
    <hr />
    <div>
      <pre>IVA (21%) {{ iva }}</pre>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useCounter } from "../composables/useCounter";
import Button from "./Button.vue";

const props = defineProps({
  initialValue: {
    type: Number,
    default: 15,
  },
});

const { count, aumentar, disminuir, iva } = useCounter(props.initialValue);
</script>

<style></style>
