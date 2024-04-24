<script setup>
import cardComponent from 'components/cardComponent.vue'

const arrayCity = [
  {
    name: 'Bergamo',
    degrees: 19,
    precipitation: 2,
  },
  {
    name: 'Brescia',
    degrees: 5,
    precipitation: 0,
  },
  {
    name: 'Cene',
    degrees: 1.4,
    precipitation: 3,
  }
]
</script>

<template>
  <div class="q-pa-md cardContainer">
    <q-list>
      <q-item v-for="index in arrayCity.length" :key="index">
        <card-component :city="arrayCity[index-1]"> </card-component>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped>
</style>
