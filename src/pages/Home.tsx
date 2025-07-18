import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-bio-dark">
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(/img/786890fe-ffa9-4b2e-aabb-95cc2ccc1a3f.jpg)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-bio-dark/70"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-bio-cyan mb-6 animate-pulse-glow">
            Эволюция Возрождение
          </h1>
          
          <p className="text-xl text-bio-green mb-8 max-w-2xl mx-auto">
            Многопользовательская PVP MMO Survival игра с уникальной системой эволюции. 
            Прокачивайте уровень, развивайтесь по ступеням и станьте сильнейшим.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/evolution"
              className="bg-bio-cyan text-bio-dark px-8 py-4 rounded-lg font-semibold hover:bg-bio-green transition-colors flex items-center justify-center space-x-2"
            >
              <Icon name="TreePine" size={24} />
              <span>Система Эволюции</span>
            </Link>
            
            <Link
              to="/stats"
              className="border border-bio-cyan text-bio-cyan px-8 py-4 rounded-lg font-semibold hover:bg-bio-cyan/10 transition-colors flex items-center justify-center space-x-2"
            >
              <Icon name="BarChart3" size={24} />
              <span>Характеристики</span>
            </Link>
          </div>
        </div>
      </div>
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-bio-cyan mb-16">
            Особенности игры
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bio-dark/50 border border-bio-cyan/20 rounded-xl p-6 text-center">
              <Icon name="Sword" className="text-bio-green mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-bio-cyan mb-3">PVP Сражения</h3>
              <p className="text-bio-cyan/70">
                Участвуйте в интенсивных PVP боях с другими игроками и доказывайте свою силу
              </p>
            </div>
            
            <div className="bg-bio-dark/50 border border-bio-cyan/20 rounded-xl p-6 text-center">
              <Icon name="TreePine" className="text-bio-green mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-bio-cyan mb-3">Эволюция</h3>
              <p className="text-bio-cyan/70">
                Уникальная система эволюции по ступеням позволяет развивать своего персонажа
              </p>
            </div>
            
            <div className="bg-bio-dark/50 border border-bio-cyan/20 rounded-xl p-6 text-center">
              <Icon name="Users" className="text-bio-green mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-bio-cyan mb-3">MMO Survival</h3>
              <p className="text-bio-cyan/70">
                Выживайте в мире с тысячами других игроков в режиме реального времени
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;