
import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Modal } from '../../components/ui/Modal';
import { MOCK_COURSES } from '../../constants';
import { NavProps } from '../../types';
import { PlayCircle, Upload, CheckCircle } from 'lucide-react';

export const CoursesPage: React.FC<NavProps> = (props) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const myCourses = MOCK_COURSES.filter(c => c.progress !== undefined);

  return (
    <DashboardLayout {...props}>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Mis Cursos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map((course) => (
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
                
                <div className="flex gap-2">
                  <Button 
                    fullWidth 
                    onClick={() => props.onNavigate('course-player')}
                    className="gap-2"
                  >
                    <PlayCircle size={18} />
                    {course.progress === 0 ? 'Iniciar' : 'Continuar'}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsUploadModalOpen(true)}
                    title="Subir Tarea"
                  >
                    <Upload size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} title="Entregar Tarea">
        <div className="space-y-4 text-center py-4">
           <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 cursor-pointer hover:bg-slate-50 transition-colors">
              <Upload className="mx-auto text-slate-400 mb-2" size={32} />
              <p className="text-sm text-slate-600">Arrastra tu archivo aquí o haz clic para buscar</p>
              <p className="text-xs text-slate-400 mt-1">PDF, ZIP, IPYNB (Máx 10MB)</p>
           </div>
           <Button fullWidth onClick={() => {
             setIsUploadModalOpen(false);
             alert("Tarea entregada correctamente");
           }}>
             Confirmar Envío
           </Button>
        </div>
      </Modal>
    </DashboardLayout>
  );
};
