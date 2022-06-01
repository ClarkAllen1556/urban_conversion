<script setup>
import { onMounted, ref } from 'vue';
import Card from './components/Card.vue';
import ThemeButton from './components/ThemeButton.vue';
import Temperature from './components/conversions/Temperature.vue';

import { toggleDarkTheme, osPrefersDarkTheme } from './utils/theme';

const theme = ref(localStorage?.theme);

onMounted(() => {
  if (localStorage.UL_THEME === 'DARK' || osPrefersDarkTheme()) {
    toggleDarkTheme(true);
    theme.value = 'DARK';
  } else {
    toggleDarkTheme(false);
    theme.value = 'LIGHT';
  }
});

const toggleTheme = () => {
  if (theme.value === 'DARK') {
    toggleDarkTheme(false);
    theme.value = 'LIGHT';
  } else {
    toggleDarkTheme(true);
    theme.value = 'DARK';
  }

  localStorage.setItem('UL_THEME', theme.value);
};
</script>

<template>
  <div class="flex items-center m-2 mb-0">
    <h1 class="text-3xl">
      <span class="text-card-title-red dark:text-sol-yellow-1">
        UrbanConversion
      </span>

      <span class="font-semibold">~$</span>
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
