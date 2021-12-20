import {
  GetterTree, MutationTree, Module, ActionTree,
} from 'vuex';

// @ts-ignore
import { IRootState } from '@/interfaces/states';
import {
  someModuleActions,
  someModuleGetters,
  someModuleMutations,
} from './publicConstants';

interface ISomeModuleState {
  someState: string;
}

const state: ISomeModuleState = {
  someState: '',
};

const getters: GetterTree<ISomeModuleState, IRootState> = {
  [someModuleGetters.SOME_GETTER]: state => state.someState,
};

const actions: ActionTree<ISomeModuleState, IRootState> = {
  [someModuleActions.SOME_ACTION]: ({ commit }, payload) => {
    commit(someModuleMutations.SOME_MUTATION, payload);
  },
};

const mutations: MutationTree<ISomeModuleState> = {
  [someModuleMutations.SOME_MUTATION]: (state, payload) => {
    state.someState = payload;
  },
};

const someModule: Module<ISomeModuleState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default someModule;
