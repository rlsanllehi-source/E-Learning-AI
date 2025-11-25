import React, { ReactNode } from 'react';
import { ViewState } from '../../types';

interface DashboardLayoutProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Aquí iría el SideBar original */}
      <main className="flex-grow p-4 md:p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};
