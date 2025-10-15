import { ArrowRight, Phone, Calendar, Mail, BarChart3, Database, Zap } from 'lucide-react';
import { useState } from 'react';
import InteractiveChatDemo from '../components/InteractiveChatDemo';
import DemoRequestModal from '../components/DemoRequestModal';
import SignupModal from '../components/SignupModal';
import TypewriterCode from '../components/TypewriterCode';

export default function DemoPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const handleRequestDemo = (industry: string) => {
    setSelectedIndustry(industry);
    setDemoModalOpen(true);
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
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
                className="bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Try the Demo
              </button>
              <button
                onClick={() => setSignupModalOpen(true)}
                className="border-2 border-neon-purple-600 text-neon-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>

          <div className="relative mb-12">
            <div className="bg-gradient-to-r from-neon-purple-600 to-purple-600 rounded-2xl p-1">
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

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Phone className="text-white" size={40} strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-gray-900 text-lg">Calls</p>
              </div>

              <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" size={32} />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Database className="text-white" size={40} strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-gray-900 text-lg">CRM</p>
              </div>

              <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" size={32} />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Calendar className="text-white" size={40} strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-gray-900 text-lg">Calendar</p>
              </div>

              <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" size={32} />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Mail className="text-white" size={40} strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-gray-900 text-lg">Email</p>
              </div>

              <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" size={32} />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <BarChart3 className="text-white" size={40} strokeWidth={2.5} />
                </div>
                <p className="font-semibold text-gray-900 text-lg">Reporting</p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-32 h-32 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
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
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your ROI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our ROI Calculator to see how fast Amunet AI pays for itself. Most businesses see positive ROI within the first month.
              </p>
              <a
                href="/roi-calculator"
                className="inline-block bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Calculate Your Savings
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-neon-purple-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Business. On Autopilot.
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Stop losing customers to voicemail. Start capturing every opportunity with Amunet AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSignupModalOpen(true)}
              className="bg-white text-neon-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Start My Free Trial
            </button>
            <button
              onClick={() => handleRequestDemo('General')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
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
