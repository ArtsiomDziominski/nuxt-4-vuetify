# Миграция проекта на TypeScript

Пошаговое руководство по переводу существующего Nuxt + Vuetify проекта на TypeScript.

## Шаг 1: Добавление TypeScript поддержки

### 1.1 Проверка конфигурации

Убедитесь, что в проекте уже есть `tsconfig.json`. Nuxt 4 автоматически создает его.

```json
{
  "files": [],
  "references": [
    { "path": "./.nuxt/tsconfig.app.json" },
    { "path": "./.nuxt/tsconfig.server.json" },
    { "path": "./.nuxt/tsconfig.shared.json" },
    { "path": "./.nuxt/tsconfig.node.json" }
  ]
}
```

### 1.2 Обновление package.json (опционально)

TypeScript уже включен в Nuxt 4, но можно добавить явные версии:

```json
{
  "devDependencies": {
    "typescript": "^5.x.x",
    "@types/node": "^20.x.x"
  }
}
```

## Шаг 2: Миграция компонентов

### 2.1 Добавление `lang="ts"` в script

**Было:**
```vue
<script setup>
import { ref } from 'vue'

const message = ref('Hello')
</script>
```

**Стало:**
```vue
<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('Hello')
</script>
```

### 2.2 Типизация props

**Было:**
```vue
<script setup>
const props = defineProps({
  title: String,
  count: Number
})
</script>
```

**Стало:**
```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>
```

### 2.3 Типизация emits

**Было:**
```vue
<script setup>
const emit = defineEmits(['update', 'delete'])
</script>
```

**Стало:**
```vue
<script setup lang="ts">
interface Emits {
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Emits>()
</script>
```

## Шаг 3: Создание типов

### 3.1 Создайте директорию для типов

```bash
mkdir app/types
```

### 3.2 Создайте файл с типами

**app/types/index.ts:**
```typescript
// Экспорт всех типов проекта
export interface User {
  id: number
  name: string
  email: string
}

export interface Product {
  id: number
  title: string
  price: number
}

export type Theme = 'light' | 'dark'
export type Status = 'pending' | 'success' | 'error'
```

### 3.3 Используйте типы в компонентах

```vue
<script setup lang="ts">
import type { User, Theme } from '~/types'

const currentUser = ref<User>({
  id: 1,
  name: 'Иван',
  email: 'ivan@example.com'
})

const theme = ref<Theme>('light')
</script>
```

## Шаг 4: Миграция плагинов

### 4.1 Переименуйте .js в .ts

**Было:**
```
app/plugins/myPlugin.js
```

**Стало:**
```
app/plugins/myPlugin.ts
```

### 4.2 Добавьте типы в плагины

**Было:**
```javascript
// app/plugins/vuetify.js
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light'
    }
  })
  
  nuxtApp.vueApp.use(vuetify)
})
```

**Стало:**
```typescript
// app/plugins/vuetify.ts
import type { ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1867C0'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme
      }
    }
  })
  
  nuxtApp.vueApp.use(vuetify)
})
```

## Шаг 5: Создание Composables

### 5.1 Создайте директорию

```bash
mkdir app/composables
```

### 5.2 Создайте типизированные composables

**app/composables/useCounter.ts:**
```typescript
import { ref } from 'vue'

export const useCounter = (initialValue: number = 0) => {
  const count = ref<number>(initialValue)
  
  const increment = (): void => {
    count.value++
  }
  
  const decrement = (): void => {
    count.value--
  }
  
  return {
    count,
    increment,
    decrement
  }
}
```

### 5.3 Используйте в компонентах

```vue
<script setup lang="ts">
const { count, increment, decrement } = useCounter(10)
</script>
```

## Шаг 6: Типизация API запросов

### 6.1 Создайте типы для API

**app/types/api.ts:**
```typescript
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  perPage: number
}
```

### 6.2 Создайте типизированный API сервис

**app/composables/useApi.ts:**
```typescript
import type { ApiResponse } from '~/types/api'

export const useApi = () => {
  const get = async <T>(url: string): Promise<ApiResponse<T>> => {
    const { data } = await useFetch<ApiResponse<T>>(url)
    return data.value!
  }
  
  const post = async <T, D>(
    url: string, 
    body: D
  ): Promise<ApiResponse<T>> => {
    const { data } = await useFetch<ApiResponse<T>>(url, {
      method: 'POST',
      body
    })
    return data.value!
  }
  
  return {
    get,
    post
  }
}
```

## Шаг 7: Типизация Pinia Store (если используется)

**stores/user.ts:**
```typescript
import { defineStore } from 'pinia'
import type { User } from '~/types'

interface UserState {
  currentUser: User | null
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    currentUser: null,
    isAuthenticated: false
  }),
  
  getters: {
    userName: (state): string => {
      return state.currentUser?.name ?? 'Гость'
    }
  },
  
  actions: {
    setUser(user: User): void {
      this.currentUser = user
      this.isAuthenticated = true
    },
    
    logout(): void {
      this.currentUser = null
      this.isAuthenticated = false
    }
  }
})
```

## Шаг 8: Проверка и исправление ошибок

### 8.1 Запустите проект

```bash
npm run dev
```

### 8.2 Проверьте консоль на ошибки TypeScript

Обратите внимание на:
- Неправильные типы
- Отсутствующие свойства
- Несоответствие типов

### 8.3 Исправьте ошибки постепенно

Начните с критичных файлов и двигайтесь к менее важным.

## Общие проблемы и решения

### Проблема: `Type 'null' is not assignable to type 'X'`

**Решение:** Используйте union type с null
```typescript
const user = ref<User | null>(null)
```

### Проблема: `Property does not exist on type`

**Решение:** Добавьте свойство в интерфейс или используйте optional chaining
```typescript
user.value?.email
```

### Проблема: `Argument of type 'any'`

**Решение:** Типизируйте параметр
```typescript
// Было
const handleClick = (data: any) => {}

// Стало
const handleClick = (data: ClickData) => {}
```

### Проблема: `Cannot find module '~/types'`

**Решение:** Убедитесь, что алиасы настроены в tsconfig.json (Nuxt делает это автоматически)

## Чек-лист миграции

- [ ] Добавлен `lang="ts"` во все `<script setup>`
- [ ] Типизированы все props в компонентах
- [ ] Типизированы все emits в компонентах
- [ ] Созданы общие типы в `app/types/`
- [ ] Созданы типизированные composables
- [ ] Мигрированы плагины на TypeScript
- [ ] Типизированы API запросы
- [ ] Типизированы stores (если есть)
- [ ] Исправлены все ошибки TypeScript
- [ ] Проект успешно компилируется и запускается

## Полезные советы

1. **Мигрируйте постепенно** - начните с одного компонента, затем расширяйте
2. **Используйте strict mode** - для более строгой проверки типов
3. **Документируйте типы** - добавляйте JSDoc комментарии
4. **Переиспользуйте типы** - создавайте общие типы в `types/`
5. **Используйте utility types** - Partial, Pick, Omit и т.д.

## Дополнительные ресурсы

- [TypeScript в Nuxt](https://nuxt.com/docs/guide/concepts/typescript)
- [Vue 3 + TypeScript](https://vuejs.org/guide/typescript/overview.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vuetify TypeScript](https://vuetifyjs.com/en/features/typescript/)

