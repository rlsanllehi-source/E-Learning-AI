import React from 'react';

interface LandingPageProps {
  onNavigate: (view: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="text-center p-10">
      <h2 className="text-3xl font-bold">¡La aplicación está cargando!</h2>
      <p className="mt-4 text-gray-600">Este es el componente de bienvenida (LandingPage).</p>
      <button 
        className="mt-6 bg-accent-500 text-white py-2 px-4 rounded"
        onClick={() => onNavigate('login')}
      >
        Ir a Login (Dummy)
      </button>
    </div>
  );
};
