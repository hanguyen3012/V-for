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
          v-model="username"
          required
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="password"
          required
        />
        <!-- <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label> -->
        <button type="submit" @click="login()">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
// import ManagementUsers from "./ManagementUsers.vue";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      authenticated: false,
    };
  },
  computed: {
    // ...mapState(["authenticated", "username", "password"]),
    // ...mapGetters(["authenticated", "username", "password"]),
  },
  methods: {
    // ...mapActions(["login"]),
    handleLogin(e) {
      e.preventDefault();
      if (this.username != "" && this.password != "") {
        if (this.username == "hanguyen" && this.password == "123") {
          this.setAuthenticated = true;
          //   return <ManagementUsers />;
        } else {
          console.log("Login is unsuccessful");
        }
      } else {
        console.log();
      }
    },
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

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container-login {
  padding: 16px;
  text-align: left;
}
</style>
