import Icon from '@/components/ui/icon';

const Evolution = () => {
  const skills = [
    {
      id: 1,
      name: 'Пищеварение',
      description: 'Кусайте других животных, чтобы избавиться от них и увеличить адаптацию к этому навыку.',
      icon: 'Utensils',
      level: 1,
      hotkey: 'Q',
      progress: 100
    },
    {
      id: 2,
      name: 'Иммунитет',
      description: 'Повреждайте проникших в вас микробов, чтобы избавиться от них и получить адаптацию к этому навыку.',
      icon: 'Shield',
      level: 1,
      hotkey: 'W',
      progress: 0
    },
    {
      id: 3,
      name: 'Устойчивость к радиации',
      description: 'Получайте повреждения от повышенной радиации, чтобы увеличить адаптацию к этому навыку.',
      icon: 'Atom',
      level: 1,
      hotkey: 'E',
      progress: 0
    },
    {
      id: 4,
      name: 'Улучшайте навык и общий уровень',
      description: 'Получайте повреждения от высокого уровня яда и токсинов, чтобы увеличить адаптацию к этому навыку.',
      icon: 'Zap',
      level: 1,
      hotkey: 'R',
      progress: 0
    },
    {
      id: 5,
      name: 'Устойчивость к температуре',
      description: 'Получайте повреждения от высоких и низких температур, чтобы увеличить адаптацию к этому навыку.',
      icon: 'Thermometer',
      level: 1,
      hotkey: 'T',
      progress: 0
    },
    {
      id: 6,
      name: 'Стрессоустойчивость',
      description: 'Испытывайте страх или повреждения токсом, чтобы увеличить адаптацию к этому навыку.',
      icon: 'Heart',
      level: 1,
      hotkey: 'Y',
      progress: 0
    },
    {
      id: 7,
      name: 'Диффузия',
      description: 'Поглощайте витамины после избавления от других организмов, чтобы увеличить адаптацию к этому навыку.',
      icon: 'Waves',
      level: 1,
      hotkey: 'F',
      progress: 0
    },
    {
      id: 8,
      name: 'Метаболизм',
      description: 'Описание отсутствует',
      icon: 'Activity',
      level: 1,
      hotkey: 'G',
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-bio-dark pt-20">
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/img/168649ca-dc7f-4f9e-bb19-3a0afb8c5872.jpg)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-bio-dark/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-bio-cyan mb-8 animate-fade-in">
            Система Эволюции
          </h1>
          <p className="text-xl text-bio-green mb-12 max-w-3xl mx-auto">
            Развивайте навыки своего организма, адаптируйтесь к суровым условиям выживания и эволюционируйте
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Icon name="X" className="text-red-500" size={32} />
            <span className="text-3xl font-bold text-white">10001</span>
            <Icon name="Target" className="text-blue-500" size={32} />
            <span className="text-3xl font-bold text-white">9999</span>
          </div>
          
          <h2 className="text-4xl font-bold text-bio-cyan mb-4">НАВЫКИ</h2>
          <p className="text-bio-cyan/70 mb-8">
            Каждый навык развивается через практику и адаптацию
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-bio-cyan/20 px-6 py-3 rounded-lg">
            <Icon name="Zap" className="text-bio-green" size={24} />
            <span className="text-bio-cyan font-semibold">Очки умений: 3</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-bio-dark/80 border border-bio-cyan/20 rounded-xl p-6 relative">
              <div className="absolute top-4 left-4 bg-bio-green text-bio-dark px-2 py-1 rounded text-sm font-bold">
                {skill.hotkey}
              </div>
              
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-bio-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={skill.icon} className="text-bio-cyan" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-bio-cyan mb-2">{skill.name}</h3>
                
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-bio-green text-bio-dark rounded-full flex items-center justify-center text-sm font-bold">
                    {skill.level}
                  </div>
                  <span className="text-orange-400 font-bold">{skill.progress}%</span>
                </div>
              </div>
              
              <p className="text-bio-cyan/70 text-sm mb-4">{skill.description}</p>
              
              <div className="flex justify-center space-x-2">
                <button className="w-12 h-12 bg-bio-cyan text-bio-dark rounded-full flex items-center justify-center hover:bg-bio-green transition-colors">
                  <Icon name="Plus" size={20} />
                </button>
                <button className="w-12 h-12 bg-bio-cyan text-bio-dark rounded-full flex items-center justify-center hover:bg-bio-green transition-colors">
                  <Icon name="ArrowLeft" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-bio-cyan text-bio-dark px-8 py-4 rounded-lg font-semibold hover:bg-bio-green transition-colors">
            <Icon name="X" className="inline mr-2" size={20} />
            Закрыть окно навыков
          </button>
        </div>
      </div>
    </div>
  );
};

export default Evolution;