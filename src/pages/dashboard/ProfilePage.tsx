import React from 'react';
import { ViewState, User } from '../../types';

interface ProfilePageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-white shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-primary-900">Página de Perfil (Simulado)</h2>
      <p className="text-lg mb-2">Usuario Actual: **{currentUser?.name || 'Invitado'}**</p>
      <p className="text-gray-600">Este componente mostrará la información de tu cuenta.</p>
      <button 
        className="mt-4 bg-accent-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('dashboard-courses')}
      >
        Ir a Cursos (Demo)
      </button>
    </div>
  );
};
