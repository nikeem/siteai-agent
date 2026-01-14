from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.models.schemas import ChatRequest, ChatResponse
from app.agents.dialog_manager import DialogManager
from app.models.schemas import AgentSettings

router = APIRouter()

# Временное хранилище настроек (в продакшене - в БД)
default_settings = AgentSettings()

# Временное хранилище сессий
sessions: dict = {}


@router.post("/chat", response_model=ChatResponse)
async def send_message(request: ChatRequest):
    """Обработать сообщение от пользователя"""

    try:
        # Получаем или создаём dialog manager для сессии
        session_id = request.session_id or "default"
        if session_id not in sessions:
            sessions[session_id] = DialogManager(default_settings)

        dialog_manager = sessions[session_id]

        # Обрабатываем сообщение
        response = await dialog_manager.process_message(
            message=request.message,
            history=request.history,
            session_id=session_id,
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
