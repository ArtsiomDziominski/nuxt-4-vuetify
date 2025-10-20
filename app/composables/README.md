# Composables

В этой директории находятся переиспользуемые composables с полной TypeScript типизацией.

## Доступные Composables

### useDateFormatter
Composable для форматирования дат.

**Методы:**
- `formatDate(date, locale)` - Форматирует одну дату
- `formatDateRange(dates, locale)` - Форматирует диапазон дат
- `formatMultipleDates(dates, locale)` - Форматирует множественные даты

**Использование:**
```typescript
const { formatDate, formatDateRange } = useDateFormatter()

const formatted = formatDate(new Date(), 'ru-RU')
const range = formatDateRange([startDate, endDate], 'ru-RU')
```

### useThemeToggle
Composable для управления темой приложения.

**Свойства:**
- `currentTheme` - Текущая тема (ref)

**Методы:**
- `toggleTheme()` - Переключает тему между светлой и темной
- `setTheme(theme)` - Устанавливает конкретную тему
- `isDark()` - Проверяет, активна ли темная тема

**Использование:**
```typescript
const { currentTheme, toggleTheme, setTheme, isDark } = useThemeToggle()

// Переключить тему
toggleTheme()

// Установить темную тему
setTheme('dark')

// Проверить текущую тему
if (isDark()) {
  console.log('Темная тема активна')
}
```

### useScrollNavigation
Composable для прокрутки и навигации по странице.

**Методы:**
- `scrollToSection(id, behavior)` - Прокрутка к секции по ID
- `scrollToTop(behavior)` - Прокрутка наверх страницы
- `scrollToBottom(behavior)` - Прокрутка вниз страницы
- `getScrollPosition()` - Получить текущую позицию прокрутки

**Использование:**
```typescript
const { scrollToSection, scrollToTop } = useScrollNavigation()

// Прокрутить к элементу
scrollToSection('mySection', 'smooth')

// Прокрутить наверх
scrollToTop()

// Получить позицию
const { x, y } = getScrollPosition()
```

## Создание собственных Composables

При создании новых composables следуйте этим рекомендациям:

1. **Типизация**: Всегда типизируйте параметры и возвращаемые значения
2. **JSDoc**: Добавляйте документацию к функциям
3. **Префикс**: Используйте префикс `use` в названии
4. **Возвращаемое значение**: Возвращайте объект с методами и свойствами

**Пример:**
```typescript
/**
 * Composable для работы с данными
 */
export const useDataManager = () => {
  const data = ref<Data[]>([])

  /**
   * Загружает данные
   * @param id - ID данных
   * @returns Promise с данными
   */
  const loadData = async (id: string): Promise<Data> => {
    // реализация
  }

  return {
    data,
    loadData,
  }
}
```

