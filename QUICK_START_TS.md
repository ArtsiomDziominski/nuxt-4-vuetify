# TypeScript - Быстрый старт

Краткое руководство для быстрого начала работы с TypeScript в проекте.

## 🚀 Быстрый старт (5 минут)

### 1. Создание типизированного компонента

```vue
<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-btn @click="handleClick">Нажми меня</v-btn>
  </v-card>
</template>

<script setup lang="ts">
// Props
interface Props {
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: 'Описание по умолчанию'
})

// Events
interface Emits {
  (e: 'click', value: string): void
}

const emit = defineEmits<Emits>()

// Методы
const handleClick = (): void => {
  emit('click', props.title)
}
</script>
```

### 2. Использование типов из `~/types`

```vue
<script setup lang="ts">
import type { User, Theme } from '~/types'

const user = ref<User>({
  id: 1,
  name: 'Иван',
  email: 'ivan@example.com',
  role: 'admin'
})

const theme = ref<Theme>('light')
</script>
```

### 3. Использование composables

```vue
<script setup lang="ts">
// Форматирование дат
const { formatDate } = useDateFormatter()
const formatted = formatDate(new Date())

// Управление темой
const { toggleTheme, isDark } = useThemeToggle()

// Навигация
const { scrollToTop, scrollToSection } = useScrollNavigation()
</script>
```

## 📦 Готовые типы

В проекте уже есть готовые типы в `app/types/index.ts`:

```typescript
// Формы
FormData

// Таблицы
TableItem
TableHeader

// Списки
ListItem

// Темы
Theme = 'light' | 'dark'

// И другие...
```

## 🔧 Готовые Composables

### useDateFormatter
```typescript
const { formatDate, formatDateRange, formatMultipleDates } = useDateFormatter()
```

### useThemeToggle
```typescript
const { currentTheme, toggleTheme, setTheme, isDark } = useThemeToggle()
```

### useScrollNavigation
```typescript
const { scrollToSection, scrollToTop, scrollToBottom } = useScrollNavigation()
```

## 💡 Частые сценарии

### Типизация ref

```typescript
// Примитив
const count = ref<number>(0)

// Объект
const user = ref<User | null>(null)

// Массив
const items = ref<Product[]>([])
```

### Типизация computed

```typescript
const fullName = computed<string>(() => {
  return `${firstName.value} ${lastName.value}`
})
```

### Типизация функций

```typescript
const handleSubmit = (data: FormData): void => {
  console.log(data)
}

const calculateTotal = (items: Product[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0)
}
```

### Работа с массивами

```typescript
interface Product {
  id: number
  name: string
  price: number
}

const products = ref<Product[]>([])

const addProduct = (product: Product): void => {
  products.value.push(product)
}

const removeProduct = (id: number): void => {
  products.value = products.value.filter(p => p.id !== id)
}
```

### API запросы

```typescript
interface ApiResponse<T> {
  data: T
  success: boolean
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await $fetch<ApiResponse<User[]>>('/api/users')
  return response.data
}
```

## 📚 Полезные шпаргалки

### Union Types
```typescript
type Status = 'pending' | 'success' | 'error'
type Size = 'sm' | 'md' | 'lg'
```

### Optional Properties
```typescript
interface User {
  id: number
  name: string
  email?: string  // Опциональное
}
```

### Readonly
```typescript
interface Config {
  readonly apiUrl: string
}
```

### Array Types
```typescript
const numbers: number[] = [1, 2, 3]
const users: Array<User> = []
```

### Utility Types
```typescript
// Все поля опциональны
type PartialUser = Partial<User>

// Только определенные поля
type UserPreview = Pick<User, 'id' | 'name'>

// Исключить поля
type UserNoEmail = Omit<User, 'email'>
```

## 🎯 Следующие шаги

1. Изучите **TYPESCRIPT.md** для подробного руководства
2. Посмотрите **примеры компонентов** в `app/components/`
3. Изучите **готовые composables** в `app/composables/`
4. Прочитайте **документацию типов** в `app/types/README.md`

## 🆘 Нужна помощь?

- **TYPESCRIPT.md** - полное руководство
- **MIGRATION_TO_TS.md** - как мигрировать код
- **app/types/README.md** - документация типов
- **app/composables/README.md** - документация composables
- **app/components/README.md** - примеры компонентов

## ✅ Чек-лист для нового компонента

- [ ] Добавить `lang="ts"` в `<script setup>`
- [ ] Типизировать props с `interface Props`
- [ ] Типизировать emits с `interface Emits`
- [ ] Типизировать все ref переменные
- [ ] Типизировать все функции
- [ ] Импортировать нужные типы из `~/types`
- [ ] Использовать готовые composables

---

**Удачи с TypeScript! 🎉**

