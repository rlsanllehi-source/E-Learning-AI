
import React from 'react';
import { MOCK_BADGES } from '../../constants';
import { Lock } from 'lucide-react';

export const BadgeDisplay: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {MOCK_BADGES.map((badge) => (
        <div 
          key={badge.id}
          className={`
            relative p-4 rounded-xl border flex flex-col items-center text-center transition-all
            ${badge.achieved 
              ? 'bg-white border-accent-100 shadow-sm hover:shadow-md' 
              : 'bg-slate-50 border-slate-100 opacity-60 grayscale'
            }
          `}
        >
          <div className="text-4xl mb-3 transform transition-transform hover:scale-110">
            {badge.icon}
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">{badge.name}</h4>
          <p className="text-xs text-slate-500">{badge.description}</p>
          
          {!badge.achieved && (
            <div className="absolute top-2 right-2 text-slate-400">
              <Lock size={14} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
