<template>
  <div>
    <appBar @logoutSignal="logout" />
    <v-container>
      <v-row align="center" justify="start" no-gutters>
        <v-col cols="10" class="pa-12">
          <h2>Create New Room</h2>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="2" class="pa-12">
          <div class="my-2">
            <v-btn class="mx-2" fab dark color="orange" @click="triggerCreateRoom">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </div>
        </v-col>
        <!-- <v-col cols="12">
          <roomSelf />
          <roomSelf />
        </v-col> -->
        <v-col cols="12" class="pa-12">
          <h2>Available Rooms</h2>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12">
          <roomOthers />
        </v-col>
      </v-row>
    </v-container>

    <login :loginModal="loginModal" @statusLogin="changeLoginStatus" />
    <createRoom :createModal="createModal" @createRoom="createRoom" @close="closeCreateModal" />
  </div>
</template>

<script>
import login from "../components/Login";
import roomSelf from "../components/RoomSelf";
import roomOthers from "../components/RoomOthers";
import appBar from "../components/AppBar";
import createRoom from "../components/CreateRoom";

export default {
  components: {
    appBar,
    login,
    roomSelf,
    roomOthers,
    createRoom
  },
  props: {
    source: String
  },
  data: () => ({
    username: localStorage.getItem("username"),
    isLogin: false,
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    loginModal: false,
    createModal: false
  }),
  methods: {
    changeLoginStatus(cond, payload) {
      console.log("============ Masuk ============");
      this.isLogin = cond;
      this.checkLoginStatus();
    },
    checkLoginStatus() {
      console.log(localStorage.getItem("username"));
      if (localStorage.getItem("username")) {
        this.isLogin = true;
        this.$store.dispatch('getRooms');
        this.triggerModal(false);
      } else {
        this.isLogin = false;
        this.$store.commit('emptyRoom');
        this.triggerModal(true);
      }
    },
    triggerModal(bool) {
      this.loginModal = bool;
    },
    logout() {
      localStorage.removeItem("username");
      this.checkLoginStatus();
    },
    createRoom(roomName) {
      this.createModal = false;
    },
    triggerCreateRoom() {
      this.createModal = true;
    },
    closeCreateModal() {
      this.createModal = false;
    }
  },
  created() {
    this.checkLoginStatus();
  }
};
</script>
