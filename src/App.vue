<script setup>
import { onMounted, ref } from 'vue';
import Card from './components/Card.vue';
import Temperature from './components/conversions/Temperature.vue';
import ThemeButton from './components/ThemeButton.vue';

import { enableDarkTheme, osPrefersDarkTheme } from './utils/theme';

const theme = ref(localStorage?.theme);

onMounted(() => {
  if (localStorage.theme === 'DARK' || osPrefersDarkTheme()) {
    enableDarkTheme(true);
    theme.value = 'DARK';
  } else {
    enableDarkTheme(false);
    theme.value = 'LIGHT';
  }
});

const toggleTheme = () => {
  if (theme.value === 'DARK') {
    enableDarkTheme(false);
    theme.value = 'LIGHT';
  } else {
    enableDarkTheme(true);
    theme.value = 'DARK';
  }

  localStorage.setItem('theme', theme.value);
};
</script>

<template>
  <div class="flex items-center m-2 mb-0">
    <h1 class="text-3xl">
      <span class="text-card-title-red dark:text-sol-yellow-1"
        >UrbanConversion
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
