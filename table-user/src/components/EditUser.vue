<template>
  <div class="container">
    <div class="add-form">
      <h2>Edit user</h2>
      <hr />
      <div class="form">
        <div class="form-group">
          <input type="text" v-model.trim="user.name" />
          <p v-if="v$.user.name.$error" class="invalid-feedback">
            The name field is required!
          </p>
        </div>
        <div class="form-group">
          <input type="text" v-model.trim="user.address" />
          <p v-if="v$.user.address.$error" class="invalid-feedback">
            The address field is required!
          </p>
        </div>
        <div class="form-group">
          <input type="text" v-model.trim="user.birthday" />
          <p v-if="v$.user.birthday.$error" class="invalid-feedback">
            The birthday field is required!
          </p>
        </div>
        <div class="form-group">
          <input type="text" v-model.trim="user.phone" />
          <p v-if="v$.user.phone.$error" class="invalid-feedback">
            You must enter a phone number with 10 to 11 numbers!
          </p>
        </div>
        <div class="form-group">
          <input type="text" v-model.trim="user.email" />
          <p v-if="v$.user.email.$error" class="invalid-feedback">
            The email field is required! You must enter a valid email address!
          </p>
        </div>

        <div class="form-btn">
          <button type="button" class="btn-cancel" @click="$emit('close')">
            Close
          </button>
          <button class="btn-update" @click="onEditUser()">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  name: "EditUser",
  setup() {
    return { v$: useVuelidate() };
  },
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
  validations() {
    return {
      user: {
        name: { required },
        address: { required },
        birthday: { required },
        phone: { required, minLength: minLength(10), maxLength: maxLength(11) },
        email: { required, email },
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
    async onEditUser() {
      await this.v$.$touch();
      if (!this.v$.user.$invalid) {
        this.$emit("onEditUser", this.user);
        this.$emit("hideModalEdit");
      }
      if (this.v$.user.$invalid) return;
    },
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
  background-color: rgb(141, 218, 176);
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
  background-color: rgb(141, 218, 176);
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
.invalid-feedback {
  color: red;
  font-size: small;
}
</style>
