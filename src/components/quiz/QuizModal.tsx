import React, { useState } from 'react';
import { X, AlertCircle, CheckCircle, Brain } from 'lucide-react';
import { Button } from '../ui/Button';
import { Quiz } from '../../types';

interface QuizModalProps {
  quiz: Quiz;
  onClose: () => void;
  onComplete: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ quiz, onClose, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return; // Prevent changing after submit
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      setIsCorrect(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Brain className="text-accent-600" size={24} />
              Evaluación IA
            </h2>
            <p className="text-sm text-slate-500 mt-1">Pregunta {currentQuestionIndex + 1} de {quiz.questions.length}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <h3 className="text-lg font-medium text-slate-800 mb-6">{currentQuestion.text}</h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={showFeedback}
                className={`
                  w-full text-left p-4 rounded-xl border-2 transition-all
                  ${selectedOption === idx 
                    ? (showFeedback 
                        ? (idx === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                        : 'border-accent-500 bg-accent-50')
                    : 'border-slate-100 hover:bg-slate-50'
                  }
                  ${showFeedback && idx === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${selectedOption === idx 
                       ? (showFeedback 
                           ? (idx === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500 text-white' : 'border-red-500 bg-red-500 text-white')
                           : 'border-accent-500 bg-accent-500 text-white')
                       : (showFeedback && idx === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300')
                    }
                  `}>
                    {showFeedback && idx === currentQuestion.correctAnswer ? <CheckCircle size={14} /> : (
                       showFeedback && selectedOption === idx && idx !== currentQuestion.correctAnswer ? <X size={14} /> : null
                    )}
                  </div>
                  <span className={`text-sm ${selectedOption === idx ? 'font-medium' : 'text-slate-600'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* AI Feedback Section */}
          {showFeedback && !isCorrect && (
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-amber-100 p-2 rounded-full h-fit text-amber-600">
                <Brain size={20} />
              </div>
              <div>
                <h4 className="font-bold text-amber-800 text-sm mb-1">Análisis de Tutor IA:</h4>
                <p className="text-sm text-amber-700 mb-2">{currentQuestion.aiFeedback}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-amber-800 bg-amber-100 w-fit px-2 py-1 rounded">
                   <AlertCircle size={12} />
                   Repasar: {currentQuestion.timeReference}
                </div>
              </div>
            </div>
          )}
          
          {showFeedback && isCorrect && (
             <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex gap-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-green-100 p-2 rounded-full h-fit text-green-600">
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-sm mb-1">¡Correcto!</h4>
                <p className="text-sm text-green-700">Has dominado este concepto perfectamente. Continúa así.</p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-end">
          {!showFeedback ? (
            <Button onClick={handleSubmit} disabled={selectedOption === null}>Confirmar Respuesta</Button>
          ) : (
            <Button onClick={handleNext} variant={isCorrect ? 'primary' : 'secondary'}>
              {isLastQuestion ? 'Finalizar Quiz' : 'Siguiente Pregunta'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
