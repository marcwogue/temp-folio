import {  NotebookPen, Origami, Rss,   } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MNav: React.FC = () => {
  const navItems = [
    { to: '/conferences', label: 'conference', icon: <Origami  size={24} /> },
    { to: '/maj', label: 'mise à jours', icon: <Rss size={24} /> },
    { to: '/contact', label: 'contact', icon: <NotebookPen  size={24} /> }
  ];

  return (
    <nav className="absolute z-50 top-0  grid grid-cols-3 left-0 w-full h-[45px] bg-base-100 border-t  sm:hidden justify-around items-center">
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

export default MNav;
