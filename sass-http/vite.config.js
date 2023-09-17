import { VitePWA } from "vite-plugin-pwa"
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),VitePWA({
      //archivo especial de configuaración, q estrucctura tiene nuestras app
      manifest:{
        name: "Cotizador de Criptomonedas con Vue, Vite y Sass",
        short_name: "CriptoCotizador",
        description: "Cotizador de Criptomonedas hecho con Vue, Vite y Sass",
        theme_color: "#f60de3",
        icons: [
          {
            src: 'logo.svg',
            sizes: '192x192',
            type: 'image/svg'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
