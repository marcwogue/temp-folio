import { BriefcaseBusiness,  GraduationCap,   } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ParcNav: React.FC = () => {
  const navItems = [
    { to: '/education', label: 'Accueil', icon: <GraduationCap size={24} /> },
    { to: '/experience', label: 'parcour', icon: <BriefcaseBusiness  size={24} /> }
  ];

  return (
    <nav className="absolute top-65 grid grid-cols-2 left-0 w-full h-[45px] bg-base-100 border-t  z-50 sm:hidden justify-around items-center">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }: { isActive: boolean }) =>
            `flex flex-col items-center w-full   justify-center  transition-colors duration-200 ${
              !isActive ? ' text-base-content' : 'bg-secondary text-base-100'
            }`
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default ParcNav;
