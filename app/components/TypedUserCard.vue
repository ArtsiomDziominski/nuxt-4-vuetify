<template>
  <v-card>
    <v-card-title>{{ user.name }}</v-card-title>
    <v-card-subtitle>{{ user.email }}</v-card-subtitle>
    
    <v-card-text>
      <p>ID: {{ user.id }}</p>
      <p>Роль: {{ user.role }}</p>
      <p class="text-caption">Активен: {{ isActive ? 'Да' : 'Нет' }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn 
        @click="handleEdit" 
        color="primary"
        :disabled="!canEdit"
      >
        Редактировать
      </v-btn>
      
      <v-btn 
        @click="handleDelete" 
        color="error"
        :disabled="!canDelete"
      >
        Удалить
      </v-btn>
      
      <v-btn 
        @click="handleToggleStatus" 
        color="secondary"
      >
        {{ isActive ? 'Деактивировать' : 'Активировать' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Определение интерфейсов
interface User {
  id: number
  name: string
  email: string
  role: UserRole
}

type UserRole = 'admin' | 'user' | 'guest'

// Props с типизацией
interface Props {
  user: User
  isActive?: boolean
  canEdit?: boolean
  canDelete?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: true,
  canEdit: true,
  canDelete: false
})

// Events с типизацией
interface Emits {
  (e: 'edit', user: User): void
  (e: 'delete', userId: number): void
  (e: 'toggle-status', userId: number, newStatus: boolean): void
  (e: 'update:isActive', value: boolean): void
}

const emit = defineEmits<Emits>()

// Computed свойства
const displayRole = computed<string>(() => {
  const roleMap: Record<UserRole, string> = {
    admin: 'Администратор',
    user: 'Пользователь',
    guest: 'Гость'
  }
  return roleMap[props.user.role]
})

// Методы с типизацией
const handleEdit = (): void => {
  if (props.canEdit) {
    emit('edit', props.user)
  }
}

const handleDelete = (): void => {
  if (props.canDelete) {
    emit('delete', props.user.id)
  }
}

const handleToggleStatus = (): void => {
  const newStatus = !props.isActive
  emit('toggle-status', props.user.id, newStatus)
  emit('update:isActive', newStatus)
}
</script>

<style scoped>
/* Стили компонента */
.v-card {
  max-width: 400px;
}
</style>

