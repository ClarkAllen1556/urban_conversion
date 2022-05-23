<script setup>
import { ref } from 'vue';
import Input from '../Input.vue';

const CONVERSION_MULTIPLIER = 1.8;
const DEG_OFFSET = 32;

const tempC = ref(null);
const tempF = ref(null);

const convertToCelsius = (inputF) => {
  tempF.value = inputF;

  if (!inputF) {
    tempC.value = null;
  } else {
    tempC.value = ((inputF - DEG_OFFSET) / CONVERSION_MULTIPLIER).toFixed(2);
  }
};

const convertToFahrenheit = (inputC) => {
  tempC.value = inputC;

  if (!inputC) {
    tempF.value = null;
  } else {
    tempF.value = (inputC * CONVERSION_MULTIPLIER + DEG_OFFSET).toFixed(2);
  }
};
</script>

<template>
  <div :class="['flex', 'flex-col', 'items-start']">
    <label> Celsius </label>
    <Input :value="tempC" @update="convertToFahrenheit" />
  </div>

  <div :class="['flex', 'flex-col', 'items-start']">
    <label> Fahrenheit </label>
    <Input :value="tempF" @update="convertToCelsius" />
  </div>
</template>

<style lang="css"></style>
