<script setup>
import {watch} from "vue";
import { useRoute } from 'vue-router'
const route = useRoute()

watch(() => route.query.val, (newValue, oldValue) => {
  console.log("newValue"+newValue)
  console.log("oldValue"+oldValue)
})
</script>

<template>
 <div>dsdsgsdfgsdfsdf</div>
</template>

<style scoped>

</style>
