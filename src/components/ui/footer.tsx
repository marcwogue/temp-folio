import { Home, User, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FooterNav: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Accueil', icon: <Home size={24} /> },
    { to: '/Capacites', label: 'Skills', icon: <Zap size={24} /> },
    { to: '/realisations', label: 'Moi', icon: <User size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 grid grid-cols-3 left-0 w-full h-[60px] bg-base-300 border-t  z-50 sm:hidden justify-around items-center">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }: { isActive: boolean }) =>
            `flex flex-col items-center w-full p-4  justify-center  transition-colors duration-200 ${
              !isActive ? 'bg-base-300 text-base-content' : 'bg-secondary text-base-100'
            }`
          }
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default FooterNav;
