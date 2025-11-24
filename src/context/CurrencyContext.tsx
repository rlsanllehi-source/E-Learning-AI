import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Define el tipo de valor que tendrá el contexto (state + functions)
interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
}

// 2. Crea el Contexto
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// 3. Define el Provider (el componente que envuelve a la app)
interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<string>('USD');

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// 4. Hook para consumir el contexto (opcional, pero buena práctica)
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
