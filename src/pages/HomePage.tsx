import { useEffect } from 'react';
import { Bot, Clock, DollarSign, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import TypewriterTerminal from '../components/TypewriterTerminal';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Page = 'home' | 'roi' | 'about' | 'testimonials' | 'pricing' | 'demo' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  useScrollReveal();

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 py-20 md:py-32 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 animate-fade-up">
            <TypewriterTerminal />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI That Works
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 animate-gradient-flow"> For You</span>
              </h1>
              <p className="text-xl text-cyan-100/80 mb-8 leading-relaxed">
                Stop losing customers to voicemail. Amunet AI answers every call, books appointments, and handles inquiries 24/7 - while you focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('demo')}
                  className="group relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105 transition-all flex items-center justify-center space-x-2 ripple-effect overflow-hidden"
                >
                  <span className="relative z-10">Try Demo</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('roi')}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                >
                  Calculate Your ROI
                </button>
              </div>
            </div>

            <div className="relative animate-slide-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform rotate-2 hover-tilt border border-cyan-500/20">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business owner working"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 rounded-lg shadow-xl animate-float neon-glow-hover">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="electric-border"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Small Businesses Choose Amunet AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We built Amunet AI specifically for busy small business owners who can't afford to miss opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-reveal bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl neon-glow-hover hover-tilt border border-cyan-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Never Miss a Call</h3>
              <p className="text-gray-600 leading-relaxed">
                Amunet AI answers 100% of your calls instantly, even when you're with customers or after hours. No more lost business.
              </p>
            </div>

            <div className="scroll-reveal bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl neon-glow-hover hover-tilt border border-cyan-100" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <DollarSign className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save $40K+ Per Year</h3>
              <p className="text-gray-600 leading-relaxed">
                Get the same capabilities as hiring a full-time receptionist, but for a fraction of the cost. Plus, Amunet AI never calls in sick.
              </p>
            </div>

            <div className="scroll-reveal bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl neon-glow-hover hover-tilt border border-cyan-100" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Bot className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sounds 100% Human</h3>
              <p className="text-gray-600 leading-relaxed">
                Your customers won't know they're talking to AI. Amunet AI handles natural conversations with empathy and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
        <div className="electric-border"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <img
                src="https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Customer service"
                className="rounded-2xl shadow-xl hover-tilt"
              />
            </div>
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Delight Customers
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                    <Zap className="text-cyan-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Responses</h3>
                    <p className="text-gray-600">Answer calls in under 1 second, every single time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                    <TrendingUp className="text-cyan-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Booking</h3>
                    <p className="text-gray-600">Schedule appointments directly into your calendar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                    <Shield className="text-cyan-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Always Professional</h3>
                    <p className="text-gray-600">Perfect service every time, no bad days</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('pricing')}
                className="mt-8 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-105 transition-all ripple-effect"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white overflow-hidden light-sweep-container">
        <ParticleBackground />
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-reveal">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl mb-8 text-cyan-200 scroll-reveal">
            Join 500+ small businesses already using Amunet AI to grow revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
            <button
              onClick={() => onNavigate('demo')}
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all ripple-effect"
            >
              Try It Free
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
