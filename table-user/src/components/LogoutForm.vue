<template>
  <div class="container">
    <div class="logout-form">
      <SlotComponent>
        <template v-slot:header>
          <h3>Do you want to logout the application?</h3>
        </template>
      </SlotComponent>
      <hr />
      <SlotComponent>
        <template v-slot:footer>
          <button type="button" class="btn-cancel" @click="$emit('close')">
            Cancel
          </button>
          <button type="button" class="btn-ok" @click="logout()">OK</button>
        </template>
      </SlotComponent>
    </div>
  </div>
</template>

<script>
import SlotComponent from "./SlotComponent.vue";
export default {
  name: "LogoutForm",
  components: {
    SlotComponent,
  },
  methods: {
    logout() {
      return this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.logout-form {
  border-collapse: collapse;
  border: solid rgb(39, 40, 42) 1px;
  text-align: left;
  width: 32%;
  height: 250px;
  background-color: rgb(182, 229, 243);
  overflow: auto;
}
header {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
footer {
  margin: 10px;
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
