import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { NavProps } from '../types';

interface RegisterPageProps {
  onNavigate: NavProps['onNavigate'];
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    console.log('Register Attempt:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Registration logic triggered (Check Console)');
    }, 1000);
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
          Crea tu cuenta gratis
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          ¿Ya tienes una cuenta?{' '}
          <button onClick={() => onNavigate('login')} className="font-medium text-accent-600 hover:text-accent-500">
            Inicia sesión aquí
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="border-0 shadow-xl">
          <CardContent className="pt-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                label="Nombre Completo"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Correo Electrónico"
                type="email"
                name="email"
                placeholder="tu@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Contraseña"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <Input
                label="Confirmar Contraseña"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-slate-300 text-accent-600 focus:ring-accent-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-slate-900">
                  Acepto los <a href="#" className="text-accent-600 hover:text-accent-500">términos y condiciones</a>
                </label>
              </div>

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={loading}
              >
                {loading ? 'Creando cuenta...' : 'Registrarse'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
