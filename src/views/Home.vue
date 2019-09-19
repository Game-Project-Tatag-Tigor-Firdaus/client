<template>
  <div>
    <v-navigation-drawer v-model="drawerRight" app clipped right>
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Battleship</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-title>History</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary></v-navigation-drawer>

    <!-- ISI DISINI BUAT DITENGAH -->

    <v-content>
      <!-- <playerBoard></playerBoard> -->

      <!-- <v-container class="fill-height" fluid>

      </v-container>-->
    </v-content>

    <!-- Opponent Board Hidden Behind V-Navigation-Drawer -->

    <v-navigation-drawer v-model="right" fixed right temporary></v-navigation-drawer>

    <login :loginModal="loginModal" @statusLogin="changeLoginStatus" />
  </div>
</template>

<script>
import playerBoard from "../components/PlayerBoard";
import login from "../components/Login";

export default {
  components: {
    playerBoard,
    login
  },
  props: {
    source: String
  },
  data: () => ({
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
    }
  },
  created() {
    this.checkLoginStatus();
  }
};
</script>
