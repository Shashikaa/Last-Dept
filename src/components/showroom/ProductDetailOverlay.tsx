'use client';

import React, { useState } from 'react';
import { ChevronDown, ShoppingBag, ArrowLeft } from 'lucide-react';
import { EU_SIZES } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';

export default function ProductDetailOverlay() {
  const {
    zoomedShoe,
    setZoomedShoe,
    selectedSize,
    setSelectedSize,
    addToBag,
    wishlistIds,
    toggleWishlist
  } = useStore();

  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [designDetailsOpen, setDesignDetailsOpen] = useState(false);

  if (!zoomedShoe) return null;

  return (
    <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-4 sm:p-10 max-w-[1440px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2 sm:pt-4">
        {/* Left Zone: Product Title & Tagline */}
        <div className="lg:col-span-5 pointer-events-auto animate-overlay-reveal bg-black/45 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-4 lg:p-0 border border-white/10 lg:border-none">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-neutral-400 block mb-1.5">
            LAST DEPT. / {zoomedShoe.code}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            {zoomedShoe.name}
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2.5 font-normal">
            {zoomedShoe.tagline}
          </p>
        </div>

        <div className="hidden lg:block lg:col-span-3" />

        {/* Right Zone: E-Commerce Panel */}
        <div className="lg:col-span-4 pointer-events-auto animate-overlay-reveal bg-[#0D0D11]/85 backdrop-blur-xl border border-white/15 p-5 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.85)]">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400 pb-3 border-b border-white/15">
            <span>SERIES 01 / FOOTWEAR</span>
            <span className="text-amber-300">#{zoomedShoe.code}</span>
          </div>

          <div className="flex items-baseline justify-between py-3.5 border-b border-white/15">
            <span className="text-sm sm:text-base text-neutral-200 font-medium">
              {zoomedShoe.colorway}
            </span>
            <span className="font-display text-lg sm:text-xl font-semibold text-white">
              €{zoomedShoe.price}
            </span>
          </div>

          <div className="py-4 border-b border-white/15 relative">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span>Choose your size</span>
              <span className="font-mono uppercase tracking-wider text-neutral-300">
                EU
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSizeDropdownOpen(!sizeDropdownOpen)}
              className="w-full px-4 py-3 bg-[#15151B] hover:bg-[#1B1B22] border border-white/20 flex items-center justify-between text-xs sm:text-sm text-white transition-colors"
            >
              <span>{selectedSize || 'Select a size'}</span>
              <ChevronDown
                className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                  sizeDropdownOpen ? 'rotate-180 text-amber-300' : ''
                }`}
              />
            </button>

            {sizeDropdownOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%-8px)] z-40 bg-[#121217] border border-white/25 shadow-2xl max-h-48 overflow-y-auto divide-y divide-white/[0.06]">
                {EU_SIZES.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => {
                      setSelectedSize(sz);
                      setSizeDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-xs font-mono flex items-center justify-between transition-colors ${
                      selectedSize === sz
                        ? 'bg-amber-400/20 text-amber-300 font-semibold'
                        : 'text-neutral-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span>{sz}</span>
                    <span className="text-[10px] text-neutral-500">Available</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => addToBag(zoomedShoe, selectedSize)}
              className={`w-full rounded-full p-2 pl-6 flex items-center justify-between transition-all duration-300 ${
                selectedSize
                  ? 'bg-white text-black hover:bg-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.3)]'
                  : 'bg-white/[0.12] hover:bg-white/[0.18] text-white border border-white/15'
              }`}
            >
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-semibold tracking-wide">
                  Add to bag
                </span>
                <span
                  className={`block text-[11px] ${
                    selectedSize ? 'text-neutral-700 font-mono' : 'text-neutral-400'
                  }`}
                >
                  {selectedSize
                    ? `${selectedSize} / Ready to add`
                    : 'Select your size to continue'}
                </span>
              </div>

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  selectedSize
                    ? 'bg-black text-white'
                    : 'bg-black/70 text-amber-300 border border-white/15'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="pt-4 mt-4 border-t border-white/15">
            <button
              type="button"
              onClick={() => setDesignDetailsOpen(!designDetailsOpen)}
              className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-neutral-300 hover:text-amber-300 transition-colors"
            >
              <span>Design details</span>
              <span className="text-base leading-none">
                {designDetailsOpen ? '−' : '+'}
              </span>
            </button>

            {designDetailsOpen && (
              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-neutral-300 space-y-2 leading-relaxed">
                <p className="text-white font-medium">{zoomedShoe.designDetails}</p>
                <p className="text-neutral-400">{zoomedShoe.description}</p>
                <div className="pt-1 font-mono text-[11px] text-neutral-400 space-y-1">
                  <div>Upper: {zoomedShoe.specs.upper}</div>
                  <div>Sole: {zoomedShoe.specs.sole}</div>
                  <div>Origin: {zoomedShoe.specs.origin}</div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setZoomedShoe(null)}
              className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Return to Wall</span>
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(zoomedShoe.id)}
              className="text-[11px] font-mono uppercase tracking-wider text-amber-300 hover:underline"
            >
              {wishlistIds.includes(zoomedShoe.id) ? '♥ Saved' : '♡ Save Pair'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
