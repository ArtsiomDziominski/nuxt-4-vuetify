# TypeScript в проекте

Руководство по использованию TypeScript в Nuxt 4 + Vuetify приложении.

## Оглавление

1. [Типизация компонентов](#типизация-компонентов)
2. [Работа с типами](#работа-с-типами)
3. [Composables](#composables)
4. [Лучшие практики](#лучшие-практики)

## Типизация компонентов

### Базовый компонент с TypeScript

```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('Hello TypeScript!')
</script>
```

### Компонент с props

```vue
<template>
  <div>{{ user.name }}</div>
</template>

<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
}

interface Props {
  user: User
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: true
})
</script>
```

### Компонент с emit

```vue
<script setup lang="ts">
interface Emits {
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('update', 'new value')
}
</script>
```

## Работа с типами

### Импорт типов

```typescript
// Импорт конкретных типов
import type { FormData, TableItem } from '~/types'

// Использование
const formData = ref<FormData>({
  name: '',
  email: '',
  // ...
})

const tableItems = ref<TableItem[]>([])
```

### Создание новых типов

```typescript
// В app/types/index.ts
export interface Product {
  id: number
  name: string
  price: number
  inStock: boolean
}

export type ProductStatus = 'available' | 'out-of-stock' | 'discontinued'

// В компоненте
import type { Product, ProductStatus } from '~/types'

const product = ref<Product>({
  id: 1,
  name: 'Товар',
  price: 1000,
  inStock: true
})

const status = ref<ProductStatus>('available')
```

### Типизация refs

```typescript
import { ref, computed } from 'vue'

// Примитивные типы
const count = ref<number>(0)
const message = ref<string>('')
const isActive = ref<boolean>(true)

// Массивы
const items = ref<string[]>([])
const users = ref<User[]>([])

// Объекты
const user = ref<User>({
  id: 1,
  name: 'Иван'
})

// Computed с типизацией
const doubleCount = computed<number>(() => count.value * 2)
```

## Composables

### Создание типизированного composable

```typescript
// app/composables/useCounter.ts
import { ref } from 'vue'

export const useCounter = (initialValue: number = 0) => {
  const count = ref<number>(initialValue)

  const increment = (): void => {
    count.value++
  }

  const decrement = (): void => {
    count.value--
  }

  const reset = (): void => {
    count.value = initialValue
  }

  return {
    count,
    increment,
    decrement,
    reset,
  }
}
```

### Использование composable

```vue
<script setup lang="ts">
const { count, increment, decrement } = useCounter(10)
</script>
```

### Composable с generic типами

```typescript
// app/composables/useList.ts
import { ref } from 'vue'

export const useList = <T>() => {
  const items = ref<T[]>([])

  const add = (item: T): void => {
    items.value.push(item)
  }

  const remove = (index: number): void => {
    items.value.splice(index, 1)
  }

  const clear = (): void => {
    items.value = []
  }

  return {
    items,
    add,
    remove,
    clear,
  }
}

// Использование
interface Task {
  id: number
  title: string
  completed: boolean
}

const { items, add, remove } = useList<Task>()
add({ id: 1, title: 'Задача', completed: false })
```

## Лучшие практики

### 1. Используйте type вместо interface для Union Types

```typescript
// ✅ Правильно
type Status = 'pending' | 'success' | 'error'
type Theme = 'light' | 'dark'

// ❌ Неправильно - interface не подходит для union types
```

### 2. Используйте interface для объектов

```typescript
// ✅ Правильно
interface User {
  id: number
  name: string
  email: string
}

// ✅ Тоже правильно, но interface предпочтительнее
type User = {
  id: number
  name: string
  email: string
}
```

### 3. Избегайте any

```typescript
// ❌ Плохо
const handleClick = (data: any) => {
  console.log(data)
}

// ✅ Хорошо
interface ClickData {
  x: number
  y: number
}

const handleClick = (data: ClickData) => {
  console.log(data.x, data.y)
}

// ✅ Если тип действительно неизвестен
const handleClick = (data: unknown) => {
  if (typeof data === 'object' && data !== null) {
    // безопасная работа с data
  }
}
```

### 4. Используйте readonly для неизменяемых данных

```typescript
interface Config {
  readonly apiUrl: string
  readonly timeout: number
}

const config: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
}

// config.apiUrl = 'other' // ❌ Ошибка компиляции
```

### 5. Используйте optional chaining и nullish coalescing

```typescript
// ✅ Optional chaining
const userName = user?.profile?.name

// ✅ Nullish coalescing
const displayName = user?.name ?? 'Гость'

// ❌ Старый способ
const userName = user && user.profile && user.profile.name
const displayName = user && user.name ? user.name : 'Гость'
```

### 6. Типизируйте функции полностью

```typescript
// ✅ Хорошо - явная типизация параметров и возвращаемого значения
const calculateTotal = (price: number, quantity: number): number => {
  return price * quantity
}

// ✅ Тоже хорошо - для void функций
const logMessage = (message: string): void => {
  console.log(message)
}

// ⚠️ Допустимо - TypeScript выведет тип автоматически
const add = (a: number, b: number) => a + b
```

### 7. Используйте utility types

```typescript
import type { User } from '~/types'

// Partial - все поля опциональные
type PartialUser = Partial<User>

// Required - все поля обязательные
type RequiredUser = Required<User>

// Pick - выбрать определенные поля
type UserPreview = Pick<User, 'id' | 'name'>

// Omit - исключить определенные поля
type UserWithoutEmail = Omit<User, 'email'>

// Readonly - все поля только для чтения
type ReadonlyUser = Readonly<User>
```

## Дополнительные ресурсы

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vue TypeScript Guide](https://vuejs.org/guide/typescript/overview.html)
- [Nuxt TypeScript](https://nuxt.com/docs/guide/concepts/typescript)
- [Vuetify TypeScript](https://vuetifyjs.com/en/features/typescript/)

