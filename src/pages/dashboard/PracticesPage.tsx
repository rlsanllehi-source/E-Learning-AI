
import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { MOCK_PRACTICES } from '../../constants';
import { NavProps, PracticeScenario } from '../../types';
import { Play, Code, Lightbulb, RefreshCw, CheckCircle } from 'lucide-react';

export const PracticesPage: React.FC<NavProps> = (props) => {
  const [activePractice, setActivePractice] = useState<PracticeScenario | null>(null);
  const [code, setCode] = useState('');
  const [filter, setFilter] = useState<'Todos' | 'Básico' | 'Intermedio' | 'Avanzado'>('Todos');
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartPractice = (practice: PracticeScenario) => {
    setActivePractice(practice);
    setCode(practice.initialCode);
    setOutput(null);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);

    // Simulate code execution delay
    setTimeout(() => {
      setIsRunning(false);
      
      // Simple validation mock
      if (code.trim() === activePractice?.initialCode.trim()) {
         setOutput("⚠️ Error: No has escrito ningún código nuevo.\n> Resultado: Fallido");
      } else {
         setOutput("Compilando...\nEjecutando script...\n> Resultado: [ÉXITO] \n> Output esperado: 'Hola Mundo'\n> Output recibido: 'Hola Mundo'\n\n✨ ¡Prueba superada! +50 Puntos de experiencia.");
      }
    }, 1500);
  };

  const filteredPractices = filter === 'Todos' 
    ? MOCK_PRACTICES 
    : MOCK_PRACTICES.filter(p => p.difficulty === filter);

  if (activePractice) {
    // --- PRACTICE MODE (SPLIT SCREEN) ---
    return (
      <DashboardLayout {...props}>
        <div className="h-[calc(100vh-8rem)] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Code className="text-accent-600" /> {activePractice.title}
            </h2>
            <Button variant="outline" size="sm" onClick={() => setActivePractice(null)}>
              Salir de la práctica
            </Button>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
            {/* Left Column: Instructions & Chat */}
            <div className="flex flex-col gap-4">
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-y-auto flex-1">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-4 ${
                    activePractice.difficulty === 'Básico' ? 'bg-green-100 text-green-700' :
                    activePractice.difficulty === 'Intermedio' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {activePractice.difficulty}
                  </span>
                  <h3 className="font-bold text-lg mb-2">Instrucciones</h3>
                  <p className="text-slate-600 mb-6">{activePractice.description}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-blue-800 text-sm flex items-center gap-2 mb-2">
                      <Lightbulb size={16} /> Pistas de IA
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                      {activePractice.hints.map((hint, i) => (
                        <li key={i}>{hint}</li>
                      ))}
                    </ul>
                  </div>
               </div>
               
               {/* Console Output Simulation */}
               <div className="bg-slate-900 rounded-xl p-4 text-slate-300 font-mono text-sm h-40 overflow-y-auto">
                  <div className="text-slate-500 mb-2 border-b border-slate-700 pb-1">Terminal</div>
                  {isRunning ? (
                     <div className="flex items-center gap-2 text-yellow-400">
                        <span className="animate-spin">⟳</span> Ejecutando...
                     </div>
                  ) : output ? (
                    <pre className={`whitespace-pre-wrap ${output.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>{output}</pre>
                  ) : (
                    <span className="italic opacity-50">Esperando ejecución...</span>
                  )}
               </div>
            </div>

            {/* Right Column: Code Editor */}
            <div className="flex flex-col bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-slate-900 px-4 py-2 flex justify-between items-center border-b border-slate-700">
                <span className="text-slate-400 text-xs">main.py</span>
                <div className="flex gap-2">
                   <button onClick={() => { setCode(activePractice.initialCode); setOutput(null); }} className="text-slate-400 hover:text-white p-1" title="Reiniciar">
                      <RefreshCw size={14} />
                   </button>
                </div>
              </div>
              <textarea 
                className="flex-1 w-full bg-slate-800 text-slate-100 p-4 font-mono text-sm resize-none focus:outline-none"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
              />
              <div className="p-4 bg-slate-900 border-t border-slate-700 flex justify-end">
                 <Button onClick={handleRunCode} className="gap-2" disabled={isRunning}>
                    <Play size={16} fill="currentColor" /> {isRunning ? 'Procesando...' : 'Ejecutar Código'}
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // --- CATALOG MODE ---
  return (
    <DashboardLayout {...props}>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Laboratorio de Prácticas</h1>
      
      {/* Filters */}
      <div className="flex gap-2 mb-8">
         {['Todos', 'Básico', 'Intermedio', 'Avanzado'].map(f => (
           <button 
             key={f}
             onClick={() => setFilter(f as any)}
             className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
               filter === f ? 'bg-primary-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
             }`}
           >
             {f}
           </button>
         ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredPractices.map(practice => (
            <div key={practice.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
               <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${
                     practice.difficulty === 'Básico' ? 'bg-green-100 text-green-600' :
                     practice.difficulty === 'Intermedio' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                  }`}>
                     <Code size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{practice.difficulty}</span>
               </div>
               <h3 className="font-bold text-lg text-slate-900 mb-2">{practice.title}</h3>
               <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-2">{practice.description}</p>
               <Button onClick={() => handleStartPractice(practice)} variant="outline" fullWidth>
                 Comenzar Práctica
               </Button>
            </div>
         ))}
      </div>
    </DashboardLayout>
  );
};
