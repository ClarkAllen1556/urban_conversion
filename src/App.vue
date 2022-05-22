<script setup>
import Card from './components/Card.vue';
import Temperature from './components/conversions/Temperature.vue';
</script>

<template>
  <div>
    <h1>Urban Conversion</h1>
    <img alt="Urban Conversion Logo" src="./assets/logo.png" />

    <Card title="Temperature">
      <Temperature />
    </Card>
  </div>
</template>

<style>
@import './assets/styles/index.css';

body {
}

#app {
  text-align: center;
  margin-top: 60px;
}
</style>
