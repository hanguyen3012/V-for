<template>
  <div id="app">
    <button v-if="auth" v-on:click="logout()"  class ="logout" replace>Logout</button>
    <LoginForm v-if="!auth" />
    <ManagementUsers v-if="auth" />
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
    auth(){
      return this.$store.getters.auth
    }
    // ...mapGetters(["authenticated"])
     },

  // methods: {
  //   ...mapActions(["logout"]),
  // },
};
</script>

<style>
 .logout{
  width:100px
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
