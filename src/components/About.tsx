import { Button } from "./ui/button";
import { TargetIcon, UsersIcon, LightbulbIcon, ShieldIcon, ArrowRightIcon } from "./icons";

export function About() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-300/30 via-blue-400/20 to-transparent blur-3xl"></div>
      
      <div className="max-w-8xl mx-auto px-6 flex">
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="container mr-auto mt-16 mb-16">
            <div className="max-w-3xl mr-auto md:ml-8">
              <h2 className="text-left text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">О компании</h2>
              <div className="space-y-6 mb-8">
                <div className="relative pl-8 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-r-lg">
                  <p className="text-left text-lg text-slate-700 leading-relaxed font-medium">
                    <span className="text-blue-600 font-semibold">ООО ВЦР</span> — технологический лидер, способный раскрыть потенциал цифровых решений и обеспечить переход на новый технологический уровень энергетической отрасли. Компания занимается созданием и внедрением надежных цифровых решений для энергообъектов.
                  </p>
                </div>
                
                <p className="text-left text-lg text-slate-700 leading-relaxed">
                  Мы специализируемся на <span className="font-semibold text-slate-800">проектировании</span>, выполнении <span className="font-semibold text-slate-800">строительно-монтажных</span> и <span className="font-semibold text-slate-800">пуско-наладочных работ</span>, комплексных поставках различного оборудования, обслуживании цифровых подстанций и систем управления энергообъектами.
                </p>

                <p className="text-left text-lg text-slate-700 leading-relaxed">
                  В команде задействованы <span className="font-semibold text-slate-800">высококвалифицированные специалисты</span> с многолетним опытом реализации сложных проектов как в России, так и за рубежом.
                </p>

                <p className="text-left text-lg text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-800">Крупные предприятия</span> топливно-энергетического комплекса, энергоёмкие промышленные предприятия, научно-исследовательские и испытательные центры являются основными заказчиками предлагаемых решений.
                </p>
              </div>
              <div className="text-left space-y-4">
                {/* Mission Section */}
                <div className="flex items-center mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">Наша цель</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  Ускорять <span className="text-blue-600 font-semibold">цифровую трансформацию энергетики</span>, делая её точнее, безопаснее и эффективнее.
                </p>
                
                {/* Call to Action */}
                <div className="pt-6">
                  <Button 
                    variant="gradient"
                    size="lg"
                    onClick={scrollToServices}
                    className="rounded-full"
                  >
                    Узнать о наших услугах
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Background Image */}
        <div className="hidden lg:block lg:w-full mb-16 mt-16 mr-10">
          <div 
            className="w-full min-h-screen rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url('/static/bg/tower.jpg')`,
              clipPath: 'circle(97.4% at 98% 20%)'
            }}
          />
        </div>
      </div>
    </section>
  );
}