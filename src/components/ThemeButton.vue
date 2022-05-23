<script setup>
defineProps({
  theme: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button @click="() => $emit('toggle-theme')">
    <div v-if="theme === 'light'">
      <img src="../assets/moon_icon.svg" width="30" height="30" />
    </div>
    <div v-else>
      <img src="../assets/sun_icon.svg" width="30" height="30" />
    </div>
  </button>
</template>
