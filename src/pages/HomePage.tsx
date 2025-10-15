import { Bot, Clock, DollarSign, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';

type Page = 'home' | 'roi' | 'about' | 'testimonials' | 'pricing' | 'demo' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-purple-50 via-purple-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI That Works
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-600 to-purple-600"> For You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop losing customers to voicemail. Amunet AI answers every call, books appointments, and handles inquiries 24/7 - while you focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('demo')}
                  className="bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Try Demo</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('roi')}
                  className="border-2 border-neon-purple-600 text-neon-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Calculate Your ROI
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business owner working"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Small Businesses Choose Amunet AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We built Amunet AI specifically for busy small business owners who can't afford to miss opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Never Miss a Call</h3>
              <p className="text-gray-600 leading-relaxed">
                Amunet AI answers 100% of your calls instantly, even when you're with customers or after hours. No more lost business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save $40K+ Per Year</h3>
              <p className="text-gray-600 leading-relaxed">
                Get the same capabilities as hiring a full-time receptionist, but for a fraction of the cost. Plus, Amunet AI never calls in sick.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Customer service"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Delight Customers
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-neon-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Responses</h3>
                    <p className="text-gray-600">Answer calls in under 1 second, every single time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-neon-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Smart Booking</h3>
                    <p className="text-gray-600">Schedule appointments directly into your calendar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-neon-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Always Professional</h3>
                    <p className="text-gray-600">Perfect service every time, no bad days</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('pricing')}
                className="mt-8 bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neon-purple-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl mb-8 text-purple-200">
            Join 500+ small businesses already using Amunet AI to grow revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('demo')}
              className="bg-white text-neon-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try It Free
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
