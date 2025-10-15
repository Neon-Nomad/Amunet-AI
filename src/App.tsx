import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import HomePage from './pages/HomePage';
import ROICalculator from './pages/ROICalculator';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import DOSBootLoader from './components/DOSBootLoader';

type Page = 'home' | 'roi' | 'about' | 'testimonials' | 'pricing' | 'demo' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      home: 'Amunet AI - Never Miss Another Customer Call',
      roi: 'ROI Calculator - Amunet AI',
      about: 'About Us - Amunet AI',
      testimonials: 'Testimonials - Amunet AI',
      pricing: 'Pricing - Amunet AI',
      demo: 'Interactive Demo - Amunet AI',
      contact: 'Contact Us - Amunet AI',
    };

    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'roi':
        return <ROICalculator />;
      case 'about':
        return <AboutPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'pricing':
        return <PricingPage />;
      case 'demo':
        return <DemoPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <DOSBootLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative shooting-stars-bg">
      <div className="star-line"></div>
      <div className="star-line"></div>
      <div className="star-line"></div>
      <div className="star-line"></div>
      <div className="star-line"></div>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <ChatBot />
    </div>
  );
}

export default App;
