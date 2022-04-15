import { createStore } from "vuex";

const store = createStore({
  state: {
    authenticated: false,
    acc:{
        username: "",
        password: "",
    },
    account: { usernameAcc: "hanguyen", passwordAcc: "123" },
  },
  getters: {
    auth(state) {
      return state.authenticated;
    },
    accountUser(state) {
        // console.log(state.u)
      return {
        usernameAcc:  state.account.usernameAcc,
        passwordAcc:  state.account.passwordAcc,
      };
    },
    accountEnter(state) {
        return {
          username:  state.account.username,
          password:  state.account.password,
        };
      },

  },
  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  actions: {
    logout({ commit }) {
      commit("setAuthenticated", false);
      commit("setUsername", null);
      commit("setPassword", null);
    },
    login({ commit }) {
      commit("setAuthenticated", true);
      commit("setUsername", "hanguyen");
      commit("setPassword", "123");
    },
  },
});

export default store;
