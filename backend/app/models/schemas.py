from pydantic import BaseModel, Field
from typing import List, Optional, Literal
from datetime import datetime


class ChatMessage(BaseModel):
    """Сообщение чата"""
    id: str
    role: Literal["user", "assistant", "system"]
    content: str
    timestamp: datetime


class ChatRequest(BaseModel):
    """Запрос на обработку сообщения"""
    message: str = Field(..., min_length=1, max_length=5000)
    history: List[ChatMessage] = []
    site_id: Optional[str] = None
    session_id: Optional[str] = None


class ChatResponse(BaseModel):
    """Ответ от AI агента"""
    message: str
    suggested_actions: Optional[List[str]] = None
    conversion_request: Optional["ConversionRequest"] = None


class ConversionRequest(BaseModel):
    """Запрос на конверсионное действие"""
    type: Literal["contact", "telegram", "callback"]
    reason: str


class ConversionData(BaseModel):
    """Данные для конверсии"""
    type: Literal["contact", "telegram", "callback"]
    name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    preferred_time: Optional[str] = None
    message: Optional[str] = None


class AgentSettings(BaseModel):
    """Настройки AI агента"""
    system_prompt: str = "Вы - полезный консультант, помогающий посетителям сайта."
    conversation_style: Literal["formal", "friendly", "expert"] = "friendly"
    products_services: List[str] = []
    conversion_goals: List[Literal["contact", "telegram", "callback"]] = ["contact"]
    business_hours: dict = {
        "work_days": [1, 2, 3, 4, 5],
        "work_hours": {"start": "09:00", "end": "18:00"}
    }
    primary_color: str = "#007bff"
    widget_position: Literal["bottom-right", "bottom-left"] = "bottom-right"
    welcome_message: str = "Здравствуйте! Я помогу вам выбрать продукт или услугу."


class HealthResponse(BaseModel):
    """Health check ответ"""
    status: Literal["ok", "error"]
    timestamp: str
    version: str
