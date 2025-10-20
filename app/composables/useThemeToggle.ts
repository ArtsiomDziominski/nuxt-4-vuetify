/**
 * Composable для переключения темы
 */

import { ref } from 'vue'
import { useTheme } from 'vuetify'
import type { Theme } from '~/types'

export const useThemeToggle = () => {
  const vuetifyTheme = useTheme()
  const currentTheme = ref<Theme>(vuetifyTheme.global.name.value as Theme)

  /**
   * Переключает тему между светлой и темной
   */
  const toggleTheme = (): void => {
    currentTheme.value = vuetifyTheme.global.name.value === 'light' ? 'dark' : 'light'
    vuetifyTheme.global.name.value = currentTheme.value
  }

  /**
   * Устанавливает конкретную тему
   * @param theme - Название темы ('light' или 'dark')
   */
  const setTheme = (theme: Theme): void => {
    currentTheme.value = theme
    vuetifyTheme.global.name.value = theme
  }

  /**
   * Проверяет, активна ли темная тема
   * @returns true если темная тема активна
   */
  const isDark = (): boolean => {
    return currentTheme.value === 'dark'
  }

  return {
    currentTheme,
    toggleTheme,
    setTheme,
    isDark,
  }
}

