import { Check, Rocket, Zap, Building2 } from 'lucide-react';
import { useState } from 'react';
import SignupModal from '../components/SignupModal';

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

  const plans = [
    {
      name: 'Starter',
      price: '$299/mo',
      tagline: 'Start free, and you will never go back to voicemail again.',
      trialAvailable: true,
      icon: Rocket,
      features: [
        'AI Receptionist (24/7)',
        'Appointment Booking',
        'Message Handling',
        'Daily Activity Report',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$599/mo',
      tagline: 'Your full digital front desk — marketing included.',
      trialAvailable: true,
      popular: true,
      icon: Zap,
      features: [
        'Everything in Starter plus:',
        'Social Media Posting',
        'Automated Newsletters',
        'Follow-Up Sequences',
        'CRM Integration',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      tagline: 'For businesses that want to automate everything except the coffee machine.',
      trialAvailable: false,
      icon: Building2,
      features: [
        'Everything in Growth plus:',
        'Custom AI Agents',
        'Unified Data Hub',
        'Analytics Dashboard',
        'Priority Support',
      ],
      highlighted: false,
    },
  ];

  const handleGetStarted = (planName: string, planPrice: string, isCustom: boolean) => {
    if (isCustom) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      setSelectedPlan({ name: planName, price: planPrice });
      setModalOpen(true);
    }
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Try Amunet AI Free. Watch What Happens.
            </h1>
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              "Amunet AI doesn't ask for trust — it earns it."
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You get a fully functional AI assistant that books appointments, answers calls, and grows your business — even at 2 A.M.
            </p>
            <p className="text-lg text-gray-700 mt-4 font-medium">
              Try it free for 7 days, no credit card required.
            </p>
          </div>

          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Amunet AI doesn't sleep, so you can"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                <p className="text-white text-3xl font-bold p-8">
                  "Amunet AI doesn't sleep, so you can."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl ${
                    plan.highlighted ? 'ring-4 ring-neon-purple-600 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Icon className="text-white" size={28} />
                      </div>
                      {plan.trialAvailable && (
                        <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          Free Trial
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.trialAvailable && <span className="text-gray-600 text-sm"> after trial</span>}
                    </div>

                    <p className="text-gray-600 text-sm mb-6 italic leading-relaxed">
                      {plan.tagline}
                    </p>

                    <button
                      onClick={() => handleGetStarted(plan.name, plan.price, plan.name === 'Enterprise')}
                      className={`w-full py-3 rounded-lg font-semibold transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                          : 'border-2 border-neon-purple-600 text-neon-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </button>

                    <div className="mt-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white mb-16">
            <p className="text-2xl md:text-3xl font-bold mb-6">
              "Most users make back their first month's cost before their trial ends."
            </p>
            <button
              onClick={() => {
                setSelectedPlan({ name: 'Starter', price: '$299/mo' });
                setModalOpen(true);
              }}
              className="bg-white text-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105 shadow-lg"
            >
              Start My Free Trial
            </button>
            <p className="text-cyan-100 text-base mt-4 font-medium">
              No card, no commitment — just results.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">No Setup Fees</h3>
                <p className="text-gray-700 text-base">
                  Start using Amunet AI in minutes, no installation required
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Cancel Anytime</h3>
                <p className="text-gray-700 text-base">
                  No long-term contracts or cancellation fees
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Free Updates</h3>
                <p className="text-gray-700 text-base">
                  Get new features and improvements automatically
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Talk to our team about custom solutions for your business
            </p>
            <button
              onClick={() => handleGetStarted('Enterprise', 'Custom Pricing', true)}
              className="bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <SignupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan.name}
        planPrice={selectedPlan.price}
      />
    </div>
  );
}
