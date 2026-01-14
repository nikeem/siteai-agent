from typing import List, Optional
from openai import AsyncOpenAI
from anthropic import AsyncAnthropic
from app.models.schemas import ChatMessage, AgentSettings
from app.config import get_settings

settings = get_settings()


class AIEngine:
    """AI движок для обработки сообщений"""

    def __init__(self, agent_settings: AgentSettings):
        self.settings = agent_settings
        self.openai_client = None
        self.anthropic_client = None

        if settings.OPENAI_API_KEY:
            client_kwargs = {"api_key": settings.OPENAI_API_KEY}
            if settings.OPENAI_BASE_URL:
                client_kwargs["base_url"] = settings.OPENAI_BASE_URL
            self.openai_client = AsyncOpenAI(**client_kwargs)

        if settings.ANTHROPIC_API_KEY:
            self.anthropic_client = AsyncAnthropic(api_key=settings.ANTHROPIC_API_KEY)

    async def process_message(
        self,
        message: str,
        history: List[ChatMessage],
    ) -> str:
        """Обработать сообщение и сгенерировать ответ"""

        # Формируем контекст из истории
        messages = self._build_messages_context(message, history)

        # Выбираем провайдера AI
        if settings.DEFAULT_AI_PROVIDER == "openai" and self.openai_client:
            return await self._process_with_openai(messages)
        elif settings.DEFAULT_AI_PROVIDER == "anthropic" and self.anthropic_client:
            return await self._process_with_anthropic(messages)
        else:
            # Fallback на простой ответ
            return self._get_fallback_response(message)

    def _build_messages_context(
        self,
        user_message: str,
        history: List[ChatMessage],
    ) -> List[dict]:
        """Строит контекст сообщений для AI"""

        messages = []

        # System prompt на основе настроек
        system_prompt = self._build_system_prompt()
        messages.append({"role": "system", "content": system_prompt})

        # История диалога
        for msg in history[-10:]:  # Последние 10 сообщений
            if msg.role in ["user", "assistant"]:
                messages.append({
                    "role": msg.role,
                    "content": msg.content
                })

        # Текущее сообщение
        messages.append({"role": "user", "content": user_message})

        return messages

    def _build_system_prompt(self) -> str:
        """Строит system prompt на основе настроек агента"""

        style_prompts = {
            "formal": "Вы общаетесь в официальном, профессиональном стиле.",
            "friendly": "Вы общаетесь дружелюбно и неформально.",
            "expert": "Вы - эксперт в данной области, даёте глубокие профессиональные консультации."
        }

        prompt = f"""{self.settings.system_prompt}

{style_prompts.get(self.settings.conversation_style, "")}

Информация о продуктах и услугах:
{chr(10).join(f"- {product}" for product in self.settings.products_services) if self.settings.products_services else "Продукты и услуги не указаны"}

Ваша цель - помочь посетителю и направить его к конверсии.
Приоритетные способы конверсии: {', '.join(self.settings.conversion_goals)}

Часы работы: {self.settings.business_hours.get('work_hours', {})} (Пн-Пт)
"""

        return prompt

    async def _process_with_openai(self, messages: List[dict]) -> str:
        """Обрабатывает сообщение через OpenAI"""
        try:
            response = await self.openai_client.chat.completions.create(
                model=settings.DEFAULT_MODEL,
                messages=messages,
                temperature=0.7,
                max_tokens=1000,
            )

            return response.choices[0].message.content or "Извините, не удалось сгенерировать ответ."

        except Exception as e:
            print(f"OpenAI Error: {e}")
            return "Произошла ошибка при обработке запроса."

    async def _process_with_anthropic(self, messages: List[dict]) -> str:
        """Обрабатывает сообщение через Anthropic"""
        try:
            # Преобразуем сообщения в формат Anthropic
            system_message = ""
            anthropic_messages = []

            for msg in messages:
                if msg["role"] == "system":
                    system_message = msg["content"]
                else:
                    anthropic_messages.append(msg)

            response = await self.anthropic_client.messages.create(
                model="claude-3-sonnet-20240229",
                system=system_message,
                messages=anthropic_messages,
                max_tokens=1000,
            )

            return response.content[0].text

        except Exception as e:
            print(f"Anthropic Error: {e}")
            return "Произошла ошибка при обработке запроса."

    def _get_fallback_response(self, message: str) -> str:
        """Запасной ответ если AI недоступен"""
        return "Спасибо за сообщение. Наш консультант скоро свяжется с вами."
