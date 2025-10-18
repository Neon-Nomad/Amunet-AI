import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'roi' | 'about' | 'testimonials' | 'pricing' | 'demo' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'ROI Calculator', page: 'roi' },
    { label: 'About', page: 'about' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Playground', page: 'demo' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 group h-16 py-2"
          >
            <img
              src="/LOGO1.png"
              alt="Amunet AI Logo"
              className="h-full w-auto transform group-hover:scale-105 transition-transform"
            />
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-purple-50 text-neon-purple-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-neon-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="ml-4 bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
              Sign In
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-purple-50 text-neon-purple-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-neon-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-3 py-2 rounded-lg text-base font-semibold">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
