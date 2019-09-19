<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col align-self="stretch" cols="12" v-for="k in 11" :key="k" class="yellow">
        <v-row align="stretch">
          <v-col
            v-for="n in 11"
            :key="n"
            class="fill-white custom-outline"
          >{{`${coordinates[n-1]}${n-1}`}}</v-col>
        </v-row>
      </v-col>
      <!-- <v-col cols="1" class="red">2</v-col>
      <v-col cols="11" class="blue">3</v-col>-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      coordinates: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      playerBoard: [
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []]
      ]
    };
  }
};
</script>

<style scoped>
.check {
  border: 1px dashed black;
}

.custom-fill {
  width: 100% !important;
  height: 100% !important;
}

.fill-white {
  background-color: white;
}

.custom-outline {
  border: 1px solid black;
}
</style>