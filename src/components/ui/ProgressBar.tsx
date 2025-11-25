import React from 'react';

interface ProgressBarProps {
  progress: number; // Valor entre 0 y 100
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  // Aseguramos que el progreso esté entre 0 y 100
  const widthStyle = Math.max(0, Math.min(100, progress)) + '%';
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className || ''}`}>
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: widthStyle }}
      ></div>
    </div>
  );
};
