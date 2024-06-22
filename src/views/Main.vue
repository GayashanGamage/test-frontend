<template>
  <div class="level-one-container">
    <p>main page</p>
    <input type="text" placeholder="First Name" v-model="firstName" /><br />
    <input type="text" placeholder="Last Name" v-model="lastName" /><br />
    <input type="password" v-model="pw" /><br />
    <button @click="clicked">Add user</button>
    <button @click="save">save</button>
    <div v-for="(item, index) in users" :key="item['_id']" class="user-detials">
      <p>first name {{ item["first name"] }}</p>
      <p>last name {{ item["last name"] }}</p>
      <p>password {{ item["password"] }}</p>
      <button @click="deleteItem(item['_id'])">Delete</button>
      <button @click="popup_open(index, item['_id'])">Edit</button>
    </div>
    <div class="popup">
      <div class="popup-container">
        <input type="text" id="fname" v-model="selectItem['first name']" />
        <input type="text" id="lname" v-model="selectItem['last name']" />
        <input type="text" id="pw" v-model="selectItem['password']" />
        <button @click="save">Save</button>
        <button @click="popup_close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "App";
import axios from "axios";
import { onBeforeMount, onBeforeUpdate, ref } from "vue";

const firstName = ref();
const lastName = ref();
const pw = ref();
const users = ref(Array);
const selectItem = ref({
  _id: "",
  "first name": "",
  "last name": "",
  password: "",
});

const clicked = () => {
  axios
    .post("https://test-backend-38j6.onrender.com/user", {
      firstName: firstName.value,
      lastName: lastName.value,
      password: pw.value,
    })
    .then(function (response) {
      users.value = response.data;
    });
};

const deleteItem = (_id) => {
  axios
    .delete("https://test-backend-38j6.onrender.com/delete-user/" + _id)
    .then(function (response) {
      users.value = response.data;
    });
};

const popup_open = (itemNum, userId) => {
  selectItem.value = {
    _id: userId,
    "first name": users.value[itemNum]["first name"],
    "last name": users.value[itemNum]["last name"],
    password: users.value[itemNum]["password"],
  };

  // document.getElementById("fname").value = selectItem.value["first name"];
  // document.getElementById("lname").value = selectItem.value["last name"];
  // document.getElementById("pw").value = selectItem.value["password"];
  document.querySelector(".popup").style.display = "flex";
};

const save = () => {
  axios
    .patch(
      "https://test-backend-38j6.onrender.com/update-user/" +
        selectItem.value["_id"],
      {
        firstName: selectItem.value["first name"],
        lastName: selectItem.value["last name"],
        password: selectItem.value["password"],
      }
    )
    .then(function (response) {
      users.value = response.data;
    });
  popup_close();
};

const popup_close = () => {
  document.querySelector(".popup").style.display = "none";
};

onBeforeMount(() => {
  axios
    .get("https://test-backend-38j6.onrender.com/allUser")
    .then(function (response) {
      users.value = response.data;
    });
});
</script>

<style>
.user-detials {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: fit-content;
}
.popup {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  justify-content: center;
  align-items: center;
  color: black;
}
.popup-container {
  width: 40vw;
  height: 40vh;
  border-radius: 6px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
