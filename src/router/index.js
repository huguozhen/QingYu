import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue")
  },
  {
    path: "/searchResult",
    name: "SearchResult",
    component: () => import("../views/SearchResult.vue")
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("../views/Editor.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
