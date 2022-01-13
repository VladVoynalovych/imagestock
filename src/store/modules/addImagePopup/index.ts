import {
  GetterTree, MutationTree, Module, ActionTree,
} from 'vuex';

import { IRootState } from '@/interfaces/states';
import { IAddImagePopupState } from '@/interfaces/addImagePopup';

import {
  galleryGetters,
  galleryActions,
  galleryMutations,
} from './publicConstants';

const state: IAddImagePopupState = {
  images: [],
};

const getters: GetterTree<IAddImagePopupState, IRootState> = {

};

const actions: ActionTree<IAddImagePopupState, IRootState> = {

};

const mutations: MutationTree<IAddImagePopupState> = {

};

const galleryModule: Module<IAddImagePopupState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default galleryModule;
