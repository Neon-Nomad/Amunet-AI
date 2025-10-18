import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      business: 'Martinez Plumbing',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "Amunet AI has been a game-changer. We went from missing 30% of calls to answering 100%. Our bookings increased by 40% in the first month alone.",
      rating: 5,
    },
    {
      name: 'James Chen',
      business: 'Chen HVAC Services',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "I was skeptical about AI at first, but customers can't tell the difference. Amunet AI sounds professional and gets all the details right every time.",
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      business: 'Sparkling Clean Co.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "Before Amunet AI, I was losing sleep worrying about missed calls. Now I can focus on my current clients knowing every inquiry is handled professionally.",
      rating: 5,
    },
    {
      name: 'David Thompson',
      business: 'Thompson Electrical',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "The ROI is insane. I'm paying $200/month instead of $3,500 for a receptionist, and getting better coverage. Best business decision I've made.",
      rating: 5,
    },
    {
      name: 'Emily Watson',
      business: 'Watson Landscaping',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "My competitors are still using voicemail. Meanwhile, Amunet AI is booking appointments for me 24/7. It's like having an unfair advantage.",
      rating: 5,
    },
    {
      name: 'Robert Kim',
      business: 'Kim Auto Repair',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "Setup took 15 minutes. Within a week, Amunet AI was handling calls better than our previous receptionist. Customers love the instant response.",
      rating: 5,
    },
    {
      name: 'Linda Garcia',
      business: 'Garcia Pet Grooming',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "I run a small operation and can't always answer the phone. Amunet AI captures every appointment opportunity, even when I'm with a client.",
      rating: 5,
    },
    {
      name: 'Michael Brown',
      business: 'Brown Roofing',
      image: 'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "The after-hours coverage alone pays for itself. We're now getting emergency calls converted to jobs instead of losing them to competitors.",
      rating: 5,
    },
    {
      name: 'Amanda Foster',
      business: 'Foster Home Services',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: "Amunet AI handles difficult customers with more patience than I ever could. It's professional, empathetic, and never has a bad day.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Small Businesses Love Amunet AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When small businesses stop missing calls, big things happen. Here's what real owners say after switching to Amunet AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-gray-200 transition-colors relative"
            >
              <Quote className="absolute top-4 right-4 text-purple-200" size={48} />

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 rounded-2xl p-12 text-center text-white relative overflow-hidden cta-banner">
          <div className="absolute inset-0 opacity-20">
            <div className="light-streak"></div>
            <div className="light-streak" style={{animationDelay: '2s'}}></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to stop missing opportunities?
            </h2>
            <p className="text-xl mb-6 text-white font-medium">
              Amunet AI never sleeps — and neither should your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 pulse-button">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all transform hover:scale-105">
                Book a Demo
              </button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white font-medium">
              <a href="/about" className="hover:underline">Meet Amunet</a>
              <span>•</span>
              <a href="/roi-calculator" className="hover:underline">See ROI in Action</a>
              <span>•</span>
              <a href="/demo" className="hover:underline">Try the Demo</a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center font-mono text-sm text-gray-500">
          // End of Transmission — Amunet Systems standing by.
        </div>
      </div>

      <style>{`
        @keyframes lightStreak {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }

        .light-streak {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: lightStreak 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); }
          50% { box-shadow: 0 0 20px 10px rgba(255,255,255,0); }
        }

        .pulse-button {
          animation: pulse 2s infinite;
        }

        .cta-banner {
          box-shadow: 0 0 40px rgba(6, 182, 212, 0.3);
        }
      `}</style>
    </div>
  );
}
