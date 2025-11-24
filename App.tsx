
import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { ProfilePage } from './pages/dashboard/ProfilePage';
import { CoursesPage } from './pages/dashboard/CoursesPage';
import { GradesPage } from './pages/dashboard/GradesPage';
import { PracticesPage } from './pages/dashboard/PracticesPage';
import { ForumsPage } from './pages/dashboard/ForumsPage';
import { CoursePlayer } from './pages/CoursePlayer';
import { CommunityPage } from './pages/CommunityPage';
import { AdminPage } from './pages/AdminPage';
import { AboutPage } from './pages/AboutPage';
import { CatalogPage } from './pages/CatalogPage';
import { CareerPathsPage } from './pages/CareerPathsPage';
import { AIChatWidget } from './components/ai/AIChatWidget';
import { CurrencyProvider } from './context/CurrencyContext';
import { ViewState, User } from './types';
import { MOCK_USERS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  // Helper to handle login and navigation
  const handleLogin = (view: ViewState, user?: User) => {
    if (user) {
      setCurrentUser(user);
    }
    // Default dashboard landing
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage onNavigate={handleLogin} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentView} />;
      
      // --- DASHBOARD ROUTES ---
      case 'dashboard-home':
        return <DashboardHome currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      case 'dashboard-courses':
        return <CoursesPage currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      case 'dashboard-profile':
        return <ProfilePage currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      case 'dashboard-grades':
        return <GradesPage currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      case 'dashboard-practices':
        return <PracticesPage currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      case 'dashboard-community':
        return <ForumsPage currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      
      case 'community': // Legacy route redirect
        return <ForumsPage currentView="dashboard-community" onNavigate={setCurrentView} currentUser={currentUser} />;

      case 'admin':
        return <AdminPage currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser || MOCK_USERS[1]} />;
      case 'course-player':
        return <CoursePlayer currentView={currentView} onNavigate={setCurrentView} currentUser={currentUser} />;
      
      // Public Views wrapped with Header/Footer
      case 'about':
      case 'teachers':
        return (
          <>
            <Header currentView={currentView} onNavigate={setCurrentView} />
            <main className="flex-grow">
               <AboutPage />
            </main>
            <Footer />
          </>
        );
      case 'catalog':
        return (
          <>
            <Header currentView={currentView} onNavigate={setCurrentView} />
            <main className="flex-grow">
               <CatalogPage currentView={currentView} onNavigate={setCurrentView} />
            </main>
            <Footer />
          </>
        );
      case 'paths':
        return (
           <>
            <Header currentView={currentView} onNavigate={setCurrentView} />
            <main className="flex-grow">
               <CareerPathsPage currentView={currentView} onNavigate={setCurrentView} />
            </main>
            <Footer />
          </>
        );
      case 'landing':
      default:
        return (
          <>
            <Header currentView={currentView} onNavigate={setCurrentView} />
            <main className="flex-grow">
               <LandingPage onNavigate={setCurrentView} />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <CurrencyProvider>
      <div className="flex flex-col min-h-screen">
        {renderContent()}
        <AIChatWidget currentView={currentView} />
      </div>
    </CurrencyProvider>
  );
};

export default App;
