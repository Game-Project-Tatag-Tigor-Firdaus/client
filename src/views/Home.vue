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
            <v-btn class="mx-2" fab dark color="orange">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <roomSelf />
          <roomSelf />
        </v-col>
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
  </div>
</template>

<script>
import login from "../components/Login";
import roomSelf from "../components/RoomSelf";
import roomOthers from "../components/RoomOthers";
import appBar from "../components/AppBar";

export default {
  components: {
    appBar,
    login,
    roomSelf,
    roomOthers
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
    loginModal: false
  }),
  methods: {
    changeLoginStatus(cond, payload) {
      console.log("============ Masuk ============");
      localStorage.setItem("username", payload);
      this.isLogin = cond;
      this.checkLoginStatus();
    },
    checkLoginStatus() {
      console.log(localStorage.getItem("username"));
      if (localStorage.getItem("username")) {
        this.isLogin = true;
        this.triggerModal(false);
      } else {
        this.isLogin = false;
        this.triggerModal(true);
      }
    },
    triggerModal(bool) {
      this.loginModal = bool;
    },
    logout() {
      localStorage.removeItem("username");
      this.checkLoginStatus();
    }
  },
  created() {
    this.checkLoginStatus();
  }
};
</script>
