import { Button } from "./ui/button";
import { ArrowRightIcon, RocketIcon, MailIcon } from "./icons";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/static/bg/hero.png')`,
        }}
      />
      
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80" /> */}
      
      {/* Decorative gradient circles */}
      {/* <div className="absolute inset-0 flex -top-16 -right-20 pointer-events-none">
        <div className="w-[80rem] h-[80rem] rounded-full bg-gradient-to-br from-blue-300/30 via-cyan-200/20 to-transparent blur-3xl"></div>
      </div> */}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section with floating animation */}
          <div className="mb-8 floating-animation">
            <ImageWithFallback 
              src="/static/logo/vcr-orig.png" 
              alt="ООО ВЦР Логотип" 
              className="mx-auto w-full h-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] object-contain drop-shadow-2xl"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-3 leading-tight tracking-tight mt-4">
              Ваш надежный партнер в создании и внедрении инновационных цифровых решений для энергообъектов
            </h1>
            <p className="text-slate-600 md:text-lg max-w-2xl mx-auto mb-6">
              Проектирование, поставки, внедрение и обслуживание цифровых решений для энергетики
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="gradient"
              size="xl"
              onClick={() => scrollToSection('about')}
              className="rounded-full font-semibold"
            >
              <RocketIcon className="mr-2 h-5 w-5" />
              Узнать больше
            </Button>
            <Button 
              variant="outline"
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="rounded-full font-semibold"
            >
              <MailIcon className="mr-2 h-5 w-5" />
              Написать нам
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}