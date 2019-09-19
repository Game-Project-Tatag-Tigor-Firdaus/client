<template>
  <v-container class="grid-container background" fluid>
    <div v-for="k in 11" :key="k" class="grid-row">
      <div v-for="j in playerBoard[k-1]" :key="j*Math.random()" class="grid-cell">{{j[0]}}</div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      ships: {
        aircraft: {
          length: 5,
          initial: "A"
        },
        battleship: {
          length: 4,
          initial: "B"
        },
        cruiser: {
          length: 3,
          initial: "C"
        },
        submarine: {
          length: 3,
          initial: "S"
        },
        destroyer: {
          length: 2,
          initial: "D"
        }
      },
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
        [["A"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["B"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["C"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["D"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["E"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["F"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["G"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["H"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["I"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
        [["J"], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]]
      ]
    };
  },
  methods: {
    randomGenerate() {
      for (const ship in this.ships) {
        let impossible = true;
        let x, y, direction;
        let run = 0;
        while (impossible) {
          run++;
          console.log(run);
          x = Math.floor(Math.random() * 10) + 1;
          y = Math.floor(Math.random() * 10) + 1;
          if (this.playerBoard[y][x] !== "") continue;
          direction = Math.random() > 0.5 ? "horizontal" : "vertical";
          let checkHorizontal = false;
          let checkVertical = false;
          if (direction === "horizontal") {
            checkVertical = true;
            for (
              let i = x - Math.floor(ship.length / 2);
              i < x + Math.floor(ship.length / 2);
              i++
            ) {
              if (
                this.playerBoard[y][i] === undefined ||
                this.playerBoard[y][i] !== ""
              )
                break;
              if (i === x + Math.floor(ship.length / 2)) checkHorizontal = true;
            }
          } else {
            checkHorizontal = true;
            for (
              let i = y - Math.floor(ship.length / 2);
              i < y + Math.floor(ship.length / 2);
              i++
            ) {
              if (
                this.playerBoard[i][x] === undefined ||
                this.playerBoard[i][x] !== ""
              )
                break;
              if (i === y + Math.floor(ship.length / 2)) checkVertical = true;
            }
          }
          if (checkVertical && checkHorizontal) impossible = false;
        }
        if (direction === "vertical") {
          for (
            let i = y - Math.floor(ship.length / 2);
            i < y + Math.floor(ship.length / 2);
            i++
          ) {
            this.playerBoard[i][x] = ship.initial;
          }
        } else {
          for (
            let i = x - Math.floor(ship.length / 2);
            i < x + Math.floor(ship.length / 2);
            i++
          ) {
            this.playerBoard[y][i] = ship.initial;
          }
        }
      }
    }
  },
  created() {
    this.randomGenerate();
  }
};
</script>

<style scoped>
.background {
  background-image: url("https://ak5.picdn.net/shutterstock/videos/16403095/thumb/1.jpg");
  background-repeat: repeat;
  background-size: 100vw;
}

.background * {
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 20px #000000;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . ."
    ". . . . . . . . . . .";
  /* transform: rotate(180deg); */
  max-height: 90vh;
}

.grid-cell {
  border: 2px solid white;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>