<template>
  <v-row justify="center">
    <v-dialog v-model="loginModal" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Please put your name</v-card-title>
        <v-card-text>
          <v-text-field autofocus label="Username" v-model="username"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" dark @click="saveToLocalStorage">Go</v-btn>
          <div class="flex-grow-1"></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["loginModal"],
  data() {
    return {
      username: ""
    };
  },
  methods: {
    saveToLocalStorage() {
      this.$emit("statusLogin", true, this.username);
    }
  }
};
</script>

<style>
</style>