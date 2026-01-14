from typing import List, Optional
from datetime import datetime
from app.models.schemas import ChatMessage, ChatResponse, ConversionRequest, AgentSettings
from app.agents.ai_engine import AIEngine


class DialogManager:
    """Управляет диалогом и конверсией"""

    def __init__(self, settings: AgentSettings):
        self.settings = settings
        self.ai_engine = AIEngine(settings)
        self.conversation_stage = "greeting"  # greeting, needs_analysis, solution, conversion

    async def process_message(
        self,
        message: str,
        history: List[ChatMessage],
        session_id: Optional[str] = None,
    ) -> ChatResponse:
        """Обрабатывает сообщение и возвращает ответ"""

        # Получаем ответ от AI
        ai_response = await self.ai_engine.process_message(message, history)

        # Анализируем необходимость конверсии
        conversion_request = self._check_conversion_needed(message, history)

        # Формируем предложенные действия
        suggested_actions = self._get_suggested_actions(self.conversation_stage)

        return ChatResponse(
            message=ai_response,
            suggested_actions=suggested_actions,
            conversion_request=conversion_request,
        )

    def _check_conversion_needed(
        self,
        message: str,
        history: List[ChatMessage],
    ) -> Optional[ConversionRequest]:
        """Проверяет, нужно ли предложить конверсию"""

        # Ключевые слова для определения готовности к конверсии
        conversion_triggers = [
            "купить", "заказать", "хочу", "интересует",
            "сколько стоит", "цена", "оплата",
            "связаться", "перезвонить", "написать"
        ]

        message_lower = message.lower()

        # Проверяем триггеры
        if any(trigger in message_lower for trigger in conversion_triggers):
            # Выбираем тип конверсии на основе настроек
            if self.settings.conversion_goals:
                conversion_type = self.settings.conversion_goals[0]
                reason = self._get_conversion_reason(conversion_type)

                return ConversionRequest(
                    type=conversion_type,
                    reason=reason
                )

        # Также проверяем длину диалога
        if len(history) >= 3 and self.conversation_stage == "solution":
            conversion_type = self.settings.conversion_goals[0] if self.settings.conversion_goals else "contact"
            return ConversionRequest(
                type=conversion_type,
                reason="Похоже, вы нашли подходящее решение. Хотите оставить контакты?"
            )

        return None

    def _get_conversion_reason(self, conversion_type: str) -> str:
        """Возвращает причину для конверсии в зависимости от типа"""

        reasons = {
            "contact": "Оставьте свои контакты, и мы свяжемся с вами в ближайшее время.",
            "telegram": "Перейдите в наш Telegram-бот для быстрой связи и получения дополнительных материалов.",
            "callback": "Оставьте номер телефона, и мы перезвоним вам в удобное время."
        }

        return reasons.get(conversion_type, "Свяжитесь с нами для продолжения.")

    def _get_suggested_actions(self, stage: str) -> List[str]:
        """Возвращает предложенные действия для текущей стадии диалога"""

        actions = {
            "greeting": [
                "Узнать о продуктах",
                "Получить консультацию",
            ],
            "needs_analysis": [
                "Рассказать о своей задаче",
                "Уточнить детали",
            ],
            "solution": [
                "Узнать подробнее о решении",
                "Оставить контакты",
                "Перейти в Telegram",
            ],
            "conversion": [
                "Оставить телефон",
                "Написать в Telegram",
                "Заказать звонок",
            ]
        }

        return actions.get(stage, [])

    def update_conversation_stage(self, stage: str):
        """Обновляет стадию диалога"""
        self.conversation_stage = stage
