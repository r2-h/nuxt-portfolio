<script setup lang="ts">
import { NuxtLink } from '#components'
import Envelope from '../../components/icons/evelope.vue'
import Codewars from '../icons/codewars.vue'
import Github from '../icons/github.vue'
import Telegram from '../icons/telegram.vue'
</script>

<template>
  <footer
    class="mt-12 mb-6 space-y-3 fill-text-tertiary text-center text-sm dark:fill-text-main-dark"
  >
    <div
      class="mx-auto flex w-fit space-x-3 *:cursor-auto *:hover:fill-text-main *:dark:hover:fill-white"
    >
      <NuxtLink href="https://github.com/r2-h" target="_blank">
        <Github class="icon" />
      </NuxtLink>
      <NuxtLink
        href="https://www.codewars.com/users/r2codewars"
        target="_blank"
      >
        <Codewars class="icon" />
      </NuxtLink>
      <NuxtLink href="mailto:artharexian@yandex.com">
        <Envelope class="size-5.5" />
      </NuxtLink>
      <NuxtLink href="https://t.me/harexian" target="_blank">
        <Telegram class="icon" />
      </NuxtLink>
    </div>
    <p class="text-text-secondary dark:text-text-main-dark">
      © {{ new Date().getFullYear() }} - artharexian
    </p>
  </footer>
</template>

<style scoped>
.icon {
  color: var(--color-text-tertiary);
  width: 1.375rem;
  height: 1.375rem;
  &:hover {
    color: var(--color-text-main);
  }
}
.dark .icon {
  color: var(--color-text-main-dark);
  &:hover {
    color: white;
  }
}
</style>
