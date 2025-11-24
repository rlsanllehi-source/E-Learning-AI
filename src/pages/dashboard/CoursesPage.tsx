import React from 'react';
import { ViewState, User } from '../../types';

interface CoursesPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-accent-500">Página de Cursos (Simulado)</h2>
      <p className="text-lg">Aquí verás tu lista de cursos inscritos, {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-primary-900 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('dashboard-grades')}
      >
        Ir a Calificaciones (Demo)
      </button>
    </div>
  );
};
