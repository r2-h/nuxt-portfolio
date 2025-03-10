<script setup lang="ts">
import { NAVIGATION } from '~/constants'
import NavItems from './nav-items.vue'

const mobileMenuCheckbox = ref<HTMLInputElement | null>(null)

const closeMenu = () => {
  if (mobileMenuCheckbox.value) {
    mobileMenuCheckbox.value.checked = false
  }
}
</script>

<template>
  <label class="grid overflow-hidden rounded md:hidden" for="mobile-menu">
    <input
      ref="mobileMenuCheckbox"
      class="peer hidden"
      type="checkbox"
      id="mobile-menu"
    />

    <div
      class="header-btn group z-20 flex cursor-pointer items-center gap-1 capitalize"
    >
      <span class="group-hover:text-text-main dark:group-hover:text-white">
        {{ $t('menu') }}
      </span>

      <div class="grid place-items-center">
        <div
          class="dark:bg:text-white absolute h-0.5 w-3.5 bg-black group-hover:bg-text-main dark:bg-text-main-dark dark:group-hover:bg-white"
        />
        <div
          class="dark:bg:text-white h-0.5 w-3.5 rotate-90 bg-black group-hover:bg-text-main dark:bg-text-main-dark dark:group-hover:bg-white"
        />
      </div>
    </div>

    <div
      class="pointer-events-none fixed inset-0 h-full w-full bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-250 peer-checked:opacity-100"
    />

    <div
      class="fixed top-0 right-0 z-10 h-full w-full translate-y-[-100%] overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0"
    >
      <div
        class="grid min-h-full w-full place-content-center gap-y-8 bg-white shadow-2xl dark:bg-black"
      >
        <NavItems @click="closeMenu" />
      </div>
    </div>
  </label>
</template>
