<template>
<div class="background">
    <div class="box" :style="{top: topPosition + 'vh', left: leftPosition + 'vw'}">
      <img v-if="direction === 'right'" class="box" src="../assets/right.png" alt="">
      <img v-else-if="direction === 'left'" class="box" src="../assets/left.png" alt="">
      <img v-else-if="direction === 'up'" class="box" src="../assets/up.png" alt="">
      <img v-else-if="direction === 'down'" class="box" src="../assets/down.png" alt="">
      
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return {
          topPosition: 0,
          leftPosition: 0,
          direction: 'right',
          moving: null
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
        }, 2)
      }
    },
    watch: {
      leftPosition(){
        if((this.leftPosition + 5) < 0){
          this.leftPosition = 100
        }
        if(this.leftPosition > 100){
          this.leftPosition = -5
        }
      },
      topPosition(){
        if((this.topPosition + 5) < 0){
          this.topPosition = 100
        }
        if(this.topPosition > 100){
          this.topPosition = -5
        }
      }
    },
    created(){
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