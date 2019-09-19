<template>
  <v-app>
    <form @submit.prevent="createRoom()">
      <h1>Create Room</h1>
      <label>Room Name</label>
      <input type="text" autocomplete="off" placeholder="Input room name" v-model="roomName" />
      <button type="submit">Create</button>
    </form>
    <form @submit.prevent="createUser()">
      <h1>UserName</h1>
      <label>username</label>
      <input type="text" autocomplete="off" placeholder="Input username" v-model="username" />
      <button type="submit">Create</button>
    </form>
    <button @click.prevent="getRooms()">Get Room</button>
    <h1>Room List</h1>
    <ul>
      <li v-for="room in this.$store.state.rooms" :key="room.id">
        <p>{{room.name}}</p>
        <button @click.prevent="joinRoom(room.id)">Join</button>
        <button @click.prevent="startGame(room.id)">Start</button>
      </li>
    </ul>
  </v-app>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      roomName: "",
      username: ""
    };
  },
  methods: {
    createRoom() {
      if (localStorage.getItem("username")) {
        const roomName = this.roomName;
        this.$store.dispatch("createRoom", roomName);
        this.roomName = "";
      } else {
        Swal.fire(`Error`, `To create room you must register first !`, "error");
      }
    },
    createUser() {
      Swal.fire({
        title: "Registering user..."
      });
      Swal.showLoading();
      localStorage.setItem("username", this.username);
      Swal.fire(
        `Success`,
        `Registered user success, Hi ${this.username} ready to have some fun ?`,
        "success"
      );
      this.username = "";
    },
    getRooms() {
      this.$store.dispatch("getRooms");
    },
    joinRoom(id) {
      if (localStorage.getItem("username")) {
        this.$store.dispatch("joinRoom", id);
      } else {
        Swal.fire(`Error`, `To create room you must register first !`, "error");
      }
    },
    startGame(id){
      this.$store.dispatch('startGame', id);
    }
  }
};
</script>
