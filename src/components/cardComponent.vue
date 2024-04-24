<script setup>
import {ref } from 'vue';

const hello = () => {
  console.log('Hello');
}
  defineProps({
    city:{}
  })

</script>

<template>
      <q-card class="my-card">
        <q-card-section class="bg-light-blue-4 text-white">
          <div class="text-h6"> {{city.name}} </div>
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ city.degrees }}°
          </div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-icon> </q-icon> <!-- inserire l'icona dipendentemente da se piove o no-->
        </q-card-actions>
      </q-card>
</template>

<style scoped>
.my-card{
  background-color: #5fa6aa;
  width: 25%;
  margin:3%;
  float: left;
  border-radius: 12px;
  height: 22vb;
}
</style>
