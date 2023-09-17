<template>
    <h1>Vue</h1>
    <hr />
    <ul>
      <li v-for="(usuario, index) in usuarios" :key="index">
        {{ usuario }} - {{ index }}
      </li>
    </ul>
  </template>
  
<script>
  export default {
    data: () => ({
      usuarios: [
        'Melisa',
        'Fernando',
        'Raul',
        'Jose'
      ]
    }),
    methods: {
    },
  };
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  
  body {
    text-align: center;
    background-color: #4C566A;
    font-family: 'Lato', sans-serif;
    color: white;
  }
  </style>