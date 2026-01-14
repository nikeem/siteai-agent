from fastapi import APIRouter, HTTPException
from app.models.schemas import ConversionData
import json
from datetime import datetime

router = APIRouter()

# Временное хранилище конверсий (в продакшене - в БД и отправка в CRM/Telegram)
conversions_store = []


@router.post("/conversion/contact")
async def submit_contact(data: ConversionData):
    """Обработать отправку контактов"""

    try:
        # Сохраняем конверсию
        conversion = {
            "id": len(conversions_store) + 1,
            "type": data.type,
            "name": data.name,
            "phone": data.phone,
            "email": data.email,
            "message": data.message,
            "timestamp": datetime.now().isoformat(),
        }

        conversions_store.append(conversion)

        # TODO: В продакшене здесь будет отправка в CRM, email, Telegram и т.д.

        return {
            "success": True,
            "message": "Спасибо! Ваши контакты успешно отправлены. Мы свяжемся с вами в ближайшее время.",
            "conversion_id": conversion["id"]
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/conversion/callback")
async def request_callback(phone: str, preferred_time: str = None):
    """Запросить обратный звонок"""

    try:
        # Сохраняем запрос на звонок
        callback_request = {
            "id": len(conversions_store) + 1,
            "type": "callback",
            "phone": phone,
            "preferred_time": preferred_time,
            "timestamp": datetime.now().isoformat(),
        }

        conversions_store.append(callback_request)

        # TODO: В продакшене здесь будет интеграция с телефонии/CRM

        return {
            "success": True,
            "message": f"Спасибо! Мы перезвоним вам по номеру {phone}" +
                      (f" в {preferred_time}" if preferred_time else " в ближайшее время"),
            "request_id": callback_request["id"]
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/conversion/list")
async def get_conversions():
    """Получить список всех конверсий (для админки)"""

    return {
        "total": len(conversions_store),
        "conversions": conversions_store
    }
