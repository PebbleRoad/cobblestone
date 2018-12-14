import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";

// Import Vue plugin configuration
import "./plugins.js";

// Import styles
import "~Styles/style.scss";

// Configure Vue Router
const Router = new VueRouter({
  mode: "history",
  root: "/",
  routes: router.routes,
});

// Initialize Vue
const root = new Vue({
  router: Router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new CustomEvent("app.rendered"));
  },
});

document.addEventListener("DOMContentLoaded", function() {
  root.$mount("#app");
});
