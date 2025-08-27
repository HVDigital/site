import { Card } from "./ui/card";
import { 
  TrendingDownIcon, 
  ShieldCheckIcon, 
  MonitorIcon,
  ChevronRightIcon 
} from "./icons";

export function Competencies() {
  const advantages = [
    {
      id: "01",
      title: "Экономия",
      description: "Снижение капитальных и операционных расходов за счет цифровизации процессов учета и контроля.",
      icon: TrendingDownIcon,
      color: "from-blue-500 to-blue-600",
      badgeColor: "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
    },
    {
      id: "02", 
      title: "Надежность",
      description: "Высокая точность измерений и защита от искажений благодаря цифровой передаче сигналов.",
      icon: ShieldCheckIcon,
      color: "from-blue-500 to-blue-600",
      badgeColor: "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
    },
    {
      id: "03",
      title: "Мониторинг", 
      description: "Непрерывный контроль состояния оборудования и технологических параметров в режиме реального времени.",
      icon: MonitorIcon,
      color: "from-blue-500 to-blue-600",
      badgeColor: "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
    }
  ];

  return (
    <>
      {/* Key Equipment Section */}
      <section id="competencies" className="bg-white">
        <div className="min-h-screen max-w-9xl mx-auto px-6 flex">
          {/* Right Side - Background Image */}
          <div className="hidden lg:block lg:w-full mb-16 mt-16 ml-10">
            <div 
              className="w-full min-h-screen rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('static/bg/substation-2.jpg')`,
                clipPath: 'circle(99.7% at 0 51%)'
              }}
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col mt-16">
            <div className="container mr-auto px-6 mt-16 mb-16">
              <div className="max-w-3xl mr-auto">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-12">
                  Ключевое оборудование <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">для цифровых решений</span>
                </h2>
                <p className="text-left text-base md:text-xl text-gray-600 mb-8 leading-relaxed">
                  На базе интеграции цифровых измерительных ТТ и ТН создаются комплексные решения для различных задач энергетики и промышленности.
                </p>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Основные направления:</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">Цифровые точки коммерческого и технического учёта</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">Релейная защита и автоматика в архитектуре ЦПС</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">Мониторинг и контроль технологических процессов на промышленных предприятиях</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-8">Преимущества для клиентов:</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                      <Card key={advantage.id} className="group service-card relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden">
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Number badge */}
                        <div className="relative z-10 flex items-center justify-between mb-1">
                          <div className={`text-5xl px-3 py-1 rounded-full ${advantage.badgeColor} transition-colors duration-300`}>
                            {advantage.id}
                          </div>
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${advantage.color} text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                            <advantage.icon className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                            {advantage.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                            {advantage.description}
                          </p>
                          
                          {/* Action indicator */}
                          {/* <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <span className="text-sm font-medium text-blue-600 mr-2">Подробнее</span>
                            <ChevronRightIcon className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                          </div> */}
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}