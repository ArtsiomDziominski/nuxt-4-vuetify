<template>
  <v-app>
    <!-- Верхняя панель навигации -->
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify Демонстрация Компонентов</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Боковая навигационная панель -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Главная" @click="scrollToSection('top')"></v-list-item>
        <v-list-item prepend-icon="mdi-button-cursor" title="Кнопки" @click="scrollToSection('buttons')"></v-list-item>
        <v-list-item prepend-icon="mdi-form-textbox" title="Формы" @click="scrollToSection('forms')"></v-list-item>
        <v-list-item prepend-icon="mdi-card" title="Карточки" @click="scrollToSection('cards')"></v-list-item>
        <v-list-item prepend-icon="mdi-table" title="Таблицы" @click="scrollToSection('tables')"></v-list-item>
        <v-list-item prepend-icon="mdi-alert" title="Оповещения" @click="scrollToSection('alerts')"></v-list-item>
        <v-list-item prepend-icon="mdi-dots-horizontal" title="Прочее" @click="scrollToSection('misc')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Основной контент -->
    <v-main>
      <v-container fluid>
        <!-- Заголовок -->
        <v-row id="top" class="mb-8">
          <v-col cols="12">
            <h1 class="text-h3 text-center mb-4">Демонстрация компонентов Vuetify</h1>
            <p class="text-center text-subtitle-1">Полная коллекция основных компонентов Vuetify</p>
          </v-col>
        </v-row>

        <!-- Кнопки -->
        <v-row id="buttons" class="mb-8">
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Кнопки (Buttons)</h2>
            <v-card class="pa-4">
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-btn color="primary">Primary</v-btn>
                <v-btn color="secondary">Secondary</v-btn>
                <v-btn color="success">Success</v-btn>
                <v-btn color="error">Error</v-btn>
                <v-btn color="warning">Warning</v-btn>
                <v-btn color="info">Info</v-btn>
              </div>
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-btn variant="outlined" color="primary">Outlined</v-btn>
                <v-btn variant="text" color="primary">Text</v-btn>
                <v-btn variant="tonal" color="primary">Tonal</v-btn>
                <v-btn variant="flat" color="primary">Flat</v-btn>
              </div>
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-btn size="x-small">X-Small</v-btn>
                <v-btn size="small">Small</v-btn>
                <v-btn size="default">Default</v-btn>
                <v-btn size="large">Large</v-btn>
                <v-btn size="x-large">X-Large</v-btn>
              </div>
              <div class="d-flex flex-wrap ga-2">
                <v-btn icon="mdi-heart" color="error"></v-btn>
                <v-btn prepend-icon="mdi-plus" color="primary">С иконкой</v-btn>
                <v-btn append-icon="mdi-arrow-right" color="secondary">Далее</v-btn>
                <v-btn loading color="primary">Загрузка</v-btn>
                <v-btn disabled>Недоступно</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Формы -->
        <v-row id="forms" class="mb-8">
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Формы и Поля ввода (Forms & Inputs)</h2>

            <!-- Базовые текстовые поля -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Базовые текстовые поля (Text Fields)</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="formData.name"
                    label="Имя"
                    placeholder="Введите ваше имя"
                    prepend-icon="mdi-account"
                  ></v-text-field>

                  <v-text-field
                    v-model="formData.email"
                    label="Email"
                    type="email"
                    prepend-icon="mdi-email"
                    hint="example@mail.com"
                  ></v-text-field>

                  <v-text-field
                    v-model="formData.password"
                    label="Пароль"
                    type="password"
                    prepend-icon="mdi-lock"
                    append-inner-icon="mdi-eye"
                  ></v-text-field>

                  <v-text-field
                    v-model="formData.phone"
                    label="Телефон"
                    type="tel"
                    prepend-icon="mdi-phone"
                    placeholder="+7 (999) 999-99-99"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="formData.website"
                    label="Веб-сайт"
                    type="url"
                    prepend-icon="mdi-web"
                    placeholder="https://example.com"
                  ></v-text-field>

                  <v-text-field
                    v-model="formData.search"
                    label="Поиск"
                    type="search"
                    prepend-inner-icon="mdi-magnify"
                    clearable
                  ></v-text-field>

                  <v-text-field
                    v-model="formData.number"
                    label="Количество"
                    type="number"
                    prepend-icon="mdi-numeric"
                    :min="0"
                    :max="100"
                  ></v-text-field>

                  <v-text-field
                    label="Поле только для чтения"
                    value="Нельзя редактировать"
                    readonly
                    prepend-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>

            <!-- Варианты стилей текстовых полей -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Варианты стилей полей ввода</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Default (Outlined)"
                    placeholder="По умолчанию"
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    label="Filled"
                    placeholder="Заполненный стиль"
                    variant="filled"
                  ></v-text-field>

                  <v-text-field
                    label="Solo"
                    placeholder="Solo стиль"
                    variant="solo"
                  ></v-text-field>

                  <v-text-field
                    label="Plain"
                    placeholder="Простой стиль"
                    variant="plain"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Underlined"
                    placeholder="С подчёркиванием"
                    variant="underlined"
                  ></v-text-field>

                  <v-text-field
                    label="Solo Inverted"
                    placeholder="Solo инвертированный"
                    variant="solo-inverted"
                  ></v-text-field>

                  <v-text-field
                    label="Solo Filled"
                    placeholder="Solo заполненный"
                    variant="solo-filled"
                  ></v-text-field>

                  <v-text-field
                    label="С ошибкой"
                    placeholder="Поле с ошибкой"
                    error-messages="Это поле обязательно"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>

            <!-- Textarea -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Многострочный текст (Textarea)</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-textarea
                    v-model="formData.message"
                    label="Сообщение"
                    rows="3"
                    prepend-icon="mdi-message"
                    variant="outlined"
                  ></v-textarea>

                  <v-textarea
                    label="Автоматическое изменение высоты"
                    auto-grow
                    rows="1"
                    variant="filled"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="6">
                  <v-textarea
                    label="С счётчиком символов"
                    counter
                    maxlength="200"
                    rows="3"
                    variant="outlined"
                  ></v-textarea>

                  <v-textarea
                    label="Очищаемое поле"
                    clearable
                    rows="2"
                    variant="solo"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card>

            <!-- Select, Autocomplete, Combobox -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Выпадающие списки</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="formData.country"
                    :items="['Россия', 'Украина', 'Беларусь', 'Казахстан', 'США', 'Германия', 'Франция']"
                    label="Страна (Select)"
                    prepend-icon="mdi-earth"
                    variant="outlined"
                  ></v-select>

                  <v-select
                    v-model="formData.countries"
                    :items="['Россия', 'Украина', 'Беларусь', 'Казахстан']"
                    label="Множественный выбор"
                    multiple
                    chips
                    variant="outlined"
                  ></v-select>

                  <v-autocomplete
                    v-model="formData.city"
                    :items="['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород']"
                    label="Город (Autocomplete)"
                    prepend-icon="mdi-city"
                    variant="outlined"
                  ></v-autocomplete>

                  <v-autocomplete
                    :items="['Первый', 'Второй', 'Третий']"
                    label="С кнопкой очистки"
                    clearable
                    variant="filled"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" md="6">
                  <v-combobox
                    v-model="formData.tags"
                    :items="['JavaScript', 'Vue.js', 'Nuxt', 'Vuetify', 'TypeScript', 'React']"
                    label="Теги (Combobox)"
                    multiple
                    chips
                    variant="outlined"
                  ></v-combobox>

                  <v-select
                    :items="[
                      { title: 'Малый', value: 'sm' },
                      { title: 'Средний', value: 'md' },
                      { title: 'Большой', value: 'lg' }
                    ]"
                    label="Размер"
                    variant="outlined"
                  ></v-select>

                  <v-select
                    :items="['Опция 1', 'Опция 2', 'Опция 3']"
                    label="Плотный режим"
                    density="compact"
                    variant="outlined"
                  ></v-select>

                  <v-select
                    :items="['Первый', 'Второй', 'Третий']"
                    label="С иконкой"
                    prepend-inner-icon="mdi-star"
                    variant="solo"
                  ></v-select>
                </v-col>
              </v-row>
            </v-card>

            <!-- Checkbox, Switch, Radio -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Чекбоксы, переключатели и радио-кнопки</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <h4 class="text-subtitle-1 mb-2">Чекбоксы (Checkboxes)</h4>
                  <v-checkbox
                    v-model="formData.agree"
                    label="Я согласен с условиями"
                    color="primary"
                  ></v-checkbox>

                  <v-checkbox
                    v-model="formData.subscribe"
                    label="Подписаться на рассылку"
                    color="success"
                  ></v-checkbox>

                  <v-checkbox
                    label="Неактивный чекбокс"
                    disabled
                  ></v-checkbox>

                  <v-checkbox
                    label="С иконкой"
                    color="error"
                    true-icon="mdi-check-circle"
                    false-icon="mdi-close-circle"
                  ></v-checkbox>

                  <h4 class="text-subtitle-1 mb-2 mt-4">Переключатели (Switches)</h4>
                  <v-switch
                    v-model="formData.notifications"
                    label="Уведомления"
                    color="primary"
                  ></v-switch>

                  <v-switch
                    v-model="formData.darkMode"
                    label="Тёмная тема"
                    color="secondary"
                    inset
                  ></v-switch>

                  <v-switch
                    label="Неактивный"
                    disabled
                  ></v-switch>

                  <v-switch
                    label="Загрузка"
                    loading
                    color="success"
                  ></v-switch>
                </v-col>

                <v-col cols="12" md="6">
                  <h4 class="text-subtitle-1 mb-2">Радио-кнопки (Radio Buttons)</h4>
                  <v-radio-group v-model="formData.gender">
                    <v-radio label="Мужской" value="male"></v-radio>
                    <v-radio label="Женский" value="female"></v-radio>
                    <v-radio label="Другое" value="other"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="formData.size" inline>
                    <template v-slot:label>
                      <div class="text-subtitle-1">Размер (inline)</div>
                    </template>
                    <v-radio label="S" value="s"></v-radio>
                    <v-radio label="M" value="m"></v-radio>
                    <v-radio label="L" value="l"></v-radio>
                    <v-radio label="XL" value="xl"></v-radio>
                  </v-radio-group>

                  <v-radio-group v-model="formData.priority">
                    <template v-slot:label>
                      <div class="text-subtitle-1">Приоритет</div>
                    </template>
                    <v-radio label="Низкий" value="low" color="success"></v-radio>
                    <v-radio label="Средний" value="medium" color="warning"></v-radio>
                    <v-radio label="Высокий" value="high" color="error"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card>

            <!-- Sliders -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Слайдеры (Sliders)</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-slider
                    v-model="formData.volume"
                    label="Громкость"
                    prepend-icon="mdi-volume-high"
                    :min="0"
                    :max="100"
                    thumb-label
                    color="primary"
                  ></v-slider>

                  <v-slider
                    v-model="formData.brightness"
                    label="Яркость"
                    :min="0"
                    :max="100"
                    :step="10"
                    thumb-label
                    color="orange"
                    tick-size="4"
                    show-ticks
                  ></v-slider>

                  <v-slider
                    v-model="formData.quality"
                    label="Качество"
                    :min="0"
                    :max="10"
                    :step="1"
                    thumb-label="always"
                    color="success"
                  ></v-slider>
                </v-col>

                <v-col cols="12" md="6">
                  <v-range-slider
                    v-model="formData.priceRange"
                    label="Диапазон цен"
                    :min="0"
                    :max="10000"
                    :step="100"
                    thumb-label
                    color="primary"
                  ></v-range-slider>

                  <v-range-slider
                    v-model="formData.timeRange"
                    label="Диапазон времени"
                    :min="0"
                    :max="24"
                    :step="1"
                    thumb-label
                    color="secondary"
                  ></v-range-slider>

                  <v-slider
                    label="Недоступный слайдер"
                    :model-value="50"
                    disabled
                  ></v-slider>
                </v-col>
              </v-row>
            </v-card>

            <!-- File Input -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Загрузка файлов (File Input)</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-file-input
                    v-model="formData.files"
                    label="Выберите файл"
                    prepend-icon="mdi-paperclip"
                    variant="outlined"
                  ></v-file-input>

                  <v-file-input
                    label="Множественный выбор"
                    multiple
                    chips
                    variant="filled"
                  ></v-file-input>

                  <v-file-input
                    label="Только изображения"
                    accept="image/*"
                    prepend-icon="mdi-image"
                    variant="outlined"
                  ></v-file-input>
                </v-col>

                <v-col cols="12" md="6">
                  <v-file-input
                    label="С показом размера"
                    show-size
                    variant="outlined"
                  ></v-file-input>

                  <v-file-input
                    label="С кнопкой очистки"
                    clearable
                    counter
                    variant="solo"
                  ></v-file-input>

                  <v-file-input
                    label="С кастомной иконкой"
                    prepend-icon="mdi-camera"
                    variant="outlined"
                    chips
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-card>

            <!-- Дата и время -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Выбор даты и времени (Date & Time Pickers)</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <!-- Date Picker в меню -->
                  <v-menu v-model="dateMenu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field
                        v-model="formData.date"
                        label="Выберите дату"
                        prepend-icon="mdi-calendar"
                        readonly
                        variant="outlined"
                        v-bind="props"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.date"
                      @update:model-value="dateMenu = false"
                      color="primary"
                    ></v-date-picker>
                  </v-menu>

                  <!-- Time Picker в меню -->
                  <v-menu v-model="timeMenu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field
                        v-model="formData.time"
                        label="Выберите время"
                        prepend-icon="mdi-clock"
                        readonly
                        variant="outlined"
                        v-bind="props"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="timeMenu"
                      v-model="formData.time"
                      format="24hr"
                      color="primary"
                    >
                      <template v-slot:actions>
                        <v-btn @click="timeMenu = false">Отмена</v-btn>
                        <v-btn color="primary" @click="timeMenu = false">OK</v-btn>
                      </template>
                    </v-time-picker>
                  </v-menu>

                  <!-- Date Picker с диапазоном -->
                  <v-menu v-model="dateRangeMenu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field
                        :model-value="dateRangeText"
                        label="Диапазон дат"
                        prepend-icon="mdi-calendar-range"
                        readonly
                        variant="outlined"
                        v-bind="props"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.dateRange"
                      multiple="range"
                      color="primary"
                    >
                      <template v-slot:actions>
                        <v-btn @click="dateRangeMenu = false">Отмена</v-btn>
                        <v-btn color="primary" @click="dateRangeMenu = false">OK</v-btn>
                      </template>
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="6">
                  <!-- Date Picker с множественным выбором -->
                  <v-menu v-model="multipleDateMenu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field
                        :model-value="multipleDateText"
                        label="Выбрать несколько дат"
                        prepend-icon="mdi-calendar-multiple"
                        readonly
                        variant="outlined"
                        v-bind="props"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.multipleDates"
                      multiple
                      color="secondary"
                    >
                      <template v-slot:actions>
                        <v-btn @click="multipleDateMenu = false">Отмена</v-btn>
                        <v-btn color="secondary" @click="multipleDateMenu = false">OK</v-btn>
                      </template>
                    </v-date-picker>
                  </v-menu>

                  <!-- Time Picker AM/PM формат -->
                  <v-menu v-model="timeAmPmMenu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field
                        v-model="formData.timeAmPm"
                        label="Время (AM/PM)"
                        prepend-icon="mdi-clock-outline"
                        readonly
                        variant="outlined"
                        v-bind="props"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="timeAmPmMenu"
                      v-model="formData.timeAmPm"
                      format="ampm"
                      color="secondary"
                    >
                      <template v-slot:actions>
                        <v-btn @click="timeAmPmMenu = false">Отмена</v-btn>
                        <v-btn color="secondary" @click="timeAmPmMenu = false">OK</v-btn>
                      </template>
                    </v-time-picker>
                  </v-menu>

                  <!-- Color Picker -->
                  <v-menu v-model="colorMenu" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                      <v-text-field
                        v-model="formData.color"
                        label="Выберите цвет"
                        prepend-icon="mdi-palette"
                        readonly
                        variant="outlined"
                        v-bind="props"
                      >
                        <template v-slot:append-inner>
                          <div
                            :style="{ backgroundColor: formData.color }"
                            style="width: 24px; height: 24px; border-radius: 4px; border: 1px solid #ccc;"
                          ></div>
                        </template>
                      </v-text-field>
                    </template>
                    <v-color-picker
                      v-model="formData.color"
                      mode="hex"
                    ></v-color-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-divider class="my-4"></v-divider>

              <!-- Date Picker напрямую (inline) -->
              <v-row>
                <v-col cols="12">
                  <h4 class="text-subtitle-1 mb-3">Date Picker (встроенный)</h4>
                </v-col>
                <v-col cols="12" md="6">
                  <v-date-picker
                    v-model="formData.inlineDate"
                    color="primary"
                    elevation="2"
                    show-adjacent-months
                  ></v-date-picker>
                </v-col>

                <v-col cols="12" md="6">
                  <v-date-picker
                    v-model="formData.monthPicker"
                    color="secondary"
                    elevation="2"
                    title="Выберите месяц"
                  ></v-date-picker>
                </v-col>
              </v-row>
            </v-card>

            <!-- OTP Input -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">OTP / Код подтверждения</h3>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <div class="text-center mb-3">
                    <p class="text-subtitle-1">Введите 6-значный код из SMS</p>
                  </div>
                  <v-otp-input
                    v-model="formData.otp"
                    length="6"
                    variant="outlined"
                  ></v-otp-input>
                </v-col>
              </v-row>
            </v-card>

            <!-- Специальные инпуты -->
            <v-card class="pa-4 mb-4">
              <h3 class="text-h6 mb-3">Специальные поля</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Поле с суффиксом"
                    suffix="кг"
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    label="Поле с префиксом"
                    prefix="₽"
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    label="С кнопкой внутри"
                    variant="outlined"
                    prepend-inner-icon="mdi-magnify"
                    append-inner-icon="mdi-microphone"
                  ></v-text-field>

                  <v-text-field
                    label="Загружаемое поле"
                    loading
                    variant="outlined"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Компактное поле"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    label="С постоянной подсказкой"
                    persistent-hint
                    hint="Эта подсказка всегда видна"
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    label="С валидацией"
                    :rules="[v => !!v || 'Поле обязательно', v => v.length >= 3 || 'Минимум 3 символа']"
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    label="С кастомным цветом"
                    color="purple"
                    variant="outlined"
                    prepend-icon="mdi-heart"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- Карточки -->
        <v-row id="cards" class="mb-8">
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Карточки (Cards)</h2>
          </v-col>

          <v-col cols="12" md="4">
            <v-card>
              <v-img
                src="https://picsum.photos/400/200"
                height="200"
                cover
              ></v-img>
              <v-card-title>Карточка с изображением</v-card-title>
              <v-card-subtitle>Подзаголовок карточки</v-card-subtitle>
              <v-card-text>
                Это пример карточки с изображением, заголовком и текстом. Vuetify предоставляет мощные компоненты карточек.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">Действие</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-heart" variant="text"></v-btn>
                <v-btn icon="mdi-share-variant" variant="text"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card color="primary" dark>
              <v-card-title>Цветная карточка</v-card-title>
              <v-card-text>
                Карточки могут иметь различные цвета и варианты. Этот пример использует цветной фон.
              </v-card-text>
              <v-card-actions>
                <v-btn variant="text">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card variant="outlined">
              <v-card-title>
                <v-icon start>mdi-information</v-icon>
                Карточка с рамкой
              </v-card-title>
              <v-card-text>
                Этот вариант карточки имеет рамку вместо тени. Отлично подходит для минималистичного дизайна.
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn block color="primary">Действие</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Таблицы и списки -->
        <v-row id="tables" class="mb-8">
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Таблицы и Списки (Tables & Lists)</h2>

            <!-- Таблица данных -->
            <v-card class="mb-4">
              <v-card-title>Таблица данных</v-card-title>
              <v-data-table
                :headers="tableHeaders"
                :items="tableItems"
                :items-per-page="5"
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon size="small" class="me-2" @click="editItem(item)">mdi-pencil</v-icon>
                  <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
                </template>
              </v-data-table>
            </v-card>

            <!-- Списки -->
            <v-card>
              <v-card-title>Списки</v-card-title>
              <v-list>
                <v-list-item
                  v-for="(item, i) in listItems"
                  :key="i"
                  :prepend-avatar="item.avatar"
                  :title="item.title"
                  :subtitle="item.subtitle"
                >
                  <template v-slot:append>
                    <v-btn icon="mdi-chevron-right" variant="text"></v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <!-- Оповещения и диалоги -->
        <v-row id="alerts" class="mb-8">
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Оповещения и Диалоги (Alerts & Dialogs)</h2>

            <!-- Алерты -->
            <v-card class="pa-4 mb-4">
              <h3 class="mb-3">Алерты</h3>
              <v-alert type="success" class="mb-2">Успешная операция!</v-alert>
              <v-alert type="info" class="mb-2">Информационное сообщение</v-alert>
              <v-alert type="warning" class="mb-2">Предупреждение</v-alert>
              <v-alert type="error" class="mb-2">Ошибка!</v-alert>
              <v-alert
                type="info"
                variant="outlined"
                closable
                class="mb-2"
                icon="mdi-information"
                title="С заголовком"
                text="Алерт с заголовком и возможностью закрытия"
              ></v-alert>
            </v-card>

            <!-- Snackbar -->
            <v-card class="pa-4 mb-4">
              <h3 class="mb-3">Snackbar (Всплывающие уведомления)</h3>
              <v-btn @click="snackbar = true" color="primary">Показать Snackbar</v-btn>
              <v-snackbar v-model="snackbar" :timeout="3000">
                Это всплывающее уведомление!
                <template v-slot:actions>
                  <v-btn color="pink" variant="text" @click="snackbar = false">Закрыть</v-btn>
                </template>
              </v-snackbar>
            </v-card>

            <!-- Диалог -->
            <v-card class="pa-4">
              <h3 class="mb-3">Диалоги</h3>
              <v-btn @click="dialog = true" color="primary">Открыть диалог</v-btn>
              <v-dialog v-model="dialog" max-width="500">
                <v-card>
                  <v-card-title>Пример диалога</v-card-title>
                  <v-card-text>
                    Это модальное окно. Оно используется для показа важной информации или получения подтверждения от пользователя.
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" @click="dialog = false">Отмена</v-btn>
                    <v-btn color="primary" @click="dialog = false">Подтвердить</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
        </v-row>

        <!-- Прочие компоненты -->
        <v-row id="misc" class="mb-8">
          <v-col cols="12">
            <h2 class="text-h4 mb-4">Прочие компоненты</h2>
          </v-col>

          <!-- Прогресс-бары -->
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3 class="mb-3">Индикаторы прогресса</h3>
              <v-progress-linear
                v-model="progress"
                color="primary"
                height="25"
                class="mb-4"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>

              <v-progress-linear
                indeterminate
                color="secondary"
                class="mb-4"
              ></v-progress-linear>

              <div class="text-center">
                <v-progress-circular
                  :model-value="progress"
                  :size="70"
                  :width="7"
                  color="primary"
                >
                  {{ Math.ceil(progress) }}%
                </v-progress-circular>
              </div>
            </v-card>
          </v-col>

          <!-- Чипсы и бейджи -->
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3 class="mb-3">Чипсы и Бейджи</h3>
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-chip color="primary">Чип</v-chip>
                <v-chip color="secondary" closable>Закрываемый</v-chip>
                <v-chip prepend-icon="mdi-account">С иконкой</v-chip>
                <v-chip variant="outlined">Outlined</v-chip>
                <v-chip size="small">Маленький</v-chip>
                <v-chip size="large">Большой</v-chip>
              </div>

              <h3 class="mb-3">Бейджи</h3>
              <div class="d-flex flex-wrap ga-4">
                <v-badge content="6" color="error">
                  <v-icon size="large">mdi-email</v-icon>
                </v-badge>
                <v-badge content="!" color="warning">
                  <v-icon size="large">mdi-bell</v-icon>
                </v-badge>
                <v-badge dot color="success">
                  <v-icon size="large">mdi-account</v-icon>
                </v-badge>
              </div>
            </v-card>
          </v-col>

          <!-- Тултипы -->
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3 class="mb-3">Тултипы (Подсказки)</h3>
              <div class="d-flex flex-wrap ga-2">
                <v-tooltip text="Подсказка сверху" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">Сверху</v-btn>
                  </template>
                </v-tooltip>

                <v-tooltip text="Подсказка снизу" location="bottom">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">Снизу</v-btn>
                  </template>
                </v-tooltip>

                <v-tooltip text="Подсказка слева" location="start">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">Слева</v-btn>
                  </template>
                </v-tooltip>

                <v-tooltip text="Подсказка справа" location="end">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">Справа</v-btn>
                  </template>
                </v-tooltip>
              </div>
            </v-card>
          </v-col>

          <!-- Tabs -->
          <v-col cols="12" md="6">
            <v-card>
              <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="tab-1">Таб 1</v-tab>
                <v-tab value="tab-2">Таб 2</v-tab>
                <v-tab value="tab-3">Таб 3</v-tab>
              </v-tabs>

              <v-window v-model="tab">
                <v-window-item value="tab-1">
                  <v-card-text>Содержимое первой вкладки</v-card-text>
                </v-window-item>
                <v-window-item value="tab-2">
                  <v-card-text>Содержимое второй вкладки</v-card-text>
                </v-window-item>
                <v-window-item value="tab-3">
                  <v-card-text>Содержимое третьей вкладки</v-card-text>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>

          <!-- Expansion Panels -->
          <v-col cols="12">
            <v-card>
              <v-card-title>Панели расширения</v-card-title>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-help-circle</v-icon>
                    Что такое Vuetify?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Vuetify — это библиотека компонентов Vue.js, основанная на Material Design. Она предоставляет множество готовых компонентов для быстрой разработки красивых приложений.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-palette</v-icon>
                    Поддержка тем
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Vuetify поддерживает светлые и темные темы, а также полную настройку цветовой палитры.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-icon start>mdi-responsive</v-icon>
                    Адаптивный дизайн
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Все компоненты Vuetify созданы с учетом адаптивности и отлично работают на любых устройствах.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>

          <!-- Timeline -->
          <v-col cols="12">
            <v-card class="pa-4">
              <h3 class="mb-3">Timeline (Временная шкала)</h3>
              <v-timeline side="end">
                <v-timeline-item
                  dot-color="success"
                  size="small"
                >
                  <template v-slot:opposite>
                    <div class="text-caption">Сегодня</div>
                  </template>
                  <div>
                    <div class="font-weight-bold">Проект завершен</div>
                    <div class="text-caption">Все задачи выполнены</div>
                  </div>
                </v-timeline-item>

                <v-timeline-item
                  dot-color="primary"
                  size="small"
                >
                  <template v-slot:opposite>
                    <div class="text-caption">Вчера</div>
                  </template>
                  <div>
                    <div class="font-weight-bold">Тестирование</div>
                    <div class="text-caption">Проведено тестирование</div>
                  </div>
                </v-timeline-item>

                <v-timeline-item
                  dot-color="warning"
                  size="small"
                >
                  <template v-slot:opposite>
                    <div class="text-caption">2 дня назад</div>
                  </template>
                  <div>
                    <div class="font-weight-bold">Разработка</div>
                    <div class="text-caption">Основная разработка</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </v-col>

          <!-- Rating -->
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3 class="mb-3">Рейтинг</h3>
              <v-rating
                v-model="rating"
                color="yellow-darken-3"
                length="5"
                size="large"
              ></v-rating>
              <p class="mt-2">Ваша оценка: {{ rating }} из 5</p>
            </v-card>
          </v-col>

          <!-- Skeleton Loader -->
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3 class="mb-3">Skeleton Loader</h3>
              <v-skeleton-loader
                type="article, actions"
                :loading="skeletonLoading"
              >
                <v-card>
                  <v-card-title>Загруженный контент</v-card-title>
                  <v-card-text>Это содержимое показывается после загрузки</v-card-text>
                  <v-card-actions>
                    <v-btn @click="skeletonLoading = !skeletonLoading">
                      {{ skeletonLoading ? 'Загрузить' : 'Показать skeleton' }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-skeleton-loader>
            </v-card>
          </v-col>
        </v-row>

        <!-- Footer -->
        <v-row>
          <v-col cols="12" class="text-center">
            <v-divider class="mb-4"></v-divider>
            <p class="text-h6">Это демонстрация основных компонентов Vuetify</p>
            <p class="text-subtitle-2">Для получения дополнительной информации посетите <a href="https://vuetifyjs.com/en/components/all/" target="_blank">vuetifyjs.com</a></p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- FAB кнопка -->
    <v-btn
      icon="mdi-arrow-up"
      color="primary"
      position="fixed"
      location="bottom end"
      size="large"
      @click="scrollToTop"
      style="bottom: 16px; right: 16px;"
    ></v-btn>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useTheme } from 'vuetify'
import type {
  FormData,
  TableItem,
  ListItem,
  TableHeader,
  Theme
} from '~/types'

const theme = ref<Theme>('light')
const drawer = ref<boolean>(true)
const dialog = ref<boolean>(false)
const snackbar = ref<boolean>(false)
const tab = ref<string>('tab-1')
const rating = ref<number>(4)
const progress = ref<number>(75)
const skeletonLoading = ref<boolean>(true)

const dateMenu = ref<boolean>(false)
const timeMenu = ref<boolean>(false)
const dateRangeMenu = ref<boolean>(false)
const multipleDateMenu = ref<boolean>(false)
const timeAmPmMenu = ref<boolean>(false)
const colorMenu = ref<boolean>(false)

const formData = ref<FormData>({
  name: '',
  email: '',
  password: '',
  phone: '',
  website: '',
  search: '',
  number: 0,
  message: '',
  country: '',
  countries: [],
  city: '',
  tags: [],
  agree: false,
  subscribe: false,
  notifications: true,
  darkMode: false,
  gender: 'male',
  size: 'm',
  priority: 'medium',
  volume: 50,
  brightness: 75,
  quality: 7,
  priceRange: [1000, 5000],
  timeRange: [9, 18],
  files: null,
  date: null,
  time: null,
  dateRange: [],
  multipleDates: [],
  timeAmPm: null,
  inlineDate: new Date(),
  monthPicker: new Date(),
  color: '#1867C0',
  otp: '',
})

// Форматирование дат для отображения
const dateRangeText = computed(() => {
  if (!formData.value.dateRange || formData.value.dateRange.length === 0) {
    return ''
  }
  if (formData.value.dateRange.length === 1) {
    return formatDate(formData.value.dateRange[0])
  }
  return `${formatDate(formData.value.dateRange[0])} - ${formatDate(formData.value.dateRange[formData.value.dateRange.length - 1])}`
})

const multipleDateText = computed(() => {
  if (!formData.value.multipleDates || formData.value.multipleDates.length === 0) {
    return ''
  }
  if (formData.value.multipleDates.length === 1) {
    return formatDate(formData.value.multipleDates[0])
  }
  return `${formData.value.multipleDates.length} дат выбрано`
})

const formatDate = (date: Date | string | null | undefined): string => {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('ru-RU')
}

const tableHeaders: TableHeader[] = [
  { title: 'ID', key: 'id', sortable: true },
  { title: 'Название', key: 'name' },
  { title: 'Категория', key: 'category' },
  { title: 'Цена', key: 'price' },
  { title: 'Действия', key: 'actions', sortable: false },
]

const tableItems: TableItem[] = [
  { id: 1, name: 'Товар 1', category: 'Электроника', price: '10 000 ₽' },
  { id: 2, name: 'Товар 2', category: 'Одежда', price: '2 500 ₽' },
  { id: 3, name: 'Товар 3', category: 'Книги', price: '500 ₽' },
  { id: 4, name: 'Товар 4', category: 'Спорт', price: '5 000 ₽' },
  { id: 5, name: 'Товар 5', category: 'Электроника', price: '25 000 ₽' },
]

const listItems: ListItem[] = [
  {
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: 'Иван Иванов',
    subtitle: 'Онлайн',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=2',
    title: 'Мария Петрова',
    subtitle: 'Был(а) 5 минут назад',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=3',
    title: 'Алексей Сидоров',
    subtitle: 'Был(а) час назад',
  },
]

const vuetifyTheme = useTheme()

const toggleTheme = (): void => {
  theme.value = vuetifyTheme.global.name.value === 'light' ? 'dark' : 'light'
  vuetifyTheme.global.name.value = theme.value
}

const scrollToSection = (id: string): void => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const editItem = (item: TableItem): void => {
  console.log('Редактирование:', item)
}

const deleteItem = (item: TableItem): void => {
  console.log('Удаление:', item)
}

// Анимация прогресс-бара
onMounted(() => {
  setInterval(() => {
    progress.value = progress.value >= 100 ? 0 : progress.value + 1
  }, 100)
})
</script>

<style scoped>
.v-container {
  max-width: 1400px;
}
</style>

