'use client';

import React from 'react';
import Link from 'next/link';
import DisplayWall3D from '@/components/showroom/DisplayWall3D';
import Scroll3DSection from '@/components/scroll/Scroll3DSection';
import { SNEAKERS } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';

export default function HomePage() {
  const { setZoomedShoe, setSelectedSize } = useStore();

  return (
    <main className="pt-16 sm:pt-20">
      {/* 1. Interactive 3D Wall & In-Place Camera Zoom Showcase */}
      <DisplayWall3D />

      {/* 2. Infinite Kinetic Typography Marquee */}
      <div className="border-b border-white/[0.08] bg-[#060608] py-4 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 font-mono text-xs tracking-[0.28em] uppercase text-neutral-400">
          <span>• LAST DEPT. SERIES 01</span>
          <span className="text-amber-400">• THE SHOP IS THE WHOLE ROOM</span>
          <span>• TEN ORIGINAL SILHOUETTES</span>
          <span className="text-amber-400">• 3D SPATIAL CAMERA TRANSITIONS</span>
          <span>• HAND-ASSEMBLED IN EUROPE</span>
          <span className="text-amber-400">• TRANSLUCENT AMBER OUTSOLES</span>
          <span>• LAST DEPT. SERIES 01</span>
          <span className="text-amber-400">• THE SHOP IS THE WHOLE ROOM</span>
          <span>• TEN ORIGINAL SILHOUETTES</span>
          <span className="text-amber-400">• 3D SPATIAL CAMERA TRANSITIONS</span>
        </div>
      </div>

      {/* 3. Architectural Monolith Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono uppercase tracking-[0.2em]">
              <span>3D SCROLL PERSPECTIVE // 01</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-light tracking-tight leading-[1.08] text-white">
              The shop is the <br />
              <span className="font-semibold text-amber-200">whole room.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Click any silhouette on the wall above to experience the signature
              spatial camera dolly: the entire concrete wall scales and translates
              in 3D space while adjacent shoes remain on the periphery of your vision.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedSize('');
                  setZoomedShoe(SNEAKERS[0]);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black text-xs font-mono uppercase tracking-[0.18em] font-semibold transition-colors"
              >
                Zoom Into FOUNDRY 01 ↑
              </button>
              <Link
                href="/silhouettes"
                className="px-6 py-3 border border-white/20 hover:border-amber-400/50 text-white text-xs font-mono uppercase tracking-[0.18em] transition-colors"
              >
                Browse Full Index
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden border border-white/15 bg-[#111114] shadow-2xl">
              <img
                src="/images/showroom-hero.webp"
                alt="LAST DEPT. Brutalist Showroom Wall"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3D Perspective Scroll Gallery */}
      <Scroll3DSection />
    </main>
  );
}
