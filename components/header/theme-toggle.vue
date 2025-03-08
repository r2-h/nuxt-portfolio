<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <HeaderButton @click="toggleColorMode">
    <ColorScheme placeholder="..." tag="span" class="size-full">
      <Icon
        :name="`${colorMode.value === 'dark' ? 'heroicons-outline:moon' : 'heroicons-outline:sun'}`"
        class="size-6 group-hover:text-text-main md:size-5 dark:group-hover:text-white"
      />
    </ColorScheme>
  </HeaderButton>
</template>
