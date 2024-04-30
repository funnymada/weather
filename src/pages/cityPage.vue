<script setup>
import {cityStore} from "stores/cityStore";
import {ref    } from 'vue';

const myCityStore = cityStore();

</script>

<template>
   <div class="example">{{myCityStore.name}}</div>
</template>

<style scoped>
    .example{
      width: 100%;
      height: 30vh;
      background-color: #980c0c;
    }
</style>
