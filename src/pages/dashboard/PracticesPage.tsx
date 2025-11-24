import React from 'react';
import { ViewState, User } from '../../types';

interface PracticesPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const PracticesPage: React.FC<PracticesPageProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-accent-500">Página de Prácticas/Ejercicios (Simulado)</h2>
      <p className="text-lg">Aquí podrás encontrar ejercicios para reforzar lo aprendido, {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-primary-900 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('dashboard-community')}
      >
        Ir a Comunidad (Demo)
      </button>
    </div>
  );
};
