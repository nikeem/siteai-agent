import { ChatWidget } from '../components/Widget/ChatWidget';
import './ToursLanding.css';
import { Phone, MessageCircle } from 'lucide-react';
import { Plane, Hotel, Car, Shield, MapPin, Calendar, CreditCard, Users, Send } from 'lucide-react';

export function ToursLanding() {
  const scrollToChat = (message?: string) => {
    const chatWidget = document.querySelector('.siteai-chat-container');
    if (chatWidget) {
      chatWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Фокус на поле ввода после скролла
      setTimeout(() => {
        const textarea = document.querySelector('.siteai-textarea') as HTMLTextAreaElement;
        if (textarea) {
          textarea.focus();
          if (message) {
            textarea.value = message;
          }
        }
      }, 800);
    }
  };

  return (
    <div className="tours-landing">
      {/* Header */}
      <header className="tours-header">
        <div className="tours-header-container">
          <div className="tours-logo-section">
            <div className="tours-logo">
              <h1>Pegas Touristik</h1>
            </div>
            <div className="tours-social-proof">
              <span className="tours-proof-text">15 лет на рынке | Организовали 50 000+ путешествий</span>
            </div>
          </div>
          <div className="tours-header-contacts">
            <a href="tel:+74951234567" className="tours-phone">
              <Phone size={20} />
              <span>+7 (495) 123-45-67</span>
            </a>
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="tours-whatsapp"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/+74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="tours-telegram"
            >
              <Send size={20} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="tours-hero">
        <div className="tours-hero-background"></div>
        <div className="tours-hero-overlay"></div>
        <div className="tours-hero-content">
          <div className="tours-hero-text">
            <h1>Раннее бронирование туров в Турцию на 2026 год со скидками до 50%</h1>
            <p className="tours-hero-subtitle">Предоплата 20%, остальное - за 20 дней до вылета</p>
            <p className="tours-hero-description">Пройдите короткий тест и получите персональную подборку за 5 минут</p>
            <div className="tours-hero-features">
              <div className="tours-hero-feature">
                <Plane size={18} />
                <span>Авиаперелет включен</span>
              </div>
              <div className="tours-hero-feature">
                <Hotel size={18} />
                <span>Только проверенные отели</span>
              </div>
              <div className="tours-hero-feature">
                <Shield size={18} />
                <span>Медицинская страховка</span>
              </div>
            </div>
            <div className="tours-hero-cta">
              <button
                className="tours-primary-cta"
                onClick={() => scrollToChat('Здравствуйте! Хочу подобрать тур в Турцию')}
              >
                Подобрать тур
              </button>
              <div className="tours-messengers">
                <a
                  href="https://wa.me/74951234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tours-messenger-btn tours-whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/+74951234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tours-messenger-btn tours-telegram-btn"
                >
                  <Send size={20} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
          <ChatWidget siteId="tours_turkey" />
        </div>
      </section>

      {/* Что входит в стоимость */}
      <section className="tours-included-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Что уже включено в цену тура</h2>
          <p className="tours-section-subtitle">Никаких скрытых платежей — все最重要的 услуги уже включены</p>
          <div className="tours-included-grid">
            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Plane size={48} />
              </div>
              <h3>Авиаперелёт</h3>
              <p>Прямые рейсы из Москвы и Санкт-Петербурга</p>
            </div>

            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Hotel size={48} />
              </div>
              <h3>Проживание</h3>
              <p>Проверенные отели 5* на первой линии</p>
            </div>

            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Car size={48} />
              </div>
              <h3>Трансфер</h3>
              <p>Встреча в аэропорту и доставка до отеля</p>
            </div>

            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Shield size={48} />
              </div>
              <h3>Страховка</h3>
              <p>Медицинская страховка на весь период поездки</p>
            </div>
          </div>
          <div className="tours-included-cta">
            <button
              className="tours-secondary-cta"
              onClick={() => scrollToChat('Здравствуйте! Хочу рассчитать стоимость тура')}
            >
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </section>

      {/* Курорты Турции */}
      <section className="tours-resorts-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Популярные курорты Турции</h2>
          <p className="tours-section-subtitle">Выберите идеальный курорт для вашего отдыха</p>
          <div className="tours-resorts-grid">
            <div className="tours-resort-card">
              <div className="tours-resort-image" style={{
                backgroundImage: 'url(/images/tours/turkey.jpg)'
              }}></div>
              <div className="tours-resort-content">
                <h3>Белек</h3>
                <p>Элитный отдых, гольф, роскошные отели 5*</p>
                <div className="tours-resort-price">от 160 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-resort-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересую туром в Белек')}
                >
                  Подобрать тур в Белек
                </button>
              </div>
            </div>

            <div className="tours-resort-card">
              <div className="tours-resort-image" style={{
                backgroundImage: 'url(/images/tours/turkey.jpg)'
              }}></div>
              <div className="tours-resort-content">
                <h3>Алания</h3>
                <p>Аквапарки, активный отдых, All Inclusive</p>
                <div className="tours-resort-price">от 145 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-resort-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересую туром в Аланию')}
                >
                  Подобрать тур в Аланию
                </button>
              </div>
            </div>

            <div className="tours-resort-card">
              <div className="tours-resort-image" style={{
                backgroundImage: 'url(/images/tours/turkey.jpg)'
              }}></div>
              <div className="tours-resort-content">
                <h3>Анталья</h3>
                <p>Исторический центр, сочетание города и пляжа</p>
                <div className="tours-resort-price">от 140 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-resort-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересую туром в Анталью')}
                >
                  Подобрать тур в Анталью
                </button>
              </div>
            </div>

            <div className="tours-resort-card">
              <div className="tours-resort-image" style={{
                backgroundImage: 'url(/images/tours/turkey.jpg)'
              }}></div>
              <div className="tours-resort-content">
                <h3>Сиде</h3>
                <p>Песчаные пляжи, древние руины, семейный отдых</p>
                <div className="tours-resort-price">от 148 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-resort-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересую туром в Сиде')}
                >
                  Подобрать тур в Сиде
                </button>
              </div>
            </div>

            <div className="tours-resort-card">
              <div className="tours-resort-image" style={{
                backgroundImage: 'url(/images/tours/turkey.jpg)'
              }}></div>
              <div className="tours-resort-content">
                <h3>Бодрум</h3>
                <p>Эгейское море, VIP-отдых, ночная жизнь</p>
                <div className="tours-resort-price">от 155 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-resort-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересую туром в Бодрум')}
                >
                  Подобрать тур в Бодрум
                </button>
              </div>
            </div>

            <div className="tours-resort-card">
              <div className="tours-resort-image" style={{
                backgroundImage: 'url(/images/tours/turkey.jpg)'
              }}></div>
              <div className="tours-resort-content">
                <h3>Кемер</h3>
                <p>Горы, море, уютные бухты, атмосфера</p>
                <div className="tours-resort-price">от 150 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-resort-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересую туром в Кемер')}
                >
                  Подобрать тур в Кемер
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="tours-how-it-works">
        <div className="tours-container">
          <h2>Как подобрать тур за 3 шага</h2>
          <div className="tours-steps">
            <div className="tours-step">
              <div className="tours-step-number">1</div>
              <div className="tours-step-icon">
                <MessageCircle size={48} />
              </div>
              <h3>Ответьте на вопросы</h3>
              <p>Расскажите о ваших предпочтениях: даты, бюджет, тип отдыха</p>
            </div>

            <div className="tours-step">
              <div className="tours-step-number">2</div>
              <div className="tours-step-icon">
                <Calendar size={48} />
              </div>
              <h3>Получите подборку</h3>
              <p>Мы подберем лучшие варианты под ваши требования</p>
            </div>

            <div className="tours-step">
              <div className="tours-step-number">3</div>
              <div className="tours-step-icon">
                <Users size={48} />
              </div>
              <h3>Бронируйте и отдыхайте</h3>
              <p>Выберите тур и наслаждайтесь незабываемым отдыхом</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tours-footer">
        <div className="tours-footer-content">
          <div className="tours-footer-section">
            <h3>Pegas Touristik</h3>
            <p>15 лет на рынке turоператорских услуг</p>
            <p className="tours-footer-trust">Организовали 50 000+ счастливых путешествий</p>
          </div>
          <div className="tours-footer-section">
            <h4>Контакты</h4>
            <p><MapPin size={16} style={{display: 'inline', verticalAlign: 'middle'}} /> Москва, ул. Арбат, д.54</p>
            <p><Phone size={16} style={{display: 'inline', verticalAlign: 'middle'}} /> +7 (495) 123-45-67</p>
            <p><CreditCard size={16} style={{display: 'inline', verticalAlign: 'middle'}} /> info@pegastouristik.ru</p>
            <p className="tours-footer-hours">Ежедневно с 10:00 до 22:00</p>
          </div>
          <div className="tours-footer-section">
            <h4>Другие направления</h4>
            <p><a href="#egypt" className="tours-footer-link">Египет</a></p>
            <p><a href="#uae" className="tours-footer-link">ОАЭ</a></p>
            <p><a href="#thailand" className="tours-footer-link">Таиланд</a></p>
            <p><a href="#maldives" className="tours-footer-link">Мальдивы</a></p>
          </div>
          <div className="tours-footer-section">
            <h4>Мессенджеры</h4>
            <div className="tours-social-links">
              <a href="https://wa.me/74951234567" target="_blank" rel="noopener noreferrer" className="tours-social-link">
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/+74951234567" target="_blank" rel="noopener noreferrer" className="tours-social-link">
                <Send size={24} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="tours-footer-bottom">
          <p>© 2025 Pegas Touristik. Все права защищены.</p>
          <a href="#">Политика конфиденциальности</a>
          <p className="tours-footer-license">Мы в реестре туроператоров №XXXXXXXX</p>
        </div>
      </footer>
    </div>
  );
}

export default ToursLanding;
