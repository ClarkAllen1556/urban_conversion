<script setup>
import { ref } from 'vue';
import Input from '../Input.vue';

const CONVERSION_MULTIPLIER = 1.8;
const DEG_OFFSET = 32;

const tempC = ref(null);
const tempF = ref(null);

// const tempCValue = computed(() => {
//   return (tempFInput.value - DEG_OFFSET) / CONVERSION_MULTIPLIER
// })
// const tempFValue = computed(() => {
//   return (tempCInput.value * CONVERSION_MULTIPLIER) + DEG_OFFSET
// })

// watch(tempC, (cur) => {
//   console.log("tempC", cur)
//   tempF.value = cur * CONVERSION_MULTIPLIER + DEG_OFFSET
// })

// watch(tempF, (cur) => {
//   console.log("tempF", cur)
//   tempC.value = (cur - DEG_OFFSET) / CONVERSION_MULTIPLIER
// })

const convertToCelsius = (inputF) => {
  tempC.value = ((inputF - DEG_OFFSET) / CONVERSION_MULTIPLIER).toFixed(2);
};

const convertToFahrenheit = (inputC) => {
  tempF.value = (inputC * CONVERSION_MULTIPLIER + DEG_OFFSET).toFixed(2);
};
</script>

<template>
  <div class="unit-input">
    <label> Celsius </label>
    <Input :value="tempC" @update="convertToFahrenheit" />
  </div>

  <div class="unit-input">
    <label> Fahrenheit </label>
    <Input :value="tempF" @update="convertToCelsius" />
  </div>
</template>

<style lang="css">
.unit-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
