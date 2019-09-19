<template>
  <v-container class="custom-height" fluid>
    <div class="custom-flex">
      <div class="top-board">
        <!-- <div class="empty">1</div> -->
        <div class="coor-top-container">
          <div v-for="k in 11" :key="k" class="coor-top">{{k-1}}</div>
        </div>
      </div>
      <div class="bottom-board">
        <div class="coor-left-container">
          <div v-for="j in coordinates" :key="j" class="coor-left">{{j}}</div>
        </div>
        <div class="battlefield">
          <div v-for="m in 10" :key="m" class="battlefield-row">
            <div v-for="n in 10" :key="n" class="battlefield-cell">{{n}}</div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      coordinates: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
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
.custom-height {
  background-color: white;
  height: 90vh;
}

.custom-height * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.custom-flex {
  display: flex;
  flex-direction: column;
  width: inherit;
}

.custom-flex * {
  background-color: white;
}

.top-board {
  display: flex;
  flex-grow: 1;
  width: inherit;
}

.empty {
  border: 1px solid black;
  color: white;
  flex-grow: 1;
}

.coor-top-container {
  flex-grow: 10;
  display: flex;
}

.coor-top {
  flex-grow: 1;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-board {
  display: flex;
  flex-grow: 10;
  width: inherit;
}

.coor-left-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
}

.coor-left {
  /* flex-grow: 1; */
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.battlefield {
  flex-grow: 11;
  display: flex;
  flex-direction: column;
}

.battlefield-row {
  display: flex;
  width: 100%;
}

.battlefield-cell {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
</style>