import React from 'react';
import { Target, Users, Globe, Award, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* Hero */}
      <div className="bg-primary-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Revolucionando la Educación con IA</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Nuestra misión es democratizar el acceso a la educación tecnológica de élite utilizando inteligencia artificial para personalizar cada paso de tu camino.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-bold text-accent-600 mb-2">50k+</p>
            <p className="text-slate-600">Estudiantes Activos</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-bold text-accent-600 mb-2">200+</p>
            <p className="text-slate-600">Cursos con IA</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-bold text-accent-600 mb-2">95%</p>
            <p className="text-slate-600">Tasa de Empleabilidad</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-4xl font-bold text-accent-600 mb-2">24/7</p>
            <p className="text-slate-600">Soporte Inteligente</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Por qué E-Learning AI</h2>
            <p className="text-slate-600">Más que una plataforma, somos tu copiloto de carrera.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Aprendizaje Adaptativo</h3>
              <p className="text-slate-600">Nuestros algoritmos analizan tus fortalezas y debilidades para adaptar el contenido en tiempo real, asegurando que nunca te estanques.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-purple-600">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Comunidad Global</h3>
              <p className="text-slate-600">Conecta con desarrolladores y científicos de datos de todo el mundo. Colabora en proyectos y comparte conocimiento.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Certificación Reconocida</h3>
              <p className="text-slate-600">Obtén certificados validados por la industria que demuestran no solo que viste videos, sino que dominas las habilidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Mock */}
      <section className="container mx-auto px-4 py-20">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Conoce a los Expertos</h2>
            <p className="text-slate-600">Liderado por veteranos de la industria Tech y Educación.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                  <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden">
                     <img src={`https://picsum.photos/100/100?random=${i+20}`} alt="Team Member" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Alex Morgan</h3>
                  <p className="text-accent-600 text-sm mb-3">Head of AI Research</p>
                  <p className="text-slate-500 text-sm">Ex-Google DeepMind. Apasionado por hacer la IA accesible para todos.</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
};
