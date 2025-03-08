<script setup lang="ts">
import { NuxtImg } from '#components'
import VueTypewriterEffect from 'vue-typewriter-effect'

const { $t, getLocale } = useI18n()

const locale = getLocale()
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
  <section class="mx-auto h-[calc(100dvh-3rem)] w-full max-w-260">
    <NuxtParticles
      class="absolute inset-0"
      id="tsparticles"
      :options="options"
    />
    <div class="z-0 flex h-full grow flex-col px-3 md:px-7">
      <!-- <div
        id="mobile-menu"
        class="absolute top-0 left-0 z-10 flex w-full flex-col justify-center"
      >
        <nav
          class="flex min-h-screen flex-col items-center bg-white py-8 dark:bg-black"
          aria-label="mobile"
        >
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
          <div>asdasd</div>
        </nav>
      </div> -->

      <div
        class="flex h-full grow flex-col items-center justify-center gap-y-10 md:flex-row md:justify-between md:gap-y-0"
      >
        <div class="text-3xl font-semibold uppercase md:text-4xl">
          <div class="flex">{{ $t('hi') }},</div>
          <p>{{ $t('myNameIs') }}</p>
          <p :class="`${locale === 'ru' && 'min-w-80'} text-text-accent`">
            {{ $t('artharexian') }}
          </p>
          <VueTypewriterEffect
            :strings="[$t('webDeveloper')]"
            :pauseFor="2000"
          />
        </div>
        <NuxtImg
          src="photo.jpg"
          class="z-0 size-70 rounded-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
