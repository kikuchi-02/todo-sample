import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    snackbar: { active: false, title: "", message: "" },
  },
  mutations: {
    setSnackbar(state, snackbar) {
      state.snackbar = snackbar;
    },
  },
  actions: {
    showSnackbar(
      { commit },
      {
        title,
        message,
        timeout,
      }: { title: string; message: string; timeout?: number }
    ) {
      commit("setSnackbar", { active: true, title, message });
      setTimeout(
        () => {
          commit("setSnackbar", { active: false, title: "", message: "" });
        },
        timeout !== undefined ? timeout : 3000
      );
    },
  },
} as StoreOptions<any>;
