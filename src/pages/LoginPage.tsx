import React from 'react';
import { ViewState, User } from '../types';

interface LoginPageProps {
  onNavigate: (view: ViewState, user?: User) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Página de Login (Simulado)</h2>
        <p className="mb-4">Este componente debe ser llenado con el formulario de inicio de sesión.</p>
        <button 
          className="bg-primary-900 text-white py-2 px-4 rounded hover:bg-primary-800"
          onClick={() => onNavigate('dashboard-home', { id: '1', name: 'Usuario Demo', role: 'student' })}
        >
          Iniciar Sesión (Ir a Dashboard)
        </button>
      </div>
    </div>
  );
};
