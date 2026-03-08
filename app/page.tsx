'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TrustWalletPage() {
  const [showTerms, setShowTerms] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/select-network');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="mb-24 text-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          TRUST<span className="font-light">WALLET</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">SECURE</p>
      </div>

      {/* Shield Image */}
      <div className="mb-32 flex justify-center">
        <div className="relative w-40 h-40">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Onej67zaJ8VUNqANsc1x7RG7I40ccm.png"
            alt="Shield"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Agreement Section */}
      <div className="flex flex-col items-center gap-6 max-w-sm">
        <button
          onClick={() => setShowTerms(true)}
          className="flex gap-2 items-start hover:opacity-80 transition-opacity"
        >
          <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <span className="text-[#00ff88] hover:underline">
              terms and conditions
            </span>{' '}
            of use of the API service by Trust Wallet
          </p>
        </button>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-3 px-6 rounded-full transition-colors"
        >
          Continue
        </button>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-4 z-50">
          <div className="bg-[#2a2a2a] rounded-lg max-w-md w-full max-h-96 overflow-y-auto p-6">
            <h2 className="text-xl font-bold text-white mb-4">Terms and Conditions</h2>
            <div className="text-gray-300 text-sm space-y-4 mb-6">
              <p>
                By using Trust Wallet and its services, you agree to comply with these terms and conditions.
              </p>
              <p>
                Trust Wallet provides a secure digital wallet service for managing cryptocurrencies and blockchain assets.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your private keys and seed phrases. Trust Wallet is not responsible for any loss of funds due to negligence or unauthorized access.
              </p>
              <p>
                The API service is provided on an "as is" basis without warranties of any kind. Trust Wallet shall not be liable for any damages arising from the use of this service.
              </p>
              <p>
                You agree to use Trust Wallet only for lawful purposes and in compliance with all applicable laws and regulations.
              </p>
            </div>
            <button
              onClick={() => setShowTerms(false)}
              className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-2 px-4 rounded-full transition-colors"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
