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
    <div class="daily-container">
      <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        MAR
      </div>
    </div>
    <div class="daily-container">
      <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        MER
      </div>
    </div>
    <div class="daily-container">
      <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        GIO
      </div>
    </div>
    <div class="daily-container">
      <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        VEN
      </div>
    </div>
    <div class="daily-container">
      <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        SAB
      </div>
    </div>
    <div class="daily-container">
      <q-icon name="fa-solid fa-sun" class="daily-icon"></q-icon>
      <div class="daily-title">
        DOM
      </div>
    </div>
  </div>


</template>

<style scoped>
  .weekly-container{
    display: flex;
    margin-top: 10vh;
    margin-left: 10vw;
    width: 40vw;
    height: 10vh;
    min-width: 350px;
    min-height: 100px;
    background-color: #373636;
    border-radius: 20px;
  }
  .daily-container{
    margin:5px;
    width: 12%;
    height: 90%;
    border-radius: 25px;
  }
  .daily-container:hover{
    background-color: rgba(255, 255, 255, 0.51);
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
