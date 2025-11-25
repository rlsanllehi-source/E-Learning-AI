
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { ViewState } from '../../types';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIChatWidgetProps {
  currentView?: ViewState;
}

export const AIChatWidget: React.FC<AIChatWidgetProps> = ({ currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Greeting based on context
  useEffect(() => {
    let greeting = '¡Hola! Soy tu Asesor Virtual IA. ¿En qué puedo ayudarte hoy?';
    
    if (currentView === 'course-player') {
      greeting = 'Veo que estás tomando una lección. ¿Tienes alguna duda sobre el contenido del video?';
    } else if (currentView === 'dashboard-practices') {
      greeting = '¿Te has atascado en el ejercicio? Puedo darte una pista sin resolver el problema.';
    } else if (currentView === 'dashboard-grades') {
      greeting = 'Aquí puedes ver tu rendimiento. ¿Quieres consejos para mejorar tu promedio?';
    } else if (currentView === 'landing') {
      greeting = '¡Bienvenido a E-Learning AI! ¿Buscas algún curso en específico?';
    }

    setMessages([
      { id: '1', text: greeting, sender: 'ai', timestamp: new Date() }
    ]);
  }, [currentView]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simular respuesta de IA
    setTimeout(() => {
      const responses = [
        "Interesante pregunta. Según el material del curso, eso se refiere a...",
        "Para acceder a tu certificado, debes completar el 100% de los módulos.",
        "La próxima clase en vivo de Zoom está programada en tu calendario.",
        "Te sugiero revisar el minuto 10:25 del Módulo 2 para esa duda específica."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newAiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 mb-4 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-primary-900 p-4 rounded-t-2xl flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-accent-600 p-1.5 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Asesor IA</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> En línea
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[80%] rounded-2xl p-3 text-sm
                  ${msg.sender === 'user' 
                    ? 'bg-accent-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                  }
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu duda aquí..."
                className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-accent-500 outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                onClick={handleSend}
                className="bg-primary-900 text-white p-2 rounded-full hover:bg-primary-800 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-center text-slate-400 mt-2">
              La IA puede cometer errores. Verifica la información importante.
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110
          ${isOpen ? 'bg-slate-700 text-white rotate-90' : 'bg-accent-600 text-white'}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};
