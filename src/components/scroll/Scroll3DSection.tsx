'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SNEAKERS } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';

export default function Scroll3DSection() {
  const { setZoomedShoe, setSelectedSize, setStudioModalOpen } = useStore();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getScroll3DStyle = (triggerY: number, intensity = 1) => {
    const progress = Math.min(1, Math.max(0, (scrollY - (triggerY - 450)) / 500));
    const rotateX = ((1 - progress) * 18 * intensity).toFixed(2);
    const translateZ = ((1 - progress) * -90 * intensity).toFixed(1);
    const translateY = ((1 - progress) * 45 * intensity).toFixed(1);
    const scale = (0.92 + progress * 0.08).toFixed(3);
    const opacity = Math.min(1, Math.max(0.15, progress * 1.15)).toFixed(2);
    return {
      transform: `perspective(1400px) rotateX(${rotateX}deg) translate3d(0px, ${translateY}px, ${translateZ}px) scale(${scale})`,
      opacity,
      transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out'
    };
  };

  const focusFromScroll = (shoeIndex: number) => {
    setSelectedSize('');
    setZoomedShoe(SNEAKERS[shoeIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="border-t border-white/[0.08] bg-[#0C0C0F] py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          style={getScroll3DStyle(650, 0.85)}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
              3D SCROLL PARALLAX GALLERY // SERIES 01 HIGHLIGHTS
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-medium text-white mt-2">
              Engineered silhouettes in 3D motion.
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setStudioModalOpen(true)}
            className="text-xs font-mono uppercase tracking-[0.18em] text-amber-300 hover:underline flex items-center gap-1.5"
          >
            <span>Read Studio Manifesto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            { idx: 0, offset: 750, badge: 'TRANSLUCENT AMBER TPU' },
            { idx: 2, offset: 850, badge: 'OPTICAL ICE-BLUE CHAMBER' },
            { idx: 7, offset: 950, badge: '3D PEARL FILAMENT KNIT' }
          ].map(({ idx, offset, badge }) => {
            const shoe = SNEAKERS[idx];
            return (
              <div
                key={shoe.id}
                style={getScroll3DStyle(offset, 1.1)}
                onClick={() => focusFromScroll(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') focusFromScroll(idx);
                }}
                className="group cursor-pointer bg-[#121217] border border-white/10 hover:border-amber-400/60 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-2xl"
              >
                <div>
                  <div className="p-4 flex items-center justify-between border-b border-white/[0.06]">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-amber-300 uppercase">
                      {badge}
                    </span>
                    <span className="font-mono text-xs text-white">€{shoe.price}</span>
                  </div>
                  <div className="relative aspect-[4/3] bg-[#09090C] overflow-hidden">
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-2 acrylic-glass-shelf" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                      LAST DEPT. / {shoe.code}
                    </span>
                    <h4 className="font-display text-2xl font-semibold text-white mt-1">
                      {shoe.name}
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1">{shoe.tagline}</p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0D0D11] border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                    Zoom on Wall ↑
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-300 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
