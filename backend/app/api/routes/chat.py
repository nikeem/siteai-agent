from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.schemas import ChatRequest, ChatResponse
from app.agents.dialog_manager import DialogManager
from app.models.schemas import AgentSettings
from app.api.routes.settings import settings_store

router = APIRouter()

# Временное хранилище настроек (в продакшене - в БД)
default_settings = AgentSettings()

# Временное хранилище сессий
sessions: dict = {}


@router.post("/chat", response_model=ChatResponse)
async def send_message(request: ChatRequest):
    """Обработать сообщение от пользователя"""

    try:
        # Получаем site_id из запроса
        site_id = request.site_id or "default"

        # Получаем настройки для конкретного сайта
        agent_settings = settings_store.get(site_id, default_settings)

        # Получаем или создаём dialog manager для сессии
        session_id = request.session_id or "default"
        session_key = f"{site_id}:{session_id}"

        if session_key not in sessions:
            sessions[session_key] = DialogManager(agent_settings)

        dialog_manager = sessions[session_key]

        # Обрабатываем сообщение
        response = await dialog_manager.process_message(
            message=request.message,
            history=request.history,
            session_id=session_key,
        )

        return response

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/sessions/{session_id}", response_model=dict)
async def get_session(session_id: str):
    """Получить информацию о сессии"""
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")

    return {
        "session_id": session_id,
        "exists": True,
    }
