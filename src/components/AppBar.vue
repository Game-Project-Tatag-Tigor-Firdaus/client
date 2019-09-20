<template>
  <v-app-bar color="grey accent-4" dark>
    <v-toolbar-title>Kena Gak Kena</v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-btn @click="logout">
      <v-icon>mdi-logout</v-icon>Logout
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$emit("logoutSignal");
    }
  }
};
</script>

<style>
</style>