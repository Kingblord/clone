'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function TrustWalletPage() {
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
        <div className="flex gap-2 items-start">
          <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <a href="#" className="text-[#00ff88] hover:underline">
              terms and conditions
            </a>{' '}
            of use of the API service by Trust Wallet
          </p>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-3 px-6 rounded-full transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}
