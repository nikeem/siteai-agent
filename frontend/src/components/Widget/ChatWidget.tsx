import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage, AgentSettings } from '../../types';
import { apiService } from '../../services/api';
import './ChatWidget.css';

interface ChatWidgetProps {
  siteId?: string;
  autoOpen?: boolean;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ siteId, autoOpen = false }) => {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<AgentSettings | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Загрузка настроек при монтировании
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const agentSettings = await apiService.getSettings();
        setSettings(agentSettings);

        // Добавляем приветственное сообщение
        if (agentSettings.welcomeMessage) {
          setMessages([
            {
              id: 'welcome',
              role: 'assistant',
              content: agentSettings.welcomeMessage,
              timestamp: new Date(),
            },
          ]);
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };

    loadSettings();
  }, [siteId]);

  // Автопрокрутка к новым сообщениям
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await apiService.sendMessage(inputValue, messages);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);

      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!settings) {
    return null;
  }

  return (
    <>
      {/* Кнопка открытия чата */}
      {!isOpen && (
        <button
          className="siteai-widget-toggle"
          onClick={() => setIsOpen(true)}
          style={{ backgroundColor: settings.primaryColor }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      )}

      {/* Окно чата */}
      {isOpen && (
        <div className={`siteai-widget-container siteai-position-${settings.widgetPosition}`}>
          <div className="siteai-widget-header" style={{ backgroundColor: settings.primaryColor }}>
            <h3>Консультант</h3>
            <button onClick={() => setIsOpen(false)} className="siteai-close-btn">
              ×
            </button>
          </div>

          <div className="siteai-widget-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`siteai-message siteai-message-${message.role}`}
              >
                <div className="siteai-message-content">{message.content}</div>
                <div className="siteai-message-time">
                  {new Date(message.timestamp).toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="siteai-message siteai-message-assistant">
                <div className="siteai-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="siteai-widget-input">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Введите сообщение..."
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="siteai-send-btn"
              style={{ backgroundColor: settings.primaryColor }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
