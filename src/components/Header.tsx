import { Button } from "./ui/button";
import { MenuIcon, XIcon } from "./icons";
import { useState, useEffect } from "react";

export function Header() {

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-blue-100/50 shadow-lg' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center py-4">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            {/* <ImageWithFallback 
              src="/logo-orig.png" 
              alt="ООО ВЦР Логотип" 
              className="h-10 w-auto object-contain"
            /> */}
            <div className="w-[120px]"></div> {/* Placeholder for logo */}
          </div>

          {/* Right Side - Navigation and CTA */}
          <div className="flex items-center justify-end ml-auto space-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="#solutions" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Пример проектов</a>
              <a href="#competencies" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Ключевые заказчики</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="gradient"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Контакты
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 bg-white/95 backdrop-blur-sm rounded-b-xl shadow-lg mt-2">
            <nav className="flex flex-col space-y-2 px-4">
              <a 
                href="#about" 
                className="py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#services" 
                className="py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#competencies" 
                className="py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Компетенции
              </a>
              <a 
                href="#contact" 
                className="py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="pt-4">
                <Button 
                  variant="primary"
                  className="w-full rounded-full"
                >
                  Связаться
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}