'use client';

import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

export default function SelectNetworkPage() {
  const [selectedNetwork, setSelectedNetwork] = useState<'tron' | 'ethereum' | null>(null);

  const networks = [
    {
      id: 'tron',
      name: 'TRON',
      description: 'No network fee',
      bgColor: 'bg-red-600',
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      description: '0.01 ETH fee',
      bgColor: 'bg-blue-600',
    },
  ];

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
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 text-white font-bold text-xs sm:text-sm mb-1 sm:mb-2">
            2
          </div>
          <p className="text-xs text-gray-400 font-semibold whitespace-nowrap">Connect Wallet</p>
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

      {/* Select Network Section */}
      <div className="w-full max-w-sm px-4 sm:px-6">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Select Network</h2>
        <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">Choose the network you want to connect</p>

        {/* Network Options */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {networks.map((network) => (
            <button
              key={network.id}
              onClick={() => setSelectedNetwork(network.id as 'tron' | 'ethereum')}
              className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-colors ${
                selectedNetwork === network.id
                  ? 'bg-gray-800 border-gray-600'
                  : 'bg-gray-900 border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${network.bgColor} flex items-center justify-center text-white text-base sm:text-lg font-bold flex-shrink-0`}>
                  {network.id === 'tron' ? '✈' : '◆'}
                </div>
                <div className="text-left min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base truncate">{network.name}</p>
                  <p className="text-gray-400 text-xs">• {network.description}</p>
                </div>
              </div>
              {selectedNetwork === network.id ? (
                <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 border-2 border-gray-400 flex-shrink-0" style={{ fill: 'none' }} />
              ) : (
                <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <Link href="/connect-wallet">
          <button 
            className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors cursor-pointer text-sm sm:text-base"
            style={{ pointerEvents: 'auto' }}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
