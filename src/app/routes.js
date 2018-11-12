// Dynamically import components based on the requested route
const ViewHome = () => import("~Views/Home.vue");

// Route configuration
const routes = [{ path: "/", component: ViewHome }];

module.exports = routes;
