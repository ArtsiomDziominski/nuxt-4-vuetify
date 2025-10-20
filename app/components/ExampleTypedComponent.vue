<template>
  <v-card class="pa-4">
    <v-card-title>Пример типизированного компонента</v-card-title>

    <v-card-text>
      <p>Текущая тема: {{ currentTheme }}</p>
      <p>Это темная тема: {{ isDark() ? 'Да' : 'Нет' }}</p>

      <v-btn @click="toggleTheme" color="primary" class="mt-2">
        Переключить тему
      </v-btn>

      <v-divider class="my-4"></v-divider>

      <p>Отформатированная дата: {{ formattedDate }}</p>
      <p>Позиция прокрутки: Y={{ scrollPosition.y }}</p>

      <v-btn @click="handleScrollToTop" color="secondary" class="mt-2">
        Прокрутить наверх
      </v-btn>

      <v-divider class="my-4"></v-divider>

      <v-btn @click="handleTableAction(exampleItem)" color="success">
        Обработать элемент таблицы
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { TableItem } from '~/types'

const { currentTheme, toggleTheme, isDark } = useThemeToggle()
const { formatDate } = useDateFormatter()
const { scrollToTop, getScrollPosition } = useScrollNavigation()

const scrollPosition = ref({ x: 0, y: 0 })
const currentDate = ref<Date>(new Date())

const exampleItem: TableItem = {
  id: 1,
  name: 'Пример товара',
  category: 'Электроника',
  price: '5000 ₽'
}

const formattedDate = computed<string>(() => {
  return formatDate(currentDate.value)
})

const handleTableAction = (item: TableItem): void => {
  console.log('Обработка элемента:', item)
  alert(`Обработан элемент: ${item.name}`)
}

const handleScrollToTop = (): void => {
  scrollToTop('smooth')
}

const updateScrollPosition = (): void => {
  scrollPosition.value = getScrollPosition()
}

onMounted(() => {
  updateScrollPosition()

  window.addEventListener('scroll', updateScrollPosition)

  return () => {
    window.removeEventListener('scroll', updateScrollPosition)
  }
})
</script>

<style scoped>
/* Стили компонента */
</style>

