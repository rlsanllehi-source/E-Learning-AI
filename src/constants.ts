
import { Course, LearningPath, Module, Quiz, ForumThread, Badge, User, Grade, PracticeScenario, Currency, Teacher } from './types';

// Currencies ordered: USD, PEN, then alphabetical Hispanic American
export const CURRENCIES: Currency[] = [
  { code: 'USD', name: 'USD - Dólar', symbol: '$', rate: 1 },
  { code: 'PEN', name: 'PEN - Sol Peruano', symbol: 'S/', rate: 3.75 },
  { code: 'ARS', name: 'ARS - Peso Argentino', symbol: '$', rate: 850 },
  { code: 'BOB', name: 'BOB - Boliviano', symbol: 'Bs', rate: 6.9 },
  { code: 'CLP', name: 'CLP - Peso Chileno', symbol: '$', rate: 980 },
  { code: 'COP', name: 'COP - Peso Col', symbol: '$', rate: 3900 },
  { code: 'CRC', name: 'CRC - Colón Costa Rica', symbol: '₡', rate: 515 },
  { code: 'CUP', name: 'CUP - Peso Cubano', symbol: '$', rate: 24 },
  { code: 'DOP', name: 'DOP - Peso Dom', symbol: 'RD$', rate: 59 },
  { code: 'GTQ', name: 'GTQ - Quetzal Guate', symbol: 'Q', rate: 7.8 },
  { code: 'HNL', name: 'HNL - Lempira Hond', symbol: 'L', rate: 24.7 },
  { code: 'MXN', name: 'MXN - Peso Mex', symbol: '$', rate: 17.1 },
  { code: 'NIO', name: 'NIO - Córdoba Nic', symbol: 'C$', rate: 36.6 },
  { code: 'PAB', name: 'PAB - Balboa Pan', symbol: 'B/.', rate: 1 },
  { code: 'PYG', name: 'PYG - Guaraní Par', symbol: '₲', rate: 7300 },
  { code: 'UYU', name: 'UYU - Peso Uru', symbol: '$U', rate: 39 },
  { code: 'VES', name: 'VES - Bolívar Ven', symbol: 'Bs', rate: 36.2 },
];

export const MOCK_USERS: User[] = [
  { 
    id: 'u1', 
    name: 'Juan Pérez', 
    email: 'alumno@elearning.ai', 
    role: 'student', 
    status: 'active',
    phone: '+52 555 123 4567',
    preferences: { theme: 'light', notifications: true }
  },
  { id: 'u2', name: 'Admin Principal', email: 'admin@elearning.ai', role: 'admin', status: 'active' },
  { id: 'u3', name: 'Profesor García', email: 'docente@elearning.ai', role: 'teacher', status: 'active' },
  { id: 'u4', name: 'Usuario Baneado', email: 'troll@internet.com', role: 'student', status: 'banned' },
];

export const MOCK_GRADES: Grade[] = [
  { id: 'g1', courseId: '1', courseName: 'Fundamentos de IA', score: 85, maxScore: 100, date: '2023-10-15', type: 'Quiz', status: 'Finalizado' },
  { id: 'g2', courseId: '1', courseName: 'Fundamentos de IA', score: 92, maxScore: 100, date: '2023-10-20', type: 'Examen', status: 'Finalizado' },
  { id: 'g3', courseId: '3', courseName: 'Desarrollo Full Stack', score: 70, maxScore: 100, date: '2023-11-05', type: 'Proyecto', status: 'En Revisión' },
  { id: 'g4', courseId: '2', courseName: 'Python Avanzado', score: 45, maxScore: 50, date: '2023-12-01', type: 'Quiz', status: 'Finalizado' },
];

export const MOCK_PRACTICES: PracticeScenario[] = [
  {
    id: 'p1',
    title: 'Variables en Python',
    difficulty: 'Básico',
    description: 'Declara dos variables, `x` e `y`, asígnales los valores 5 y 10, e imprime su suma.',
    initialCode: '# Escribe tu código aquí\n\n',
    hints: ['Usa el operador +', 'Recuerda la función print()']
  },
  {
    id: 'p2',
    title: 'Detector de Palíndromos',
    difficulty: 'Intermedio',
    description: 'Crea una función que determine si una palabra se lee igual al revés. Ignora mayúsculas.',
    initialCode: 'def es_palindromo(texto):\n    pass',
    hints: ['Usa slicing de strings [::-1]', 'Convierte todo a minúsculas con .lower()']
  },
  {
    id: 'p3',
    title: 'API REST con Express',
    difficulty: 'Avanzado',
    description: 'Configura un servidor básico en Express que responda "Hola Mundo" en la ruta GET /.',
    initialCode: 'const express = require("express");\nconst app = express();\n\n// Tu código aquí',
    hints: ['Usa app.get()', 'No olvides app.listen()']
  }
];

export const MOCK_BADGES: Badge[] = [
  { id: 'b1', name: 'Primeros Pasos', description: 'Completaste tu primera lección', icon: '🚀', achieved: true },
  { id: 'b2', name: 'Estudiante Constante', description: '7 días de racha de aprendizaje', icon: '🔥', achieved: true },
  { id: 'b3', name: 'Maestro de la IA', description: 'Completa la ruta de Data Science', icon: '🧠', achieved: false },
  { id: 'b4', name: 'Contribuidor Top', description: '10 respuestas útiles en el foro', icon: '💬', achieved: false },
];

export const MOCK_THREADS: ForumThread[] = [
  {
    id: 't1',
    title: '¿Cómo instalo TensorFlow en Mac M1?',
    category: 'Ayuda',
    posts: [
      {
        id: 'p1',
        author: 'Carlos Dev',
        avatar: 'CD',
        content: 'Tengo problemas instalando las dependencias. ¿Alguien tiene una guía actualizada?',
        likes: 5,
        timestamp: 'Hace 2 horas',
        replies: [
          {
            id: 'p2',
            author: 'Ana AI',
            avatar: 'AA',
            content: 'Hola Carlos, te recomiendo usar Miniforge en lugar de Anaconda estándar. Aquí tienes el link a la documentación oficial para chips Apple Silicon.',
            likes: 12,
            timestamp: 'Hace 1 hora',
            isAiSuggestion: true,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 't2',
    title: 'Mi proyecto final: Detector de Mascarillas',
    category: 'Proyectos',
    posts: [
      {
        id: 'p3',
        author: 'Sofia Learner',
        avatar: 'SL',
        content: '¡Hola comunidad! Acabo de terminar el curso de Visión por Computadora. Les comparto mi repositorio para recibir feedback.',
        likes: 24,
        timestamp: 'Hace 1 día',
        replies: []
      }
    ]
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Fundamentos de IA para Principiantes',
    instructor: 'Dra. Sarah Connor',
    rating: 4.8,
    price: 49.99,
    image: 'https://picsum.photos/400/250?random=1',
    level: 'Principiante',
    tags: ['ia', 'basicos', 'teoria'],
    progress: 45,
    zoomLink: 'https://zoom.us/j/123456789',
    nextLiveSession: 'Jueves, 18:00 hrs'
  },
  {
    id: '2',
    title: 'Python Avanzado: Patrones de Diseño',
    instructor: 'Guido van Rossum (Clon IA)',
    rating: 4.9,
    price: 89.99,
    image: 'https://picsum.photos/400/250?random=2',
    level: 'Avanzado',
    tags: ['python', 'codigo', 'backend'],
    progress: 10,
    zoomLink: 'https://zoom.us/j/987654321',
    nextLiveSession: 'Martes, 10:00 hrs'
  },
  {
    id: '3',
    title: 'Desarrollo Full Stack con Next.js',
    instructor: 'Lee Robinson',
    rating: 4.7,
    price: 69.99,
    image: 'https://picsum.photos/400/250?random=3',
    level: 'Intermedio',
    tags: ['web', 'frontend', 'javascript', 'react'],
    progress: 0
  },
  {
    id: '4',
    title: 'Machine Learning con TensorFlow',
    instructor: 'Andrew Ng',
    rating: 4.9,
    price: 99.99,
    image: 'https://picsum.photos/400/250?random=4',
    level: 'Avanzado',
    tags: ['ia', 'ml', 'python', 'tensorflow']
  },
  {
    id: '5',
    title: 'Sistemas de Diseño UI/UX',
    instructor: 'Sarah Drasner',
    rating: 4.6,
    price: 59.99,
    image: 'https://picsum.photos/400/250?random=5',
    level: 'Intermedio',
    tags: ['diseño', 'ui', 'ux']
  },
  {
    id: '6',
    title: 'Bootcamp de Ciencia de Datos 2024',
    instructor: 'Kirill Eremenko',
    rating: 4.8,
    price: 129.99,
    image: 'https://picsum.photos/400/250?random=6',
    level: 'Principiante',
    tags: ['datos', 'python', 'analitica']
  }
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-1',
    title: 'Desarrollador Full Stack',
    description: 'Domina el stack MERN y los frameworks modernos de frontend.',
    courseCount: 12,
    duration: '6 Meses',
    icon: 'code'
  },
  {
    id: 'path-2',
    title: 'Ciencia de Datos e IA',
    description: 'Desde lo básico de Python hasta Redes Neuronales y Deep Learning.',
    courseCount: 15,
    duration: '8 Meses',
    icon: 'data'
  },
  {
    id: 'path-3',
    title: 'Diseño de Producto Digital',
    description: 'Aprende investigación, prototipado y diseño UI de alta fidelidad.',
    courseCount: 8,
    duration: '4 Meses',
    icon: 'design'
  }
];

export const COURSE_CONTENT: Module[] = [
  {
    id: 'm1',
    title: 'Módulo 1: Introducción a la IA Generativa',
    lessons: [
      { id: 'l1', title: '¿Qué es un LLM?', duration: '05:20', videoUrl: 'https://www.youtube.com/embed/jKrjQZi7PeE', completed: true, type: 'video' },
      { id: 'l2', title: 'Historia de las Redes Neuronales', duration: '08:15', videoUrl: 'https://www.youtube.com/embed/aircAruvnKk', completed: true, type: 'video' },
      { id: 'l3', title: 'Evaluación del Módulo 1', duration: '5 min', videoUrl: '', completed: false, type: 'quiz', quizId: 'q1' },
    ]
  },
  {
    id: 'm2',
    title: 'Módulo 2: Ingeniería de Prompts',
    lessons: [
      { id: 'l4', title: 'Zero-shot vs Few-shot prompting', duration: '12:30', videoUrl: 'https://www.youtube.com/embed/_ZvnD73m40o', completed: false, type: 'video' },
      { id: 'l5', title: 'Cadena de Pensamiento (CoT)', duration: '10:00', videoUrl: 'https://www.youtube.com/embed/2XXziG_MvMA', completed: false, type: 'video' },
    ]
  }
];

export const MOCK_QUIZ: Quiz = {
  id: 'q1',
  title: 'Evaluación de Conceptos Fundamentales',
  questions: [
    {
      id: 'ques1',
      text: '¿Cuál es la diferencia principal entre la IA discriminativa y la IA generativa?',
      options: [
        'No hay diferencia, son lo mismo.',
        'La discriminativa clasifica datos, la generativa crea nuevos datos.',
        'La generativa es más rápida que la discriminativa.',
        'La discriminativa usa imágenes, la generativa usa texto.'
      ],
      correctAnswer: 1,
      aiFeedback: 'Incorrecto. Nuestra IA detectó una confusión en los tipos de modelos. Recuerda que la IA generativa se centra en la "creación" (probabilidad conjunta), mientras que la discriminativa se centra en "límites de decisión".',
      timeReference: '02:45 de la Lección 1'
    },
    {
      id: 'ques2',
      text: 'En el contexto de LLMs, ¿qué significa "Token"?',
      options: [
        'Una criptomoneda usada para pagar la API.',
        'Un carácter especial de programación.',
        'La unidad fundamental de texto (palabra o fragmento) que procesa el modelo.',
        'El nombre del creador de ChatGPT.'
      ],
      correctAnswer: 2,
      aiFeedback: 'Esa no es la respuesta. Analizando tu patrón de respuesta, parece que confundes conceptos financieros con NLP. Un Token es la unidad de input.',
      timeReference: '04:10 de la Lección 1'
    }
  ]
};

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: 'Dra. Sarah Connor',
    role: 'Lead AI Researcher',
    image: 'https://picsum.photos/400/400?random=101',
    studies: 'PhD en Ciencias de la Computación, MIT',
    experience: '10+ años en investigación de Redes Neuronales y Deep Learning en Google Brain.',
    specialties: ['Deep Learning', 'Computer Vision', 'PyTorch']
  },
  {
    id: 't2',
    name: 'Guido van Rossum (Clon IA)',
    role: 'Senior Python Architect',
    image: 'https://picsum.photos/400/400?random=102',
    studies: 'MSc en Matemáticas y Ciencias de la Computación',
    experience: 'Creador del lenguaje Python. Trabajó en Google y Dropbox.',
    specialties: ['Python', 'Language Design', 'Software Architecture']
  },
  {
    id: 't3',
    name: 'Andrew Ng',
    role: 'Co-founder Coursera & DeepLearning.AI',
    image: 'https://picsum.photos/400/400?random=103',
    studies: 'PhD en Machine Learning, UC Berkeley',
    experience: 'Profesor en Stanford, fundó Google Brain y fue Chief Scientist en Baidu.',
    specialties: ['Machine Learning', 'AI Strategy', 'Education']
  },
  {
    id: 't4',
    name: 'Sarah Drasner',
    role: 'VP of Developer Experience',
    image: 'https://picsum.photos/400/400?random=104',
    studies: 'MFA, Scientific Illustration',
    experience: 'Lideró equipos de ingeniería en Netlify, Microsoft y Google.',
    specialties: ['Vue.js', 'CSS Animation', 'Engineering Management']
  },
  {
    id: 't5',
    name: 'Kirill Eremenko',
    role: 'Data Science Educator',
    image: 'https://picsum.photos/400/400?random=105',
    studies: 'Physics & Mathematics Background',
    experience: 'Fundador de SuperDataScience. Ha enseñado a más de 2M de estudiantes.',
    specialties: ['Data Science', 'Tableau', 'Business Intelligence']
  },
  {
    id: 't6',
    name: 'Lee Robinson',
    role: 'VP of Product at Vercel',
    image: 'https://picsum.photos/400/400?random=106',
    studies: 'Computer Engineering, Iowa State',
    experience: 'Experto en React, Next.js y Serverless. Contribuidor open source.',
    specialties: ['Next.js', 'React', 'Frontend Infrastructure']
  }
];
