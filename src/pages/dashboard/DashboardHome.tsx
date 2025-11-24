import React from 'react';
import { ViewState, User } from '../../types';

interface DashboardHomeProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6">Dashboard de Inicio (Simulado)</h2>
      <p className="text-gray-700">Bienvenido, {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('dashboard-profile')}
      >
        Ir a Perfil (Demo)
      </button>
    </div>
  );
};
