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
    <div v-if="theme === 'LIGHT'" title="Switch to dark theme">
      <img
        src="../assets/moon_icon.svg"
        alt="Dark theme icon"
        width="30"
        height="30"
      />
    </div>
    <div v-else title="Switch to light theme">
      <img
        src="../assets/sun_icon.svg"
        alt="Light theme icon"
        width="30"
        height="30"
      />
    </div>
  </button>
</template>
