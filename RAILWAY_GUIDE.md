# Деплой на Railway через веб-интерфейс (пошаговая инструкция)

## 🚀 Деплой Backend на Railway

### Шаг 1: Создайте аккаунт Railway

1. Откройте https://railway.app/
2. Войдите через GitHub
3. Перейдите в dashboard: https://railway.app/dashboard

### Шаг 2: Создайте новый проект

1. Нажмите "New Project" → "Deploy from GitHub repo"
2. Выберите репозиторий: `nikeem/siteai-agent`
3. Railway определит Python проект

### Шаг 3: Настройки

**Root Directory**: `backend`

**Start Command**:
```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

### Шаг 4: Environment Variables

В Railway → Variables добавьте:

```
OPENAI_API_KEY=sk-rQquJGhxsILSH91o4HLRjxpr2mZoIICe
OPENAI_BASE_URL=https://routerai.ru/api/v1
DEFAULT_MODEL=openai/o4-mini
PORT=8000
```

### Шаг 5: Деплой

Нажмите "Deploy" → подождите 2-5 минут

### Шаг 6: Получить URL

Railway → Domains → скопируйте URL:
```
https://xxx.up.railway.app
```

API будет по: `https://xxx.up.railway.app/api/v1`

### Шаг 7: Проверка

```bash
curl https://xxx.up.railway.app/api/v1/health
```

---

## 🎨 Настроить Vercel

### Vercel → Settings → Environment Variables

Добавьте:
```
VITE_API_URL=https://xxx.up.railway.app/api/v1
```

(замените xxx на ваш домен от Railway)

Vercel автоматически передеплоится.

---

## ✅ Готово!

AI агент работает:
- ✅ Backend на Railway
- ✅ Frontend на Vercel
