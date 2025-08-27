import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 py-14">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ImageWithFallback 
                src="/static/logo/vcr-white.png" 
                alt="ООО ВЦР Логотип" 
                className="w-32 h-24 object-contain drop-shadow-xl"
              />
              <h1 className="bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 bg-clip-text text-transparent text-xl">Цифровые решения для энергетики</h1>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Разрабатываем и внедряем надежные цифровые решения для энергетической отрасли, повышая безопасность, точность и эффективность.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Telegram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="text-white">T</span>
              </a>
              <a href="#" aria-label="VK" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="text-white">VK</span>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="text-white">YT</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="text-white">in</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-1">
            <div>
              <h5 className="text-white font-semibold mb-4">Навигация по сайту</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Опыт и заказчики</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h5 className="text-white font-semibold">Контакты</h5>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-0.5">📍</span>
                <span>119019, г. Москва, ул. Новый Арбат, д. 15, помещ. 2120</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+74951877710" className="hover:text-white transition-colors">+7 (495) 187-77-10</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:info@hvdigital.ru" className="hover:text-white transition-colors">info@hvdigital.ru</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">🌐</span>
                <a href="https://www.hvdigital.ru" target="_blank" rel="noopener" className="hover:text-white transition-colors">www.hvdigital.ru</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-400">© 2025 ООО ВЦР. Все права защищены.</p>
          <div className="mt-4 md:mt-0 text-xs text-gray-400 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}