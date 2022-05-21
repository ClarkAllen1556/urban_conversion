<script setup>
import { ref } from 'vue';
import Input from '../Input.vue';
import Button from '../Button.vue';

const unit = ref("C")
const temp = ref(0)
const conversion = ref(null)

const convert = () => {
  const CONVERSION_MULTIPLIER = 1.8
  const DEG_OFFSET = 32

  switch (unit.value) {
    case "F": {
      conversion.value = (temp.value * CONVERSION_MULTIPLIER) + DEG_OFFSET
      break
    }
    case "C": {
      conversion.value = (temp.value - DEG_OFFSET) / CONVERSION_MULTIPLIER
      break
    }
  }
}
</script>

<template>
  <Input placeholder="Temperature to convert" v-model="temp" />

  <span>
    Convert to:
    <select v-model="unit">
      <option value="F">F</option>
      <option value="C">C</option>
    </select>
  </span>

  <Button @btn-click="convert"> Convert! </Button>

  <span v-if="conversion">
    <strong> {{ conversion }} </strong>
  </span>
</template>

<style lang="css">
</style>