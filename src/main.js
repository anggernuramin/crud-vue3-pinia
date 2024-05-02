import { createApp } from "vue";
import { createPinia } from "pinia";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router";
import App from "./App.vue";

import "./style.css";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(BootstrapIconsPlugin)
  .mount("#app");
