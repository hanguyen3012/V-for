<template>
  <div id="hello">
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
            <!-- <font-awesome-icon icon="fa-solid faBicycle" /> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 2,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 3,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 4,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 5,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 6,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 7,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 8,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
        {
          id: 9,
          name: "Ha",
          address: "BD",
          birthday: "30/12",
          phone: "0123456",
          email: "ha@gmail.com",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
  width: 80%;
  margin-left: 10%;
}
.title {
  background-color: aqua;
}

th,
td {
  text-align: left;
  padding: 8px;
}
</style>
