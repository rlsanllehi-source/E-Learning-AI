import React from 'react';
import { LEARNING_PATHS } from '../constants';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle, ArrowRight, Code, Database, PenTool, Layout, Server, Brain } from 'lucide-react';
import { NavProps } from '../types';

export const CareerPathsPage: React.FC<NavProps> = ({ onNavigate }) => {
  
  const getPathIcon = (type: string) => {
    switch(type) {
      case 'code': return <Code className="w-12 h-12 text-accent-500" />;
      case 'data': return <Database className="w-12 h-12 text-blue-500" />;
      case 'design': return <PenTool className="w-12 h-12 text-purple-500" />;
      default: return <Brain className="w-12 h-12" />;
    }
  };

  // Mock generic features for visual demo
  const features = [
    "Mentoria Personalizada",
    "Proyectos de Portafolio",
    "Simulacros de Entrevista",
    "Certificado Profesional"
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Rutas de Carrera Profesional</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Deja de adivinar qué aprender después. Nuestras rutas estructuradas te llevan desde principiante hasta profesional contratado.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          {LEARNING_PATHS.map((path, index) => (
            <div key={path.id} className={`flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-200 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="flex-1 space-y-6">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                   {getPathIcon(path.icon)}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{path.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {path.description} Esta ruta está diseñada meticulosamente para cubrir todas las habilidades que las empresas top están buscando hoy en día.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="block text-2xl font-bold text-slate-900">{path.courseCount}</span>
                    <span className="text-sm text-slate-500">Cursos Especializados</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="block text-2xl font-bold text-slate-900">{path.duration}</span>
                    <span className="text-sm text-slate-500">Duración Estimada</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Incluye:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <CheckCircle size={16} className="text-green-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="lg" onClick={() => onNavigate('catalog')} className="gap-2">
                  Comenzar Ruta <ArrowRight size={18} />
                </Button>
              </div>

              {/* Visual Representation of Path Steps */}
              <div className="flex-1 w-full bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-6 text-center">Tu camino al éxito</h3>
                <div className="space-y-6 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
                  
                  <div className="relative flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center z-10 font-bold border-4 border-slate-50">1</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex-1">
                      <p className="font-bold text-slate-900">Fundamentos</p>
                      <p className="text-xs text-slate-500">Bases sólidas y lógica</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center z-10 font-bold border-4 border-slate-50">2</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex-1">
                      <p className="font-bold text-slate-900">Profundización</p>
                      <p className="text-xs text-slate-500">Frameworks y Herramientas</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center z-10 font-bold border-4 border-slate-50">3</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex-1">
                      <p className="font-bold text-slate-900">Especialización & AI</p>
                      <p className="text-xs text-slate-500">Integración de Inteligencia Artificial</p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center z-10 font-bold border-4 border-slate-50">4</div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex-1">
                      <p className="font-bold text-slate-900">Proyecto Capstone</p>
                      <p className="text-xs text-slate-500">Construye una aplicación real</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
