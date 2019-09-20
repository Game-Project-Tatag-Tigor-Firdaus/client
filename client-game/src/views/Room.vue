<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-card dark class="orange darken-4">
          <v-container fluid>
            <v-row>
              <v-col>
                <v-col id="roomName">
                  <h1>{{room.name}}</h1>
                </v-col>
                <v-col>
                  <h6>{{room.id}}</h6>
                </v-col>
                <v-col cols="12">
                  <v-card class="yellow lighten-2" light>
                    <v-card-title>
                      <h3>Player Lists</h3>
                    </v-card-title>
                    <v-row justify="center">
                      <!-- LOOP DISINI -->

                      <v-col cols="3" v-for="player in players" :key="player.name">
                        <v-container>
                          <v-card min-height="100" class="align-center">
                            <v-card-title>{{player.name}}</v-card-title>
                          </v-card>
                        </v-container>
                      </v-col>

                      <!-- LOOP CARD AKHIR -->
                    </v-row>
                  </v-card>
                </v-col>
              </v-col>
            </v-row>
          </v-container>

          <v-container>
            <v-row align="center" justify="space-around">
              <v-btn
                x-large
                class="grey accent-4"
                v-if="roomMaster"
                @click.prevent="deleteRoom(room.id)"
              >Destroy Room</v-btn>
              <v-btn x-large class="grey accent-4" v-if="!roomMaster">cancel</v-btn>
              <v-btn
                x-large
                class="green accent-4"
                v-if="roomMaster"
                @click.prevent="startGame(room.id)"
              >Play</v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "../../apis/firabase";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      room: "",
      players: [],
      roomMaster: false
    };
  },
  methods: {
    deleteRoom(id) {
      Swal.fire({
        title: "Destroy room..."
      });
      Swal.showLoading();
      db.collection("roomCollection")
        .doc(id)
        .delete()
        .then(function() {
          Swal.close();
          this.$router.push(`/`);
          Swal.fire(`Success`, `Join room success`, "success");
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    startGame(id) {
      console.log(id);
      this.$store.dispatch('startGame', id);
    }
  },
  created() {
    let roomid = this.$route.params.id;
    db.collection("roomCollection")
      .doc(roomid)
      .onSnapshot(doc => {
        if (doc.exists) {
          this.room = { id: doc.id, ...doc.data() };
          this.players = this.room.players;
          if (this.room.roomOwner === localStorage.getItem("username")) {
            this.roomMaster = true;
          }
          if (this.room.status === 'mulai') {
            this.$router.push(`/game/${this.room.id}`);
          }else if(this.room.status === 'selesai'){
            this.$router.push(`/result/${this.room.id}`);
          }
        } else {
          this.$router.push(`/`);
        }
      });
  }
};
</script>

<style scoped>
</style>