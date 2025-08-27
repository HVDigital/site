import { Card } from "./ui/card";

export function Benefits() {
  const benefits = [
    {
      percentage: "↓40%",
      title: "Проектирование",
      description: "Сокращение сроков проектирования"
    },
    {
      percentage: "↓30%",
      title: "Оборудование",
      description: "Оптимизация затрат на оборудование"
    },
    {
      percentage: "↓40%",
      title: "СМР",
      description: "Строительно-монтажные работы"
    },
    {
      percentage: "↓30%",
      title: "ПНР",
      description: "Пуско-наладочные работы"
    },
    {
      percentage: "↓30%",
      title: "Обслуживание",
      description: "Эксплуатационные расходы"
    }
  ];

  return (
    <>
      {/* Benefits Section */}
      <section id="competencies" className="py-20 bg-gray-900 rounded-3xl ml-10 mr-10">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Эффекты наших решений</h2>
            <p className="text-xl bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 bg-clip-text text-transparent">Экономия CAPEX/OPEX благодаря цифровым технологиям</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group shadow-glow bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">
                  {benefit.percentage}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}