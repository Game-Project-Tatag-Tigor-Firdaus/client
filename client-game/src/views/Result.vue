<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-card dark class="blue darken-2">
          <v-container fluid>
            <v-row>
              <v-col cols="12" id="roomName">
                <h1 class="text-center">PLAY RESULT</h1>
              </v-col>
              <v-col cols="12">
                <v-row justify="center px-12">
                  <v-btn x-large block class="grey darken-2 mx-12" @click.prevent="gotomenu()">Menu</v-btn>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-card class="light-blue lighten-2" light>
                  <v-row justify="center">
                    <v-col cols="12" class="px-6">
                      <v-card dark class="blue">
                        <v-row align="center" justify="center">
                          <v-col class="px-12">
                            <v-card class="indigo">
                              <h1 class="text-center">Name</h1>
                            </v-card>
                          </v-col>
                          <v-col class="px-12">
                            <v-card class="indigo">
                              <h1 class="text-center">Score</h1>
                            </v-card>
                          </v-col>
                          <v-col class="px-12">
                            <v-card class="indigo">
                              <h1 class="text-center">Time</h1>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>

                    <!-- LOOP DIBAWAH INI -->

                    <v-col cols="12" class="my-n4" v-for="player in players" :key="player.name">
                      <v-container>
                        <v-card dark class="blue">
                          <v-row align="center" justify="center">
                            <v-col class="px-12">
                              <v-card light>
                                <h1 class="text-center">{{player.name}}</h1>
                              </v-card>
                            </v-col>
                            <v-col class="px-12">
                              <v-card light>
                                <h1 class="text-center">{{player.score}}</h1>
                              </v-card>
                            </v-col>
                            <v-col class="px-12">
                              <v-card light>
                                <h1 class="text-center">{{player.times}}</h1>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-container>
                    </v-col>

                    <!-- LOOP CARD AKHIR -->
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "../../apis/firabase";
export default {
  data() {
    return {
      players: []
    };
  },
  methods: {
    gotomenu() {
      this.$router.push("/");
    }
  },
  created() {
    db.collection("roomCollection")
      .doc(this.$route.params.id)
      .update({
        status: "selesai"
      })
      .then(() => {
        Swal.close();
      })
      .catch(console.log);
    let roomid = this.$route.params.id;
    db.collection("roomCollection")
      .doc(roomid)
      .onSnapshot(doc => {
        if (doc.exists) {
          console.log(doc.data().results);
          this.players = doc.data().results;
        } else {
          this.$router.push(`/`);
        }
      });
  }
};
</script>

<style>
</style>