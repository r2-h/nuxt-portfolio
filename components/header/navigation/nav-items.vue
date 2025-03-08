<script setup lang="ts">
import { NAVIGATION } from '~/constants'
</script>

<template>
  <NuxtLink
    v-for="item in NAVIGATION"
    :key="item"
    class="text-text-secondary cursor-context-menu uppercase hover:text-text-main dark:text-text-main-dark dark:hover:text-white"
  >
    {{ $t(item) }}
  </NuxtLink>
</template>
