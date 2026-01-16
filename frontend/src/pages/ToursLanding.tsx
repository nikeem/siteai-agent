import { ChatWidget, type ChatWidgetRef } from '../components/Widget/ChatWidget';
import './ToursLanding.css';
import { Phone, MessageCircle } from 'lucide-react';
import { Plane, Hotel, Car, Shield, MapPin, Calendar, CreditCard, Users, DollarSign, Award, Lock, CheckCircle, Gift } from 'lucide-react';
import { useRef } from 'react';

export function ToursLanding() {
  const chatWidgetRef = useRef<ChatWidgetRef>(null);

  const scrollToChat = (message?: string) => {
    const chatWidget = document.querySelector('.siteai-chat-container');
    if (chatWidget) {
      chatWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Устанавливаем сообщение и фокус после скролла
      setTimeout(() => {
        if (message && chatWidgetRef.current) {
          chatWidgetRef.current.setInputMessage(message);
        }
        if (chatWidgetRef.current) {
          chatWidgetRef.current.focusInput();
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
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
            <p className="tours-hero-description">Пишите в чат, мы онлайн! Сразу проконсультируем и подберем хорошие варианты!</p>
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
          <ChatWidget ref={chatWidgetRef} siteId="tours_turkey" />
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
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Белек')}
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
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Аланию')}
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
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Анталью')}
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
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Сиде')}
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
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Бодрум')}
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
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Кемер')}
                >
                  Подобрать тур в Кемер
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества раннего бронирования */}
      <section className="tours-advantages-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Почему стоит забронировать сейчас?</h2>
          <p className="tours-section-subtitle">Выгода раннего бронирования для вашего идеального отдыха</p>
          <div className="tours-advantages-grid">
            <div className="tours-advantage-item">
              <div className="tours-advantage-icon">
                <DollarSign size={32} />
              </div>
              <h3>Экономия 30-50%</h3>
              <p>Значительная скидка по сравнению с ценами сезона при бронировании заранее</p>
            </div>

            <div className="tours-advantage-item">
              <div className="tours-advantage-icon">
                <Award size={32} />
              </div>
              <h3>Лучшие номера</h3>
              <p>Топ-отели (Rixos, Liberty, Titanic) с лучшими видами и категориями номеров</p>
            </div>

            <div className="tours-advantage-item">
              <div className="tours-advantage-icon">
                <Lock size={32} />
              </div>
              <h3>Фиксированная цена</h3>
              <p>Защита от роста курса валют и сезонного повышения цен</p>
            </div>

            <div className="tours-advantage-item">
              <div className="tours-advantage-icon">
                <CreditCard size={32} />
              </div>
              <h3>Удобная оплата</h3>
              <p>20% сейчас, остаток за 20 дней до вылета — без переплат и процентов</p>
            </div>

            <div className="tours-advantage-item">
              <div className="tours-advantage-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Гарантия мест</h3>
              <p>Наличие мест в популярных отелях гарантировано при раннем бронировании</p>
            </div>

            <div className="tours-advantage-item">
              <div className="tours-advantage-icon">
                <Gift size={32} />
              </div>
              <h3>Бонусы от отелей</h3>
              <p>Бесплатные апгрейды номера, СПА-процедуры и ужины в подарок</p>
            </div>
          </div>
          <div className="tours-advantages-cta">
            <button
              className="tours-primary-cta"
              onClick={() => scrollToChat('Здравствуйте! Хочу забронировать тур со скидкой раннего бронирования')}
            >
              Забронировать со скидкой
            </button>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="tours-how-it-works">
        <div className="tours-container">
          <h2 className="tours-section-title">Как подобрать тур за 3 шага</h2>
          <p className="tours-section-subtitle">Простой путь к идеальному отдыху</p>
          <div className="tours-steps">
            <div className="tours-step">
              <div className="tours-step-number">1</div>
              <div className="tours-step-icon">
                <MessageCircle size={48} />
              </div>
              <h3>Напишите в чат</h3>
              <p>Расскажите менеджеру о ваших предпочтениях: даты, бюджет, тип отдыха</p>
              <p className="tours-step-detail">Мы онлайн и готовы помочь!</p>
            </div>

            <div className="tours-step">
              <div className="tours-step-number">2</div>
              <div className="tours-step-icon">
                <Calendar size={48} />
              </div>
              <h3>Получите подборку</h3>
              <p>Персональная подборка от эксперта за 30 минут</p>
              <p className="tours-step-detail">Только проверенные отели, в которых мы были сами</p>
            </div>

            <div className="tours-step">
              <div className="tours-step-number">3</div>
              <div className="tours-step-icon">
                <Users size={48} />
              </div>
              <h3>Выбирайте и отдыхайте</h3>
              <p>Оформите бронирование онлайн или в офисе</p>
              <p className="tours-step-detail">Получайте удовольствие, все заботы — на нас</p>
            </div>
          </div>
          <div className="tours-steps-cta">
            <button
              className="tours-secondary-cta"
              onClick={() => scrollToChat('Здравствуйте! Хочу подобрать тур')}
            >
              Начать подбор
            </button>
          </div>
        </div>
      </section>

      {/* Топ-5 отелей Турции 2026 */}
      <section className="tours-hotels-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Лучшие отели Турции по отзывам наших туристов</h2>
          <p className="tours-section-subtitle">Проверенные отели с высоким рейтингом и отличным сервисом</p>
          <div className="tours-hotels-grid">
            <div className="tours-hotel-card">
              <div className="tours-hotel-image" style={{
                backgroundImage: 'url(/images/tours/rixos-belek.jpg)'
              }}></div>
              <div className="tours-hotel-content">
                <div className="tours-hotel-rating">⭐⭐⭐⭐⭐ 5.0</div>
                <h3>Rixos Premium Belek 5*</h3>
                <p className="tours-hotel-description">Элитный отдых, гольф, собственный пляж 700м</p>
                <ul className="tours-hotel-features">
                  <li>✓ Премиум всё включено</li>
                  <li>✓ Гольф-поле 18 лунок</li>
                  <li>✓ Детский клуб и аквапарк</li>
                </ul>
                <div className="tours-hotel-price">от 160 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-hotel-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Rixos Premium Belek')}
                >
                  Подобрать тур
                </button>
              </div>
            </div>

            <div className="tours-hotel-card">
              <div className="tours-hotel-image" style={{
                backgroundImage: 'url(/images/tours/liberty-lara.jpg)'
              }}></div>
              <div className="tours-hotel-content">
                <div className="tours-hotel-rating">⭐⭐⭐⭐⭐ 4.9</div>
                <h3>Liberty Hotels Lara 5*</h3>
                <p className="tours-hotel-description">Аквапарк, анимация, семейный отдых</p>
                <ul className="tours-hotel-features">
                  <li>✓ Крупнейший аквапарк</li>
                  <li>✓ Все виды развлечений</li>
                  <li>✓ Идеально для семей</li>
                </ul>
                <div className="tours-hotel-price">от 145 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-hotel-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Liberty Hotels Lara')}
                >
                  Подобрать тур
                </button>
              </div>
            </div>

            <div className="tours-hotel-card">
              <div className="tours-hotel-image" style={{
                backgroundImage: 'url(/images/tours/titanic-golf.jpg)'
              }}></div>
              <div className="tours-hotel-content">
                <div className="tours-hotel-rating">⭐⭐⭐⭐⭐ 4.8</div>
                <h3>Titanic Golf Belek 5*</h3>
                <p className="tours-hotel-description">Гольф-поле, роскошь, природа Кемера</p>
                <ul className="tours-hotel-features">
                  <li>✓ Гольф премиум-класса</li>
                  <li>✓ Роскошные спа-центры</li>
                  <li>✓ Природа и тишина</li>
                </ul>
                <div className="tours-hotel-price">от 155 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-hotel-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Titanic Golf Belek')}
                >
                  Подобрать тур
                </button>
              </div>
            </div>

            <div className="tours-hotel-card">
              <div className="tours-hotel-image" style={{
                backgroundImage: 'url(/images/tours/paloma-perissia.jpg)'
              }}></div>
              <div className="tours-hotel-content">
                <div className="tours-hotel-rating">⭐⭐⭐⭐⭐ 4.9</div>
                <h3>Paloma Perissia 5*</h3>
                <p className="tours-hotel-description">Природа Кемера, уют, атмосфера</p>
                <ul className="tours-hotel-features">
                  <li>✓ Уютная атмосфера</li>
                  <li>✓ Горно-морский воздух</li>
                  <li>✓ Высокий сервис</li>
                </ul>
                <div className="tours-hotel-price">от 150 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-hotel-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Paloma Perissia')}
                >
                  Подобрать тур
                </button>
              </div>
            </div>

            <div className="tours-hotel-card">
              <div className="tours-hotel-image" style={{
                backgroundImage: 'url(/images/tours/selectum-luxury.jpg)'
              }}></div>
              <div className="tours-hotel-content">
                <div className="tours-hotel-rating">⭐⭐⭐⭐⭐ 5.0</div>
                <h3>Selectum Luxury 5*</h3>
                <p className="tours-hotel-description">Ультра всё включено, роскошь, сервис</p>
                <ul className="tours-hotel-features">
                  <li>✓ Ультра всё включено</li>
                  <li>✓ Премиум сервис</li>
                  <li>✓ Роскошные номера</li>
                </ul>
                <div className="tours-hotel-price">от 165 000 ₽ <span>за 7 ночей на двоих</span></div>
                <button
                  className="tours-hotel-button"
                  onClick={() => scrollToChat('Здравствуйте! Интересуюсь туром в Selectum Luxury')}
                >
                  Подобрать тур
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши эксперты по Турции */}
      <section className="tours-experts-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Познакомьтесь с нашими экспертами по Турции</h2>
          <p className="tours-section-subtitle">Наши менеджеры специализируются на турецком направлении и знают все нюансы отдыха</p>
          <div className="tours-experts-grid">
            <div className="tours-expert-card">
              <div className="tours-expert-avatar" style={{
                backgroundImage: 'url(/images/tours/expert-1.jpg)'
              }}></div>
              <div className="tours-expert-content">
                <h3>Александр</h3>
                <p className="tours-expert-title">Эксперт по раннему бронированию Турции</p>
                <p className="tours-expert-phone">📞 +7 (495) 123-45-67</p>
                <p className="tours-expert-experience">8 лет в туризме, 500+ организованных туров в Турцию</p>
                <p className="tours-expert-specialization">Специализируется: Белек, Алания</p>
              </div>
            </div>

            <div className="tours-expert-card">
              <div className="tours-expert-avatar" style={{
                backgroundImage: 'url(/images/tours/expert-2.jpg)'
              }}></div>
              <div className="tours-expert-content">
                <h3>Елена</h3>
                <p className="tours-expert-title">Специалист по семейному отдыху</p>
                <p className="tours-expert-phone">📞 +7 (495) 123-45-68</p>
                <p className="tours-expert-experience">6 лет в туризме, 300+ семей отправлено на отдых</p>
                <p className="tours-expert-specialization">Специализируется: Сиде, Кемер</p>
              </div>
            </div>

            <div className="tours-expert-card">
              <div className="tours-expert-avatar" style={{
                backgroundImage: 'url(/images/tours/expert-3.jpg)'
              }}></div>
              <div className="tours-expert-content">
                <h3>Михаил</h3>
                <p className="tours-expert-title">Эксперт по элитному отдыху</p>
                <p className="tours-expert-phone">📞 +7 (495) 123-45-69</p>
                <p className="tours-expert-experience">10 лет в туризме, эксперт по отелям 5*</p>
                <p className="tours-expert-specialization">Специализируется: Белек, Бодрум</p>
              </div>
            </div>

            <div className="tours-expert-card">
              <div className="tours-expert-avatar" style={{
                backgroundImage: 'url(/images/tours/expert-4.jpg)'
              }}></div>
              <div className="tours-expert-content">
                <h3>Ольга</h3>
                <p className="tours-expert-title">Менеджер по активному отдыху</p>
                <p className="tours-expert-phone">📞 +7 (495) 123-45-70</p>
                <p className="tours-expert-experience">5 лет в туризме, знает все об аквапарках</p>
                <p className="tours-expert-specialization">Специализируется: Алания, Анталья</p>
              </div>
            </div>

            <div className="tours-expert-card">
              <div className="tours-expert-avatar" style={{
                backgroundImage: 'url(/images/tours/expert-5.jpg)'
              }}></div>
              <div className="tours-expert-content">
                <h3>Дмитрий</h3>
                <p className="tours-expert-title">Эксперт по гольф-турам</p>
                <p className="tours-expert-phone">📞 +7 (495) 123-45-71</p>
                <p className="tours-expert-experience">7 лет в туризме, гольфист с 10-летним стажем</p>
                <p className="tours-expert-specialization">Специализируется: Белек (гольф)</p>
              </div>
            </div>

            <div className="tours-expert-card">
              <div className="tours-expert-avatar" style={{
                backgroundImage: 'url(/images/tours/expert-6.jpg)'
              }}></div>
              <div className="tours-expert-content">
                <h3>Анна</h3>
                <p className="tours-expert-title">Специалист по романтическому отдыху</p>
                <p className="tours-expert-phone">📞 +7 (495) 123-45-72</p>
                <p className="tours-expert-experience">4 года в туризме, эксперт для молодых пар</p>
                <p className="tours-expert-specialization">Специализируется: Бодрум, Кемер</p>
              </div>
            </div>
          </div>
          <div className="tours-experts-cta">
            <button
              className="tours-primary-cta"
              onClick={() => scrollToChat('Здравствуйте! Хочу получить консультацию по турам в Турцию')}
            >
              Получить консультацию эксперта
            </button>
          </div>
        </div>
      </section>

      {/* Отзывы туристов */}
      <section className="tours-reviews-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Что говорят наши туристы</h2>
          <p className="tours-section-subtitle">Реальные отзывы с Яндекс Карт</p>
          <div className="tours-reviews-grid">
            <div className="tours-review-card">
              <div className="tours-review-rating">⭐⭐⭐⭐⭐ 5/5</div>
              <p className="tours-review-text">"Отдыхали в Белеке в августе 2025. Отель Rixos Premium превзошел все ожидания! Дети в восторге от анимации и детского клуба, а мы наслаждались спа и гольфом. Спасибо Александру за отличную подборку — все было организовано на высшем уровне!"</p>
              <p className="tours-review-author">— Семья Ивановых, Москва, Белек (август 2025)</p>
            </div>

            <div className="tours-review-card">
              <div className="tours-review-rating">⭐⭐⭐⭐⭐ 5/5</div>
              <p className="tours-review-text">"Забронировали тур в Аланию через раннее бронирование — сэкономили более 40%! Отель Liberty Hotels Lara просто супер: огромный аквапарк, вкусная еда, дружелюбный персонал. Обязательно воспользуемся вашим сервисом еще раз!"</p>
              <p className="tours-review-author">— Ольга и Сергей, Санкт-Петербург, Алания (июль 2025)</p>
            </div>

            <div className="tours-review-card">
              <div className="tours-review-rating">⭐⭐⭐⭐⭐ 5/5</div>
              <p className="tours-review-text">"Первый раз в Турции и остались в полном восторге! Побывали в Анталье и Сиде, посмотрели древние руины, отдохнули на прекрасных пляжах. Менеджер помог подобрать идеальный отель для нас с ребенком. Рекомендуем Pegas Touristik!"</p>
              <p className="tours-review-author">— Мария Петрова, Казань, Анталья (июнь 2025)</p>
            </div>
          </div>
          <div className="tours-reviews-cta">
            <button
              className="tours-secondary-cta"
              onClick={() => scrollToChat('Здравствуйте! Хочу оставить отзыв или задать вопрос')}
            >
              Оставить отзыв или задать вопрос
            </button>
          </div>
        </div>
      </section>

      {/* FAQ - Часто задаваемые вопросы */}
      <section className="tours-faq-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Часто задаваемые вопросы</h2>
          <p className="tours-section-subtitle">Ответы на популярные вопросы о раннем бронировании</p>
          <div className="tours-faq-list">
            <details className="tours-faq-item">
              <summary>📌 Что такое раннее бронирование?</summary>
              <p>Раннее бронирование — это возможность забронировать тур заранее (за 6-12 месяцев) со значительной скидкой. При этом вы фиксируете цену и гарантируете места в лучших отелях.</p>
            </details>

            <details className="tours-faq-item">
              <summary>📌 Как получить скидку 30-50%?</summary>
              <p>Скидка формируется за счёт advance payment от туроператора. При бронировании сейчас (до сезона) цены на 30-50% ниже, чем при покупке за 2-3 недели до вылета.</p>
            </details>

            <details className="tours-faq-item">
              <summary>📌 Что значит "фиксированная цена"?</summary>
              <p>При раннем бронировании цена тура фиксируется на момент бронирования. Даже если курс валют или цены вырастут к сезону, для вас цена остаётся неизменной.</p>
            </details>

            <details className="tours-faq-item">
              <summary>📌 Какие документы нужны для поездки в Турцию?</summary>
              <p>Для граждан РФ загранпаспорт (срок действия не менее 6 месяцев с момента вылета). Виза не требуется. Для детей необходимо свидетельство о рождении или загранпаспорт.</p>
            </details>

            <details className="tours-faq-item">
              <summary>📌 Можно ли оплатить тур в рассрочку?</summary>
              <p>Да! При раннем бронировании вы платите только 20% сейчас, а остаток — за 20 дней до вылета. Это позволяет распределить расходы на несколько месяцев.</p>
            </details>

            <details className="tours-faq-item">
              <summary>📌 Что если не найду подходящий вариант?</summary>
              <p>Наши эксперты подберут индивидуальные варианты под ваши требования. Мы работаем с более чем 100 отелями Турции и найдём оптимальный вариант именно для вас.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Офисы и контакты */}
      <section className="tours-offices-section">
        <div className="tours-container">
          <h2 className="tours-section-title">Приезжайте в офис или напишите нам</h2>
          <p className="tours-section-subtitle">Всегда рады见到 вам в нашем офисе или онлайн</p>
          <div className="tours-offices-content">
            <div className="tours-offices-info">
              <h3>Контакты</h3>
              <p className="tours-office-address"><MapPin size={20} style={{display: 'inline', verticalAlign: 'middle', marginRight: '8px'}} /> Москва, ул. Арбат, д.54</p>
              <p className="tours-office-hours">🕐 Ежедневно с 10:00 до 22:00</p>
              <p className="tours-office-phone"><Phone size={20} style={{display: 'inline', verticalAlign: 'middle', marginRight: '8px'}} /> +7 (495) 123-45-67</p>
              <p className="tours-office-email">✉️ info@pegastouristik.ru</p>
              <div className="tours-office-messengers">
                <a
                  href="https://wa.me/74951234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tours-office-messenger"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/+74951234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tours-office-messenger"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>
            <div className="tours-offices-map">
              <div className="tours-office-placeholder">
                <MapPin size={48} />
                <p>Карта офиса</p>
                <small>Москва, ул. Арбат, д.54</small>
              </div>
            </div>
          </div>
          <div className="tours-offices-cta">
            <button
              className="tours-primary-cta"
              onClick={() => scrollToChat('Здравствуйте! Хочу получить консультацию')}
            >
              Написать в мессенджер
            </button>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
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
