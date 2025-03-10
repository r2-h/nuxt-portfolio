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
    class="group grid cursor-pointer place-items-center hover:text-text-main dark:hover:text-white"
  >
    <slot />
  </button>
</template>
