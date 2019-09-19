<template>
  <v-container class="grid-container" fluid>
    <div v-for="k in 11" :key="k" class="grid-row">
      <div v-for="j in playerBoard[k-1]" :key="j" class="grid-cell">{{j[0]}}</div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      coordinates: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      playerBoard: [
        [
          [""],
          ["1"],
          ["2"],
          ["3"],
          ["4"],
          ["5"],
          ["6"],
          ["7"],
          ["8"],
          ["9"],
          ["10"]
        ],
        [["A"], [], [], [], [], [], [], [], [], [], []],
        [["B"], [], ["B2"], [], [], [], [], [], [], [], []],
        [["C"], [], ["D"], [], [], [], [], [], [], [], []],
        [["D"], [], ["D"], [], [], [], [], [], [], [], []],
        [["E"], [], ["D"], [], [], [], [], [], [], [], []],
        [["F"], [], [], [], [], [], [], [], [], [], []],
        [["G"], [], [], [], [], [], [], [], [], [], []],
        [["H"], [], [], [], [], [], [], [], [], [], []],
        [["I"], [], [], [], [], [], [], [], [], [], []],
        [["J"], [], [], [], [], [], [], [], [], [], []]
      ]
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . ." ". . . . . . . . . . .";
  /* transform: rotate(180deg); */
}

.grid-cell {
  border: 1px solid black;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>