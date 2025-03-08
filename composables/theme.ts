import { ref } from 'vue'

const isDark = ref(false)

export const useDarkTheme = () => {
  return { isDark }
}
