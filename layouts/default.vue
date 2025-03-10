<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col bg-bg-main font-sans text-text-main dark:bg-bg-main-dark dark:text-text-main-dark"
  >
    <Header />
    <main class="flex grow flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>
