from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator
from typing import List, Literal
from functools import lru_cache


class Settings(BaseSettings):
    """Конфигурация приложения"""

    # API
    API_V1_PREFIX: str = "/api/v1"
    PROJECT_NAME: str = "SiteAI Agent Backend"
    VERSION: str = "0.1.0"

    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    RELOAD: bool = True

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://user:password@localhost/siteai"
    DATABASE_URL_SYNC: str = "postgresql://user:password@localhost/siteai"

    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"

    # AI Providers
    OPENAI_API_KEY: str = ""
    OPENAI_BASE_URL: str = ""  # Кастомный base URL для OpenAI-совместимых API
    ANTHROPIC_API_KEY: str = ""
    DEFAULT_AI_PROVIDER: Literal["openai", "anthropic"] = "openai"
    DEFAULT_MODEL: str = "gpt-4-turbo-preview"

    # JWT
    SECRET_KEY: str = "your-secret-key-here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 дней

    # CORS
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:5173"]

    # Telegram
    TELEGRAM_BOT_TOKEN: str = ""
    TELEGRAM_WEBHOOK_URL: str = ""

    # Email (для обратного звонка)
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra="ignore"
    )

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors_origins(cls, v) -> List[str]:
        """Парсит CORS_ORIGINS из строки или списка"""
        if isinstance(v, str):
            return [origin.strip() for origin in v.split(",")]
        return v


@lru_cache()
def get_settings() -> Settings:
    """Получить закэшированные настройки"""
    return Settings()
