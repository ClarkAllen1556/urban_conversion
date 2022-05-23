<script setup>
import Card from './components/Card.vue';
import Temperature from './components/conversions/Temperature.vue';
</script>

<template>
  <div :class="['grid', 'justify-items-center']">
    <div><h1 :class="['text-3xl']">Urban Conversion</h1></div>
    <div>
      <img
        alt="Urban Conversion Logo"
        width="200"
        height="200"
        src="./assets/logo.png"
      />
    </div>

    <Card title="Temperature">
      <Temperature />
    </Card>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
