<script setup lang="ts">
import { NAVIGATION } from '~/constants'
</script>

<template>
  <NuxtLink
    v-for="item in NAVIGATION"
    :key="item"
    class="cursor-pointer text-text-secondary uppercase hover:text-text-main dark:text-text-main-dark dark:hover:text-white"
  >
    {{ $t(item) }}
  </NuxtLink>
</template>
