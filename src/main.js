import { createApp } from "vue";
import App from "./App.vue";
import ScrollDirective from "./directives/scroll";
import router from "./router";
import "../src/assets/main.css";

const app = createApp(App);

app.directive("scroll", ScrollDirective);

app.use(router);

app.mount("#app");
