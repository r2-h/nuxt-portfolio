<script setup lang="ts">
import { HeaderButton, HeaderNavigation } from '#components'

const { $t, $switchLocale, $getLocale } = useI18n()

const switchLocale = () => {
  $switchLocale($getLocale() === 'ru' ? 'en' : 'ru')
}
</script>

<template>
  <header
    class="sticky top-0 z-20 mx-auto flex w-full max-w-260 items-center justify-between px-6 pt-6 md:pt-3"
  >
    <div class="flex gap-5">
      <HeaderThemeToggle2 />

      <HeaderButton class="text-xl md:text-base" @click="switchLocale">
        {{ $t('language') }}
      </HeaderButton>
    </div>

    <HeaderButton class="md:hidden">
      <Icon
        name="heroicons-solid:menu"
        class="size-7 text-text-secondary group-hover:text-text-main dark:text-text-main-dark dark:group-hover:text-white"
      />
    </HeaderButton>

    <HeaderNavigation />
  </header>
</template>
