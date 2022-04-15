<template>
  <div id="app">
    <!-- <button v-if="auth" v-on:click="logout()" class="logout">Logout</button> -->
    <div id="nav">
      <LoginForm v-if="!auth" />
      <ManagementUsers v-if="auth" />
    </div>
  </div>
</template>

<script>
import ManagementUsers from "./components/ManagementUsers.vue";
import LoginForm from "./components/LoginForm.vue";

// import { mapGetters } from "vue";

export default {
  name: "App",
  components: {
    LoginForm,
    ManagementUsers,
  },
  computed: {
    // ...mapGetters(["auth", "accountUser", "accountEnter"]),
  },

  // methods: {
  //   logout() {
  //     this.$store.dispatch("logout");
  //   },
  // },
};
</script>

<style>
.logout {
  background-color: orange;
  width: 100px;
  padding: 8px;
  border-radius: 3px;
  color: white;
}
.logout:hover {
  background-color: rgb(202, 198, 189);
  width: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
