import React, { ReactNode } from 'react';

interface CardComponentProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardComponentProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className || ''}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardComponentProps> = ({ children, className }) => {
  return (
    <div className={`p-4 border-b border-gray-200 text-lg font-semibold ${className || ''}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardComponentProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className || ''}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardComponentProps> = ({ children, className }) => {
  return (
    <div className={`p-4 border-t border-gray-200 ${className || ''}`}>
      {children}
    </div>
  );
};
