import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      libraries: [],
      discography: [],
      count: 0,
    };
  },
  mutations: {
    add(state, discography) {
      state.libraries.push(discography.value);
    },
    remove(state, discography) {
      state.libraries.remove(discography.value);
    },
    remove_all: (state) => {
      state.libraries = [];
      state.count = 0;
    },
  },
  actions: {
    add(context, discography) {
      context.commit("add", discography);
    },
  },
  getters: {
    libraries: state => state.libraries,
    libraryList(state) {
      return state.libraries;
    },
    libraryCount(state) {
      return state.libraries.length;
    },
  },
});

export default store;
