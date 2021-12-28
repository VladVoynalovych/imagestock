import {
  GetterTree, MutationTree, Module, ActionTree,
} from 'vuex';

import { IRootState } from '@/interfaces/states';
import { IGalleryState } from '@/interfaces/gallery';

import {
  galleryGetters,
  galleryActions,
  galleryMutations,
} from './publicConstants';

const state: IGalleryState = {
  images: [],
};

const getters: GetterTree<IGalleryState, IRootState> = {
  [galleryGetters.GET_ALL_IMAGES]: state => state.images,
  [galleryGetters.GET_IMAGE_BY_ID]: state => (imageId:number) => state.images[imageId],
};

const actions: ActionTree<IGalleryState, IRootState> = {
  [galleryActions.UPLOAD_IMAGES]: ({ commit }, payload) => {
    const defaultImages = [
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 1,
        dislikes: 1,
        comments: [
          {
            userName: 'user1_1',
            date: new Date(),
            text: 'user1_1 comment',
          },
          {
            userName: 'user1_2',
            date: new Date(),
            text: 'user1_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 2,
        dislikes: 2,
        comments: [
          {
            userName: 'user2_1',
            date: new Date(),
            text: 'user2_1 comment',
          },
          {
            userName: 'user2_2',
            date: new Date(),
            text: 'user2_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 3,
        dislikes: 3,
        comments: [
          {
            userName: 'user3_1',
            date: new Date(),
            text: 'user3_1 comment',
          },
          {
            userName: 'user3_2',
            date: new Date(),
            text: 'user3_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 4,
        dislikes: 4,
        comments: [
          {
            userName: 'user4_1',
            date: new Date(),
            text: 'user4_1 comment',
          },
          {
            userName: 'user4_2',
            date: new Date(),
            text: 'user4_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 5,
        dislikes: 5,
        comments: [
          {
            userName: 'user5_1',
            date: new Date(),
            text: 'user5_1 comment',
          },
          {
            userName: 'user5_2',
            date: new Date(),
            text: 'user5_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 6,
        dislikes: 6,
        comments: [
          {
            userName: 'user6_1',
            date: new Date(),
            text: 'user6_1 comment',
          },
          {
            userName: 'user6_2',
            date: new Date(),
            text: 'user6_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 7,
        dislikes: 7,
        comments: [
          {
            userName: 'user7_1',
            date: new Date(),
            text: 'user7_1 comment',
          },
          {
            userName: 'user7_2',
            date: new Date(),
            text: 'user7_2 comment',
          },
        ],
      },
      {
        src: 'https://p4.wallpaperbetter.com/wallpaper/799/212/982/video-games-the-witcher-3-wild-hunt-artwork-ciri-wallpaper-preview.jpg',
        likes: 8,
        dislikes: 8,
        comments: [
          {
            userName: 'user8_1',
            date: new Date(),
            text: 'user8_1 comment',
          },
          {
            userName: 'user8_2',
            date: new Date(),
            text: 'user8_2 comment',
          },
        ],
      },
    ];

    localStorage.getItem('galleryImages') === null
      ? commit('FILL_IMAGES', defaultImages)
      : commit('FILL_IMAGES', JSON.parse(localStorage.getItem('galleryImages') || '{}'));
  },
  [galleryActions.LIKES_INCREMENTATION]: ({ commit }, payload) => {
    commit('ADD_LIKE', payload);
  },
  [galleryActions.DISLIKES_INCREMENTATION]: ({ commit }, payload) => {
    commit('ADD_DISLIKE', payload);
  },
  [galleryActions.LIKES_DECREMENT]: ({ commit }, payload) => {
    commit('DELETE_LIKE', payload);
  },
  [galleryActions.DISLIKES_DECREMENT]: ({ commit }, payload) => {
    commit('DELETE_DISLIKE', payload);
  },
  [galleryActions.UPDATE_LOCAL_STORAGE]: ({ commit, state }) => {
    localStorage.setItem('galleryImages', JSON.stringify(state.images));
  },
  [galleryActions.COMMENT_INCREMENT]: ({ commit }, payload) => {
    commit('ADD_COMMENT', payload);
  },
};

const mutations: MutationTree<IGalleryState> = {
  [galleryMutations.FILL_IMAGES]: (state, payload) => {
    state.images = payload;
  },
  [galleryMutations.ADD_LIKE]: (state, payload) => {
    state.images[payload].likes += 1;
  },
  [galleryMutations.ADD_DISLIKE]: (state, payload) => {
    state.images[payload].dislikes += 1;
  },
  [galleryMutations.DELETE_LIKE]: (state, payload) => {
    state.images[payload].likes -= 1;
  },
  [galleryMutations.DELETE_DISLIKE]: (state, payload) => {
    state.images[payload].dislikes -= 1;
  },
  [galleryMutations.ADD_COMMENT]: (state, payload) => {
    state.images[payload.itemIndex].comments.push(payload.comment);
  },
};

const galleryModule: Module<IGalleryState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default galleryModule;
