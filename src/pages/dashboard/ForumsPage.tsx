import React from 'react';
import { ViewState, User } from '../../types';

interface ForumsPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const ForumsPage: React.FC<ForumsPageProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-white shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-primary-900">Página de Foros/Comunidad (Simulado)</h2>
      <p className="text-lg">Aquí puedes interactuar con otros estudiantes, {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-accent-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('course-player')}
      >
        Ir a Reproductor de Cursos (Demo)
      </button>
    </div>
  );
};
