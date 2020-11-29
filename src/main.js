import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

// Import Assets
import "./assets/style/main.scss";

// Import elements
import BaseButton from "./components/global/BaseButton";

// Create App
const app = createApp(App);

// Middleware
app.use(router);
app.use(store);

// Use elements
app.component("base-button", BaseButton);

// App mounted
app.mount("#app");
