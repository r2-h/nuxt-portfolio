<script setup lang="ts">
import { HeaderButton } from '#components'
import { onMounted } from 'vue'
import { useDarkTheme } from '~/composables/theme'

const { isDark } = useDarkTheme()

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  isDark.value = theme === 'dark'
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <HeaderButton @click="toggleTheme">
    <Icon
      :name="`${isDark ? 'heroicons-outline:moon' : 'heroicons-outline:sun'}`"
      class="size-6 group-hover:text-text-main md:size-5 dark:group-hover:text-white"
    />
  </HeaderButton>
</template>
