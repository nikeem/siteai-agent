from fastapi import APIRouter, HTTPException
from typing import Dict
from app.models.schemas import AgentSettings

router = APIRouter()

# Временное хранилище настроек (в продакшене - в БД)
# Ключ: site_id, Значение: AgentSettings
settings_store: Dict[str, AgentSettings] = {
    "default": AgentSettings()
}


@router.get("/settings", response_model=AgentSettings)
async def get_settings(site_id: str = "default") -> AgentSettings:
    """Получить настройки агента для сайта"""

    if site_id not in settings_store:
        # Возвращаем настройки по умолчанию
        return settings_store["default"]

    return settings_store[site_id]


@router.put("/settings", response_model=AgentSettings)
async def update_settings(
    settings: AgentSettings,
    site_id: str = "default"
) -> AgentSettings:
    """Обновить настройки агента для сайта"""

    settings_store[site_id] = settings
    return settings


@router.delete("/settings")
async def delete_settings(site_id: str = "default"):
    """Удалить настройки агента (сбросить на дефолтные)"""

    if site_id in settings_store and site_id != "default":
        del settings_store[site_id]

    return {"message": "Settings deleted"}
