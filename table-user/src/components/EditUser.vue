<template>
  <div class="container">
    <div class="add-form">
      <!-- <div v-if="!submitted"> -->
      <h2>Edit user</h2>
      <hr />
      <div class="form">
        <!-- <input /> -->
        <div class="form-group">
          <input type="text" v-model="user.name" />
        </div>
        <div class="form-group">
          <input type="text" v-model="user.address" />
        </div>
        <div class="form-group">
          <input type="text" v-model="user.birthday" />
        </div>
        <div class="form-group">
          <input type="text" v-model="user.phone" />
        </div>
        <div class="form-group">
          <input type="text" v-model="user.email" />
        </div>
        <div class="form-btn">
          <!-- <button class="btn-cancel" type="submit" @click="hideModal">
            Cancel
          </button> -->
          <button class="btn-update" @click="onEditUser()">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import UserDataService from "../services/UserDataService";
export default {
  name: "EditUser",
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
    };
  },
  props: {
    itemEdit: {
      name: "",
      address: "",
      birthday: "",
      phone: "",
      email: "",
    },
  },
  created() {
    this.user = { ...this.itemEdit };
  },
  methods: {
    editUser() {
      // var user = this.user;
    },
    onEditUser() {
      this.$emit("onEditUser", this.user);
      this.$emit("hideModalEdit");
      console.log(this.user);
    },
    // hideModal() {
    //   this.$emit("hideModalEdit");
    // },
  },
};
</script>

<style>
.add-form {
  border-collapse: collapse;
  /* margin-left: 20%; */
  border: solid rgb(39, 40, 42) 1px;
  text-align: left;
  width: 32%;
  height: 500px;
  background-color: rgb(126, 171, 235);
  overflow: auto;

  border-radius: 3px;
}
input {
  width: 85%;
  height: 30px;
  border-radius: 3px;
}
h2 {
  text-align: center;
}
.form {
  background-color: rgb(126, 171, 235);
}
.form-group {
  margin: 25px;
  margin-left: 10%;
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
.btn-update {
  background: rgb(36, 146, 56);
  padding: 7px;
  width: 60px;
  color: #fff;
  border-radius: 3px;
  border: none;
  font-size: 15px;
}
.btn-update:hover {
  background: rgb(30, 112, 45);
}
</style>
