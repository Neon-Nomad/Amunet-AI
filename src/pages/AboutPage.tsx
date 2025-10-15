import { Shield, Zap, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              "To give small business owners their time — and sanity — back."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Do It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Automation, AI assistants, and marketing systems that quietly handle the stuff you hate doing — so your business runs smoother, faster, and smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Amunet AI
              </h2>
            </div>
            <blockquote className="text-lg md:text-xl leading-relaxed text-center text-blue-50">
              "Hi, I'm Amunet AI. I don't take coffee breaks, I don't call in sick, and I don't ghost your customers. My job? To make your business run like clockwork — even when you're sleeping. I was built to be the assistant you wish you'd hired years ago."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet the Creator — Andrew Dillon
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Developer working"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Andrew Dillon is a Full Stack Web Developer and business owner from Indianapolis, IN — and the guy responsible for giving Amunet AI its brain (and questionable sense of humor).
              </p>
              <p className="text-gray-600 leading-relaxed">
                He's built websites, automations, and AI systems that help businesses actually work less and earn more. When he's not coding, he's probably tinkering with something he swore he was "just going to fix real quick" three hours ago.
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-xl p-6 border-l-4 border-neon-purple-600">
                <p className="text-lg font-medium text-gray-900 mb-2">Andrew's philosophy is simple:</p>
                <p className="text-gray-700 italic">
                  "Technology should make your life easier, not more complicated. If it doesn't save time or make money — it's just showing off."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Reliability</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Systems that don't flake out.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Simplicity</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                No buzzwords, no B.S.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">ROI Focus</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Every tool has to earn its keep — just like Amunet AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neon-purple-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Time Back?
          </h2>
          <p className="text-xl mb-8 text-purple-200">
            Let Amunet AI handle the busy work while you focus on what matters
          </p>
          <button className="bg-white text-neon-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
