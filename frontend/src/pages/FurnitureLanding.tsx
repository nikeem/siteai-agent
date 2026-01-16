import { ChatWidget } from '../components/Widget/ChatWidget';
import '../App.css';

export function FurnitureLanding() {
  return (
    <div className="App">
      {/* Hero Section с чатом */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Премиальная Мебель</h1>
            <p>Создаем идеальное пространство для вашей жизни</p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <span>Ручная работа</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏆</span>
                <span>Премиум качество</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <span>Бесплатная доставка</span>
              </div>
            </div>
          </div>
          <ChatWidget />
        </div>
      </section>

      {/* О нас */}
      <section className="about-section">
        <div className="container">
          <h2>О нашем бренде</h2>
          <p className="about-description">
            Мы создаем эксклюзивную мебель, которая превращает дома в произведения искусства.
            Каждая деталь продумана до мелочей, а качество материалов не уступает мировым брендам.
          </p>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Лет опыта</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Довольных клиентов</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Натуральные материалы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог */}
      <section className="catalog-section">
        <div className="container">
          <h2>Наши коллекции</h2>
          <div className="catalog-grid">
            <div className="catalog-card">
              <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop)' }}></div>
              <div className="card-content">
                <h3>Диваны</h3>
                <p>Уют и комфорт в каждом детале</p>
              </div>
            </div>
            <div className="catalog-card">
              <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop)' }}></div>
              <div className="card-content">
                <h3>Кресла</h3>
                <p>Элегантность и стиль</p>
              </div>
            </div>
            <div className="catalog-card">
              <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=600&h=400&fit=crop)' }}></div>
              <div className="card-content">
                <h3>Столы</h3>
                <p>Функциональность и дизайн</p>
              </div>
            </div>
            <div className="catalog-card">
              <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=400&fit=crop)' }}></div>
              <div className="card-content">
                <h3>Шкафы</h3>
                <p>Хранение с душой</p>
              </div>
            </div>
            <div className="catalog-card">
              <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop)' }}></div>
              <div className="card-content">
                <h3>Кровати</h3>
                <p>Сладкие сны гарантируем</p>
              </div>
            </div>
            <div className="catalog-card">
              <div className="card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop)' }}></div>
              <div className="card-content">
                <h3>Аксессуары</h3>
                <p>Детали, создающие атмосферу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="features-section">
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-large">🎨</div>
              <h3>Индивидуальный дизайн</h3>
              <p>Создаем мебель под ваш интерьер и пожелания</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">🪵</div>
              <h3>Натуральные материалы</h3>
              <p>Только массив дерева, натуральная кожа и ткань</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">⏱️</div>
              <h3>Гарантия 5 лет</h3>
              <p>Уверены в качестве каждой продукции</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">💎</div>
              <h3>Премиум сервис</h3>
              <p>Персональный менеджер и белый gloves доставка</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Готовы создать идеальное пространство?</h2>
          <p>Наш AI-консультант поможет подобрать идеальную мебель для вашего дома</p>
          <div className="cta-features">
            <div className="cta-feature">✓ Бесплатная консультация</div>
            <div className="cta-feature">✓ Вызов замерщика</div>
            <div className="cta-feature">✓ 3D-дизайн проект</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Luxury Furniture</h3>
              <p>Создаем прекрасное с 2010 года</p>
            </div>
            <div className="footer-section">
              <h4>Контакты</h4>
              <p>📍 Москва, ул. Мебельная, 1</p>
              <p>📞 +7 (999) 123-45-67</p>
              <p>✉️ info@luxuryfurniture.ru</p>
            </div>
            <div className="footer-section">
              <h4>Режим работы</h4>
              <p>Пн-Пт: 10:00 - 21:00</p>
              <p>Сб-Вс: 11:00 - 19:00</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Luxury Furniture. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FurnitureLanding;
