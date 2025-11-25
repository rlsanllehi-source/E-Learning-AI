
import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { MOCK_USERS, MOCK_COURSES } from '../constants';
import { NavProps, User, Course } from '../types';
import { Users, BookOpen, Trash2, Edit, Plus, Globe, Video, Save, Layout, FileText, Image as ImageIcon } from 'lucide-react';

export const AdminPage: React.FC<NavProps> = (props) => {
  const { currentUser } = props;
  const isTeacher = currentUser?.role === 'teacher';
  
  const [activeTab, setActiveTab] = useState<'users' | 'courses' | 'cms_landing' | 'cms_about'>('courses');
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  
  // State for Course Form
  const [courseForm, setCourseForm] = useState({ 
    title: '', 
    desc: '', 
    video: '', 
    zoomLink: '', 
    materialUrl: '' 
  });

  // State for CMS Landing Page
  const [landingContent, setLandingContent] = useState({
    heroTitle: 'Domina el futuro con Inteligencia Artificial',
    heroSubtitle: 'Plataforma adaptativa que personaliza tu ruta de aprendizaje en tiempo real.',
    heroImage: 'https://picsum.photos/800/600?random=10'
  });

  const toggleUserStatus = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'active' ? 'banned' : 'active' } : u));
  };

  const handleSaveCMS = () => {
    alert("Cambios en la Landing Page guardados correctamente.");
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enviando a API Node.js: POST /courses \nDatos: ${JSON.stringify(courseForm)}`);
    setCourseForm({ title: '', desc: '', video: '', zoomLink: '', materialUrl: '' });
  };

  // If teacher, allow viewing courses but restrict User Management and global CMS
  if (isTeacher && (activeTab === 'users' || activeTab.startsWith('cms'))) {
    setActiveTab('courses');
  }

  return (
    <DashboardLayout {...props}>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-900">
             {isTeacher ? 'Panel de Gestión Docente' : 'Panel de Control Principal'}
           </h1>
           <p className="text-slate-500">
             {isTeacher 
               ? 'Gestiona tus cursos, materiales y clases en vivo.' 
               : 'Control total de la plataforma, usuarios y contenidos.'}
           </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg p-1 border border-slate-200 flex flex-wrap gap-1">
           <button 
             onClick={() => setActiveTab('courses')}
             className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'courses' ? 'bg-primary-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
           >
             Gestión de Cursos
           </button>
           
           {!isTeacher && (
             <>
               <button 
                 onClick={() => setActiveTab('users')}
                 className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'users' ? 'bg-primary-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
               >
                 Usuarios
               </button>
               <button 
                 onClick={() => setActiveTab('cms_landing')}
                 className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'cms_landing' ? 'bg-primary-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
               >
                 CMS Landing
               </button>
               <button 
                 onClick={() => setActiveTab('cms_about')}
                 className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'cms_about' ? 'bg-primary-900 text-white' : 'text-slate-500 hover:text-slate-900'}`}
               >
                 CMS Nosotros
               </button>
             </>
           )}
        </div>
      </div>

      {/* --- TAB: COURSES (Teacher & Admin) --- */}
      {activeTab === 'courses' && (
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
               <h2 className="text-lg font-bold flex items-center gap-2">
                  <Plus className="text-accent-600" /> {isTeacher ? 'Crear/Editar Mis Cursos' : 'Gestor de Contenido Académico'}
               </h2>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleCreateCourse} className="space-y-4">
                  <Input 
                    label="Título del Curso" 
                    value={courseForm.title}
                    onChange={e => setCourseForm({...courseForm, title: e.target.value})}
                  />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Descripción del Curso</label>
                    <textarea 
                      className="w-full border border-slate-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none" 
                      rows={3}
                      value={courseForm.desc}
                      onChange={e => setCourseForm({...courseForm, desc: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                        label="URL Video Intro" 
                        placeholder="Youtube/Vimeo Link" 
                        value={courseForm.video}
                        onChange={e => setCourseForm({...courseForm, video: e.target.value})}
                        icon={<Video size={16} />}
                    />
                    <Input 
                        label="Enlace Zoom (Clase en Vivo)" 
                        placeholder="https://zoom.us/..." 
                        value={courseForm.zoomLink}
                        onChange={e => setCourseForm({...courseForm, zoomLink: e.target.value})}
                        icon={<Video size={16} className="text-blue-500" />}
                    />
                  </div>
                  
                  <Input 
                      label="Material de Clase (PDF/Slides)" 
                      placeholder="Google Drive / Dropbox URL" 
                      value={courseForm.materialUrl}
                      onChange={e => setCourseForm({...courseForm, materialUrl: e.target.value})}
                      icon={<FileText size={16} />}
                  />

                  <Button type="submit" fullWidth>
                    {isTeacher ? 'Guardar Cambios del Curso' : 'Publicar Nuevo Curso'}
                  </Button>
               </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
             <div className="bg-slate-100 rounded-xl p-6 border-2 border-dashed border-slate-300">
                <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                   <BookOpen size={20} /> Cursos Activos
                </h3>
                <div className="space-y-3">
                   {MOCK_COURSES.slice(0, 3).map(course => (
                      <div key={course.id} className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                         <div>
                            <p className="font-medium text-sm text-slate-900">{course.title}</p>
                            <p className="text-xs text-slate-500">Instructor: {course.instructor}</p>
                         </div>
                         <Button size="sm" variant="ghost"><Edit size={16} /></Button>
                      </div>
                   ))}
                </div>
             </div>
             
             {/* Teacher Specific Info */}
             <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-800 text-sm mb-2">Estado de Zoom</h4>
                <p className="text-sm text-blue-700 mb-2">Tu cuenta está vinculada correctamente.</p>
                <Button size="sm" variant="secondary" className="bg-blue-200 text-blue-800 hover:bg-blue-300 border-none w-full">
                   Probar Conexión Zoom
                </Button>
             </div>
          </div>
        </div>
      )}

      {/* --- TAB: USERS (Admin Only) --- */}
      {activeTab === 'users' && !isTeacher && (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Users className="text-accent-600" /> Lista de Usuarios
            </h2>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4">Nombre</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Rol</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs uppercase tracking-wide
                           ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 
                             user.role === 'teacher' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100'}
                        `}>
                           {user.role}
                        </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-right flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-accent-600"><Edit size={16} /></button>
                      <button 
                        onClick={() => toggleUserStatus(user.id)}
                        className="p-2 text-slate-400 hover:text-red-600" 
                        title={user.status === 'active' ? 'Banear' : 'Reactivar'}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* --- TAB: CMS LANDING (Admin Only) --- */}
      {activeTab === 'cms_landing' && !isTeacher && (
        <div className="grid lg:grid-cols-2 gap-8">
           <div className="space-y-6">
              <Card>
                 <CardHeader>
                    <h2 className="text-lg font-bold flex items-center gap-2">
                       <Layout className="text-accent-600" /> Sección Hero (Principal)
                    </h2>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <Input 
                       label="Título Principal (H1)" 
                       value={landingContent.heroTitle}
                       onChange={e => setLandingContent({...landingContent, heroTitle: e.target.value})}
                    />
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Subtítulo</label>
                       <textarea 
                          className="w-full border border-slate-300 rounded-md p-3 text-sm"
                          rows={3}
                          value={landingContent.heroSubtitle}
                          onChange={e => setLandingContent({...landingContent, heroSubtitle: e.target.value})}
                       />
                    </div>
                    <Input 
                       label="URL Imagen Hero" 
                       value={landingContent.heroImage}
                       onChange={e => setLandingContent({...landingContent, heroImage: e.target.value})}
                       icon={<ImageIcon size={16} />}
                    />
                    <Button onClick={handleSaveCMS} fullWidth className="gap-2">
                       <Save size={18} /> Guardar Cambios
                    </Button>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader>
                    <h2 className="text-lg font-bold flex items-center gap-2">
                       <Globe className="text-accent-600" /> Configuración General
                    </h2>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <Input label="Email de Contacto (Footer)" placeholder="contacto@elearning.ai" />
                    <Input label="Enlace Facebook" placeholder="https://facebook.com/..." />
                    <Input label="Enlace LinkedIn" placeholder="https://linkedin.com/..." />
                 </CardContent>
              </Card>
           </div>

           {/* Live Preview Simulation */}
           <div className="border-4 border-slate-900 rounded-xl overflow-hidden bg-slate-100 relative h-[600px]">
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 flex items-center px-2 gap-1">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-6 h-full overflow-y-auto bg-slate-50">
                 {/* Mini Hero Mockup */}
                 <div className="bg-primary-900 p-8 text-center">
                    <h1 className="text-xl font-bold text-white mb-2">{landingContent.heroTitle}</h1>
                    <p className="text-xs text-slate-300 mb-4">{landingContent.heroSubtitle}</p>
                    <img src={landingContent.heroImage} className="w-full h-32 object-cover rounded-lg opacity-80" alt="Preview" />
                 </div>
                 <div className="p-4 text-center text-slate-400 text-sm">
                    Resto de la página...
                 </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs pointer-events-none">
                 Vista Previa en Vivo
              </div>
           </div>
        </div>
      )}

      {/* --- TAB: CMS ABOUT (Admin Only) --- */}
      {activeTab === 'cms_about' && !isTeacher && (
         <Card>
            <CardHeader><h2 className="text-lg font-bold">Editar Página "Nosotros"</h2></CardHeader>
            <CardContent>
               <p className="text-slate-500 mb-4">Edita la misión, visión y los miembros del equipo que aparecen públicamente.</p>
               <Button variant="outline">Gestor de Equipo</Button>
               <Button variant="outline" className="ml-4">Editar Textos Legales</Button>
            </CardContent>
         </Card>
      )}

    </DashboardLayout>
  );
};
