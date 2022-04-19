<template>
  <div class="container">
    <div class="logout-form">
      <header>
        <slot name="header"
          ><h3>Do you want to logout the application?</h3></slot
        >
      </header>
      <hr />
      <footer>
        <slot name="footer">
          <button type="button" class="btn-cancel" @click="$emit('close')">
            Cancel
          </button>
          <button type="submit" class="btn-ok" @click="logout()">OK</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LogoutForm",
  computed: {
    ...mapGetters(["auth", "accountUser", "accountEnter"]),
    logout() {
      return this.$store.dispatch("logout");
    },
  },
  methods: {},
};
</script>

<style>
.logout-form {
  border-collapse: collapse;
  /* margin-left: 20%; */
  border: solid rgb(39, 40, 42) 1px;
  text-align: left;
  width: 32%;
  height: 250px;
  background-color: rgb(234, 219, 180);
  overflow: auto;
}
header {
  margin: 50px;
  text-align: center;
}
footer {
  margin: 30px;
  display: flex;
  justify-content: space-around;
}
.btn-cancel {
  width: 60px;
  height: 30px;
  color: #fff;
  border-radius: 3px;
  border: none;
  font-size: 15px;
}
.btn-ok {
  background: rgb(27, 50, 178);
  width: 60px;
  height: 30px;
  color: #fff;
  border-radius: 3px;
  border: none;
  font-size: 15px;
}
.btn-ok:hover {
  background: rgb(60, 117, 209);
}
</style>
