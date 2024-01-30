import { createApp } from "vue";
import "./style.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import App from "./App.vue";
const app = createApp(App);
app.use(VueTelInput);
app.mount("#app");
