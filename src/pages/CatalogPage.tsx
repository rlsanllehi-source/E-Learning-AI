import React from 'react';
import { ViewState } from '../types';

interface CatalogPageProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ currentView, onNavigate }) => {
  return (
    <div className="flex-grow p-8 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-accent-500">Página de Catálogo (Simulado)</h2>
      <p className="text-lg">Aquí se listarán todos los cursos disponibles.</p>
      <button 
        className="mt-4 bg-primary-900 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('paths')}
      >
        Ir a Rutas Profesionales (Demo)
      </button>
    </div>
  );
};
