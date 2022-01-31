import {
  GetterTree, MutationTree, Module, ActionTree,
} from 'vuex';

import { IRootState } from '@/interfaces/states';
import { IAddImagePopupState } from '@/interfaces/addImagePopup';

import { uploadImages } from '@/services/Flicker/FlickrService';

import {
  popupGetters,
  popupActions,
  popupMutations,
} from './publicConstants';

const state: IAddImagePopupState = {
  images: [],
};

const getters: GetterTree<IAddImagePopupState, IRootState> = {
  [popupGetters.GET_UPLOADED_IMAGES]: state => state.images,
};

const actions: ActionTree<IAddImagePopupState, IRootState> = {
  [popupActions.UPLOAD_IMAGES]: async ({ commit }, payload) => {
    const images = await uploadImages(payload);
    commit('RENEW_IMAGES', images);
  },
  [popupActions.CLEAR_IMAGES_POPUP]: ({ commit }) => {
    commit('CLEAR_IMAGES');
  },
  [popupActions.SET_AS_ADDED]: ({ commit }, payload) => {
    commit('ADD_IMAGE', payload);
  },
};

const mutations: MutationTree<IAddImagePopupState> = {
  [popupMutations.RENEW_IMAGES]: (state, payload) => {
    state.images = payload;
  },
  [popupMutations.CLEAR_IMAGES]: (state) => {
    state.images = [];
  },
  [popupMutations.ADD_IMAGE]: (state, payload) => {
    state.images[payload].added = !state.images[payload].added;
  },
};

const addImagePopupModule: Module<IAddImagePopupState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default addImagePopupModule;
