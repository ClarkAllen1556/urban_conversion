<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';
import Temperature from './components/conversions/Temperature.vue';
import ThemeButton from './components/ThemeButton.vue';

const theme = ref(localStorage.getItem('theme'));

const toggleTheme = () => {
  if (!theme.value || theme.value === 'light') {
    theme.value = 'dark';
    document.documentElement.classList.add('dark');
  } else {
    theme.value = 'light';
    document.documentElement.classList.remove('dark');
  }

  localStorage.setItem('theme', theme.value);
};
</script>

<template>
  <div class="flex items-center m-2 mb-0">
    <h1 class="text-3xl">
      <span class="text-card-title-red dark:text-sol-yellow-1"
        >Urban Conversion
      </span>
      <span className="font-semibold">~$</span>
    </h1>

    <div class="ml-auto">
      <ThemeButton :theme="theme" @toggle-theme="toggleTheme" />
    </div>
  </div>

  <div :class="['grid', 'justify-items-center']">
    <img
      alt="Urban Conversion Logo"
      width="100"
      height="100"
      src="./assets/logo.png"
    />
    <Card title="Temperature">
      <Temperature />
    </Card>
  </div>
</template>

<style lang="css"></style>
