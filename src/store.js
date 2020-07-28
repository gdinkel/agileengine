import Vue from "vue";
import Vuex from "vuex";
import core from "./modules/core/store";
import home from "./modules/home/store";
import photos from "./modules/photos/store";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      core,
      home,
      photos
    }
  });