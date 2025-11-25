
import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { NavProps, UserRole } from '../types';
import { MOCK_USERS } from '../constants';

interface LoginPageProps {
  onNavigate: (view: NavProps['currentView'], user?: any) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate finding the user in the database
    const foundUser = MOCK_USERS.find(u => u.email === email);

    setTimeout(() => {
      setLoading(false);
      if (foundUser) {
        if (foundUser.role === 'admin' || foundUser.role === 'teacher') {
          onNavigate('admin', foundUser);
        } else {
          onNavigate('dashboard-home', foundUser);
        }
      } else {
        // Fallback for random emails to student dashboard
        onNavigate('dashboard-home', MOCK_USERS[0]); 
      }
    }, 1000);
  };

  // Instant login handler
  const handleQuickLogin = (role: UserRole) => {
    setLoading(true);
    const user = MOCK_USERS.find(u => u.role === role);
    
    if (user) {
      setEmail(user.email);
      setPassword('demo1234');
      
      setTimeout(() => {
        setLoading(false);
        if (role === 'admin' || role === 'teacher') {
          onNavigate('admin', user);
        } else {
          onNavigate('dashboard-home', user);
        }
      }, 600);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-24">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <button 
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 text-slate-500 hover:text-primary-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </button>
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Bienvenido de nuevo
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          ¿No tienes una cuenta?{' '}
          <button onClick={() => onNavigate('register')} className="font-medium text-accent-600 hover:text-accent-500">
            Regístrate gratis
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="border-0 shadow-xl">
          <CardContent className="pt-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                label="Correo Electrónico"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={<Mail className="w-4 h-4" />}
              />

              <div>
                <Input
                  label="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex items-center justify-end mt-1">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-accent-600 hover:text-accent-500">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={loading}
              >
                {loading ? 'Iniciando...' : 'Entrar'}
              </Button>
            </form>

            <div className="mt-6 text-center">
               <div className="relative mb-6">
                 <div className="absolute inset-0 flex items-center">
                   <div className="w-full border-t border-slate-300"></div>
                 </div>
                 <div className="relative flex justify-center text-sm">
                   <span className="px-2 bg-white text-slate-500">Accesos Directos (Demo)</span>
                 </div>
               </div>
               
               <div className="grid grid-cols-3 gap-3">
                 <button 
                    onClick={() => handleQuickLogin('admin')} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 hover:shadow-md transition-all"
                 >
                    <span className="font-bold text-sm">Admin</span>
                    <span className="text-[10px] opacity-70">Control Total</span>
                 </button>
                 <button 
                    onClick={() => handleQuickLogin('teacher')} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:shadow-md transition-all"
                 >
                    <span className="font-bold text-sm">Docente</span>
                    <span className="text-[10px] opacity-70">Gestión Cursos</span>
                 </button>
                 <button 
                    onClick={() => handleQuickLogin('student')} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg border border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:shadow-md transition-all"
                 >
                    <span className="font-bold text-sm">Alumno</span>
                    <span className="text-[10px] opacity-70">Campus Virtual</span>
                 </button>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
