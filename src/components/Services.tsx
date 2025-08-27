import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  CpuIcon, 
  DatabaseIcon, 
  MonitorIcon, 
  SettingsIcon, 
  ShieldIcon, 
  ZapIcon,
  ArrowRightIcon
} from "./icons";

export function Services() {
  const services = [
    {
      icon: CpuIcon,
      color: "from-blue-300 to-blue-600",
      title: "Проектирование ПС и ЦПС",
      description: "Разработка проектной документации для цифровых подстанций с учетом современных стандартов.",
      buttonVariant: "primary" as const
    },
    {
      icon: DatabaseIcon,
      color: "from-green-300 to-emerald-600",
      title: "Комплексные поставки оборудования",
      description: "Поставка высоковольтного оборудования от ведущих производителей.",
      buttonVariant: "primary" as const
    },
    {
      icon: SettingsIcon,
      color: "from-purple-300 to-pink-600",
      title: "СМР и ПНР",
      description: "Выполнение строительно-монтажных и пуско-наладочных работ.",
      buttonVariant: "primary" as const
    },
    {
      icon: MonitorIcon,
      color: "from-cyan-300 to-blue-600",
      title: "Цифровые измерительные ТТ и ТН",
      description: "Оптические трансформаторы тока и электронные трансформаторы напряжения.",
      buttonVariant: "primary" as const
    },
    {
      icon: ZapIcon,
      color: "from-indigo-300 to-indigo-600",
      title: "Цифровые системы учета энергии",
      description: "Системы коммерческого и технического учета с высокой точностью.",
      buttonVariant: "primary" as const
    },
    {
      icon: ShieldIcon,
      color: "from-orange-300 to-amber-600",
      title: "Сервис и обслуживание",
      description: "Техническая поддержка и долгосрочное сопровождение объектов.",
      buttonVariant: "primary" as const
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -left-16 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-blue-300/30 via-cyan-300/20 to-transparent blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-300/30 via-cyan-300/20 to-transparent blur-3xl"></div>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-left bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">Наши услуги</h2>
            <p className="text-xl text-gray-600 text-left max-w-3xl">
              Комплексный портфель услуг для энергосистем и промышленных объектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group service-card bg-white rounded-2xl p-8 shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">{service.description}</p>
                
                {/* Enhanced Button for each service */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button
                    variant={service.buttonVariant}
                    size="sm"
                    onClick={scrollToContact}
                    className="rounded-full w-full"
                  >
                    Узнать больше
                    <ArrowRightIcon className="ml-2 h-3 w-3" />
                  </Button>
                </div>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}