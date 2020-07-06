import Vue from "vue";
import VueRouter from "vue-router";

import Menu from "../views/Menu";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Menu",
      component: Menu,
    },
  ],
});
