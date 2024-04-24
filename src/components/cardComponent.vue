<script setup>
import {ref} from 'vue';
const cardTitle = ref('titolone');

const hello = () => {
  console.log('Hello');
}
</script>

<template>
      <q-card class="my-card">
        <q-card-section class="bg-grey-8 text-white">
          <div class="text-h6"> {{cardTitle}} </div>
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ cardSubTitle }}
          </div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn flat @click="hello()"> azione 1 </q-btn> <!-- inserire l'icona della meteora con l'animazione -->
        </q-card-actions>
      </q-card>
</template>

<style scoped>
.my-card{
  width: 25%;
  margin:3%;
  border-radius: 12px;
  float: left;
  height: 22vb;
}
</style>
