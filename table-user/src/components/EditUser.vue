<template>
  <div class="container" v-if="showModalEdit">
    <div class="add-form">
      <!-- <div v-if="!submitted"> -->
      <h2>Edit user</h2>
      <hr />
      <form v-on:submit.prevent="editUser" class="form">
        <!-- <input /> -->
        <div class="form-group">
          <label for="fname">Name:</label><br />
          <input type="text" v-model="user.name" /><br />
        </div>
        <div class="form-group">
          <label for="lname">Address:</label><br />
          <input type="text" v-model="user.address" /><br /><br />
        </div>
        <div class="form-group">
          <label for="lname">Birthday:</label><br />
          <input type="text" v-model="user.birthday" /><br /><br />
        </div>
        <div class="form-group">
          <label for="lname">Phoner number:</label><br />
          <input type="text" v-model="user.email" /><br /><br />
        </div>
        <div class="form-group">
          <label for="lname">Email:</label><br />
          <input type="text" /><br /><br />
        </div>
        <div>
          <button class="btn1" type="submit" @click="showModalEdit = false">
            Cancel
          </button>

          <button class="btn2" type="submit">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import UserDataService from "../services/UserDataService";
export default {
  name: "EditUser",
  //   data() {
  //     return {
  //       user: {
  //         id: null,
  //         name: "",
  //         address: "",
  //         birthday: "",
  //         phone: "",
  //         email: "",
  //       },

  //       showModalEdit: true,
  //       users: [],
  //     };
  //   },
  props: {
    username: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
  },
  methods: {
    editUser() {
      var user = this.user;
      this.users.push({
        id: Math.random().toString().split(".")[1],
        name: user,
        address: user.address,
        birthday: user.birthday,
        phone: user.phone,
        email: user.email,
      });
      // router.push('/')
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
}

.add-form {
  border-collapse: collapse;
  /* margin-left: 20%; */
  border: solid rgb(39, 40, 42) 1px;
  text-align: left;
  width: 32%;
  height: 500px;
  overflow: auto;
  background-color: #fff;
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

.form-group {
  margin-left: 50px;
}
.btn1 {
  background: rgb(120, 117, 117);
  color: white;
  border-radius: 3px;
  padding: 7px;
  margin-left: 20%;
  /* margin-left: 50%; */
  /* justify-content: center; */
}
.btn2 {
  background: rgb(48, 211, 78);
  color: white;
  border-radius: 3px;
  padding: 7px;
  margin-left: 40%;
  /* justify-content: center; */
}
</style>
