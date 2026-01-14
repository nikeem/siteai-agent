import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage, AgentSettings } from '../../types';
import { apiService } from '../../services/api';
import './ChatWidget.css';

interface ChatWidgetProps {
  siteId?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ siteId }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<AgentSettings | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

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
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Автоматическое увеличение высоты textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

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

    // Сбрасываем высоту textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

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
    return (
      <div className="siteai-loading-container">
        <div className="siteai-loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="siteai-chat-container">
      {/* Заголовок */}
      <div className="siteai-chat-header" style={{ backgroundColor: settings.primaryColor }}>
        <div className="siteai-header-content">
          <div className="siteai-avatar">
            <img
              src="https://sun9-35.userapi.com/s/v1/ig2/soXHYrR-I17TEApVWudWS7rkN4mdHJtjQr7ZajkfNhBeXyy0vcV-4SfA7g7T1Pbn2_-gn_mBAElN5RVyS781X4Fd.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=1080x0"
              alt="Александр"
              style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <div className="siteai-header-info">
            <h3>Александр</h3>
            <p className="siteai-status">В сети</p>
          </div>
        </div>
      </div>

      {/* Область сообщений */}
      <div className="siteai-chat-messages" ref={messagesContainerRef}>
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

      {/* Область ввода */}
      <div className="siteai-chat-input-container">
        <div className="siteai-input-wrapper">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Отправьте сообщение..."
            rows={1}
            disabled={isLoading}
            className="siteai-textarea"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="siteai-send-button"
            style={{
              backgroundColor: !inputValue.trim() || isLoading ? '#ccc' : settings.primaryColor,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
        <div className="siteai-input-footer">
          <p>Powered by SiteAI</p>
        </div>
      </div>
    </div>
  );
};
