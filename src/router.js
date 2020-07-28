import Vue from "vue";
import Router from "vue-router";
import home from "@/modules/home/routes";
import photos from "@/modules/photos/routes";
import vuetify from "./plugins/vuetify";

Vue.use(Router);
Vue.use(vuetify);

const baseRoutes = [];

const routes = baseRoutes.concat(
  home,
  photos
);

const router = new Router({
  mode: "history",
  routes
});

export default router;