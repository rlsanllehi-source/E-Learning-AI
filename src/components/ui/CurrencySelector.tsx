
import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { CURRENCIES } from '../../constants';
import { Globe } from 'lucide-react';

interface CurrencySelectorProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ className = '', variant = 'dark' }) => {
  const { currentCurrency, setCurrencyCode } = useCurrency();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Globe size={14} className={variant === 'light' ? 'text-slate-500' : 'text-slate-400'} />
      <select
        value={currentCurrency.code}
        onChange={(e) => setCurrencyCode(e.target.value)}
        className={`
          bg-transparent border-none text-xs font-medium focus:ring-0 cursor-pointer outline-none
          ${variant === 'light' 
            ? 'text-slate-600 hover:text-slate-900' 
            : 'text-slate-300 hover:text-white'
          }
        `}
      >
        {CURRENCIES.map((currency) => (
          <option key={currency.code} value={currency.code} className="text-slate-900 bg-white">
            {currency.code} - {currency.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};
