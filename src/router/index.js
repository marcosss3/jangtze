import Vue from "vue";
import VueRouter from "vue-router";

import Menu from "../views/Menu";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: "/jangtze/",
  routes: [
    {
      path: "/",
      name: "Menu",
      component: Menu,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
