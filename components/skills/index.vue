<script setup lang="ts">
import { NAVIGATION } from '~/constants'
import image1 from '~/public/project1/image1.png'
import image2 from '~/public/project1/image2.png'
import image3 from '~/public/project1/image3.png'
import image4 from '~/public/project1/image4.png'

const items = [image1, image2, image3, image4]
</script>

<template>
  <section
    :id="NAVIGATION.skills"
    class="mx-auto mb-34 w-full max-w-160 space-y-7 px-2 text-black md:px-5 dark:text-text-main-dark"
  >
    <p
      class="w-[80%] text-sm"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      data-aos-offset="0"
    >
      {{ $t('skills1') }}
    </p>

    <p
      class="ml-auto w-[80%] text-sm"
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
    class="mx-auto w-full max-w-160 space-y-7 px-2 text-black md:px-5 dark:text-text-main-dark"
  >
    <UCarousel
      ref="carousel"
      v-slot="{ item, index }"
      :items="items"
      :ui="{
        item: 'basis-full ',
        container: 'rounded-lg',
        next: 'size-5.5 grid place-content-center hover:text-black mr-13',
        prev: 'size-5.5 grid place-content-center hover:text-black ml-13',
      }"
      loop
      arrows
      :class="``"
    >
      <img
        :src="item"
        class="mx-auto h-100 rounded-2xl bg-bg-secondary object-contain"
        draggable="false"
      />
    </UCarousel>
  </section>
</template>

<style>
.black {
  background-color: black;
}
.white {
  background-color: rgb(235, 235, 235);
}
.brown {
  background-color: rgb(126, 88, 65);
}
.green {
  background-color: rgb(16, 78, 78);
}
.yellow {
  background-color: rgb(240, 214, 70);
}
</style>
