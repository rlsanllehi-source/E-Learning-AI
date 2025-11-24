import React from 'react';
import { ViewState } from '../../types';

interface AIChatWidgetProps {
  currentView: ViewState;
}

export const AIChatWidget: React.FC<AIChatWidgetProps> = ({ currentView }) => {
  return (
    <div className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg cursor-pointer">
      🤖 Chat IA Activo
    </div>
  );
};
