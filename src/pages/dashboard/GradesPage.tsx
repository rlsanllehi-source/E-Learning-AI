import React from 'react';
import { ViewState, User } from '../../types';

interface GradesPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const GradesPage: React.FC<GradesPageProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-white shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-primary-900">Página de Calificaciones (Simulado)</h2>
      <p className="text-lg">Aquí verás tu historial de notas, {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-accent-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('dashboard-practices')}
      >
        Ir a Prácticas (Demo)
      </button>
    </div>
  );
};
