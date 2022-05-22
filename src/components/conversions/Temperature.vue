<script setup>
import { ref, watch } from 'vue';
import Input from '../Input.vue';

const tempC = ref(0)
const tempF = ref(0)

watch(tempC, (cur) => {
  const CONVERSION_MULTIPLIER = 1.8
  const DEG_OFFSET = 32

  tempF.value = cur * CONVERSION_MULTIPLIER + DEG_OFFSET
})

watch(tempF, (cur) => {
  const CONVERSION_MULTIPLIER = 1.8
  const DEG_OFFSET = 32

  tempC.value = (cur - DEG_OFFSET) / CONVERSION_MULTIPLIER
})
</script>

<template>
  <div>
    <label> Cel </label>
    <Input v-model="tempC" />
  </div>

  <div>
    <label> Feh </label>
    <Input v-model="tempF" />
  </div>
</template>

<style lang="css">
</style>