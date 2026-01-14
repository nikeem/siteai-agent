# Деплой проекта SiteAI Agent

## 📋 Архитектура деплоя

Проект состоит из двух частей, которые деплоятся отдельно:

1. **Backend (Python/FastAPI)** → Railway, Render или Fly.io
2. **Frontend (React/Vite)** → Vercel, Netlify

---

## 🚀 Деплой Backend на Railway (рекомендуется)

### 1. Подготовка Railway

1. Зарегистрируйтесь на https://railway.app/
2. Установите Railway CLI: `npm install -g @railway/cli`
3. Авторизуйтесь: `railway login`

### 2. Деплой

```bash
cd backend

# Инициализация Railway проекта
railway init

# Деплой
railway up

# Получить URL backend
railway domain
```

### 3. Настройка Environment Variables в Railway

Зайдите в Railway проект → Variables и добавьте:

```bash
OPENAI_API_KEY=sk-rQquJGhxsILSH91o4HLRjxpr2mZoIICe
OPENAI_BASE_URL=https://routerai.ru/api/v1
DEFAULT_MODEL=openai/o4-mini
PORT=8000
```

### 4. Получить URL Backend

После деплоя Railway выдаст URL вида:
```
https://your-backend.railway.app
```

API будет доступен по: `https://your-backend.railway.app/api/v1`

---

## 🎨 Деплой Frontend на Vercel

### 1. Подключить GitHub репозиторий к Vercel

1. Зайдите на https://vercel.com/
2. Нажмите "Add New Project"
3. Импортируйте репозиторий `nikeem/siteai-agent`

### 2. Настройки Vercel

**Root Directory**: `frontend`

**Environment Variables** (настройки проекта → environment):

```bash
VITE_API_URL=https://your-backend.railway.app/api/v1
```

Замените `your-backend.railway.app` на реальный URL от Railway!

### 3. Деплой

Нажмите "Deploy"

---

## 🔗 Альтернативы: Деплой Backend на других платформах

### Render (есть бесплатный tier)

1. Зарегистрируйтесь на https://render.com/
2. Создайте "New Web Service"
3. Подключите GitHub репозиторий
4. Настройки:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. Добавьте Environment Variables
6. Deploy

### Fly.io

```bash
# Установка
curl -L https://fly.io/install.sh | sh

# Авторизация
fly auth login

# Деплой backend
cd backend
fly launch
fly deploy
```

---

## ✅ Проверка деплоя

### 1. Backend

```bash
# Health check
curl https://your-backend.railway.app/api/v1/health

# Должен вернуть:
# {"status":"ok","timestamp":"...","version":"0.1.0"}
```

### 2. Frontend

Откройте URL Vercel (вида `https://your-project.vercel.app`)

Проверьте консоль браузера (F12) - не должно быть ошибок API.

---

## 🐛 Troubleshooting

### Ошибка 404 на Vercel

**Причина**: Frontend не может найти backend API.

**Решение**:
1. Проверьте что VITE_API_URL правильный в Vercel settings
2. Проверьте что backend_deployed и доступен
3. Проверьте CORS в backend settings

### CORS ошибки

В backend `.env` добавьте домен Vercel:

```bash
CORS_ORIGINS=https://your-project.vercel.app,https://another-domain.com
```

### Backend не запускается на Railway

Проверьте логи: `railway logs`

Убедитесь что все environment variables настроены.

---

## 📞 Что дальше?

После успешного деплоя:

1. ✅ Протестируйте виджет на продакшене
2. ✅ Настройте свой домен (опционально)
3. ✅ Добавьте мониторинг (Sentry, LogRocket)
4. ✅ Настройте CI/CD для автоматических деплоев
