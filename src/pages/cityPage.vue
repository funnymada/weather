<script setup>
import {ref, onMounted} from 'vue';
import {useRouter, createRouter, createWebHistory} from "vue-router";

const myCity = ref({})
const router = useRouter()

onMounted(()=>{
  myCity.value = this.router.query.city
  console.log("rotta si sta aggiungendo")
  const mainRouter = createRouter({
    history: createWebHistory(),
    routes: [
      router.addRoute({
        path: `/${myCity.value.name}`,
        component: () => import('src/layouts/loggedLayout.vue'),
        children: [
          { path: '', component: () => import('pages/cityPage.vue') }
        ]
      })
    ]
  });
  console.log("rotta si è aggiunta")
})

</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
