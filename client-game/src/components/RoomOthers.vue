<template>
  <div>
    <v-card dark class="blue ma-6" v-for="room in this.$store.state.rooms" :key="room.id">
      <v-container fluid>
        <v-row align="center">
          <v-col cols="10" class="white black--text ma-6">
            <h3>Room : {{room.name}}</h3>
            <h4>Created By: {{room.roomOwner}}</h4>
          </v-col>
          <v-col cols="1">
            <v-btn class="mr-12 indigo" @click.prevent="joinRoom(room.id)">Enter</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  methods:{
    joinRoom(id){
      this.$store.dispatch('joinRoom', id);
    }
  }
};
</script>

<style>
</style>