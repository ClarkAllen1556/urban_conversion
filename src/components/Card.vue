<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div
    :class="[
      'p-4',
      'bg-white',
      'border-2',
      'rounded-md',
      'shadow-md',
      'h-max',
      'w-max',
      'mt-8',
      'mb-8',
      'shadow-sol-black-2',
      'dark:bg-sol-black-1',
      'border-sol-blue-1',
      'dark:border-sol-blue-1',
      'dark:text-sol-grey-1',
    ]"
  >
    <div v-if="title" :class="['text-left', 'mb-4', 'md:text-center']">
      <strong>
        {{ title }}
      </strong>
    </div>

    <div
      :class="[
        'flex',
        'content-center',
        'justify-center',
        'gap-8',
        'flex-col',
        'md:flex-row',
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="css"></style>
