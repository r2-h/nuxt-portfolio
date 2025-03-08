<script setup lang="ts">
// import { defineEmits } from 'vue'

// const emit = defineEmits<{
//   (event: MouseEvent): void
// }>()

// const handleClick = (event: MouseEvent) => {
//   emit(event)
// }
</script>

<template>
  <button
    class="group grid size-9 cursor-pointer place-items-center rounded bg-[--alpha(var(--color-bg-main)/80%)] text-text-secondary hover:bg-button-bg hover:text-text-main dark:bg-[--alpha(var(--color-bg-main-dark)/70%)] dark:text-text-main-dark dark:hover:bg-button-bg-dark dark:hover:text-white"
  >
    <slot />
  </button>
</template>
