<script setup lang="ts">
import { NAVIGATION } from '~/constants'
</script>

<template>
  <NuxtLink
    v-for="item in NAVIGATION"
    :key="item"
    class="cursor-pointer hover:text-text-main dark:hover:text-white"
  >
    {{ $t(item) }}
  </NuxtLink>
</template>
