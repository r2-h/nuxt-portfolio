<script setup lang="ts">
import NavItems from './nav-items.vue'
</script>

<template>
  <nav
    class="hidden h-9 items-center space-x-7 rounded bg-[--alpha(var(--color-bg-main)/80%)] px-2.5 text-text-secondary md:flex dark:bg-[--alpha(var(--color-bg-main-dark)/70%)] dark:text-text-main-dark [&>a]:hover:text-text-main dark:[&>a]:hover:text-white"
  >
    <NavItems />
  </nav>
</template>
