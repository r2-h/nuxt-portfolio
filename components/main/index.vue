<script setup lang="ts">
import { NuxtImg, NuxtLink } from '#components'
import VueTypewriterEffect from 'vue-typewriter-effect'
import { NAVIGATION } from '~/constants'

const { $t, $getLocale } = useI18n()

const options = {
  detectRetina: true,
  fpsLimit: 120,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: 'rgb(255,255,255)',
    },
    links: {
      color: 'rgb(255,255,255)',
      distance: 200,
      enable: true,
      opacity: 0.2,
      width: 0.7,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        height: 1000,
        width: 1000,
        enable: true,
      },
      value: 50,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { max: 0.5, min: 0.1 },
    },
  },
}
</script>

<template>
  <section
    :id="NAVIGATION.main"
    class="mx-auto h-[calc(100dvh-1.68rem)] w-full max-w-190"
  >
    <NuxtParticles
      class="absolute inset-0 z-10 dark:z-0"
      id="tsparticles"
      :options="options"
    />

    <div
      class="flex h-full grow flex-col px-2 font-normal tracking-tighter md:px-5 md:font-medium"
    >
      <div class="flex h-full grow flex-col justify-center gap-y-5 md:gap-y-0">
        <div
          class="flex flex-col items-center justify-center gap-y-5 md:flex-row md:justify-between md:gap-y-0"
        >
          <NuxtImg
            src="photo.jpg"
            class="size-35 rounded-full object-cover opacity-90 brightness-110 grayscale-[80%] md:size-55 dark:z-0 dark:opacity-100 dark:brightness-100 dark:grayscale-0"
          />

          <div class="text-center text-2xl uppercase md:text-left md:text-4xl">
            <p class="hidden md:block">{{ $t('hi') }},</p>
            <p class="hidden md:block">{{ $t('myNameIs') }}</p>
            <div class="hidden text-text-accent md:block">
              {{ $t('artharexian') }}
              <span v-if="$getLocale() === 'ru'" class="invisible">***</span>
            </div>

            <p
              class="text-text-secondary/55 normal-case md:hidden dark:text-text-main-dark"
            >
              {{ $t('hiMobile') }}
            </p>
            <div>
              <VueTypewriterEffect
                :strings="[$t('webDeveloper')]"
                :pauseFor="2000"
                class="lowercase md:uppercase"
              />
            </div>
          </div>
        </div>

        <NuxtLink
          class="letter z-10 mx-auto w-fit cursor-pointer rounded-2xl bg-white px-4.5 py-0.75 text-center font-medium text-text-main capitalize shadow-init hover:text-black hover:shadow-tertiary dark:bg-black dark:text-text-main-dark dark:hover:bg-black dark:hover:text-white"
        >
          {{ $t('contactMe') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
