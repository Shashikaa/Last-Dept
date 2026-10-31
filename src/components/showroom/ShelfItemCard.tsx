'use client';

import React from 'react';
import { Sneaker } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';

interface ShelfItemCardProps {
  shoe: Sneaker;
}

export default function ShelfItemCard({ shoe }: ShelfItemCardProps) {
  const {
    hoveredShoeId,
    setHoveredShoeId,
    zoomedShoe,
    setZoomedShoe,
    setSelectedSize,
    wallLightingMode
  } = useStore();

  const isHovered = hoveredShoeId === shoe.id;
  const isZoomedThis = zoomedShoe?.id === shoe.id;
  const isLit =
    isZoomedThis ||
    wallLightingMode === 'all-lit' ||
    (wallLightingMode === 'reactive' && !zoomedShoe && isHovered);

  const handleSelect = () => {
    if (!zoomedShoe) {
      setSelectedSize('');
      setHoveredShoeId(shoe.id);
      setZoomedShoe(shoe);
    }
  };

  return (
    <div
      onMouseEnter={() => {
        if (!zoomedShoe) setHoveredShoeId(shoe.id);
      }}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      }}
      className={`group relative flex flex-col items-center transition-all duration-500 ${
        zoomedShoe
          ? isZoomedThis
            ? 'cursor-default z-20'
            : 'opacity-45 blur-[0.5px] pointer-events-none'
          : 'cursor-pointer'
      }`}
    >
      <div
        className={`mb-2 text-center transition-all duration-300 ${
          !zoomedShoe && isHovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.18em] text-amber-300 uppercase block">
          {shoe.name}
        </span>
        <span className="text-[10px] text-neutral-400 font-mono">
          €{shoe.price}
        </span>
      </div>

      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#0C0C0F] border border-white/[0.06] group-hover:border-amber-400/40 transition-all duration-500 shadow-2xl">
        <img
          src={shoe.image}
          alt={shoe.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isZoomedThis
              ? 'scale-105 brightness-110 contrast-105'
              : isHovered && !zoomedShoe
              ? 'scale-105 brightness-110'
              : wallLightingMode === 'studio-dim'
              ? 'brightness-75'
              : 'brightness-90'
          }`}
        />
      </div>

      <div
        className={`w-[92%] h-[3px] mt-0.5 transition-all duration-500 ${
          isLit
            ? 'bg-amber-300 shadow-[0_0_25px_6px_rgba(245,158,11,0.85)]'
            : 'bg-white/15'
        }`}
      />
      <div
        className={`pointer-events-none absolute -bottom-10 inset-x-1 h-16 blur-xl transition-opacity duration-500 ${
          isLit ? 'opacity-100' : 'opacity-10'
        }`}
        style={{
          background: `radial-gradient(ellipse at top, ${shoe.ledColor} 0%, transparent 72%)`
        }}
      />
    </div>
  );
}
