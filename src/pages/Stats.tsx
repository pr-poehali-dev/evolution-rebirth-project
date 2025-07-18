import Icon from '@/components/ui/icon';

const Stats = () => {
  const mainStats = [
    { name: 'Очки Здоровья', value: 25, icon: 'Heart', color: 'text-red-500' },
    { name: 'Очки Энергии', value: 10, icon: 'Zap', color: 'text-blue-500' },
    { name: 'Интеллект', value: 100, icon: 'Brain', color: 'text-purple-500' }
  ];

  const abilities = [
    { name: 'Регенерация здоровья', value: 100.00, current: 0, color: 'text-red-500', icon: 'Heart' },
    { name: 'Регенерация энергии', value: 100.00, current: 0, color: 'text-blue-500', icon: 'Zap' },
    { name: 'Скорость передвижения', value: 100.00, current: 0, color: 'text-green-500', icon: 'Wind' },
    { name: 'Дальность эффектов', value: 100.00, current: 0, color: 'text-orange-500', icon: 'Target' },
    { name: 'Сила укуса', value: 3.00, current: 0, color: 'text-red-400', icon: 'Sword' },
    { name: 'Иммунитет', value: 3.00, current: 0, color: 'text-blue-400', icon: 'Shield' },
    { name: 'Диффузия', value: 1.00, current: 0, color: 'text-cyan-400', icon: 'Waves' },
    { name: 'Метаболизм', value: 1.00, current: 0, color: 'text-green-400', icon: 'Activity' },
    { name: 'Заболевание', value: 1.00, current: 0, color: 'text-red-300', icon: 'Skull' }
  ];

  const resistances = [
    { name: 'Устойчивость к радиации', value: 1.00, current: 0, color: 'text-green-500', icon: 'Atom' },
    { name: 'Устойчивость к токсинам', value: 1.00, current: 0, color: 'text-green-500', icon: 'Flask' },
    { name: 'Устойчивость к температуре', value: 1.00, current: 0, color: 'text-green-500', icon: 'Thermometer' },
    { name: 'Стрессоустойчивость', value: 1.00, current: 0, color: 'text-green-500', icon: 'Heart' },
    { name: 'Запас кислорода', value: 0.00, current: 0, color: 'text-green-500', icon: 'Wind' },
    { name: 'Защита от укуса', value: 0.00, current: 0, color: 'text-green-500', icon: 'Shield' },
    { name: 'Защита от инфекции', value: 0.00, current: 0, color: 'text-green-500', icon: 'ShieldCheck' },
    { name: 'Защита от проникновения', value: 0.00, current: 0, color: 'text-green-500', icon: 'Lock' },
    { name: 'Защита от выпечения', value: 0.00, current: 0, color: 'text-green-500', icon: 'Flame' }
  ];

  return (
    <div className="min-h-screen bg-bio-dark pt-20">
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/img/e8c070a5-4b78-4192-b8e9-7463eea1d85d.jpg)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-bio-dark/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-bio-cyan mb-8 animate-fade-in">
            Характеристики
          </h1>
          <p className="text-xl text-bio-green mb-12 max-w-3xl mx-auto">
            Отслеживайте развитие вашего организма и управляйте характеристиками
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Icon name="X" className="text-red-500" size={32} />
            <span className="text-3xl font-bold text-white">10001</span>
            <Icon name="Target" className="text-blue-500" size={32} />
            <span className="text-3xl font-bold text-white">9999</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {mainStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name={stat.icon} className={stat.color} size={24} />
                <span className="text-white font-semibold">{stat.name}</span>
                <span className="text-white font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 bg-bio-green/20 px-4 py-2 rounded-lg">
            <Icon name="Trophy" className="text-bio-green" size={24} />
            <span className="text-bio-green font-semibold">Уровень</span>
            <span className="text-bio-green font-bold text-xl">1</span>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-bio-cyan mb-8 text-center">ХАРАКТЕРИСТИКИ</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-bio-dark/50 border border-bio-cyan/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-bio-cyan mb-6 flex items-center">
              <Icon name="Zap" className="text-bio-green mr-2" size={28} />
              Очки умений: 3
            </h3>
            
            <div className="space-y-4">
              {abilities.map((ability, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-bio-dark/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name={ability.icon} className={ability.color} size={24} />
                    <span className="text-white font-medium">{ability.name}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`font-bold ${ability.color}`}>{ability.value}</span>
                    <span className="text-white font-bold">{ability.current}</span>
                    <button className="w-8 h-8 bg-bio-cyan text-bio-dark rounded-full flex items-center justify-center hover:bg-bio-green transition-colors">
                      <Icon name="Plus" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-bio-dark/50 border border-bio-cyan/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-bio-cyan mb-6 flex items-center">
              <Icon name="Shield" className="text-bio-green mr-2" size={28} />
              Сопротивляемость
            </h3>
            
            <div className="space-y-4">
              {resistances.map((resistance, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-bio-dark/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name={resistance.icon} className={resistance.color} size={24} />
                    <span className="text-white font-medium">{resistance.name}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`font-bold ${resistance.color}`}>{resistance.value}</span>
                    <span className="text-white font-bold">{resistance.current}</span>
                    <button className="w-8 h-8 bg-bio-cyan text-bio-dark rounded-full flex items-center justify-center hover:bg-bio-green transition-colors">
                      <Icon name="Plus" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-bio-cyan text-bio-dark px-8 py-4 rounded-lg font-semibold hover:bg-bio-green transition-colors">
            <Icon name="X" className="inline mr-2" size={20} />
            Закрыть окно характеристик
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;