import React from 'react';
import { ViewState } from '../types';

interface RegisterPageProps {
  onNavigate: (view: ViewState) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Página de Registro (Simulado)</h2>
        <p className="mb-4">Este componente debe ser llenado con el formulario de registro.</p>
        <button 
          className="bg-accent-500 text-white py-2 px-4 rounded hover:bg-accent-600"
          onClick={() => onNavigate('login')}
        >
          Registrarse (Ir a Login)
        </button>
      </div>
    </div>
  );
};
