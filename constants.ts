export const NAVIGATION = {
  main: 'main',
  skills: 'skills',
  projects: 'projects',
} as const

export type Navigation = keyof typeof NAVIGATION
