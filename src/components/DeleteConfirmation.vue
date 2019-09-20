<template>
  <v-row justify="center">
    <v-dialog v-model="payload.isDelete" persistent max-width="400">
      <v-card>
        <v-card-title class="headline justify-center">Are you sure?</v-card-title>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="indigo lighten-2" dark @click="closeModal">Cancel</v-btn>
          <v-btn color="red darken-4" dark @click="deleteRoom(payload.id)">Delete</v-btn>
          <div class="flex-grow-1"></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["payload"],
  methods: {
    deleteRoom(id) {
      this.$emit("deleteRoom", id);
    },
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>