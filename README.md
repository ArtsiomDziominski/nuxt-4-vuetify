# Nuxt 4 + Vuetify + TypeScript

Полнофункциональное демонстрационное приложение на Nuxt 4 с Vuetify 3 и полной TypeScript типизацией.

## Технологии

- **Nuxt 4** - Мощный Vue.js фреймворк
- **Vuetify 3** - Material Design компоненты
- **TypeScript** - Строгая типизация
- **Vue 3** - Composition API с `<script setup>`
- **Vite** - Быстрая сборка

## Особенности

✅ Полная TypeScript типизация всех компонентов  
✅ Переиспользуемые composables с типами  
✅ Централизованное хранение типов  
✅ Темная и светлая тема  
✅ Адаптивный дизайн  
✅ Демонстрация всех основных компонентов Vuetify  

## Структура проекта

```
app/
├── types/              # Общие TypeScript типы и интерфейсы
│   ├── index.ts       # Экспорт всех типов
│   └── README.md      # Документация типов
├── composables/       # Переиспользуемые composables
│   ├── useDateFormatter.ts      # Форматирование дат
│   ├── useThemeToggle.ts        # Управление темой
│   ├── useScrollNavigation.ts   # Навигация и прокрутка
│   └── README.md                # Документация composables
├── plugins/           # Nuxt плагины
│   └── vuetify.ts    # Конфигурация Vuetify с типизацией
├── pages/             # Страницы приложения
│   └── index.vue     # Главная страница с демо компонентов
└── app.vue           # Корневой компонент
```

## TypeScript

Проект полностью типизирован:

### Типы
Все общие типы находятся в `app/types/index.ts`:
```typescript
import type { FormData, TableItem, Theme } from '~/types'
```

### Composables
Все composables полностью типизированы:
```typescript
const { formatDate } = useDateFormatter()
const { toggleTheme } = useThemeToggle()
const { scrollToSection } = useScrollNavigation()
```

Подробнее см. документацию в соответствующих README файлах.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
