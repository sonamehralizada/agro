import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homePage: null,
  },
  mutations: {
    updateHomePage(state, payload) {
        state.homePage = payload
      }  
  },
  actions: {
    setHomePage(context, payload) {
        context.commit('updateHomePage', payload)
      },
  },
  getters: {
    getHomPage: state => state.homePage,
  }
});
