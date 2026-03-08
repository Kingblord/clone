'use client';

import Link from 'next/link';

export default function ConnectWalletPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          TRUST<span className="font-light">WALLET</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">AML SERVICE</p>
      </div>

      {/* Top Line */}
      <div className="w-full max-w-2xl h-px bg-[#00ff88] mb-8"></div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-4 mb-12 w-full max-w-2xl px-4">
        {/* Step 1: Select Network */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00ff88] text-black font-bold text-sm mb-2">
            1
          </div>
          <p className="text-xs text-[#00ff88] font-semibold">Select Network</p>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gray-600"></div>

        {/* Step 2: Connect Wallet */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00ff88] text-black font-bold text-sm mb-2">
            2
          </div>
          <p className="text-xs text-[#00ff88] font-semibold">Connect Wallet</p>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gray-600"></div>

        {/* Step 3: AML Report */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white font-bold text-sm mb-2">
            3
          </div>
          <p className="text-xs text-gray-400 font-semibold">AML Report</p>
        </div>
      </div>

      {/* Connect Wallet Section */}
      <div className="w-full max-w-sm px-4 text-center">
        <h2 className="text-white text-2xl font-semibold mb-8">Connect Wallet</h2>

        {/* Connect Button */}
        <button 
          className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-4 px-6 rounded-full transition-colors cursor-pointer mb-8"
          style={{ pointerEvents: 'auto' }}
        >
          Connect Wallet
        </button>

        {/* Disclaimer Text */}
        <p className="text-gray-400 text-sm leading-relaxed">
          By clicking the connect wallet button, you agree to the{' '}
          <a href="#" className="text-[#00ff88] underline hover:opacity-80">
            terms and conditions
          </a>{' '}
          of use of the AML service by{' '}
          <span className="text-gray-300 font-semibold">Trust Wallet</span>
          .
        </p>
      </div>
    </div>
  );
}
