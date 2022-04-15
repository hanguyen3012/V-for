<template>
  <div class="login-form">
    <h2>Login Form</h2>
    <form @submit.prevent="handleLogin">
      <div class="container-login">
        <label for="uname"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          v-model="accountEnter.username"
          required
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="accountEnter.password"
          required
        />
        <button type="submit" class="btn-login">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import ManagementUsers from "./ManagementUsers.vue";
export default {
  name: "LoginForm",

  computed: {
    // auth() {
    //   return this.$store.getters.auth;
    // },
    // ...mapState({
    //   username: (state) => state.username,
    //   password: (state) => state.password,
    // }),
    ...mapGetters(["auth", "accountUser", "accountEnter"]),
  },
  methods: {
    // ...mapActions(["login"]),
    handleLogin(e) {
      e.preventDefault();
      console.log(!this.accountEnter.username);
      if (
        !this.accountEnter.username === false &&
        !this.accountEnter.password === false
      ) {
        if (
          this.accountEnter.username === this.accountUser.usernameAcc &&
          this.accountEnter.password === this.accountUser.passwordAcc
        ) {
          this.$store.dispatch("login");
        } else {
          alert("Login is unsuccessful");
        }
      } else {
        console.log("ha");
      }
    },
  },
  logout() {
    this.$store.dispatch("logout");
  },
};
</script>

<style>
.login-form {
  font-family: Arial, Helvetica, sans-serif;
  width: 40vw;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  margin-left: 30%;

  margin-right: 30%;
  background-color: rgba(255, 253, 253, 0.5);
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.btn-login {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.btn-login:hover {
  opacity: 0.8;
}

.container-login {
  padding: 16px;
  text-align: left;
}
</style>
