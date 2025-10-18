import { useState } from 'react';
import { MessageCircle, User, Bot } from 'lucide-react';

interface Message {
  sender: 'user' | 'amunet';
  text: string;
  delay?: number;
}

interface Scenario {
  id: string;
  title: string;
  emoji: string;
  messages: Message[];
}

interface InteractiveChatDemoProps {
  onRequestDemo: (industry: string) => void;
}

export default function InteractiveChatDemo({ onRequestDemo }: InteractiveChatDemoProps) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenarios: Scenario[] = [
    {
      id: 'dentist',
      title: "I'm a Dentist",
      emoji: '🦷',
      messages: [
        { sender: 'user', text: 'Hi, do you take new patients?' },
        { sender: 'amunet', text: "Hello! Yes, we're currently accepting new patients. I'd be happy to help you schedule an appointment.", delay: 1000 },
        { sender: 'user', text: 'Great! What times do you have available next week?' },
        { sender: 'amunet', text: "Let me check our calendar... I have openings on Tuesday at 2 PM, Wednesday at 10 AM, or Thursday at 3 PM. Which works best for you?", delay: 1500 },
        { sender: 'user', text: 'Tuesday at 2 PM works perfectly.' },
        { sender: 'amunet', text: "Perfect! I've booked you for Tuesday, October 22nd at 2:00 PM. You'll receive a confirmation email shortly with all the details. Is there anything else I can help you with?", delay: 1000 },
      ],
    },
    {
      id: 'contractor',
      title: "I'm a Contractor",
      emoji: '🔧',
      messages: [
        { sender: 'user', text: "I need someone to remodel my kitchen. Are you taking on new projects?" },
        { sender: 'amunet', text: "Absolutely! We'd love to help with your kitchen remodel. Can you tell me a bit about what you're looking to do?", delay: 1000 },
        { sender: 'user', text: 'Full renovation - new cabinets, countertops, and flooring.' },
        { sender: 'amunet', text: "That sounds like an exciting project! I'd like to schedule a free consultation where we can discuss your vision and provide an estimate. Are you available this Friday or next Monday?", delay: 1500 },
        { sender: 'user', text: 'Friday works great.' },
        { sender: 'amunet', text: "Excellent! I've scheduled your consultation for this Friday at 10 AM. Our contractor will visit your home to assess the space and discuss your ideas. You'll receive a confirmation text with all the details shortly.", delay: 1200 },
      ],
    },
    {
      id: 'salon',
      title: 'I Run a Salon',
      emoji: '💇',
      messages: [
        { sender: 'user', text: 'Do you have any openings for a haircut tomorrow?' },
        { sender: 'amunet', text: "Hi there! Let me check our schedule for tomorrow... Yes, we have availability! Would you prefer morning or afternoon?", delay: 1000 },
        { sender: 'user', text: 'Afternoon would be better.' },
        { sender: 'amunet', text: "Perfect! I have 2 PM, 3:30 PM, or 4 PM available. Which time works best for you?", delay: 1200 },
        { sender: 'user', text: '3:30 PM please.' },
        { sender: 'amunet', text: "You're all set! I've booked your haircut for tomorrow at 3:30 PM with Sarah. You'll receive a reminder text an hour before your appointment. Looking forward to seeing you!", delay: 1000 },
      ],
    },
  ];

  const playScenario = async (scenario: Scenario) => {
    setSelectedScenario(scenario.id);
    setMessages([]);
    setIsPlaying(true);

    for (const message of scenario.messages) {
      await new Promise(resolve => setTimeout(resolve, message.delay || 800));
      setMessages(prev => [...prev, message]);
    }

    setIsPlaying(false);
  };

  const handleReset = () => {
    setSelectedScenario(null);
    setMessages([]);
    setIsPlaying(false);
  };

  const currentScenario = scenarios.find(s => s.id === selectedScenario);

  return (
    <div className="max-w-4xl mx-auto">
      {!selectedScenario ? (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Choose Your Industry
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => playScenario(scenario)}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-cyan-600"
              >
                <div className="text-5xl mb-4">{scenario.emoji}</div>
                <h4 className="text-lg font-semibold text-gray-900">{scenario.title}</h4>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageCircle size={24} />
                <span className="font-semibold">Chat with Amunet AI</span>
              </div>
              <button
                onClick={handleReset}
                className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full transition-colors"
              >
                Reset
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'amunet' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-white" size={18} />
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white text-gray-900 shadow-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={18} />
                    </div>
                  )}
                </div>
              ))}

              {isPlaying && (
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-purple-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="text-white" size={18} />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isPlaying && messages.length > 0 && (
              <div className="bg-white border-t border-gray-200 px-6 py-6">
                <p className="text-gray-700 mb-4 text-center italic">
                  "That's a small taste of what I can automate for your business. Want to see what I'd sound like with your clients?"
                </p>
                <button
                  onClick={() => onRequestDemo(currentScenario?.title || '')}
                  className="w-full bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Let's Build Your Demo
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
