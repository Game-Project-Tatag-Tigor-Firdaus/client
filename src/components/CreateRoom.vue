<template>
  <v-row justify="center">
    <v-dialog v-model="createModal" persistent max-width="400">
      <v-card>
        <v-card-title class="headline">Create Room</v-card-title>
        <v-card-text>
          <v-text-field autofocus label="Your Room Name" v-model="roomName"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="red" dark @click="closeModal">Cancel</v-btn>
          <v-btn color="green" dark @click="createRoom">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["createModal"],
  data() {
    return {
      username: "",
      roomName: ""
    };
  },
  methods: {
    createRoom() {
      this.$emit("createRoom", this.roomName);
      this.roomName = "";
    },
    closeModal() {
      this.$emit("close");
      this.roomName = "";
    }
  }
};
</script>

<style>
</style>