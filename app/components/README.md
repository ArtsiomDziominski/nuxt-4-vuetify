# Компоненты

В этой директории находятся переиспользуемые Vue компоненты с полной TypeScript типизацией.

## Примеры компонентов

### ExampleTypedComponent.vue

Базовый пример компонента, демонстрирующий использование:
- Composables с типизацией
- Типизированных reactive переменных
- Computed свойств с типами
- Typed функций

**Использование:**
```vue
<template>
  <ExampleTypedComponent />
</template>
```

### TypedUserCard.vue

Компонент карточки пользователя с полной типизацией props и emits.

**Props:**
- `user: User` - Объект пользователя (обязательный)
- `isActive?: boolean` - Статус активности (по умолчанию: true)
- `canEdit?: boolean` - Может ли редактировать (по умолчанию: true)
- `canDelete?: boolean` - Может ли удалять (по умолчанию: false)

**Events:**
- `edit` - Событие редактирования пользователя
- `delete` - Событие удаления пользователя
- `toggle-status` - Событие изменения статуса
- `update:isActive` - v-model для isActive

**Использование:**
```vue
<template>
  <TypedUserCard
    :user="currentUser"
    v-model:is-active="isUserActive"
    :can-edit="true"
    :can-delete="hasDeletePermission"
    @edit="handleEdit"
    @delete="handleDelete"
    @toggle-status="handleToggleStatus"
  />
</template>

<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

const currentUser: User = {
  id: 1,
  name: 'Иван Иванов',
  email: 'ivan@example.com',
  role: 'admin'
}

const isUserActive = ref(true)
const hasDeletePermission = ref(false)

const handleEdit = (user: User) => {
  console.log('Редактирование:', user)
}

const handleDelete = (userId: number) => {
  console.log('Удаление пользователя:', userId)
}

const handleToggleStatus = (userId: number, newStatus: boolean) => {
  console.log(`Пользователь ${userId} теперь ${newStatus ? 'активен' : 'неактивен'}`)
}
</script>
```

## Создание нового типизированного компонента

### Шаблон базового компонента

```vue
<template>
  <div>
    <!-- Ваш шаблон -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { YourType } from '~/types'

// Props (если нужны)
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

// Events (если нужны)
interface Emits {
  (e: 'update', value: string): void
}

const emit = defineEmits<Emits>()

// Reactive переменные
const data = ref<YourType[]>([])

// Computed свойства
const totalCount = computed<number>(() => {
  return data.value.length + props.count
})

// Методы
const handleUpdate = (value: string): void => {
  emit('update', value)
}
</script>

<style scoped>
/* Ваши стили */
</style>
```

### Компонент с slots

```vue
<template>
  <div class="wrapper">
    <header>
      <slot name="header" :title="title">
        <!-- Fallback контент -->
        <h1>{{ title }}</h1>
      </slot>
    </header>
    
    <main>
      <slot :items="items" :loading="loading">
        <!-- Fallback контент -->
        <p>Загрузка...</p>
      </slot>
    </main>
    
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  id: number
  name: string
}

// Props
interface Props {
  title: string
}

const props = defineProps<Props>()

// State
const items = ref<Item[]>([])
const loading = ref<boolean>(false)
</script>
```

## Лучшие практики

### 1. Всегда типизируйте props

```typescript
// ✅ Правильно
interface Props {
  title: string
  count: number
}

const props = defineProps<Props>()

// ❌ Неправильно
const props = defineProps({
  title: String,
  count: Number
})
```

### 2. Используйте withDefaults для значений по умолчанию

```typescript
// ✅ Правильно
interface Props {
  title: string
  count?: number
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  isActive: true
})
```

### 3. Типизируйте emits

```typescript
// ✅ Правильно
interface Emits {
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Emits>()

// ❌ Неправильно
const emit = defineEmits(['update', 'delete'])
```

### 4. Используйте defineExpose с типами

```typescript
// ✅ Правильно
interface ExposedMethods {
  focus: () => void
  clear: () => void
}

const inputRef = ref<HTMLInputElement | null>(null)

const focus = (): void => {
  inputRef.value?.focus()
}

const clear = (): void => {
  if (inputRef.value) {
    inputRef.value.value = ''
  }
}

defineExpose<ExposedMethods>({
  focus,
  clear
})
```

### 5. Типизируйте template refs

```vue
<template>
  <input ref="inputRef" />
  <MyComponent ref="componentRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type MyComponent from './MyComponent.vue'

// Для HTML элементов
const inputRef = ref<HTMLInputElement | null>(null)

// Для компонентов
const componentRef = ref<InstanceType<typeof MyComponent> | null>(null)

onMounted(() => {
  inputRef.value?.focus()
  componentRef.value?.someMethod()
})
</script>
```

## Полезные ссылки

- [Vue 3 TypeScript Guide](https://vuejs.org/guide/typescript/composition-api.html)
- [Vuetify Components](https://vuetifyjs.com/en/components/all/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

