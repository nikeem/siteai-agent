from fastapi import APIRouter
from . import chat, settings, conversion, health

api_router = APIRouter()

# Подключаем роуты
api_router.include_router(health.router, tags=["health"])
api_router.include_router(chat.router, tags=["chat"])
api_router.include_router(settings.router, tags=["settings"])
api_router.include_router(conversion.router, tags=["conversion"])

__all__ = ["api_router"]
