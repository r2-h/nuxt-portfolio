<script setup lang="ts">
import NavItems from './nav-items.vue'
</script>

<template>
  <nav
    class="hidden h-9 items-center space-x-7 rounded bg-[--alpha(var(--color-bg-main)/80%)] px-2.5 md:flex dark:bg-[--alpha(var(--color-bg-main-dark)/70%)]"
  >
    <NavItems />
  </nav>
</template>
