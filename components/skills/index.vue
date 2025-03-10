<script setup lang="ts">
import { NAVIGATION } from '~/constants'
</script>

<template>
  <section
    :id="NAVIGATION.skills"
    class="mx-auto mb-34 w-full max-w-190 space-y-7 px-2 text-black md:px-5 dark:text-text-main-dark"
  >
    <p
      class="w-[80%] text-sm md:w-[70%]"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      data-aos-offset="0"
    >
      {{ $t('skills1') }}
    </p>

    <p
      class="ml-auto w-[80%] text-sm md:w-[70%]"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      data-aos-offset="0"
    >
      Tech stack: TypeScript React Vue NextJS NuxtJS NestJS HTML CSS Tailwind
      Adaptive layout Storybook ReactQuery RTKQuery Redux Zustand ReactHookForm
      Zod REST API Figma RadixUI ShadcnUI Axios UIKit Jira FSD
    </p>
  </section>

  <section
    :id="NAVIGATION.projects"
    class="mx-auto w-full max-w-190 space-y-7 px-2 text-black md:px-5 dark:text-text-main-dark"
  >
    <div class="aspect-3/2 w-full rounded-xl bg-gray-500"></div>

    <div class="aspect-3/2 w-full rounded-xl bg-gray-500"></div>
  </section>
</template>
