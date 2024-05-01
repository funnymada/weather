<script setup>
import {cityStore} from "stores/cityStore";

const myCityStore = cityStore();
myCityStore.hydrateFromSessionStorage();
console.log(myCityStore.name);

</script>

<template>
   <div class="example">{{myCityStore.name}}</div>
</template>

<style scoped>
    .example{
      width: 100%;
      height: 30vh;
    }
</style>
