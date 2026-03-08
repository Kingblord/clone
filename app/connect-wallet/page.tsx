'use client';

import Link from 'next/link';

export default function ConnectWalletPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          TRUST<span className="font-light">WALLET</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">AML SERVICE</p>
      </div>

      {/* Top Line */}
      <div className="w-full h-px bg-[#00ff88] mb-6 sm:mb-8"></div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 w-full px-2 sm:px-4 overflow-x-auto">
        {/* Step 1: Select Network */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00ff88] text-black font-bold text-xs sm:text-sm mb-1 sm:mb-2">
            1
          </div>
          <p className="text-xs text-[#00ff88] font-semibold whitespace-nowrap">Select Network</p>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gray-600 min-w-8 sm:min-w-12"></div>

        {/* Step 2: Connect Wallet */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00ff88] text-black font-bold text-xs sm:text-sm mb-1 sm:mb-2">
            2
          </div>
          <p className="text-xs text-[#00ff88] font-semibold whitespace-nowrap">Connect Wallet</p>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gray-600 min-w-8 sm:min-w-12"></div>

        {/* Step 3: AML Report */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 text-white font-bold text-xs sm:text-sm mb-1 sm:mb-2">
            3
          </div>
          <p className="text-xs text-gray-400 font-semibold whitespace-nowrap">AML Report</p>
        </div>
      </div>

      {/* Connect Wallet Section */}
      <div className="w-full max-w-sm px-4 sm:px-6 text-center">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Connect Wallet</h2>

        {/* Connect Button */}
        <button 
          className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors cursor-pointer mb-6 sm:mb-8 text-sm sm:text-base"
          style={{ pointerEvents: 'auto' }}
        >
          Connect Wallet
        </button>

        {/* Disclaimer Text */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
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
