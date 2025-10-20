/**
 * Общие типы и интерфейсы для приложения
 */

// Типы для данных формы
export interface FormData {
  name: string
  email: string
  password: string
  phone: string
  website: string
  search: string
  number: number
  message: string
  country: string
  countries: string[]
  city: string
  tags: string[]
  agree: boolean
  subscribe: boolean
  notifications: boolean
  darkMode: boolean
  gender: 'male' | 'female' | 'other'
  size: 's' | 'm' | 'l' | 'xl'
  priority: 'low' | 'medium' | 'high'
  volume: number
  brightness: number
  quality: number
  priceRange: number[]
  timeRange: number[]
  files: File[] | null
  date: Date | null
  time: string | null
  dateRange: Date[]
  multipleDates: Date[]
  timeAmPm: string | null
  inlineDate: Date
  monthPicker: Date
  color: string
  otp: string
}

// Типы для таблицы
export interface TableItem {
  id: number
  name: string
  category: string
  price: string
}

export interface TableHeader {
  title: string
  key: string
  sortable?: boolean
}

// Типы для списка
export interface ListItem {
  avatar: string
  title: string
  subtitle: string
}

// Тип для темы
export type Theme = 'light' | 'dark'

// Типы для гендера
export type Gender = 'male' | 'female' | 'other'

// Типы для размера
export type Size = 's' | 'm' | 'l' | 'xl'

// Типы для приоритета
export type Priority = 'low' | 'medium' | 'high'

