<template>
  <div class="container mt-3">
    <Header /> 
    <Form />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Form from "./components/Form.vue"

export default {
  components: {
    Header,
    Form
  }
}
</script>