<script setup lang="ts">
import { HeaderButton } from '#components'
import NavItems from './navigation/nav-items.vue'

const { $t, $switchLocale, $getLocale } = useI18n()

const switchLocale = () => {
  $switchLocale($getLocale() === 'ru' ? 'en' : 'ru')
}
</script>

<template>
  <header
    class="sticky top-5 z-50 mx-auto flex w-full items-center justify-between text-base font-normal md:px-10 md:text-sm md:font-medium"
  >
    <div class="header-btn z-50 flex items-center gap-7">
      <HeaderThemeToggle class="" />

      <HeaderButton class="uppercase md:normal-case" @click="switchLocale">
        {{ $t('language') }}
      </HeaderButton>
    </div>

    <nav class="header-btn hidden md:flex md:gap-7">
      <NavItems />
    </nav>

    <nav class="header-btn hidden md:flex md:gap-7">
      <NuxtLink
        class="cursor-pointer hover:text-text-main dark:hover:text-white"
      >
        {{ $t('contacts') }}
      </NuxtLink>
    </nav>

    <HeaderNavigationMobile />
  </header>
</template>
