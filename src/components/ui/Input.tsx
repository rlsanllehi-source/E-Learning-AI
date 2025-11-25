import React, { InputHTMLAttributes, ReactElement } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactElement;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className = '', ...props }) => {
  const inputId = props.id || props.name || Math.random().toString(36).substring(7);

  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            {React.cloneElement(icon, { className: 'w-5 h-5' })}
          </div>
        )}
        <input
          id={inputId}
          className={`
            flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 
            focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent
            disabled:cursor-not-allowed disabled:opacity-50
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
