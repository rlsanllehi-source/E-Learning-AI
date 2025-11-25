
import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { MOCK_THREADS } from '../../constants';
import { NavProps, ForumThread } from '../../types';
import { MessageSquarePlus, Filter, ThumbsUp, MessageSquare, Bot, AlertCircle } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';

// Sub-component for individual posts (Moved to top to prevent ReferenceError)
const ForumPostItem: React.FC<{ post: any, isReply?: boolean }> = ({ post, isReply }) => (
  <div className={`flex gap-4 ${isReply ? 'bg-slate-50 p-4 rounded-lg' : ''}`}>
    <div className="flex-shrink-0">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${post.isAiSuggestion ? 'bg-accent-100 text-accent-600' : 'bg-slate-200 text-slate-600'}`}>
        {post.isAiSuggestion ? <Bot size={20} /> : post.avatar}
      </div>
    </div>
    <div className="flex-grow">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">{post.author}</span>
          {post.isAiSuggestion && (
             <span className="flex items-center gap-1 text-xs bg-accent-100 text-accent-700 px-1.5 py-0.5 rounded font-medium">
                <Bot size={12} /> Sugerencia IA
             </span>
          )}
          <span className="text-xs text-slate-500">• {post.timestamp}</span>
        </div>
      </div>
      <p className="text-slate-600 text-sm mb-3 leading-relaxed">{post.content}</p>
      
      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
        <button className="flex items-center gap-1 hover:text-accent-600">
          <ThumbsUp size={14} /> {post.likes} Útil
        </button>
        <button className="flex items-center gap-1 hover:text-accent-600">
          <MessageSquare size={14} /> Responder
        </button>
      </div>
    </div>
  </div>
);

export const ForumsPage: React.FC<NavProps> = (props) => {
  const [threads, setThreads] = useState<ForumThread[]>(MOCK_THREADS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleCreatePost = () => {
    if (!newPostTitle || !newPostContent) return;

    const newThread: ForumThread = {
      id: Date.now().toString(),
      title: newPostTitle,
      category: 'General',
      posts: [
        {
          id: 'p-new',
          author: props.currentUser?.name || 'Usuario',
          avatar: 'ME',
          content: newPostContent,
          likes: 0,
          timestamp: 'Ahora mismo',
          replies: []
        }
      ]
    };

    setThreads([newThread, ...threads]);
    setIsModalOpen(false);
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <DashboardLayout {...props}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Foros de Discusión</h1>
            <p className="text-slate-500">Colabora, pregunta y aprende con la comunidad.</p>
          </div>
          <Button className="gap-2" onClick={() => setIsModalOpen(true)}>
            <MessageSquarePlus size={18} />
            Nueva Discusión
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium">Todo</button>
          <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">Ayuda</button>
          <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">Proyectos</button>
          <button className="ml-auto px-2 py-2 text-slate-500 hover:text-slate-900">
            <Filter size={20} />
          </button>
        </div>

        {/* Threads List */}
        <div className="space-y-6">
          {threads.map(thread => (
            <div key={thread.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
               <div className="flex items-center gap-2 mb-4">
                 <span className={`px-2 py-1 rounded text-xs font-bold ${thread.category === 'Ayuda' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                   {thread.category}
                 </span>
                 <h3 className="font-bold text-lg text-slate-800">{thread.title}</h3>
               </div>

               {/* Main Post */}
               <ForumPostItem post={thread.posts[0]} />

               {/* Replies (Nested) */}
               {thread.posts[0].replies?.length > 0 && (
                 <div className="mt-4 pl-4 border-l-2 border-slate-100 space-y-4">
                    {thread.posts[0].replies.map(reply => (
                       <ForumPostItem key={reply.id} post={reply} isReply />
                    ))}
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Crear Nuevo Tema">
         <div className="space-y-4">
            <Input 
              label="Título" 
              placeholder="Ej: Duda sobre React Hooks" 
              value={newPostTitle}
              onChange={e => setNewPostTitle(e.target.value)}
            />
            <div>
               <label className="block text-sm font-medium text-slate-700 mb-2">Contenido</label>
               <textarea 
                  className="w-full border border-slate-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none resize-none"
                  rows={4}
                  value={newPostContent}
                  onChange={e => setNewPostContent(e.target.value)}
               />
            </div>
            <Button fullWidth onClick={handleCreatePost}>Publicar Discusión</Button>
         </div>
      </Modal>
    </DashboardLayout>
  );
};
