<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-card dark class="orange darken-4">
          <v-container fluid>
            <v-row>
              <v-col>
                <v-col id="roomName">
                  <h1>Room Name</h1>
                </v-col>
                <v-col>
                  <h6>Room Id</h6>
                </v-col>
                <v-col cols="12">
                  <v-card class="yellow lighten-2" light>
                    <v-card-title>
                      <h3>Player Lists</h3>
                    </v-card-title>
                    <v-row justify="center">
                      <!-- LOOP DISINI -->

                      <v-col cols="3">
                        <v-container>
                          <v-card min-height="100" class="align-center">
                            <v-card-title>User name</v-card-title>
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
              <v-btn x-large class="grey accent-4">cancel</v-btn>
              <v-btn x-large class="green accent-4">Play</v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>