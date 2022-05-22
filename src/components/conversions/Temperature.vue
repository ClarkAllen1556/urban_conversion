<script setup>
import { ref } from 'vue';
import Input from '../Input.vue';

const CONVERSION_MULTIPLIER = 1.8;
const DEG_OFFSET = 32;

const tempC = ref(null);
const tempF = ref(null);

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

@media screen and (max-width: 600px) {
  .unit-input {
    margin-top: 1rem;
  }
}
</style>
