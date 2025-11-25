
import React from 'react';
import { LayoutDashboard, BookOpen, Trophy, Users, Settings, LogOut, Bell, Search, ShieldAlert, FileCode, User } from 'lucide-react';
import { NavProps } from '../../types';
import { CurrencySelector } from '../ui/CurrencySelector';

interface DashboardLayoutProps extends NavProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, onNavigate, currentView, currentUser }) => {
  
  const handleLogoClick = () => {
    // Always navigate to landing page as requested
    onNavigate('landing');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-900 text-slate-300 fixed h-full hidden md:flex flex-col z-20 shadow-xl">
        <div className="flex flex-col px-6 py-5 border-b border-primary-800">
          <div className="flex items-center gap-2 cursor-pointer mb-3 group" onClick={handleLogoClick}>
             <span className="text-xl font-bold text-white tracking-tight group-hover:text-accent-400 transition-colors">E-Learning AI</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Resumen" 
            active={currentView === 'dashboard-home'} 
            onClick={() => onNavigate('dashboard-home')} 
          />
           <SidebarItem 
            icon={<BookOpen size={20} />} 
            label="Mis Cursos" 
            active={currentView === 'dashboard-courses'}
            onClick={() => onNavigate('dashboard-courses')} 
          />
          <SidebarItem 
            icon={<FileCode size={20} />} 
            label="Prácticas" 
            active={currentView === 'dashboard-practices'}
            onClick={() => onNavigate('dashboard-practices')}
          />
          <SidebarItem 
            icon={<Trophy size={20} />} 
            label="Calificaciones" 
            active={currentView === 'dashboard-grades'}
            onClick={() => onNavigate('dashboard-grades')}
          />
          <SidebarItem 
            icon={<Users size={20} />} 
            label="Foros" 
            active={currentView === 'dashboard-community'}
            onClick={() => onNavigate('dashboard-community')}
          />
          
          <div className="pt-6 mt-6 border-t border-primary-800">
            <SidebarItem 
              icon={<User size={20} />} 
              label="Mi Perfil" 
              active={currentView === 'dashboard-profile'}
              onClick={() => onNavigate('dashboard-profile')}
            />
            <SidebarItem icon={<Settings size={20} />} label="Ajustes" />
            
            {(currentUser?.role === 'admin' || currentUser?.role === 'teacher') && (
              <SidebarItem 
                icon={<ShieldAlert size={20} />} 
                label={currentUser.role === 'teacher' ? "Panel Docente" : "Admin Panel"}
                active={currentView === 'admin'}
                onClick={() => onNavigate('admin')}
                className="text-accent-400 hover:text-accent-300"
              />
            )}
          </div>
        </nav>

        <div className="p-4 border-t border-primary-800">
          <button 
            onClick={() => onNavigate('landing')} 
            className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-primary-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center flex-1 max-w-lg">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={18} />
              </span>
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            
            {/* Currency Selector (Top Right) - Hidden for Teachers */}
            {currentUser?.role !== 'teacher' && (
              <div className="hidden sm:flex border-r border-slate-200 pr-4 mr-2">
                 <CurrencySelector variant="light" />
              </div>
            )}

            <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div 
              onClick={() => onNavigate('dashboard-profile')}
              className="h-9 w-9 rounded-full bg-accent-100 flex items-center justify-center text-accent-700 font-bold border border-accent-200 cursor-pointer hover:bg-accent-200 transition-colors shadow-sm"
            >
              {currentUser?.name ? currentUser.name.substring(0,2).toUpperCase() : 'US'}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean; 
  onClick?: () => void;
  className?: string; 
}> = ({ icon, label, active, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
      active 
        ? 'bg-accent-600 text-white shadow-md shadow-accent-900/20' 
        : `text-slate-400 hover:text-white hover:bg-primary-800 ${className}`
    }`}
  >
    {icon}
    {label}
  </button>
);
