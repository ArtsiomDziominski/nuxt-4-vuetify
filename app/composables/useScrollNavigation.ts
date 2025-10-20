/**
 * Composable для прокрутки и навигации по странице
 */

export const useScrollNavigation = () => {
  /**
   * Прокручивает страницу к элементу с заданным ID
   * @param id - ID элемента для прокрутки
   * @param behavior - Тип прокрутки ('smooth' или 'auto')
   */
  const scrollToSection = (id: string, behavior: ScrollBehavior = 'smooth'): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior })
    }
  }

  /**
   * Прокручивает страницу наверх
   * @param behavior - Тип прокрутки ('smooth' или 'auto')
   */
  const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
    window.scrollTo({ top: 0, behavior })
  }

  /**
   * Прокручивает страницу вниз
   * @param behavior - Тип прокрутки ('smooth' или 'auto')
   */
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth'): void => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior 
    })
  }

  /**
   * Получает текущую позицию прокрутки
   * @returns Объект с координатами x и y
   */
  const getScrollPosition = (): { x: number; y: number } => {
    return {
      x: window.scrollX,
      y: window.scrollY,
    }
  }

  return {
    scrollToSection,
    scrollToTop,
    scrollToBottom,
    getScrollPosition,
  }
}

