
import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '../ui/Button';
import { CurrencySelector } from '../ui/CurrencySelector';
import { NavProps } from '../../types';

export const Header: React.FC<NavProps> = ({ onNavigate, currentView, currentUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (view: NavProps['currentView']) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    onNavigate('landing');
    setIsMenuOpen(false);
  };

  // Nav link styles updated for better visibility and hover effects
  const navLinkClass = (view: NavProps['currentView']) => `
    text-base xl:text-lg font-bold transition-all duration-200 hover:text-white hover:scale-105 whitespace-nowrap
    ${currentView === view ? 'text-white' : 'text-slate-300'}
  `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900 border-b border-primary-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1920px]">
        {/* Main Flex Container using justify-between for perfect spacing */}
        <div className="flex items-center justify-between h-20 lg:h-28 transition-all">
          
          {/* 1. LEFT: Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <div 
              className="flex items-center gap-3 lg:gap-4 cursor-pointer group" 
              onClick={handleLogoClick}
            >
              <div className="bg-accent-600 p-2 lg:p-3 rounded-2xl flex-shrink-0 transition-transform group-hover:scale-110 shadow-lg shadow-accent-600/20">
                <Brain className="w-7 h-7 lg:w-9 lg:h-9 text-white" />
              </div>
              <span className="text-xl lg:text-3xl font-extrabold text-white tracking-tight whitespace-nowrap">
                E-Learning AI
              </span>
            </div>
          </div>

          {/* 2. CENTER: Navigation Tabs (Flows naturally between Left and Right) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-10 px-4">
            <button onClick={() => handleNav('landing')} className={navLinkClass('landing')}>
              Inicio
            </button>
            <button onClick={() => handleNav('about')} className={navLinkClass('about')}>
              Nosotros
            </button>
            <button onClick={() => handleNav('catalog')} className={navLinkClass('catalog')}>
              Nuestros Cursos
            </button>
            <button onClick={() => handleNav('teachers')} className={navLinkClass('teachers')}>
              Nuestros Docentes
            </button>
          </nav>

          {/* 3. RIGHT: Actions & Currency */}
          <div className="hidden md:flex items-center justify-end gap-4 lg:gap-6 flex-shrink-0">
            
            {currentUser ? (
               <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => onNavigate(currentUser.role === 'student' ? 'dashboard-home' : 'admin')}
                  className="font-bold text-lg px-6 h-12 whitespace-nowrap shadow-md shadow-accent-600/20"
               >
                 Ir al Campus
               </Button>
            ) : (
              <div className="flex items-center gap-3 lg:gap-5">
                <Button 
                  variant="ghost" 
                  onClick={() => handleNav('login')} 
                  className="text-slate-300 hover:text-white hover:bg-primary-800 text-lg font-semibold px-4 h-12 whitespace-nowrap"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  variant="primary"
                  size="lg" 
                  onClick={() => handleNav('register')} 
                  className="shadow-lg shadow-accent-600/20 font-bold text-lg px-8 py-3 h-14 whitespace-nowrap transform hover:scale-105 transition-transform"
                >
                  Regístrate Gratis
                </Button>
              </div>
            )}

            {/* Currency Selector with Separator */}
            <div className="border-l border-primary-700 pl-4 lg:pl-6 ml-2 h-10 lg:h-12 flex items-center">
              <CurrencySelector />
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
             <div className="flex items-center border-r border-slate-700 pr-3 mr-1">
                <CurrencySelector />
             </div>
             <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-900 border-t border-primary-800 absolute w-full left-0 shadow-xl animate-in slide-in-from-top-5 z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => handleNav('landing')} className="block w-full text-left px-3 py-4 text-xl text-slate-300 hover:text-white font-medium hover:bg-primary-800 rounded-lg">Inicio</button>
            <button onClick={() => handleNav('about')} className="block w-full text-left px-3 py-4 text-xl text-slate-300 hover:text-white font-medium hover:bg-primary-800 rounded-lg">Nosotros</button>
            <button onClick={() => handleNav('catalog')} className="block w-full text-left px-3 py-4 text-xl text-slate-300 hover:text-white font-medium hover:bg-primary-800 rounded-lg">Nuestros Cursos</button>
            <button onClick={() => handleNav('teachers')} className="block w-full text-left px-3 py-4 text-xl text-slate-300 hover:text-white font-medium hover:bg-primary-800 rounded-lg">Nuestros Docentes</button>
            
            <div className="pt-6 space-y-4 border-t border-primary-800 mt-4">
              {currentUser ? (
                <Button fullWidth size="lg" variant="primary" onClick={() => onNavigate(currentUser.role === 'student' ? 'dashboard-home' : 'admin')} className="text-lg py-4">
                  Ir al Campus
                </Button>
              ) : (
                <div className="flex flex-col gap-4">
                  <Button fullWidth size="lg" variant="ghost" onClick={() => handleNav('login')} className="bg-primary-800 text-slate-200 text-lg py-4">
                     Iniciar Sesión
                  </Button>
                  <Button fullWidth size="lg" variant="primary" onClick={() => handleNav('register')} className="text-lg py-4">
                     Regístrate Gratis
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
