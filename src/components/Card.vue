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

    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.card {
  border: 2px solid #268bd2;
  border-radius: 5px;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  min-height: 5rem;
  max-width: 50%;
}

.card-title {
  text-align: left;
  margin-left: 1rem;
  margin-top: 1rem;
}

.card-content {
  display: flex;
  align-content: center;
  justify-content: center;
  column-gap: 2rem;
}
</style>