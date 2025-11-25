
import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ForumThread } from '../components/social/ForumThread';
import { Button } from '../components/ui/Button';
import { MOCK_THREADS } from '../constants';
import { NavProps } from '../types';
import { MessageSquarePlus, Filter } from 'lucide-react';

export const CommunityPage: React.FC<NavProps> = (props) => {
  return (
    <DashboardLayout {...props}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Comunidad de Aprendizaje</h1>
            <p className="text-slate-500">Conecta con otros estudiantes, resuelve dudas y comparte proyectos.</p>
          </div>
          <Button className="gap-2">
            <MessageSquarePlus size={18} />
            Nueva Discusión
          </Button>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium">Todo</button>
          <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">Ayuda Técnica</button>
          <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">Showcase</button>
          <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">Carreras</button>
          <button className="ml-auto px-2 py-2 text-slate-500 hover:text-slate-900">
            <Filter size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {MOCK_THREADS.map(thread => (
            <div key={thread.id}>
              {/* Thread Header context could go here */}
              <div className="mb-2 flex items-center gap-2">
                 <span className={`px-2 py-1 rounded text-xs font-bold ${thread.category === 'Ayuda' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                   {thread.category}
                 </span>
                 <h3 className="font-bold text-slate-700">{thread.title}</h3>
              </div>
              {/* Only showing first post for preview */}
              <ForumThread post={thread.posts[0]} />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
