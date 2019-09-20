<template>
  <v-card dark class="teal darken-2 ma-6">
    <v-container fluid>
      <v-row align="center">
        <v-col cols="9" class="white black--text ma-6">
          <h3>Room</h3>
        </v-col>
        <v-col cols="1">
          <v-btn class="mr-12 light-green lighten-1">Enter</v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="mr-12 red darken-2" @click="triggerDeleteConfirm">Delete</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <deleteConfirm
      :payload="{id, isDelete}"
      @deleteRoom="confirmDelete"
      @close="closeDeleteConfirm"
    />
  </v-card>
</template>

<script>
import deleteConfirm from "./DeleteConfirmation";

export default {
  components: {
    deleteConfirm
  },
  data: function() {
    return {
      isDelete: false,
      id: ""
    };
  },
  methods: {
    triggerDeleteConfirm() {
      this.isDelete = true;
    },
    confirmDelete(id) {
      this.$emit("confirmDelete", id);
      this.isDelete = false;
    },
    closeDeleteConfirm() {
      this.isDelete = false;
    }
  }
  // created: {}
};
</script>

<style>
</style>