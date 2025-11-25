
export type ViewState = 
  | 'landing' 
  | 'login' 
  | 'register' 
  | 'dashboard-home'
  | 'dashboard-courses'
  | 'dashboard-profile'
  | 'dashboard-grades'
  | 'dashboard-practices'
  | 'dashboard-community'
  | 'course-player' 
  | 'admin' 
  | 'about' 
  | 'catalog' 
  | 'paths'
  | 'teachers';

export type UserRole = 'student' | 'admin' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'banned';
  phone?: string;
  avatar?: string;
  profilePicture?: string; 
  isLoggedIn: boolean;
}
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number; // Exchange rate relative to USD
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  achieved: boolean;
}

export interface ForumPost {
  id: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  replies: ForumPost[];
  timestamp: string;
  isAiSuggestion?: boolean;
}

export interface ForumThread {
  id: string;
  title: string;
  category: 'General' | 'Ayuda' | 'Proyectos' | 'Carreras';
  posts: ForumPost[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  price: number;
  image: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  tags?: string[];
  progress?: number; // 0-100
  description?: string;
  totalDuration?: string;
  zoomLink?: string;
  nextLiveSession?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courseCount: number;
  duration: string;
  icon: 'code' | 'data' | 'design';
  features?: string[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // index
  aiFeedback: string;
  timeReference: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  type: 'video' | 'quiz';
  quizId?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Grade {
  id: string;
  courseId: string;
  courseName: string;
  score: number;
  maxScore: number;
  date: string;
  type: 'Quiz' | 'Proyecto' | 'Examen';
  status: 'Finalizado' | 'En Revisión';
}

export interface PracticeScenario {
  id: string;
  title: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  description: string;
  initialCode: string;
  hints: string[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  image: string;
  studies: string;
  experience: string;
  specialties: string[];
}

export interface NavProps {
  currentView: ViewState;
  onNavigate: (view: ViewState, params?: any) => void;
  currentUser?: User;
}

export type UserRole = 'student' | 'teacher' | 'admin';
}
