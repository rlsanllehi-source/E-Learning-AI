
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Play, FileText, MessageSquare, Lock, HelpCircle, Video } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Button } from '../components/ui/Button';
import { QuizModal } from '../components/quiz/QuizModal';
import { COURSE_CONTENT, MOCK_QUIZ } from '../constants';
import { NavProps, Module, Lesson } from '../types';

export const CoursePlayer: React.FC<NavProps> = (props) => {
  // Initial state pointing to first lesson
  const [currentModuleId, setCurrentModuleId] = useState(COURSE_CONTENT[0].id);
  const [currentLesson, setCurrentLesson] = useState<Lesson>(COURSE_CONTENT[0].lessons[0]);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [COURSE_CONTENT[0].id]: true
  });
  const [activeTab, setActiveTab] = useState<'desc' | 'resources' | 'discussion'>('desc');
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Mock course data for Zoom link
  const courseHasZoom = true;
  const zoomLink = "https://zoom.us/test";

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <DashboardLayout {...props}>
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">
        
        {/* Main Content Area (Video/Quiz Placeholder) */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto lg:overflow-visible">
          
          {/* Zoom Banner if Live Class Available */}
          {courseHasZoom && (
             <div className="bg-blue-600 text-white p-3 rounded-xl mb-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-3">
                   <div className="bg-white/20 p-2 rounded-full animate-pulse">
                      <Video size={20} />
                   </div>
                   <div>
                      <p className="font-bold text-sm">Clase en Vivo Disponible</p>
                      <p className="text-xs text-blue-100">Martes y Jueves, 18:00 hrs</p>
                   </div>
                </div>
                <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 border-none">
                   Unirse vía Zoom
                </Button>
             </div>
          )}

          {/* Video Player */}
          <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video relative group">
            {currentLesson.type === 'video' ? (
              <iframe 
                width="100%" 
                height="100%" 
                src={`${currentLesson.videoUrl}?autoplay=0`} 
                title="Video Player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-8 text-center">
                 <div className="bg-accent-600 p-4 rounded-full mb-4">
                    <HelpCircle size={48} />
                 </div>
                 <h2 className="text-2xl font-bold mb-2">Evaluación de Conocimientos</h2>
                 <p className="text-slate-400 mb-6 max-w-md">Pon a prueba lo que has aprendido en este módulo. Nuestra IA analizará tus respuestas para darte feedback personalizado.</p>
                 <Button onClick={() => setIsQuizOpen(true)} size="lg">Comenzar Quiz</Button>
              </div>
            )}
          </div>

          {/* Video Info & Tabs */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">{currentLesson.title}</h1>
            
            <div className="border-b border-slate-200 mb-6">
              <nav className="flex gap-6">
                <button 
                  onClick={() => setActiveTab('desc')}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'desc' ? 'border-accent-600 text-accent-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                  Descripción
                </button>
                <button 
                  onClick={() => setActiveTab('resources')}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'resources' ? 'border-accent-600 text-accent-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                  Recursos
                </button>
                <button 
                  onClick={() => setActiveTab('discussion')}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'discussion' ? 'border-accent-600 text-accent-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                  Discusión
                </button>
              </nav>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              {activeTab === 'desc' && (
                <div>
                  <p>En esta lección exploraremos los fundamentos clave de la tecnología. Aprenderás conceptos esenciales que te permitirán avanzar hacia temas más complejos con una base sólida.</p>
                  <h3 className="text-slate-900 font-semibold mt-4">Lo que aprenderás:</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Conceptos fundamentales y terminología.</li>
                    <li>Casos de uso en la industria actual.</li>
                    <li>Mejores prácticas para la implementación.</li>
                  </ul>
                </div>
              )}
              {activeTab === 'resources' && (
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <FileText className="text-red-500" size={20} />
                    <span className="font-medium text-slate-700">Diapositivas de la lección (PDF)</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <FileText className="text-blue-500" size={20} />
                    <span className="font-medium text-slate-700">Código fuente del ejemplo (ZIP)</span>
                  </a>
                </div>
              )}
              {activeTab === 'discussion' && (
                <div className="text-center py-8 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                  <MessageSquare className="mx-auto text-slate-400 mb-2" size={32} />
                  <p>La sección de comentarios está disponible solo para estudiantes verificados.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Content Tree */}
        <div className="w-full lg:w-80 flex-shrink-0 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full">
          <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
            Contenido del Curso
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-2">
            {COURSE_CONTENT.map((module) => (
              <div key={module.id} className="rounded-lg overflow-hidden border border-slate-100">
                <button 
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-semibold text-sm text-slate-800">{module.title}</span>
                  {expandedModules[module.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                
                {expandedModules[module.id] && (
                  <div className="bg-white">
                    {module.lessons.map((lesson) => (
                      <button 
                        key={lesson.id}
                        onClick={() => handleLessonSelect(lesson)}
                        className={`
                          w-full flex items-start gap-3 p-3 text-left hover:bg-slate-50 transition-all border-l-4
                          ${currentLesson.id === lesson.id ? 'border-accent-500 bg-accent-50/10' : 'border-transparent'}
                        `}
                      >
                         <div className={`mt-0.5 ${lesson.completed ? 'text-green-500' : 'text-slate-300'}`}>
                           {lesson.completed ? <CheckCircle size={16} /> : (lesson.type === 'quiz' ? <HelpCircle size={16} /> : <Lock size={16} />)}
                         </div>
                         <div>
                           <p className={`text-sm ${currentLesson.id === lesson.id ? 'font-medium text-accent-700' : 'text-slate-600'}`}>
                             {lesson.title}
                           </p>
                           <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                             {lesson.type === 'video' ? <Play size={10} /> : <HelpCircle size={10} />}
                             {lesson.duration}
                           </p>
                         </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quiz Modal Overlay */}
      {isQuizOpen && (
        <QuizModal 
          quiz={MOCK_QUIZ} 
          onClose={() => setIsQuizOpen(false)} 
          onComplete={() => {
            setIsQuizOpen(false);
            alert("¡Felicitaciones! Has completado el módulo.");
            // Logic to mark lesson as complete would go here
          }} 
        />
      )}

    </DashboardLayout>
  );
};
