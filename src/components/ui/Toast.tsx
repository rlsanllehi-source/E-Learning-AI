
import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 fade-in">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${
        type === 'success' ? 'bg-white border-green-200' : 'bg-white border-red-200'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="text-green-500" size={20} />
        ) : (
          <XCircle className="text-red-500" size={20} />
        )}
        <p className={`text-sm font-medium ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
          {message}
        </p>
        <button onClick={onClose} className="ml-2 text-slate-400 hover:text-slate-600">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
