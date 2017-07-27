import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  state: {
    nickname: '',
    loading: true,
  },
  mutations: {
    setLoading (state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    setLoading ({ commit }, loading) {
      commit('setLoading', loading);
    },
  },
};

export default new Vuex.Store(store);
