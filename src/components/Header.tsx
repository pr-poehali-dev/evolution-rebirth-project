import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/evolution', label: 'Эволюция', icon: 'TreePine' },
    { path: '/stats', label: 'Характеристики', icon: 'BarChart3' }
  ];

  return (
    <header className="border-b border-bio-cyan/20 bg-bio-dark/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Dna" className="text-bio-green" size={32} />
            <div className="text-xl font-bold text-bio-cyan">
              Эволюция Возрождение
            </div>
          </Link>
          
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-bio-cyan/20 text-bio-cyan'
                    : 'text-bio-cyan/70 hover:text-bio-cyan hover:bg-bio-cyan/10'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;