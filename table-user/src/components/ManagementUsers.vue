<template>
  <div class="container">
    <div v-if="users">
      <button type="button" class="button" @click="showModal = true">
        Add new user
      </button>
      <table>
        <thead>
          <tr class="title">
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Birthday</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td class="col">{{ user.name }}</td>
            <td class="col">{{ user.address }}</td>
            <td class="col">{{ user.birthday }}</td>
            <td class="col">{{ user.phone }}</td>
            <td class="col">{{ user.email }}</td>
            <td>
              <button
                type="button"
                class="btn btn1"
                @click="showModalEdit = true"
              >
                Edit
              </button>
              <button class="btn btn2" @click="deleteUser">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <AddNewUser v-if="showModal" />
      <EditUser v-if="showModalEdit" users="users" userID="user.id" />
    </div>
    <div v-else>Add the new user to view list users</div>
  </div>
</template>

<script>
// import UserDataService from "../services/UserDataService";
import AddNewUser from "./AddNewUser.vue";
import EditUser from "./EditUser.vue";

export default {
  name: "ManagementUsers",
  components: {
    AddNewUser,
    EditUser,
  },
  data() {
    return {
      showModal: false,
      showModalEdit: false,
      users: [
        {
          id: 1,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
      ],
    };
  },
  // methods: {
  //   deleteUser() {
  //     UserDataService.delete(this.user.id, this.user);
  //   },
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  /* margin-left: 20%; */
  border: solid rgb(101, 129, 230) 1px;
}
.title {
  background-color: aqua;
}

th,
td {
  text-align: left;
  padding: 8px;
}
button {
  margin: 5px;
}
.button {
  margin-bottom: 20px;
  background: rgb(62, 177, 108);
  color: white;
  border-radius: 3px;
  padding: 7px;
  font-size: larger;
}
.button:hover {
  background-color: #3e8e41;
}
.btn1 {
  background: rgb(48, 48, 234);
  color: white;
  border-radius: 3px;
  padding: 7px;
  border: none;
}
.btn1:hover {
  background-color: rgb(65, 123, 185);
}
.btn2 {
  background: rgb(240, 18, 7);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 7px;
}
.btn2:hover {
  background-color: #b96d67;
}
</style>
