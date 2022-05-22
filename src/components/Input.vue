<script setup>
defineProps({
  placeHolder: {
    type: String,
  },
  value: {
    type: Number,
  },
  type: {
    type: String,
    default: "number"
  }
})
</script>

<template>
  <input :type="type" :placeholder="placeHolder" :value="value" @input="e => $emit('update', e.target.value)" />
</template>