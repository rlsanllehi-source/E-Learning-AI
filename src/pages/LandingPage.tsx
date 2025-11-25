
import React from 'react';
import { ArrowRight, Star, Clock, BookOpen, Code, Database, PenTool } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardFooter } from '../components/ui/Card';
import { MOCK_COURSES, LEARNING_PATHS } from '../constants';
import { useCurrency } from '../context/CurrencyContext';
import { NavProps } from '../types';

interface LandingPageProps {
  onNavigate?: NavProps['onNavigate'];
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const { formatPrice } = useCurrency();
  
  const handleNav = (view: NavProps['currentView']) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  const getPathIcon = (type: string) => {
    switch(type) {
      case 'code': return <Code className="w-8 h-8 text-accent-500" />;
      case 'data': return <Database className="w-8 h-8 text-blue-500" />;
      case 'design': return <PenTool className="w-8 h-8 text-purple-500" />;
      default: return <BookOpen className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* Hero Section */}
      <section className="relative bg-primary-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800 opacity-20 -skew-x-12 transform translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600 rounded-full filter blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800 border border-primary-700">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                <span className="text-accent-400 text-sm font-medium">Nueva generación de aprendizaje</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Domina el futuro con <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-orange-400">Inteligencia Artificial</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl">
                Plataforma adaptativa que personaliza tu ruta de aprendizaje en tiempo real. Cursos creados por expertos, potenciados por IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="primary" className="gap-2 group" onClick={() => handleNav('catalog')}>
                  Explorar Cursos 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-slate-700 hover:bg-slate-800 hover:text-white" onClick={() => handleNav('about')}>
                  Conocenos
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                <img 
                  src="https://picsum.photos/800/600?random=10" 
                  alt="Student using AI platform" 
                  className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900 to-transparent p-8">
                  <div className="flex items-center gap-4">
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                        <p className="text-white font-bold text-2xl">98%</p>
                        <p className="text-slate-300 text-sm">Tasa de finalización</p>
                     </div>
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                        <p className="text-white font-bold text-2xl">24/7</p>
                        <p className="text-slate-300 text-sm">Tutor IA disponible</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Gallery Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cursos Destacados</h2>
          <p className="text-lg text-slate-600">
            Explora nuestra selección de cursos de alta demanda, diseñados para impulsar tu carrera tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COURSES.map((course) => (
            <Card key={course.id} hoverEffect className="flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  {course.level}
                </div>
              </div>
              <CardContent className="flex-grow pt-6">
                <div className="flex items-center gap-2 mb-3">
                   <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                   <span className="text-sm font-medium text-slate-700">{course.rating}</span>
                   <span className="text-sm text-slate-400">• {Math.floor(Math.random() * 500) + 100} estudiantes</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-4">Por {course.instructor}</p>
              </CardContent>
              <CardFooter className="border-t border-slate-100 justify-between bg-slate-50/50">
                <span className="text-2xl font-bold text-primary-900">{formatPrice(course.price)}</span>
                <Button size="sm" variant="secondary" onClick={() => handleNav('catalog')}>Ver Detalles</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => handleNav('catalog')}>Ver Catálogo Completo</Button>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Rutas de Aprendizaje</h2>
              <p className="text-lg text-slate-600">
                No aprendas al azar. Sigue una ruta estructurada para alcanzar tu objetivo profesional más rápido.
              </p>
            </div>
            <Button variant="ghost" className="text-accent-600 hover:bg-orange-50 gap-2" onClick={() => handleNav('paths')}>
              Explorar todas las rutas <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEARNING_PATHS.map((path) => (
              <Card key={path.id} hoverEffect className="group cursor-pointer border-slate-200">
                <div onClick={() => handleNav('paths')}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-accent-50 transition-colors">
                      {getPathIcon(path.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{path.title}</h3>
                    <p className="text-slate-600 mb-6">{path.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{path.courseCount} Cursos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{path.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <div className="h-1.5 w-full bg-slate-100 mt-auto">
                    <div className="h-full bg-accent-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
