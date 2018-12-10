import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";

// Import Vue plugin configuration
import "./plugins.js";

// Import styles
import "~Styles/style.scss";

console.warn("👋  hello from `src/app/index.js`");

// Configure Vue Router
const router = new VueRouter({
  mode: "history",
  root: "/",
  routes,
});

// Initialize Vue
const root = new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new CustomEvent("app.rendered"));
  },
});

root.$mount("#app");
