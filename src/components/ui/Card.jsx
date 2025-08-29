import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'default',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md border border-gray-200';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  const cardClasses = [
    baseClasses,
    paddingClasses[padding],
    hoverClasses,
    className
  ].join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;