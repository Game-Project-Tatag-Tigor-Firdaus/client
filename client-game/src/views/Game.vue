<template>
  <div class="background">
    <audio autoplay id="ost" loop hidden>
      <source src="../assets/Pacman-sound.mp3" type="audio/mp3" />your audio doesnt work
    </audio>
    <!-- <iframe src="../assets/Pacman-sound.mp3" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe>-->
    <div class="box" :style="{top: topPosition + 'vh', left: leftPosition + 'vw'}">
      <img v-if="direction === 'right'" class="box" src="../assets/right.png" alt />
      <img v-else-if="direction === 'left'" class="box" src="../assets/left.png" alt />
      <img v-else-if="direction === 'up'" class="box" src="../assets/up.png" alt />
      <img v-else-if="direction === 'down'" class="box" src="../assets/down.png" alt />
    </div>
    <p>{{timer}} S Left</p>
    <h1 style="position: fixed; bottom: 1vh; left: 1vw;">Score : {{score}}</h1>
    <img
      class="box"
      :style="{top: food[0] + 'vh', left: food[1] + 'vw'}"
      v-for="(food, index) in foods"
      :key="index"
      src="../assets/obeng.png"
      alt
    />
  </div>
</template>

<script>
import db from "../../apis/firabase";
import Swal from "sweetalert2";
export default {
  data: function() {
    return {
      topPosition: 0,
      leftPosition: 0,
      direction: "right",
      moving: null,
      foods: [],
      score: 0,
      timer: 10,
      countdown: null,
      speedY: 0.4,
      speedX: 0.3
    };
  },
  methods: {
    handler(e) {
      console.log(`gerakkkkkkkkkkkkk`);
      clearInterval(this.moving);
      if (this.timer >= 1 && this.foods.length !== 0) {
        this.moving = setInterval(() => {
          if (e.code === "ArrowUp") {
            this.direction = "up";
            this.topPosition -= this.speedY;
          }
          if (e.code === "ArrowLeft") {
            this.direction = "left";
            this.leftPosition -= this.speedX;
          }
          if (e.code === "ArrowRight") {
            this.direction = "right";
            this.leftPosition += this.speedX;
          }
          if (e.code === "ArrowDown") {
            this.direction = "down";
            this.topPosition += this.speedY;
          }
        }, 2);
      }
    }
  },
  watch: {
    foods() {
      if (this.foods.length === 0) {
        let data = {
          id: this.$route.params.id,
          name: localStorage.getItem("username"),
          score: this.score,
          times: 10 - this.timer
        };
        // this.$router.push(`/result/${this.$route.params.id}`);
        this.$store.dispatch("pushResult", data);
        Swal.fire("Success", `Congratulation you kena semua`, `success`);
      }
    },
    timer() {
      if (this.timer === 5) {
        this.speedY *= 2;
        this.speedX *= 2;
      }
      if (this.timer === 0) {
        let data = {
          id: this.$route.params.id,
          name: localStorage.getItem("username"),
          score: this.score,
          times: 10 - this.timer
        };
        this.$store.dispatch("pushResult", data)
        // this.$router.push(`/result/${this.$route.params.id}`);
        Swal.fire("Success", `Sorry times up :(`, `success`);
      }
    },
    leftPosition() {
      for (let el in this.foods) {
        if (
          this.topPosition < this.foods[el][0] + 7 &&
          this.topPosition > this.foods[el][0] - 5 &&
          this.leftPosition < this.foods[el][1] + 7 &&
          this.leftPosition > this.foods[el][1] - 5
        ) {
          var audio = new Audio(require("../assets/pacman_chomp.wav"));
          audio.play();
          this.score++;
          this.foods.splice(el, 1);
          if (this.foods.length === 0) {
            clearInterval(this.countdown);
            clearInterval(this.moving);
          }
        }
      }
      if (this.leftPosition + 5 < 0) {
        this.leftPosition = 100;
      }
      if (this.leftPosition > 100) {
        this.leftPosition = -5;
      }
    },
    topPosition() {
      for (let el in this.foods) {
        if (
          this.topPosition < this.foods[el][0] + 7 &&
          this.topPosition > this.foods[el][0] - 5 &&
          this.leftPosition < this.foods[el][1] + 7 &&
          this.leftPosition > this.foods[el][1] - 5
        ) {
          var audio = new Audio(require("../assets/pacman_chomp.wav"));
          audio.play();
          this.score++;
          this.foods.splice(el, 1);
          if (this.foods.length === 0) {
            clearInterval(this.countdown);
            clearInterval(this.moving);
          }
        }
      }
      if (this.topPosition + 5 < 0) {
        this.topPosition = 100;
      }
      if (this.topPosition > 100) {
        this.topPosition = -5;
      }
    }
  },
  mounted() {
    document.getElementById("ost").volume = 0.5;
    this.countdown = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(this.countdown);
        clearInterval(this.moving);
      }
    }, 1000);
  },
  created() {
    let roomid = this.$route.params.id;
    db.collection("roomCollection")
      .doc(roomid)
      .get()
      .then(doc => {
        if (doc.exists) {
          doc.data().foods.forEach(food => {
            this.foods.push([food.y, food.x]);
          });
        } else {
          this.$router.push(`/`);
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    // -----------------
    // db.collection("roomCollection")
    //   .doc(roomid)
    //   .onSnapshot(doc => {
    //     if (doc.exists) {
    //       console.log(this.foods);
    //     } else {
    //     }
    //   });
    window.addEventListener("keyup", this.handler);
  }
};
</script>

<style scoped>
p {
  font-size: 5rem;
  position: fixed;
  opacity: 0.4;
  top: 35vh;
  left: 40vw;
}
.box {
  position: absolute;
  width: 5vw;
  height: 5vw;
  object-fit: contain;
}
</style>