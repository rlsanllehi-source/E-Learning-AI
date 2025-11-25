
import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Toast } from '../../components/ui/Toast';
import { Modal } from '../../components/ui/Modal';
import { NavProps } from '../../types';
import { User, Mail, Phone, Moon, Sun, Lock } from 'lucide-react';

export const ProfilePage: React.FC<NavProps> = (props) => {
  const [formData, setFormData] = useState({
    name: props.currentUser?.name || '',
    email: props.currentUser?.email || '',
    phone: props.currentUser?.phone || '',
  });
  const [showToast, setShowToast] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  const handleSave = () => {
    // Simulating API Call
    setTimeout(() => {
      setShowToast(true);
    }, 500);
  };

  const handlePasswordChange = () => {
    setIsPasswordModalOpen(false);
    setPasswordForm({ current: '', new: '', confirm: '' });
    // Show separate success toast for password if needed
    alert("Contraseña actualizada correctamente");
  };

  return (
    <DashboardLayout {...props}>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Mi Perfil</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader><h2 className="text-lg font-bold">Información Personal</h2></CardHeader>
            <CardContent className="space-y-4">
              <Input 
                label="Nombre Completo" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                icon={<User size={16} />}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  label="Correo Electrónico" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  icon={<Mail size={16} />}
                />
                <Input 
                  label="Teléfono" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  icon={<Phone size={16} />}
                />
              </div>
              <div className="pt-4 flex justify-end">
                <Button onClick={handleSave}>Guardar Cambios</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><h2 className="text-lg font-bold">Seguridad</h2></CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900">Contraseña</h3>
                  <p className="text-sm text-slate-500">Último cambio hace 3 meses</p>
                </div>
                <Button variant="outline" onClick={() => setIsPasswordModalOpen(true)}>Cambiar Contraseña</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
             <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-accent-100 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-accent-700 mb-4">
                  JP
                </div>
                <h3 className="font-bold text-lg">{formData.name}</h3>
                <p className="text-slate-500 text-sm mb-4">Estudiante Premium</p>
                <Button variant="ghost" size="sm">Cambiar Avatar</Button>
             </CardContent>
          </Card>

          <Card>
             <CardHeader><h2 className="text-lg font-bold">Preferencias</h2></CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                   <div className="flex items-center gap-3">
                      <Sun size={20} className="text-slate-500" />
                      <span className="text-sm font-medium">Tema Claro</span>
                   </div>
                   <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-green-400"/>
                      <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer"></label>
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>

      {showToast && (
        <Toast 
          message="Datos actualizados correctamente" 
          onClose={() => setShowToast(false)} 
        />
      )}

      <Modal 
        isOpen={isPasswordModalOpen} 
        onClose={() => setIsPasswordModalOpen(false)} 
        title="Cambiar Contraseña"
      >
        <div className="space-y-4">
          <Input 
            type="password" 
            label="Contraseña Actual" 
            value={passwordForm.current}
            onChange={e => setPasswordForm({...passwordForm, current: e.target.value})}
          />
          <Input 
            type="password" 
            label="Nueva Contraseña" 
            value={passwordForm.new}
            onChange={e => setPasswordForm({...passwordForm, new: e.target.value})}
          />
          <Input 
            type="password" 
            label="Confirmar Nueva Contraseña" 
            value={passwordForm.confirm}
            onChange={e => setPasswordForm({...passwordForm, confirm: e.target.value})}
          />
          <Button fullWidth onClick={handlePasswordChange}>Actualizar Contraseña</Button>
        </div>
      </Modal>
    </DashboardLayout>
  );
};
