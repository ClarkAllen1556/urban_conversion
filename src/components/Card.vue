<script setup>
defineProps({
  title: String,
});
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
  padding: 1rem;

  background-color: white;

  height: max-content;
  width: max-content;
  max-width: 50%;
}

.card-title {
  text-align: left;
  margin-bottom: 1rem;
}

.card-content {
  display: flex;
  align-content: center;
  justify-content: center;
  column-gap: 2rem;
}

@media only screen and (max-width: 750px) {
  .card-title {
    text-align: center;
  }

  .card-content {
    flex-direction: column;
  }
}
</style>
