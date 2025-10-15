import { useState, useEffect, useRef } from 'react';
import { DollarSign, TrendingUp, Sparkles } from 'lucide-react';

export default function ROICalculator() {
  const [callsPerDay, setCallsPerDay] = useState(20);
  const [avgCallValue, setAvgCallValue] = useState(150);
  const [missedCallRate, setMissedCallRate] = useState(30);
  const [showSavingsTicker, setShowSavingsTicker] = useState(false);
  const [previousSavings, setPreviousSavings] = useState(0);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const missedCallsPerYear = callsPerDay * (missedCallRate / 100) * 365;
  const lostRevenuePerYear = missedCallsPerYear * avgCallValue;
  const amunetCostPerYear = 2400;
  const netSavings = lostRevenuePerYear - amunetCostPerYear;
  const roiPercentage = ((netSavings / amunetCostPerYear) * 100).toFixed(0);

  const savingsDifference = netSavings - previousSavings;

  useEffect(() => {
    if (previousSavings > 0 && savingsDifference !== 0) {
      setShowSavingsTicker(true);
      const timer = setTimeout(() => setShowSavingsTicker(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [netSavings]);

  useEffect(() => {
    setPreviousSavings(netSavings);
  }, [netSavings]);

  useEffect(() => {
    if (netSavings >= 100000) {
      setShowCaseStudy(true);
    } else {
      setShowCaseStudy(false);
    }
  }, [netSavings]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your ROI
          </h1>
          <p className="text-xl text-gray-600">
            See how much revenue you're losing to missed calls
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-gray-900">
                  Calls Per Day
                </label>
                <span className="text-2xl font-bold text-neon-purple-600">{callsPerDay}</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={callsPerDay}
                onChange={(e) => setCallsPerDay(Number(e.target.value))}
                className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>5</span>
                <span>100</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-gray-900">
                  Average Value Per Call
                </label>
                <span className="text-2xl font-bold text-neon-purple-600">${avgCallValue}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={avgCallValue}
                onChange={(e) => setAvgCallValue(Number(e.target.value))}
                className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-gray-900">
                  Missed Call Rate
                </label>
                <span className="text-2xl font-bold text-neon-purple-600">{missedCallRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={missedCallRate}
                onChange={(e) => setMissedCallRate(Number(e.target.value))}
                className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10%</span>
                <span>60%</span>
              </div>
            </div>
          </div>

          <div className="mt-12 relative">
            {showSavingsTicker && savingsDifference !== 0 && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 animate-fade-up">
                <div className="bg-neon-purple-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
                  <Sparkles size={20} className="animate-pulse" />
                  <span className="font-bold">
                    Amunet AI saved you {savingsDifference > 0 ? '+' : ''}${Math.abs(savingsDifference).toLocaleString()}!
                  </span>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 result-cards">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <DollarSign className="text-red-600" size={28} />
                  <h3 className="text-lg font-semibold text-gray-900">Lost Revenue</h3>
                </div>
                <p className="text-4xl font-bold text-red-600 mb-2">
                  ${lostRevenuePerYear.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  Per year from {missedCallsPerYear.toFixed(0)} missed calls
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="text-green-600" size={28} />
                  <h3 className="text-lg font-semibold text-gray-900">Net Savings</h3>
                </div>
                <p className="text-4xl font-bold text-green-600 mb-2">
                  ${netSavings.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  {roiPercentage}% ROI with Amunet AI
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-neon-purple-600 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Your Amunet AI Investment</h3>
            <p className="text-3xl font-bold mb-1">${amunetCostPerYear.toLocaleString()}/year</p>
            <p className="text-purple-200">
              That's just ${(amunetCostPerYear / 12).toFixed(0)}/month to capture every opportunity
            </p>
          </div>

          {showCaseStudy && (
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 animate-fade-up">
              <div className="flex items-start space-x-3">
                <Sparkles className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Real Success Story</h4>
                  <p className="text-gray-700">
                    A dental office with similar metrics saved <span className="font-bold text-amber-600">$312,000/year</span> using Amunet AI.
                    They went from missing 35% of calls to capturing every opportunity, booking 2,190 additional appointments annually.
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="mt-8 text-center text-gray-600">
            Based on industry averages, small businesses miss 30-40% of incoming calls.
            With Amunet AI, you'll capture 100% of opportunities.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.5s ease-out forwards;
        }

        .result-cards > div {
          animation: fade-up 0.6s ease-out forwards;
        }

        .result-cards > div:nth-child(2) {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .result-cards > div:nth-child(1) {
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
