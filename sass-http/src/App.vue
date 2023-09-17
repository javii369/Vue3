<template>
  <div class="container">
    <h1>Cotizador de Criptomonedas</h1>
    <grid>
      <formulario @info-monedas="get" />
      <Data :cripto="info.cripto" :moneda="info.moneda" :img="info.img" :price="info.price"/>
    </grid>
  </div>
  <reload-prompt />
</template>

<script>
import Formulario from "./components/Formulario.vue";
import Data from "./components/Data.vue";
import Grid from "./components/Grid.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";


export default {
  components: { Formulario, Data, Grid },
  data: () => ({
    info: {
      cripto: '*',
      moneda: '*',
      img: '',
      price: 0,
    }
  }),
  methods: {
    async get(cripto, moneda) {
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(cripto)}&tsyms=${encodeURI(moneda)}`
      )

      //desestructuracion de obj
      const { RAW } = await res.json()
      const dataCripto = RAW[cripto] 
      const data = dataCripto[moneda]    

      console.log(data)
      this.info.cripto = cripto
      this.info.moneda = moneda
      this.info.img = data.IMAGEURL
      this.info.price = data.PRICE


      },

  },
};
</script>