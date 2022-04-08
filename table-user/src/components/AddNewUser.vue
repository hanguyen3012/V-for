<template>
  <div class="container">
    <div class="add-form">
      <!-- <div v-if="!submitted"> -->
      <h2>Add new user</h2>
      <hr />
      <form v-on:submit.prevent="addNewUser" class="form">
        <!-- <input /> -->
        <div class="form-group">
          <input type="text" placeholder="Enter name" v-model="user.name" />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter address"
            v-model="user.address"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter birthday"
            v-model="user.birthday"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter phone number"
            v-model="user.phone"
          />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Enter email" v-model="user.email" />
        </div>
        <div class="form-btn">
          <button class="btn-cancel" type="submit" @click="hideModal">
            Cancel
          </button>
          <button class="btn-add" type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import UserDataService from "../services/UserDataService";
export default {
  name: "AddNewUser",
  data() {
    return {
      user: {
        id: Math.floor(Math.random() * 10000),
        name: "",
        address: "",
        birthday: "",
        phone: "",
        email: "",
      },
      users: [],
    };
  },
  methods: {
    addNewUser() {
      this.$emit("save", this.user);
      this.user = {
        id: Math.floor(Math.random() * 10000),
        name: "",
        address: "",
        birthday: "",
        phone: "",
        email: "",
      };
    },
    hideModal() {
      this.$emit("hideModalAdd");
    },
  },
};
</script>

<style>
.container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 253, 253, 0.5);
}

input {
  height: 30px;
  border-radius: 10px;
  width: 100%;
  margin-left: 3%;
}
h2 {
  text-align: center;
}

.form {
  background: #fff;
}
.form-group {
  margin: 30px;
}
.form-btn {
  margin: 30px;
  display: flex;
  justify-content: space-around;
}
.btn-cancel {
  background: rgb(120, 117, 117);
  width: 60px;
  color: #fff;
  border-radius: 3px;
  border: none;
  font-size: 15px;
}
.btn-cancel:hover {
  background: rgb(77, 77, 77);
}
.btn-add {
  background: rgb(48, 211, 78);
  padding: 7px;
  width: 60px;
  color: #fff;
  border-radius: 3px;
  border: none;
  font-size: 15px;
}
.btn-add:hover {
  background: rgb(30, 112, 45);
}
</style>
