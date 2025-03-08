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
      <HeaderThemeToggle class="z-50" />

      <HeaderButton class="z-50 text-xl md:text-base" @click="switchLocale">
        {{ $t('language') }}
      </HeaderButton>
    </div>

    <HeaderNavigation />
    <HeaderNavigationMobile />
  </header>
</template>
