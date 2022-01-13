import Vue from 'vue';
import Vuex from 'vuex';

import galleryModule from './modules/gallery/index';
import addImagePopupModule from './modules/addImagePopup/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    galleryModule,
    addImagePopupModule,
  },
});
