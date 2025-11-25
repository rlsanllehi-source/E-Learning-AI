
import React, { useState } from 'react';
import { MOCK_COURSES, COURSE_CONTENT } from '../constants';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Star, Clock, BookOpen, ChevronDown, ChevronUp, User, PlayCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { NavProps } from '../types';

export const CatalogPage: React.FC<NavProps> = ({ onNavigate }) => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const { formatPrice } = useCurrency();

  const toggleDetails = (id: string) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Catálogo de Cursos</h1>
          <p className="text-slate-600 max-w-2xl">
            Explora nuestra biblioteca de cursos diseñados por expertos. Desde fundamentos hasta especializaciones avanzadas, encuentra el contenido perfecto para tu crecimiento.
          </p>
          
          {/* Simple Filters */}
          <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
             <button className="px-4 py-2 bg-primary-900 text-white rounded-full text-sm font-medium">Todos</button>
             <button className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full text-sm font-medium">Desarrollo Web</button>
             <button className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full text-sm font-medium">Data Science</button>
             <button className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full text-sm font-medium">Diseño UX/UI</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {MOCK_COURSES.map((course) => (
            <Card key={course.id} className="overflow-visible transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Course Image */}
                <div className="w-full md:w-72 h-48 md:h-auto relative flex-shrink-0">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover md:rounded-l-xl rounded-t-xl md:rounded-tr-none" />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">
                     {course.level}
                  </div>
                </div>

                {/* Main Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                   <div>
                      <div className="flex justify-between items-start">
                         <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h2>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                               <div className="flex items-center gap-1"><User size={16} /> {course.instructor}</div>
                               <div className="flex items-center gap-1"><Star size={16} className="text-yellow-400 fill-yellow-400" /> {course.rating}</div>
                               <div className="flex items-center gap-1"><Clock size={16} /> {course.totalDuration || "10h 30m"}</div>
                            </div>
                         </div>
                         <span className="text-2xl font-bold text-primary-900">{formatPrice(course.price)}</span>
                      </div>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                         {course.description || "Este curso integral te llevará desde los conceptos básicos hasta técnicas avanzadas, utilizando proyectos del mundo real y ejercicios prácticos diseñados para reforzar tu aprendizaje."}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex gap-2 flex-wrap mb-4">
                         {course.tags?.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">#{tag}</span>
                         ))}
                      </div>
                   </div>

                   <div className="flex gap-4 items-center">
                      <Button onClick={() => onNavigate('login')}>Inscribirse Ahora</Button>
                      <button 
                        onClick={() => toggleDetails(course.id)}
                        className="flex items-center gap-1 text-sm font-medium text-accent-600 hover:text-accent-700"
                      >
                         {expandedCourse === course.id ? 'Ocultar Temario' : 'Ver Temario Completo'}
                         {expandedCourse === course.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                   </div>
                </div>
              </div>

              {/* Expanded Details (Syllabus) */}
              {expandedCourse === course.id && (
                 <div className="border-t border-slate-100 bg-slate-50/50 p-6 animate-in fade-in slide-in-from-top-2">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <BookOpen size={20} className="text-accent-500" />
                       Contenido del Curso
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-4">
                          {/* Reuse generic Mock Data for demo purposes */}
                          {COURSE_CONTENT.map((module, idx) => (
                             <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 font-medium text-slate-800 text-sm">
                                   {module.title}
                                </div>
                                <div className="divide-y divide-slate-100">
                                   {module.lessons.map((lesson, lIdx) => (
                                      <div key={lIdx} className="px-4 py-3 flex items-center justify-between text-sm hover:bg-slate-50">
                                         <div className="flex items-center gap-3">
                                            <PlayCircle size={14} className="text-slate-400" />
                                            <span className="text-slate-600">{lesson.title}</span>
                                         </div>
                                         <span className="text-slate-400 text-xs">{lesson.duration}</span>
                                      </div>
                                   ))}
                                </div>
                             </div>
                          ))}
                       </div>
                       
                       {/* Additional Info Column */}
                       <div className="space-y-6">
                          <div className="bg-white p-5 rounded-lg border border-slate-200">
                             <h4 className="font-bold text-slate-900 mb-3 text-sm">Lo que aprenderás</h4>
                             <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                   <span className="text-green-500 mt-0.5">✓</span>
                                   Dominio completo de las herramientas fundamentales.
                                </li>
                                <li className="flex items-start gap-2">
                                   <span className="text-green-500 mt-0.5">✓</span>
                                   Creación de 3 proyectos reales para tu portafolio.
                                </li>
                                <li className="flex items-start gap-2">
                                   <span className="text-green-500 mt-0.5">✓</span>
                                   Mejores prácticas de la industria y estándares de código.
                                </li>
                             </ul>
                          </div>
                          <div className="bg-white p-5 rounded-lg border border-slate-200">
                             <h4 className="font-bold text-slate-900 mb-3 text-sm">Requisitos</h4>
                             <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                <li>Ordenador con acceso a internet.</li>
                                <li>No se requiere experiencia previa (Nivel Principiante).</li>
                                <li>Ganas de aprender.</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

