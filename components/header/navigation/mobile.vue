<script setup lang="ts">
import NavItems from './nav-items.vue'
</script>

<template>
  <label
    class="relative z-40 grid size-9 cursor-pointer overflow-hidden rounded md:hidden"
    for="mobile-menu"
  >
    <input class="peer hidden" type="checkbox" id="mobile-menu" />

    <div
      class="group z-50 grid place-items-center bg-[--alpha(var(--color-bg-main)/80%)] hover:bg-button-bg dark:bg-[--alpha(var(--color-bg-main-dark)/70%)] dark:hover:bg-button-bg-dark"
    >
      <div>
        <div
          v-for="el in 3"
          :key="el"
          class="dark:bg:text-white my-1 h-0.5 w-5 bg-text-secondary group-hover:bg-text-main dark:bg-text-main-dark dark:group-hover:bg-white"
        />
      </div>
    </div>

    <div
      class="pointer-events-none fixed inset-0 h-full w-full bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-250 peer-checked:opacity-100"
    />

    <div
      class="fixed top-0 right-0 z-40 h-full w-full translate-y-[-100%] overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0"
    >
      <div
        class="grid min-h-full w-full place-content-center gap-y-8 bg-white shadow-2xl dark:bg-black"
      >
        <NavItems />
      </div>
    </div>
  </label>
</template>
