import { createApp } from "vue";

import { VueFire, VueFireAuth } from "vuefire";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./config/firebaseconfig";

const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.use(createPinia());
app.use(router);

app.mount("#app");
