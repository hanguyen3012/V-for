<template>
  <div id="app">
    <div v-if="authenticated" v-on:click="logout()" replace>Logout</div>
    <LoginForm v-if="!authenticated" />
    <ManagementUsers v-if="authenticated" />
  </div>
</template>

<script>
import ManagementUsers from "./components/ManagementUsers.vue";
import LoginForm from "./components/LoginForm.vue";

import { mapGetters } from "vue";

export default {
  name: "App",
  components: {
    LoginForm,
    ManagementUsers,
  },
  computed: { ...mapGetters(["authenticated"]) },

  // methods: {
  //   ...mapActions(["logout"]),
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
