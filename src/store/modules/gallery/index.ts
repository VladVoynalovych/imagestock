import {
  GetterTree, MutationTree, Module, ActionTree,
} from 'vuex';

import { IRootState } from '@/interfaces/states';
import { IGalleryState } from '@/interfaces/gallery';

import {
  galleryGetters,
  // galleryActions,
  // galleryMutations,
} from './publicConstants';

const state: IGalleryState = {
  images: [],
};

const getters: GetterTree<IGalleryState, IRootState> = {
  [galleryGetters.GET_ALL_IMAGES]: state => state.images,
  [galleryGetters.GET_IMAGE_BY_ID]: state => (imageId:number) => state.images[imageId],
};

const actions: ActionTree<IGalleryState, IRootState> = {
  // [galleryActions.SOME_ACTION]: ({ commit }, payload) => {
  //   commit(galleryMutations.SOME_MUTATION, payload);
  // },
};

const mutations: MutationTree<IGalleryState> = {
  // [galleryMutations.SOME_MUTATION]: (state, payload) => {
  //   state.someState = payload;
  // },
};

const galleryModule: Module<IGalleryState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default galleryModule;
