# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Проект

AI-агент для консультирования посетителей сайта в реальном времени. Агент выявляет потребности, уточняет детали, предлагает решения и направляет к конверсии (оставление контактов, переход в Telegram-бот, обратный звонок).

## Архитектура

### Структура проекта

```
siteai01/
├── backend/          # Python бэкенд (AI-агент, API)
│   ├── app/          # Основное приложение
│   ├── agents/       # AI-агенты и логика диалогов
│   ├── api/          # API endpoints
│   ├── models/       # Модели данных
│   ├── config/       # Конфигурации и настройки агента
│   └── requirements.txt
├── frontend/         # Node.js фронтенд (виджет)
│   ├── src/
│   │   ├── components/    # React компоненты виджета
│   │   ├── services/      # API клиент
│   │   └── types/         # TypeScript типы
│   └── package.json
└── docker-compose.yml # Для запуска обоих сервисов
```

### Компоненты системы

**Backend (Python):**
- **FastAPI** - REST API для общения с фронтендом
- **AI Engine** - обработка сообщений через LLM (OpenAI/Anthropic/локальные модели)
- **Dialog Manager** - управление состоянием диалога, сценарии консультирования
- **Conversion Handler** - логика конверсионных действий (сбор контактов, редирект в Telegram)
- **Settings Service** - управление настройками агента (ton of voice, стиль общения, продукты)

**Frontend (Node.js/React):**
- **Widget Component** - встраиваемый чат-виджет для сайтов клиентов
- **WebSocket Client** - real-time соединение с бэкендом
- **Configuration Panel** - интерфейс настройки агента для владельца сайта

### Настройки агента

Настройки хранятся в `backend/config/` и управляются через админ-панель:
- **system_prompt** - базовая личность агента
- **conversation_style** - стиль общения (формальный/дружелюбный/экспертный)
- **products_services** - база знаний о продуктах/услугах клиента
- **conversion_goals** - приоритеты конверсии (контакты/Telegram/звонок)
- **business_hours** - часы работы для обратного звонка

## Команды разработки

### Backend (Python)

```bash
cd backend

# Создание виртуального окружения
python3 -m venv venv
source venv/bin/activate  # На Windows: venv\Scripts\activate

# Установка зависимостей
pip install -r requirements.txt

# Запуск сервера разработки
uvicorn app.main:app --reload --port 8000

# Запуск тестов
pytest

# Линтинг
black app/
flake8 app/
```

### Frontend (Node.js)

```bash
cd frontend

# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev

# Сборка для продакшена
npm run build

# Типизация
npm run type-check

# Линтинг
npm run lint
```

### Одновременный запуск обоих сервисов

```bash
# Из корня проекта
docker-compose up
```

## API

### Основные endpoints

- `POST /api/v1/chat` - отправка сообщения пользователя
- `GET /api/v1/settings` - получение настроек агента
- `PUT /api/v1/settings` - обновление настроек
- `POST /api/v1/conversion/contact` - отправка контактов
- `POST /api/v1/conversion/callback` - запрос обратного звонка
- `GET /api/v1/health` - health check

## Ключевые файлы для понимания архитектуры

- `backend/app/agents/dialog_manager.py` - логика управления диалогом и состоянием
- `backend/app/agents/conversion_handler.py` - обработка конверсионных действий
- `backend/app/config/settings.py` - схема настроек агента
- `backend/app/api/routes/chat.py` - WebSocket/REST обработчики чата
- `frontend/src/components/Widget/ChatWidget.tsx` - главный компонент виджета
- `frontend/src/services/api.ts` - API клиент для общения с бэкендом
