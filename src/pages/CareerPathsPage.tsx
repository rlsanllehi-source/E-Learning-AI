import React from 'react';
import { ViewState } from '../types';

interface CareerPathsPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const CareerPathsPage: React.FC<CareerPathsPageProps> = ({ currentView, onNavigate }) => {
  return (
    <div className="flex-grow p-8 bg-white shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-primary-900">Rutas Profesionales (Simulado)</h2>
      <p className="text-lg">Aquí se mostrarán las diferentes rutas de aprendizaje.</p>
      <button 
        className="mt-4 bg-accent-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('landing')}
      >
        Volver a Inicio (Demo)
      </button>
    </div>
  );
};
