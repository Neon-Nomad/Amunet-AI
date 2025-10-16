import { ArrowRight, Phone, Calendar, Mail, BarChart3, Database, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import InteractiveChatDemo from '../components/InteractiveChatDemo';
import DemoRequestModal from '../components/DemoRequestModal';
import SignupModal from '../components/SignupModal';
import TypewriterCode from '../components/TypewriterCode';

export default function DemoPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const features = [
    { icon: Phone, label: 'Calls' },
    { icon: Database, label: 'CRM' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Mail, label: 'Email' },
    { icon: BarChart3, label: 'Reporting' }
  ];

  const handleRequestDemo = (industry: string) => {
    setSelectedIndustry(industry);
    setDemoModalOpen(true);
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-purple-600 font-semibold text-lg mb-4">
              Test Drive Your Next Assistant
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              See How Amunet AI Handles the Busywork.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ask, schedule, or automate — right from this page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToDemo}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105 transition-all"
              >
                Try the Demo
              </button>
              <button
                onClick={() => setSignupModalOpen(true)}
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>

          <div className="relative mb-12">
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <TypewriterCode />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Demo
            </h2>
            <p className="text-lg text-gray-600">
              See how Amunet AI responds in different industries
            </p>
          </div>

          <InteractiveChatDemo onRequestDemo={handleRequestDemo} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One Brain. No Missed Calls.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While you're chatting, Amunet AI is logging data, following up, and syncing your CRM. This is the power of connected automation.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Desktop view - show all features */}
            <div className="hidden md:flex flex-row items-center justify-center space-x-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index}>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                        <Icon className="text-white" size={40} strokeWidth={2.5} />
                      </div>
                      <p className="font-semibold text-gray-900 text-lg">{feature.label}</p>
                    </div>
                    {index < features.length - 1 && (
                      <ArrowRight className="text-gray-400 absolute" style={{ left: `${(index + 1) * 20}%`, top: '50%' }} size={32} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile/Tablet carousel view */}
            <div className="md:hidden relative">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevFeature}
                  className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-700 transition-colors"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>

                <div className="flex flex-col items-center min-w-[200px]">
                  {(() => {
                    const Icon = features[currentFeatureIndex].icon;
                    return (
                      <>
                        <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl transition-all duration-300">
                          <Icon className="text-white" size={56} strokeWidth={2.5} />
                        </div>
                        <p className="font-bold text-gray-900 text-2xl">{features[currentFeatureIndex].label}</p>
                      </>
                    );
                  })()}
                </div>

                <button
                  onClick={nextFeature}
                  className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-700 transition-colors"
                  aria-label="Next feature"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeatureIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentFeatureIndex
                        ? 'bg-cyan-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                <Zap className="text-white" size={48} />
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">Instant Sync</h3>
              <p className="text-gray-600 text-sm">
                Every conversation is logged and synced across all your systems in real-time
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">Smart Follow-ups</h3>
              <p className="text-gray-600 text-sm">
                Automated reminders and follow-up sequences keep customers engaged
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">Complete History</h3>
              <p className="text-gray-600 text-sm">
                Full conversation history and analytics help you make better business decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-cyan-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your ROI
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-medium">
                Use our ROI Calculator to see how fast Amunet AI pays for itself. Most businesses see positive ROI within the first month.
              </p>
              <a
                href="/roi-calculator"
                className="inline-block bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105 transition-all"
              >
                Calculate Your Savings
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Business. On Autopilot.
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto font-medium">
            Stop losing customers to voicemail. Start capturing every opportunity with Amunet AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSignupModalOpen(true)}
              className="bg-white text-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105 shadow-lg"
            >
              Start My Free Trial
            </button>
            <button
              onClick={() => handleRequestDemo('General')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              Talk to a Human (Ironically)
            </button>
          </div>
        </div>
      </section>

      <DemoRequestModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        industry={selectedIndustry}
      />

      <SignupModal
        isOpen={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        planName="Starter"
        planPrice="$299/mo"
      />
    </div>
  );
}
