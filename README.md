# SiteAI Agent

AI-агент для консультирования посетителей сайта в реальном времени с целью конверсии.

## Возможности

- 🤖 Умный консультант на базе AI (OpenAI/Anthropic)
- 💬 Общение в реальном времени через виджет
- 🎯 Выявление потребностей и предложение решений
- 📞 Конверсия: оставление контактов, переход в Telegram, обратный звонок
- ⚙️ Настраиваемые сценарии и стиль общения
- 📱 Адаптивный дизайн для мобильных устройств

## Архитектура

```
siteai01/
├── backend/          # Python (FastAPI + AI Engine)
├── frontend/         # Node.js (React Widget)
└── docker-compose.yml
```

## Быстрый старт

### Вариант 1: Docker Compose (рекомендуется)

```bash
# Клонирование и настройка
git clone <repo>
cd siteai01

# Настройка backend
cp backend/.env.example backend/.env
# Отредактируйте backend/.env, добавьте API ключи

# Настройка frontend
cp frontend/.env.example frontend/.env

# Запуск всех сервисов
docker-compose up

# Фронтенд: http://localhost:3000
# Бэкенд: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Вариант 2: Локальная разработка

#### Backend

```bash
cd backend

# Создание виртуального окружения
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Установка зависимостей
pip install -r requirements.txt

# Настройка .env
cp .env.example .env
# Отредактируйте .env, добавьте OPENAI_API_KEY или ANTHROPIC_API_KEY

# Запуск
uvicorn app.main:app --reload --port 8000
```

#### Frontend

```bash
cd frontend

# Установка зависимостей
npm install

# Запуск
npm run dev
```

## Требования

- **Backend**: Python 3.11+
- **Frontend**: Node.js 18+
- **AI Provider**: OpenAI API key или Anthropic API key
- **Optional**: PostgreSQL, Redis (для продакшена)

## API Документация

После запуска бэкенда доступна Swagger документация:
http://localhost:8000/docs

## Основные Endpoints

### Chat
- `POST /api/v1/chat` - Отправить сообщение
- `GET /api/v1/sessions/{session_id}` - Получить сессию

### Settings
- `GET /api/v1/settings` - Получить настройки агента
- `PUT /api/v1/settings` - Обновить настройки

### Conversion
- `POST /api/v1/conversion/contact` - Отправить контакты
- `POST /api/v1/conversion/callback` - Запросить звонок

## Конфигурация AI агента

Настройки управляются через API или админ-панель:

- **system_prompt** - базовая личность агента
- **conversation_style** - стиль общения (formal/friendly/expert)
- **products_services** - база знаний о продуктах
- **conversion_goals** - приоритеты конверсии
- **business_hours** - часы работы
- **primary_color** - цвет виджета
- **widget_position** - позиция виджета
- **welcome_message** - приветственное сообщение

## Интеграция на сайт

### NPM пакет

```bash
npm install siteai-widget
```

```tsx
import { ChatWidget } from 'siteai-widget';

<ChatWidget siteId="your-site-id" />
```

### CDN

```html
<script src="https://cdn.siteai.ai/widget.js"></script>
<script>
  SiteAIWidget.init({
    siteId: 'your-site-id'
  });
</script>
```

## Разработка

### Backend команды

```bash
cd backend

# Тесты
pytest

# Линтинг
black app/
flake8 app/
mypy app/
```

### Frontend команды

```bash
cd frontend

# Сборка
npm run build

# Типизация
npm run type-check

# Линтинг
npm run lint
```

## License

MIT
