<script setup>
import {cityStore} from "stores/cityStore";
import {ref, onMounted, createApp} from 'vue';
import {createPinia} from "pinia";
import App from "../App.vue";

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const myCityStore = cityStore();

onMounted(()=>{
  console.log(myCityStore.name + " degrees:" + myCityStore.degrees + " precipitation:" + myCityStore.precipitation);
})

</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
