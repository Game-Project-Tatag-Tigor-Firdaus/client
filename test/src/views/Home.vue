<template>
<div class="background">
    <audio autoplay id="ost" loop hidden>
      <source src="../assets/Pacman-sound.mp3" type="audio/mp3">
      your audio doesnt work
    </audio>
    <!-- <iframe src="../assets/Pacman-sound.mp3" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe>  -->
    <div class="box" :style="{top: topPosition + 'vh', left: leftPosition + 'vw'}">
      <img v-if="direction === 'right'" class="box" src="../assets/right.png" alt="">
      <img v-else-if="direction === 'left'" class="box" src="../assets/left.png" alt="">
      <img v-else-if="direction === 'up'" class="box" src="../assets/up.png" alt="">
      <img v-else-if="direction === 'down'" class="box" src="../assets/down.png" alt="">
    </div>
    <h1 style="position: fixed; bottom: 1vh; left: 1vw;">Score : {{score}}</h1>
    <img class="box" :style="{top: food[0] + 'vh', left: food[1] + 'vw'}" v-for="(food, index) in foods" :key="index" src="../assets/obeng.png" alt="">
</div>
</template>

<script>
import {Howl, Howler} from 'howler';
export default {
    data: function(){
        return {
          topPosition: 0,
          leftPosition: 0,
          direction: 'right',
          moving: null,
          foods: [],
          score: 0,
          

        }
    },
    methods: {
      turnOnSound(){

      },
      handler(e){
        clearInterval(this.moving)
        this.moving = setInterval(() => {
          if(e.code === "ArrowUp"){
           
              this.direction = 'up'
              this.topPosition-= 0.2
            
          }
          if(e.code === "ArrowLeft"){
          
              this.direction = 'left'
              this.leftPosition -= 0.1
            
          }
          if(e.code === "ArrowRight"){
           
              this.direction = 'right'
              this.leftPosition += 0.1
            
          }
          if(e.code === "ArrowDown"){
              this.direction = 'down'
              this.topPosition += 0.2
          }

        },2)
      }
    },
    watch: {
      
      leftPosition(){
          for(let el in this.foods){ 
            if(this.topPosition < (this.foods[el][0] + 7) && this.topPosition > (this.foods[el][0] - 2 )&& 
              this.leftPosition < (this.foods[el][1] + 7) && this.leftPosition > (this.foods[el][1] -2)){
              var audio = new Audio(require("../assets/pacman_chomp.wav"));
              audio.play();
              this.score++
              this.foods.splice(el,1)
              if(this.foods.length=== 0)clearInterval(this.moving)
            }
          }
        if((this.leftPosition + 5) < 0){
          this.leftPosition = 100
        }
        if(this.leftPosition > 100){
          this.leftPosition = -5
        }
      },
      topPosition(){

          for(let el in this.foods){ 
            if(this.topPosition < (this.foods[el][0] + 7) && this.topPosition > (this.foods[el][0] - 2)&& 
              this.leftPosition < (this.foods[el][1] + 7) && this.leftPosition > (this.foods[el][1] - 2)){
              var audio = new Audio(require("../assets/pacman_chomp.wav"));
              audio.play();
              this.score++
              this.foods.splice(el,1)
              if(this.foods.length=== 0)clearInterval(this.moving)
            }
          }
        if((this.topPosition + 5) < 0){
          this.topPosition = 100
        }
        if(this.topPosition > 100){
          this.topPosition = -5
        }
      }
    },
    mounted(){
      document.getElementById("ost").volume = 0.5
    },
    created(){

      var x = document.createElement("AUDIO")
      x.setAttribute("src","../assets/Pacman-sound.mp3")
      x.loo
      let totalFoods = Math.ceil(Math.random()*5)+4
      for(let i = 0; i < totalFoods; i++){
        this.foods.push([Math.ceil(Math.random()*90), Math.ceil(Math.random()*90)])
      }
      window.addEventListener('keyup', this.handler);
    }
}
</script>

<style scoped>

  .box{
    position: absolute;
    width: 5vw; 
    height: 5vw; 
    object-fit: contain;
  }
</style>