<script setup>

</script>

<template>
  <div class="page-container">
    <div class="page-upper-container">

      <div class="current-data">
        <br>
        <br>
        <br>
      </div>

      <q-list class="hourly-container">
        <q-item v-for="hour in 25" :key="hour">
          <q-item-section>
            {{ hour-1 }}:00
          </q-item-section>
          <q-item-section>
            Field 2
          </q-item-section>
          <q-item-section>
            Field 3
          </q-item-section>
        </q-item>
      </q-list>

    </div>

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

  </div>
</template>

<style scoped>
.page-upper-container{
  display:flex;
}

.current-data{
  background-color: #ec0000;
  width: 40%;
  height: 50%;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  overflow-y:auto;
}

.weekly-container{
  position: absolute;
  display: flex;
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



.hourly-container{
  font-family: monospace;
  color: white;
  background-color: #373636;
  width: 35%;
  height: 60vh;
  overflow-y: auto!important;
}
</style>
