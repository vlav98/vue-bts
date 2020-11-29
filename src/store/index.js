import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      libraries: [],
      count: 0,
    };
  },
  mutations: {
    add(state, payload) {
      state.libraries.push(payload.value);
    },
  },
  actions: {
    add(context, payload) {
      context.commit("add", payload);
    },
  },
  getters: {
    libraryList(state) {
      return state.libraries;
    },
    libraryCount(state) {
      return state.libraries.length;
    },
  },
});

export default store;
