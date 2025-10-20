/**
 * Composable для форматирования дат
 */

/**
 * Форматирует дату в строку согласно локали
 * @param date - Дата для форматирования
 * @param locale - Локаль (по умолчанию 'ru-RU')
 * @returns Отформатированная строка даты или пустая строка
 */
export const useDateFormatter = () => {
  const formatDate = (
    date: Date | string | null | undefined,
    locale: string = 'ru-RU'
  ): string => {
    if (!date) return ''
    const d = typeof date === 'string' ? new Date(date) : date
    return d.toLocaleDateString(locale)
  }

  /**
   * Форматирует диапазон дат
   * @param dates - Массив дат
   * @param locale - Локаль (по умолчанию 'ru-RU')
   * @returns Отформатированная строка диапазона дат
   */
  const formatDateRange = (
    dates: Date[],
    locale: string = 'ru-RU'
  ): string => {
    if (!dates || dates.length === 0) return ''
    
    if (dates.length === 1) {
      return formatDate(dates[0], locale)
    }
    
    const firstDate = formatDate(dates[0], locale)
    const lastDate = formatDate(dates[dates.length - 1], locale)
    
    return `${firstDate} - ${lastDate}`
  }

  /**
   * Форматирует множественные даты
   * @param dates - Массив дат
   * @param locale - Локаль (по умолчанию 'ru-RU')
   * @returns Строка с описанием выбранных дат
   */
  const formatMultipleDates = (
    dates: Date[],
    locale: string = 'ru-RU'
  ): string => {
    if (!dates || dates.length === 0) return ''
    
    if (dates.length === 1) {
      return formatDate(dates[0], locale)
    }
    
    return `${dates.length} дат выбрано`
  }

  return {
    formatDate,
    formatDateRange,
    formatMultipleDates,
  }
}

