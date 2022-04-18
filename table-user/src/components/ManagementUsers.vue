<template>
  <div class="container">
    <div>
      <button type="button" @click="logout" class="logout">Logout</button>
    </div>
    <div v-if="users">
      <button type="button" class="button" @click="showModal = !showModal">
        + Add new user
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
              <button type="button" class="btn btn1" @click="clickEdit(user)">
                Edit
              </button>
              <button class="btn btn2" @click="clickDelete(user)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <EditUser
        :itemEdit="person"
        v-if="showModalEdit"
        @onEditUser="userEdited"
        v-show="showModalEdit"
        @close="closeModalEdit"
      />
      <AddNewUser
        v-if="showModal"
        v-show="showModal"
        @close="closeModal"
        @save="clickSave"
      />
    </div>
    <div v-else>Add the new user to view list users</div>
  </div>
</template>

<script>
import AddNewUser from "./AddNewUser.vue";
import { mapGetters } from "vuex";
import EditUser from "./EditUser.vue";
export default {
  name: "ManagementUsers",
  components: {
    AddNewUser,
    EditUser,
  },
  data() {
    return {
      showModalEdit: false,
      showModal: false,
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
      person: {},
    };
  },

  computed: {
    ...mapGetters(["auth", "accountUser", "accountEnter"]),
  },
  methods: {
    logout(e) {
      e.preventDefault();
      if (this.auth) {
        this.$store.dispatch("logout");
        this.$router.push({ name: "login" });
      }else{
        this.$router.push({ name: "login" });
      }
    },
    clickSave(data) {
      let index = this.users.findIndex((c) => c.id === data.id);
      if (index >= 0) {
        this.users.splice(index, 1, data);
      } else {
        let max = 0;
        let newId = 0;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id > max) {
            max = this.users[i].id;
          }
        }
        newId = max + 1;
        data.id = newId;
        this.users.push(data);
      }
      return;
    },
    closeModal() {
      this.showModal = false;
    },
    closeModalEdit() {
      this.showModalEdit = false;
    },
    clickDelete(itemDelete) {
      for (let i = 0; i < this.users.length; i++) {
        if (itemDelete.id === this.users[i].id) {
          this.users.splice(i, 1);
        }
      }
    },
    clickEdit(itemEdit) {
      this.showModalEdit = true;
      this.person = itemEdit;
    },
    userEdited(itemEdited) {
      for (let i = 0; i < this.users.length; i++) {
        if (itemEdited.id === this.users[i].id) {
          this.users[i] = itemEdited;
        }
      }
      return;
    },
  },
};
</script>

<style scoped>
.logout {
  position: absolute;
  background-color: rgb(31, 78, 186);

  width: 100px;

  padding: 8px;
  border-radius: 3px;
  color: white;
  margin-top: -300px;
  margin-left: 500px;
}
.logout:hover {
  background-color: rgb(202, 198, 189);
  width: 100px;
}
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
  font-size: 20px;
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
