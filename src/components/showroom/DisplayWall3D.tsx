'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { SNEAKERS } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';
import ShelfItemCard from './ShelfItemCard';
import ProductDetailOverlay from './ProductDetailOverlay';

export default function DisplayWall3D() {
  const {
    zoomedShoe,
    hoveredShoeId,
    wallLightingMode,
    setWallLightingMode,
    setStudioModalOpen
  } = useStore();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (zoomedShoe) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x: normX, y: normY });
  };

  const activeHoveredShoe = useMemo(
    () => zoomedShoe || SNEAKERS.find((s) => s.id === hoveredShoeId) || SNEAKERS[0],
    [zoomedShoe, hoveredShoeId]
  );

  const wallCameraTransform = useMemo(() => {
    if (!zoomedShoe) {
      const tiltX = (-mousePos.y * 2.2).toFixed(2);
      const tiltY = (mousePos.x * 3.0).toFixed(2);
      const scrollZ = Math.max(-60, -scrollY * 0.08).toFixed(1);
      return `perspective(1600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${scrollZ}px) scale(1)`;
    }
    const colOffsetPercent = (3 - zoomedShoe.shelfCol) * 20;
    const rowOffsetPercent = zoomedShoe.shelfRow === 1 ? 21 : -21;
    return `perspective(1600px) scale(2.65) translate3d(${colOffsetPercent}%, ${rowOffsetPercent}%, 0px)`;
  }, [zoomedShoe, mousePos, scrollY]);

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[640px] w-full wall-concrete-surface overflow-hidden flex flex-col justify-between select-none border-b border-white/10"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: zoomedShoe
            ? `radial-gradient(650px circle at 50% 54%, ${zoomedShoe.ledColor}, transparent 75%)`
            : `radial-gradient(750px circle at 50% 50%, ${activeHoveredShoe.ledColor.replace('0.72', '0.22')}, transparent 75%)`
        }}
      />

      {/* Top Instructional Bar */}
      <div
        className={`relative z-20 max-w-[1440px] mx-auto w-full px-4 sm:px-8 pt-4 sm:pt-6 flex flex-wrap items-center justify-between gap-4 transition-all duration-500 ${
          zoomedShoe ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <p className="text-xs sm:text-sm text-neutral-400 tracking-wide">
          Hover to illuminate. Select to explore.
        </p>

        <div className="flex items-center gap-1 bg-black/50 border border-white/10 p-0.5 text-[10px] font-mono">
          {(['reactive', 'all-lit', 'studio-dim'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setWallLightingMode(mode)}
              className={`px-2.5 py-1 uppercase tracking-wider transition-all ${
                wallLightingMode === mode
                  ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Tier 3D Spatial Wall */}
      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden px-2 sm:px-10">
        <div
          className="wall-camera-rig w-full max-w-[1360px] mx-auto py-4"
          style={{ transform: wallCameraTransform }}
        >
          {([1, 2] as const).map((rowNumber) => {
            const rowShoes = SNEAKERS.filter((s) => s.shelfRow === rowNumber);
            return (
              <div key={rowNumber} className="relative mb-12 sm:mb-16 last:mb-2">
                <div className="grid grid-cols-5 gap-2 sm:gap-6 items-end px-2 sm:px-6 relative z-10">
                  {rowShoes.map((shoe) => (
                    <ShelfItemCard key={shoe.id} shoe={shoe} />
                  ))}
                </div>
                <div className="w-full h-2.5 sm:h-3 acrylic-glass-shelf relative z-20 -mt-0.5" />
              </div>
            );
          })}
        </div>

        <ProductDetailOverlay />
      </div>

      {/* Bottom Corner Status Bar */}
      <div className="relative z-30 max-w-[1440px] mx-auto w-full px-4 sm:px-8 pb-4 sm:pb-6 flex items-center justify-between text-[11px] font-mono tracking-[0.18em] text-neutral-400">
        <span>• SERIES 01 / 10 SILHOUETTES</span>
        <button
          type="button"
          onClick={() => setStudioModalOpen(true)}
          className="text-neutral-300 hover:text-amber-300 transition-colors"
        >
          About this store ↗
        </button>
      </div>
    </section>
  );
}
