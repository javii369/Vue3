<template>
  <div class="data">
    <h2>Informacion ...</h2>
    <h3>
      <span class="cripto">{{ cripto }}</span> - <span class="moneda">{{ moneda }}</span>
    </h3>
    <p>
      <img :src="`https://www.cryptocompare.com${img}`" alt="">
      Precio: <strong>${{ price }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cripto:{
      type: String,
      required: true
    },
    moneda:{
      type: String,
      required: true
    },
    img:{
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
  }
};
</script>