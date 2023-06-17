import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import router from "./router.js";
import axios from "axios";
import("preline");

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router); // Добавление vue-router в приложение
app.mount("#app");
