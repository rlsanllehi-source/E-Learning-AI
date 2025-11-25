import React from 'react';
import { Brain, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent-600 p-1.5 rounded-md">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">E-Learning AI</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transformando la educación con inteligencia artificial. Aprende las habilidades del futuro, hoy.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-accent-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Plataforma</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Rutas de Aprendizaje</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Mentores</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Precios</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Compañía</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Suscríbete</h3>
            <p className="text-sm text-slate-400 mb-4">Recibe las últimas novedades y cursos gratuitos.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-slate-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-accent-500 outline-none text-white"
              />
              <button className="bg-accent-600 hover:bg-accent-700 text-white rounded-lg p-2 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2024 E-Learning AI. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
