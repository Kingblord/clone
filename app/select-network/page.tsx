'use client';

import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function SelectNetworkPage() {
  const [selectedNetwork, setSelectedNetwork] = useState<'tron' | 'ethereum' | null>(null);

  const networks = [
    {
      id: 'tron',
      name: 'TRON',
      symbol: 'TRX',
      icon: '🔴',
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      icon: '🔵',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          TRUST<span className="font-light">WALLET</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">SECURE</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-8 mb-16 w-full max-w-2xl">
        {/* Step 1: Select Network */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00ff88] text-black font-bold text-sm mb-2">
            1
          </div>
          <p className="text-xs text-[#00ff88] font-semibold">Select Network</p>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gray-600 mb-6"></div>

        {/* Step 2: Connect Wallet */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-gray-300 font-bold text-sm mb-2">
            2
          </div>
          <p className="text-xs text-gray-400 font-semibold">Connect Wallet</p>
        </div>

        {/* Line */}
        <div className="flex-1 h-0.5 bg-gray-600 mb-6"></div>

        {/* Step 3: Add Report */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-gray-300 font-bold text-sm mb-2">
            3
          </div>
          <p className="text-xs text-gray-400 font-semibold">Add Report</p>
        </div>
      </div>

      {/* Select Network Section */}
      <div className="w-full max-w-sm">
        <h2 className="text-white text-lg font-semibold mb-2">Select Network</h2>
        <p className="text-gray-400 text-sm mb-8">Choose the network you want to connect</p>

        {/* Network Options */}
        <div className="space-y-4 mb-8">
          {networks.map((network) => (
            <button
              key={network.id}
              onClick={() => setSelectedNetwork(network.id as 'tron' | 'ethereum')}
              className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
                selectedNetwork === network.id
                  ? 'bg-gray-800 border-[#00ff88]'
                  : 'bg-gray-900 border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{network.icon}</div>
                <div className="text-left">
                  <p className="text-white font-semibold">{network.name}</p>
                  <p className="text-gray-400 text-xs">
                    {network.id === 'tron' ? 'TRC 20/Tron Blockchain Inc.' : 'ETH (ERC) bsc'}
                  </p>
                </div>
              </div>
              {selectedNetwork === network.id ? (
                <CheckCircle2 className="w-6 h-6 text-[#00ff88]" />
              ) : (
                <Circle className="w-6 h-6 text-gray-600" />
              )}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button className="w-full bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold py-3 px-6 rounded-full transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}
