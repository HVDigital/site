import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const clients = [
  { name: "Россети", logo: "/static/logo/rosseti.svg" },
  { name: "Росатом", logo: "/static/logo/rosatom.svg" },
  { name: "Русал", logo: "/static/logo/rusal.svg" },
  { name: "УГМК", logo: "/static/logo/ugmk.svg" },
  { name: "Норникель", logo: "/static/logo/nornikel.svg" },
  { name: "Транснефть", logo: "/static/logo/transneft.svg" },
  { name: "Газпромнефть", logo: "/static/logo/gazprom.svg" },
  { name: "ВСПО Ависма", logo: "/static/logo/avisma.svg" },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="min-h-screen flex">
        {/* Left Side - Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Main Content Area */}
          <div className="flex-grow flex items-center">
            <div className="max-w-2xl mx-auto p-4 lg:p-8">
              {/* Header */}
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-2">
                Опыт и <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ключевые заказчики</span>
              </h2>
              
              {/* Intro Paragraph */}
              <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-6">
                За время работы нашей компанией реализовано <span className="font-bold">более 60 проектов</span> по цифровизации и автоматизации энергетических объектов различного масштаба и сложности.
              </p>
              
              {/* Second Paragraph */}
              <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-8">
                Специализируемся на <span className="font-bold">реконструкции и модернизации</span> существующих энергетических систем с применением передовых цифровых технологий и современного оборудования.
              </p>
              
              {/* Key Clients Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Ключевые заказчики:</h3>
                
                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {clients.map((client) => (
                    <Card 
                      key={client.name}
                      className="flex flex-col items-center p-4 bg-white/10 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex flex-col items-center p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                        <ImageWithFallback 
                          src={client.logo}
                          alt={client.name}
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Background Image */}
        <div className="hidden lg:block lg:w-1/2 mr-10">
          <div 
            className="w-full min-h-screen mb-24 mt-24 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url('static/bg/substation.jpg')`,
              clipPath: 'circle(97.2% at 99% 69%)'
            }}
          />
        </div>
      </div>
    </section>
  );
}