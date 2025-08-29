import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart3, Trophy, TrendingUp, User, Settings } from 'lucide-react';

const Navigation = ({ mobile = false, onItemClick }) => {
  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Challenges', href: '/challenges', icon: Trophy },
    { name: 'Progress', href: '/progress', icon: TrendingUp },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const baseClasses = mobile 
    ? 'flex flex-col space-y-1'
    : 'flex space-x-8';

  const linkClasses = ({ isActive }) => {
    const base = mobile
      ? 'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
      : 'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
    
    return isActive
      ? `${base} bg-primary-100 text-primary-700`
      : `${base} text-gray-600 hover:text-gray-900 hover:bg-gray-50`;
  };

  return (
    <nav className={baseClasses}>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.href}
            className={linkClasses}
            onClick={onItemClick}
          >
            <Icon className="w-5 h-5 mr-2" />
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;