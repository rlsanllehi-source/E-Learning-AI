import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  
  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 text-white rounded-lg shadow-lg z-50 ${bgColor}`}>
      {message}
    </div>
  );
};

export const showToast = (message: string, type: string) => {
    console.log(`[TOAST SIMULADO - ${type.toUpperCase()}]: ${message}`);
};
