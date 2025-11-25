
import React from 'react';
import { MOCK_TEACHERS } from '../constants';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { GraduationCap, Briefcase, Linkedin, Twitter, Award } from 'lucide-react';
import { NavProps } from '../types';

export const TeachersPage: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Docentes Expertos</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Aprende de líderes de la industria que trabajan activamente en las empresas tecnológicas más innovadoras del mundo.
          </p>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TEACHERS.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-slate-200">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6 pt-12">
                   <h3 className="text-2xl font-bold text-white">{teacher.name}</h3>
                   <p className="text-accent-400 font-medium">{teacher.role}</p>
                </div>
              </div>
              
              <CardContent className="space-y-6 pt-6">
                <div>
                   <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                      <GraduationCap size={18} className="text-accent-600" /> Formación
                   </h4>
                   <p className="text-slate-600 text-sm">{teacher.studies}</p>
                </div>

                <div>
                   <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                      <Briefcase size={18} className="text-accent-600" /> Experiencia
                   </h4>
                   <p className="text-slate-600 text-sm">{teacher.experience}</p>
                </div>

                <div>
                   <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                      <Award size={18} className="text-accent-600" /> Especialidad
                   </h4>
                   <div className="flex flex-wrap gap-2">
                      {teacher.specialties?.map((spec, i) => (
                         <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">
                            {spec}
                         </span>
                      ))}
                   </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                   <div className="flex gap-3">
                      <button className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></button>
                      <button className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></button>
                   </div>
                   <Button size="sm" variant="outline" onClick={() => onNavigate('catalog')}>Ver Cursos</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
