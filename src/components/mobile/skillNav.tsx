import {  FolderDot,  Hammer, Medal, Podcast,   } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SNav: React.FC = () => {
  const navItems = [
    { to: '/capacites', label: 'capacites ', icon: <Hammer size={24} /> },
    { to: '/portfolio', label: 'portfolio', icon: <FolderDot  size={24} /> },
    { to: '/blog', label: 'blog', icon: < Podcast  size={24} /> },
    { to: '/realisations', label: 'realisations', icon: <Medal size={24} /> },
  ];

  return (
    <nav className="absolute z-50 top-0  grid grid-cols-4 left-0 w-full h-[45px] bg-base-100 border-t  sm:hidden justify-around items-center">
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

export default SNav;
