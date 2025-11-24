import React from 'react';
import { ViewState, User } from '../types';

interface CoursePlayerProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-primary-900">Reproductor de Cursos (Simulado)</h2>
      <p className="text-lg">Aquí se reproduciría el contenido del curso para {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-accent-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('community')}
      >
        Ir a Comunidad (Demo)
      </button>
    </div>
  );
};
