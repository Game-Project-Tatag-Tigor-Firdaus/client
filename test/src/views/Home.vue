<template>
<div class="background">
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
export default {
    data: function(){
        return {
          topPosition: 0,
          leftPosition: 0,
          direction: 'right',
          moving: null,
          foods: [
            [10,10],
            [12,70],
            [60,80],
            [60,20]
          ],
          score: 0
        }
    },
    methods: {
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
            if(this.topPosition < (this.foods[el][0] + 5) && this.topPosition > this.foods[el][0] && 
              this.leftPosition < (this.foods[el][1] + 5) && this.leftPosition > this.foods[el][1]){
              console.log('kena atas')
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
            if(this.topPosition < (this.foods[el][0] + 5) && this.topPosition > this.foods[el][0] && 
              this.leftPosition < (this.foods[el][1] + 5) && this.leftPosition > this.foods[el][1]){
              console.log('kena atas')
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
    created(){
      console.log(this.foods)
      window.addEventListener('keyup', this.handler);
   
    }
}
</script>

<style scoped>
  /* .background {
    width: 100vw;
    height: 100vh;
    position: relative;
  } */
  .box{
    position: absolute;
    width: 5vw; 
    height: 5vw; 
    object-fit: contain;
  }
</style>