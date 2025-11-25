
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency } from '../types';
import { CURRENCIES } from '../constants';

interface CurrencyContextType {
  currentCurrency: Currency;
  setCurrencyCode: (code: string) => void;
  formatPrice: (priceInUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(CURRENCIES[0]); // Default to USD

  const setCurrencyCode = (code: string) => {
    const currency = CURRENCIES.find(c => c.code === code);
    if (currency) {
      setCurrentCurrency(currency);
    }
  };

  const formatPrice = (priceInUSD: number) => {
    const convertedPrice = priceInUSD * currentCurrency.rate;
    
    // Format logic: use generic locale but with specific symbol logic
    return new Intl.NumberFormat('es-LA', {
      style: 'currency',
      currency: currentCurrency.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(convertedPrice);
  };

  return (
    <CurrencyContext.Provider value={{ currentCurrency, setCurrencyCode, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
