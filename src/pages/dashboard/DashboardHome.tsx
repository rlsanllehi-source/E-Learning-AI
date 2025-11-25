
import React from 'react';
import { PlayCircle } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { BadgeDisplay } from '../../components/gamification/BadgeDisplay';
import { MOCK_COURSES } from '../../constants';
import { NavProps } from '../../types';

export const DashboardHome: React.FC<NavProps> = (props) => {
  // Filter courses that have progress (simulating enrolled courses)
  const myCourses = MOCK_COURSES.filter(c => c.progress !== undefined);

  return (
    <DashboardLayout {...props}>
      
      {/* Welcome Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hola, {props.currentUser?.name.split(' ')[0]}</h1>
          <p className="text-slate-500">Aquí tienes un resumen de tu actividad reciente.</p>
        </div>
      </div>

      {/* Badges Section */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Mis Logros</h2>
        <BadgeDisplay />
      </div>

      {/* Courses Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Continuar Aprendiendo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.slice(0, 3).map((course) => (
            <Card key={course.id} hoverEffect className="flex flex-col">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold shadow-sm">
                  {course.level}
                </div>
              </div>
              
              <CardContent className="flex-grow pt-5 pb-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-1" title={course.title}>
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{course.instructor}</p>
                </div>

                <div className="space-y-4">
                  <ProgressBar progress={course.progress || 0} />
                  
                  <Button 
                    fullWidth 
                    onClick={() => props.onNavigate('course-player')}
                    className="gap-2"
                  >
                    <PlayCircle size={18} />
                    {course.progress === 0 ? 'Iniciar Curso' : 'Continuar'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Add New Course Placeholder */}
          <button 
            onClick={() => props.onNavigate('catalog')}
            className="border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-accent-600 hover:border-accent-500 hover:bg-slate-50 transition-all min-h-[300px]"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
              <span className="text-2xl">+</span>
            </div>
            <span className="font-medium">Explorar nuevos cursos</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};
