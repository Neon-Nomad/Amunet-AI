import { X } from 'lucide-react';
import { useState } from 'react';
import { createDemoRequest } from '../lib/api';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry?: string;
}

export default function DemoRequestModal({ isOpen, onClose, industry = '' }: DemoRequestModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(industry);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const industries = [
    'Dentist',
    'Contractor',
    'Salon',
    'Real Estate',
    'Legal Services',
    'Healthcare',
    'Retail',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await createDemoRequest({
        email,
        name,
        industry: selectedIndustry,
        phone,
      });

      setSuccess(true);
      setEmail('');
      setName('');
      setSelectedIndustry('');
      setPhone('');

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    } catch (err: unknown) {
      const e = err as { status?: number };
      if (typeof e?.status === 'number' && e.status === 409) {
        setError('This email already submitted a request.');
      } else {
        setError('Something went wrong. Please try again.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Request Received!</h3>
            <p className="text-gray-600">
              We'll reach out soon to build your custom demo.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Build Your Demo</h2>
            <p className="text-gray-600 mb-6">
              Tell us about your business and we'll show you what Earnest can do for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-purple-600 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-purple-600 focus:border-transparent"
                  placeholder="john@business.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-purple-600 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-purple-600 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting Request...' : 'Get My Custom Demo'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll contact you within 24 hours to schedule your personalized demo.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
