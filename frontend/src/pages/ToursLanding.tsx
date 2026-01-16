import { ChatWidget } from '../components/Widget/ChatWidget';
import './ToursLanding.css';
import { Phone, MessageCircle } from 'lucide-react';
import { Plane, Hotel, Car, Shield, MapPin, Calendar, CreditCard, Users } from 'lucide-react';

export function ToursLanding() {
  return (
    <div className="tours-landing">
      {/* Header */}
      <header className="tours-header">
        <div className="tours-header-container">
          <div className="tours-logo">
            <h1>TurKey Tours</h1>
          </div>
          <div className="tours-header-contacts">
            <a href="tel:+79991234567" className="tours-phone">
              <Phone size={20} />
              <span>+7 (999) 123-45-67</span>
            </a>
            <a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="tours-whatsapp"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
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
            <p>Предоплата 20%, остальное - за 20 дней до вылета</p>
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
          </div>
          <ChatWidget siteId="tours_turkey" />
        </div>
      </section>

      {/* Популярные направления */}
      <section className="tours-destinations">
        <div className="tours-container">
          <h2>Популярные направления</h2>
          <div className="tours-destinations-grid">
            <div className="tours-destination-card">
              <div className="tours-destination-image" style={{
                backgroundImage: 'url(/images/turkey.jpg)'
              }}></div>
              <div className="tours-destination-content">
                <h3>Турция</h3>
                <p>Пляжный отдых на Средиземном море. All Inclusive, песчаные пляжи</p>
                <div className="tours-destination-price">от 50 000 ₽</div>
                <button className="tours-destination-button">Узнать детали</button>
              </div>
            </div>

            <div className="tours-destination-card">
              <div className="tours-destination-image" style={{
                backgroundImage: 'url(/images/egypt.jpg)'
              }}></div>
              <div className="tours-destination-content">
                <h3>Египет</h3>
                <p>Красное море и коралловые рифы. Круглогодичный курорт</p>
                <div className="tours-destination-price">от 45 000 ₽</div>
                <button className="tours-destination-button">Узнать детали</button>
              </div>
            </div>

            <div className="tours-destination-card">
              <div className="tours-destination-image" style={{
                backgroundImage: 'url(/images/uae.jpg)'
              }}></div>
              <div className="tours-destination-content">
                <h3>ОАЭ</h3>
                <p>Роскошь и комфорт. Современные отели и шопинг</p>
                <div className="tours-destination-price">от 80 000 ₽</div>
                <button className="tours-destination-button">Узнать детали</button>
              </div>
            </div>

            <div className="tours-destination-card">
              <div className="tours-destination-image" style={{
                backgroundImage: 'url(/images/thailand.jpg)'
              }}></div>
              <div className="tours-destination-content">
                <h3>Таиланд</h3>
                <p>Экзотика Азии. Белоснежные пляжи, богатая культура</p>
                <div className="tours-destination-price">от 70 000 ₽</div>
                <button className="tours-destination-button">Узнать детали</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что входит в стоимость */}
      <section className="tours-included">
        <div className="tours-container">
          <h2>Что входит в стоимость тура</h2>
          <div className="tours-included-grid">
            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Plane size={40} />
              </div>
              <h3>Авиаперелет</h3>
              <p>Прямой рейс или удобная стыковка из вашего города</p>
            </div>

            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Hotel size={40} />
              </div>
              <h3>Проживание</h3>
              <p>Отличные отели 3-5 звезд по выбору туриста</p>
            </div>

            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Car size={40} />
              </div>
              <h3>Трансфер</h3>
              <p>Встреча в аэропорту и доставка до отеля</p>
            </div>

            <div className="tours-included-item">
              <div className="tours-included-icon">
                <Shield size={40} />
              </div>
              <h3>Страховка</h3>
              <p>Медицинская страховка на весь период поездки</p>
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
            <h3>TurKey Tours</h3>
            <p>Лучшие туры в Турцию и другие страны с 2015 года</p>
          </div>
          <div className="tours-footer-section">
            <h4>Контакты</h4>
            <p><MapPin size={16} style={{display: 'inline', verticalAlign: 'middle'}} /> Москва, ул. Туристическая, 1</p>
            <p><Phone size={16} style={{display: 'inline', verticalAlign: 'middle'}} /> +7 (999) 123-45-67</p>
            <p><CreditCard size={16} style={{display: 'inline', verticalAlign: 'middle'}} /> info@turkeytours.ru</p>
          </div>
          <div className="tours-footer-section">
            <h4>Соцсети</h4>
            <div className="tours-social-links">
              <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="tours-footer-bottom">
          <p>© 2025 TurKey Tours. Все права защищены.</p>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
}

export default ToursLanding;
