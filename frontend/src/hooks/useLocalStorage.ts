import { useState, useCallback } from 'react';

/**
 * Кастомный хук для синхронизации состояния с localStorage
 *
 * @param key - Ключ для хранения в localStorage
 * @param initialValue - Начальное значение
 * @returns [value, setValue, removeValue] - Текущее значение, функция обновления, функция удаления
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  // Получаем значение из localStorage или используем начальное
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Ошибка чтения из localStorage (ключ: ${key}):`, error);
      return initialValue;
    }
  });

  // Обновляем localStorage при изменении значения
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        // Используем функциональное обновление useState для работы с актуальным значением
        setStoredValue((currentValue) => {
          const valueToStore = value instanceof Function ? value(currentValue) : value;

          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }

          return valueToStore;
        });
      } catch (error) {
        console.error(`Ошибка записи в localStorage (ключ: ${key}):`, error);
      }
    },
    [key] // Убрали storedValue из зависимостей!
  );

  // Функция удаления значения из localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);

      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Ошибка удаления из localStorage (ключ: ${key}):`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
