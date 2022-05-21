<script setup>
</script>

<template>
  <button @click="$emit('btn-click')">
    <slot />
  </button>
</template>