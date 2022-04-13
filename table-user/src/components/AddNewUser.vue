<template>
  <div class="container">
    <div class="add-form">
      <h2>Add new user</h2>
      <hr />
      <form v-on:submit.prevent="addNewUser" class="form">
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter name"
            v-model="user.name"
            @blur="v$.user.name.$touch()"
          />
          <p v-if="v$.user.name.$error" class="invalid-feedback">
            The name field is required!
          </p>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter address"
            v-model="user.address"
          />
          <p v-if="v$.user.address.$error" class="invalid-feedback">
            The address field is required!
          </p>
        </div>
        <div class="form-group">
          <input
            type="date"
            placeholder="Enter birthday"
            v-model="user.birthday"
          />
          <p v-if="v$.user.birthday.$error" class="invalid-feedback">
            The birthday field is required!
          </p>
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter phone number"
            v-model="user.phone"
          />
          <p v-if="v$.user.phone.$error" class="invalid-feedback">
            You must enter a phone number with 10 to 11 numbers!
          </p>
          <!-- <p v-if="!v$.user.phone.minLength" class="invalid-feedback">
            You must have at least
            {{ v$.user.phone.$params.minLength.min }} letters.
          </p>
          <p v-if="!v$.user.phone.maxLength" class="invalid-feedback">
            You must not have greater then
            {{ v$.user.phone.$params.maxLength.max }} letters.
          </p> -->
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter email"
            v-model="user.email"
            @blur="v$.user.email.$touch()"
          />
          <p v-if="v$.user.email.$error" class="invalid-feedback">
            You must enter a valid email address!
          </p>
          <!-- <p v-if="!v$.user.email.email" class="invalid-feedback">
            The email is not valid
          </p> -->
        </div>

        <div class="form-btn">
          <button type="button" class="btn-cancel" @click="$emit('close')">
            Close
          </button>
          <button class="btn-add" type="submit">Add</button>
        </div>
      </form>
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
  name: "AddNewUser",
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
  created() {
    console.log("", this.v$);
  },
  methods: {
    async addNewUser() {
      await this.v$.$touch();
      if (!this.v$.user.$invalid) {
        this.$emit("save", this.user);
        this.$emit("hideModalAdd");
      }
      // if (!this.v$.user.name.$invalid) return;
      if (this.v$.user.$invalid) return;
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
.invalid-feedback {
  color: red;
}
</style>
