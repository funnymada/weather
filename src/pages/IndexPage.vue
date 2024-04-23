<template>
  <q-page class="flex flex-center">
    <template>
      <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 300px">
          <q-input rounded standout bottom-slots v-model="text" label="Label" counter>
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="text = ''" class="cursor-pointer" />
            </template>
            <template>
              <q-icon> bar </q-icon>
            </template>

            <template v-slot:hint>
              Field hint
            </template>
          </q-input>
        </div>
      </div>
    </template>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
</script>
