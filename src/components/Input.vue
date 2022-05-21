<script setup>
defineProps([
  'modelValue',
  'placeHolder'
])
</script>

<template>
  <input :value="modelValue" @input="e => $emit('update:modelValue', e.target.value)" />
</template>