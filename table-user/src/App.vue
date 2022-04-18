<template>
  <div id="app">
    <div class="col-12 bg-light">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  // beforeCreate() {
  //   if (this.auth) {
  //     this.$router.push({ name: "managements" });
  //   } else {
  //     this.$router.push({ name: "login" });
  //   }
  // },

  computed: {
    auth() {
      return this.$store.getters.auth;
    },
  },
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
