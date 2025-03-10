<script setup lang="ts">
import { NAVIGATION } from '~/constants'

const emit = defineEmits(['click'])
</script>

<template>
  <NuxtLink
    v-for="item in NAVIGATION"
    :key="item"
    :href="`#${item}`"
    class="cursor-pointer hover:text-text-main dark:hover:text-white"
    @click="emit('click')"
  >
    {{ $t(item) }}
  </NuxtLink>
</template>
