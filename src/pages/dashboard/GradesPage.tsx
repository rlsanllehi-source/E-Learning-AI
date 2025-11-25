
import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { MOCK_GRADES } from '../../constants';
import { NavProps } from '../../types';
import { Download, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const GradesPage: React.FC<NavProps> = (props) => {
  
  const handleExport = () => {
    alert("Descargando historial_academico.csv ...");
  };

  const handleReview = (id: string) => {
    alert(`Solicitud de revisión enviada para la nota ID: ${id}`);
  };

  // Prepare data for chart
  const chartData = MOCK_GRADES.map(g => ({
    name: g.courseName.split(' ').slice(0, 2).join(' '), // Shorten name
    score: g.score,
    date: g.date
  })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <DashboardLayout {...props}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Mis Calificaciones</h1>
        <Button variant="outline" onClick={handleExport} className="gap-2">
          <Download size={18} /> Exportar CSV
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader><h2 className="text-lg font-bold">Evolución de Rendimiento</h2></CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} />
                  <YAxis stroke="#64748b" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Line type="monotone" dataKey="score" stroke="#ea580c" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><h2 className="text-lg font-bold">Promedio General</h2></CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
             <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="transform -rotate-90 w-full h-full">
                   <circle cx="80" cy="80" r="70" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                   <circle cx="80" cy="80" r="70" stroke="#ea580c" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="110" />
                </svg>
                <div className="absolute text-center">
                   <span className="text-4xl font-bold text-slate-900">73%</span>
                   <p className="text-sm text-slate-500">Global</p>
                </div>
             </div>
             <p className="text-center text-slate-600 mt-4 text-sm">
                Tu rendimiento está en el top 15% de estudiantes. ¡Sigue así!
             </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><h2 className="text-lg font-bold">Historial Detallado</h2></CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-4">Curso</th>
                <th className="p-4">Evaluación</th>
                <th className="p-4">Fecha</th>
                <th className="p-4">Calificación</th>
                <th className="p-4">Estado</th>
                <th className="p-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_GRADES.map((grade) => (
                <tr key={grade.id} className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">{grade.courseName}</td>
                  <td className="p-4">{grade.type}</td>
                  <td className="p-4">{grade.date}</td>
                  <td className="p-4">
                    <span className={`font-bold ${grade.score >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                      {grade.score}/{grade.maxScore}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${grade.status === 'Finalizado' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {grade.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleReview(grade.id)}
                      className="text-accent-600 hover:text-accent-700 text-xs font-medium flex items-center gap-1 ml-auto"
                    >
                      <AlertCircle size={14} /> Solicitar Revisión
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};
