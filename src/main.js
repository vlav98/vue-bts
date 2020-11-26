import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

// Import Assets
import "./assets/style/main.scss";

// Import elements
import BaseButton from "./components/global/BaseButton";

// Create App
const app = createApp(App);

// Middleware
app.use(router);

// Use elements
app.component("base-button", BaseButton);

// App mounted
app.mount("#app");
