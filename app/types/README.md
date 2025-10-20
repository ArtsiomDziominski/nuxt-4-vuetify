# TypeScript Типы

В этой директории находятся общие TypeScript типы и интерфейсы для приложения.

## Структура типов

### FormData
Интерфейс для данных форм, включает все поля ввода с правильной типизацией.

```typescript
interface FormData {
  name: string
  email: string
  // ... остальные поля
}
```

### TableItem
Интерфейс для элементов таблицы данных.

```typescript
interface TableItem {
  id: number
  name: string
  category: string
  price: string
}
```

### TableHeader
Интерфейс для заголовков таблицы.

```typescript
interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}
```

### ListItem
Интерфейс для элементов списка.

```typescript
interface ListItem {
  avatar: string
  title: string
  subtitle: string
}
```

## Типы

### Theme
```typescript
type Theme = 'light' | 'dark'
```

### Gender
```typescript
type Gender = 'male' | 'female' | 'other'
```

### Size
```typescript
type Size = 's' | 'm' | 'l' | 'xl'
```

### Priority
```typescript
type Priority = 'low' | 'medium' | 'high'
```

## Использование

Импортируйте типы в ваших компонентах:

```typescript
import type { FormData, TableItem, Theme } from '~/types'

const theme = ref<Theme>('light')
const tableData = ref<TableItem[]>([])
```

