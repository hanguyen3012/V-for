import { createStore } from "vuex";
import router from "@/Router";

const store = createStore({
  state: {
    authenticated: false,
    accEnter:{
        username: "",
        password: "",
    },
    accountUser: { usernameAcc: "hanguyen", passwordAcc: "123" },
  },
  getters: {
    auth(state) {
      return state.authenticated;
    },
    accountUser(state) {
      return {
        usernameAcc:  state.accountUser.usernameAcc,
        passwordAcc:  state.accountUser.passwordAcc,
      };
    },
    accountEnter(state) {
        return {
          username:  state.accEnter.username,
          password:  state.accEnter.password,
        };
      },
  },
  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },
    setUsername(state, username) {
      state.accEnter.username = username;
    },
    setPassword(state, password) {
      state.accEnter.password = password;
    },
  },
  actions: {
    logout({ commit }) {
      commit("setAuthenticated", false);
      commit("setUsername", null);
      commit("setPassword", null);
     return router.push({ name: "login" });
      
    },
    login({ commit }) {
      commit("setAuthenticated", true);
      commit("setUsername", "hanguyen");
      commit("setPassword", "123");
    },
  },
});

export default store;
