// Типы сообщений чата
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

// Типы конверсионных действий
export type ConversionType = 'contact' | 'telegram' | 'callback';

export interface ConversionData {
  type: ConversionType;
  data: {
    name?: string;
    phone?: string;
    email?: string;
    preferredTime?: string;
    message?: string;
  };
}

// Настройки агента
export interface AgentSettings {
  systemPrompt: string;
  conversationStyle: 'formal' | 'friendly' | 'expert';
  productsServices: string[];
  conversionGoals: ConversionType[];
  businessHours: {
    workDays: number[];
    workHours: { start: string; end: string };
  };
  primaryColor: string;
  widgetPosition: 'bottom-right' | 'bottom-left';
  welcomeMessage: string;
}

// API ответы
export interface ChatResponse {
  message: string;
  suggestedActions?: string[];
  conversionRequest?: {
    type: ConversionType;
    reason: string;
  };
}

export interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
}
