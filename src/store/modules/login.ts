import { StoreOptions } from "vuex";

const loginTokenKey = "my-token";

export default {
  namespaced: true,
  state() {
    const item = localStorage.getItem(loginTokenKey);
    // something
    return {
      isAdmin: !!item || false,
    };
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isAdmin = status;
    },
  },
  actions: {
    async login(
      { commit, dispatch },
      { email, password }: { email: string; password: string }
    ) {
      // something
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("setLoginStatus", true);
      localStorage.setItem(loginTokenKey, "token");
      await dispatch(
        "snackbar/showSnackbar",
        {
          title: "Success",
          message: "Login!",
        },
        { root: true }
      );
    },
    async logout({ commit, dispatch }) {
      commit("setLoginStatus", false);
      localStorage.removeItem(loginTokenKey);
      await dispatch(
        "snackbar/showSnackbar",
        {
          title: "Success",
          message: "Logout",
        },
        { root: true }
      );
    },
  },
} as StoreOptions<any>;
