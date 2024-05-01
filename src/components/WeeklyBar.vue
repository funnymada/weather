<script setup>

</script>

<template>
  <div class="weekly-container">
    <div class="daily-container">
        <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        LUN
      </div>
    </div>
  </div>
</template>

<style scoped>
  .weekly-container{
    margin-top: 10vh;
    margin-left: 10vw;
    width: 40vw;
    height: 10vh;
    min-width: 300px;
    min-height: 50px;
    background-color: #373636;
    border-radius: 20px;
  }
  .daily-container{
    margin:2px;
    width: 12%;
    height: 100%;
  }
  .daily-icon{
    width: 100%;
    height: 60%;
    font-size:40px ;
  }
  .daily-title{
    font-family: monospace;

    text-align: center;
    font-size: 20px;
    color: #fff;
  }
</style>
