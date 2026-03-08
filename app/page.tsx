'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function TrustWalletPage() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4" style={{ cursor: 'auto' }}>
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
      <div className="flex flex-col items-center gap-6 max-w-sm w-full">
        <button
          type="button"
          onMouseDown={() => setShowTerms(true)}
          onClick={() => setShowTerms(true)}
          className="flex gap-2 items-start cursor-pointer w-full text-left"
          style={{ pointerEvents: 'auto' }}
        >
          <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <span className="text-[#00ff88] underline">
              terms and conditions
            </span>{' '}
            of use of the API service by Trust Wallet
          </p>
        </button>

        {/* Continue Button */}
        <Link href="/select-network" className="w-full">
          <button
            type="button"
            className="w-full bg-[#00ff88] text-black font-semibold py-3 px-6 rounded-full transition-colors cursor-pointer"
            style={{
              pointerEvents: 'auto',
              backgroundColor: '#00ff88',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00dd77';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00ff88';
            }}
          >
            Continue
          </button>
        </Link>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-4 z-50"
          onClick={() => setShowTerms(false)}
          style={{ pointerEvents: 'auto' }}
        >
          <div 
            className="bg-[#2a2a2a] rounded-lg max-w-md w-full max-h-96 overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
            style={{ pointerEvents: 'auto' }}
          >
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
              type="button"
              onMouseDown={() => setShowTerms(false)}
              onClick={() => setShowTerms(false)}
              className="w-full bg-[#00ff88] text-black font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer"
              style={{
                pointerEvents: 'auto',
                backgroundColor: '#00ff88',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00dd77';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#00ff88';
              }}
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
