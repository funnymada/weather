<script setup>
import {cityStore} from "stores/cityStore";
import {useRoute} from "vue-router";

const myCityStore = cityStore();
const route = useRoute();

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
