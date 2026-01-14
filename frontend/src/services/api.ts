import type { ChatMessage, ChatResponse, AgentSettings, ConversionData, HealthResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Отправка сообщения
  async sendMessage(message: string, conversationHistory: ChatMessage[]): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify({
        message,
        history: conversationHistory,
      }),
    });
  }

  // Получение настроек агента
  async getSettings(): Promise<AgentSettings> {
    return this.request<AgentSettings>('/settings');
  }

  // Обновление настроек агента
  async updateSettings(settings: Partial<AgentSettings>): Promise<AgentSettings> {
    return this.request<AgentSettings>('/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  }

  // Отправка конверсионных данных
  async submitConversion(data: ConversionData): Promise<{ success: boolean; message: string }> {
    return this.request('/conversion/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Запрос обратного звонка
  async requestCallback(phone: string, preferredTime?: string): Promise<{ success: boolean; message: string }> {
    return this.request('/conversion/callback', {
      method: 'POST',
      body: JSON.stringify({ phone, preferredTime }),
    });
  }

  // Health check
  async healthCheck(): Promise<HealthResponse> {
    return this.request<HealthResponse>('/health');
  }
}

export const apiService = new ApiService();
