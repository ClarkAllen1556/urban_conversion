<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-title">
      <strong>
        {{ title }}
      </strong>
    </div>

    <slot />
  </div>
</template>

<style lang="css">
.card {
  border: 2px solid blue;
  border-radius: 5px;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  background-color: white;
  min-height: 5rem;
}

.card-title {
  text-align: left;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>