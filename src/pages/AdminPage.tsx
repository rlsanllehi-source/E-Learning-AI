import React from 'react';
import { ViewState, User } from '../types';

interface AdminPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  currentUser: User | undefined;
}

export const AdminPage: React.FC<AdminPageProps> = ({ currentView, onNavigate, currentUser }) => {
  return (
    <div className="flex-grow p-8 bg-red-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-red-700">Página de Administración (Simulado)</h2>
      <p className="text-lg">Esta es la vista de administrador para {currentUser?.name || 'Invitado'}.</p>
      <button 
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('about')}
      >
        Ir a Acerca de (Demo)
      </button>
    </div>
  );
};
