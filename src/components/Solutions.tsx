export function Solutions() {
  return (
    <>
      {/* Digital Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Section */}
            <div className="space-y-6">
              {/* Header */}
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Реализация <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">комплексных цифровых решений</span> для ЦПС
              </h2>
              
              {/* Company Description */}
              <p className="text-lg text-slate-700 leading-relaxed">
                Наша компания специализируется на разработке и внедрении передовых цифровых технологий для центров питания и подстанций, обеспечивая высокий уровень автоматизации и контроля энергетических систем.
              </p>
              
              {/* Key Technologies Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Ключевые технологии:</h3>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Использование современных <span className="font-bold">цифровых измерительных трансформаторов</span> позволяет значительно повысить точность измерений и надежность системы.
                </p>
                
                {/* Bulleted List */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-lg text-slate-700">Оптические трансформаторы тока (ТТ)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-lg text-slate-700">Электронные трансформаторы напряжения (ТН)</span>
                  </div>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Данные технологии обеспечивают превосходную производительность и долговечность оборудования в самых требовательных условиях эксплуатации, гарантируя:
                </p>
              </div>
              
              {/* Highlight Boxes */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-3 rounded-full shadow-sm">
                  <span className="font-bold text-white">Точность</span>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-3 rounded-full shadow-sm">
                  <span className="font-bold text-white">Безопасность</span>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-3 rounded-full shadow-sm">
                  <span className="font-bold text-white">Надежность</span>
                </div>
              </div> 
            </div>
            
            {/* Right Column - Images Section */}
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 - Electrical Equipment */}
              <div className="relative aspect-square rounded-3xl overflow-hidden group">
                <img 
                  src={`/static/bg/img1.jpg`}
                  alt="Электрооборудование" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium text-white">Электрооборудование: высокоточные измерения и контроль параметров сети</span>
                </div>
              </div>
              
              {/* Image 2 - Power Lines */}
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src={`/static/bg/img2.jpg`}
                  alt="Линии электропередачи" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium text-white">Линии электропередачи: надежная передача данных и мощности</span>
                </div>
              </div>

              {/* Image 3 - Control Panel */}
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src={`/static/bg/img3.jpg`}
                  alt="Щит управления" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium text-white">Щит управления: оперативный мониторинг и автоматизация процессов</span>
                </div>
              </div>

              {/* Image 4 - Digital Display */}
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src={`/static/bg/img4.jpg`}
                  alt="Цифровая индикация" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium text-white">Цифровая индикация: наглядность и прозрачность работы системы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}