<script setup>
import {ref, onMounted} from 'vue';
onMounted(()=>{
  definePrecipitation( Prop.city.precipitation)
})

  const Prop = defineProps({
    city: {
      type: Object
    }
  })

const precipitation = ref('')

const definePrecipitation = (value) => {
  switch (value){
    case 0:{
      precipitation.value = 'fa-solid fa-sun'
      break
    }
    case 1:{
      precipitation.value = 'fa-solid fa-cloud'
      break
    }
    case 2:{
      precipitation.value = 'fa-solid fa-cloud-rain'
      break
    }
    case 3:{
      precipitation.value = 'fa-solid fa-snowflake'
      break
    }
  }
}
</script>

<template>
      <q-card class="my-card">
        <q-card-section class="bg-light-blue-4 text-white">
          <div class="text-h6"> {{Prop.city.name}} </div>
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ city.degrees }}°
          </div>
        </q-card-section>

        <q-card-actions vertical align="center">

          <q-icon :name="precipitation"> </q-icon> <!-- inserire l'icona dipendentemente da se piove o no-->
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
