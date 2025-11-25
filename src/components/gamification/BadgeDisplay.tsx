import React from 'react';

interface BadgeDisplayProps {
  badges: string[];
}

export const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badges }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 border rounded-lg bg-white">
      <h3 className="w-full text-lg font-semibold text-purple-700">Mis Logros (Simulado)</h3>
      {badges.length > 0 ? (
        badges.map((badge, index) => (
          <span key={index} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">
            {badge}
          </span>
        ))
      ) : (
        <p className="text-gray-500">Aún no tienes insignias.</p>
      )}
    </div>
  );
};
