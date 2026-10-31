'use client';

import React from 'react';
import { Box, Sun, Award, Cpu } from 'lucide-react';
import { SNEAKERS } from '@/data/sneakers';

export default function AtelierPage() {
  return (
    <main className="pt-28 md:pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 border-b border-white/10">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-amber-400 block mb-3">
            03 // ABOUT LAST DEPT. ATELIER
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-white leading-[1.08]">
            Where industrial brutalism meets anatomical footwear.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-6">
            Founded as an independent industrial design collective between Paris and
            Porto, LAST DEPT. treats every shoe last as a permanent architectural
            object—ten silhouettes per series, displayed in a single unified room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
          {[
            {
              icon: Box,
              title: 'Custom Milled Lasts',
              desc: 'Each silhouette begins as a CNC-milled beechwood last refined over 40+ wear-test iterations.'
            },
            {
              icon: Sun,
              title: 'Optical Polyurethane',
              desc: 'Signature amber and cobalt translucent outsoles vacuum-cast to refract gallery lighting.'
            },
            {
              icon: Award,
              title: 'LWG Gold Tanneries',
              desc: 'Full-grain calfskin, hydrophobic olive suedes, and vegetable-tanned linings from Italy.'
            },
            {
              icon: Cpu,
              title: 'Spatial Digital Flagship',
              desc: 'Engineered around 3D optical camera paths and tactile LED shelf illumination.'
            }
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-[#111115] border border-white/10 p-6 space-y-3">
                <Icon className="w-6 h-6 text-amber-400" />
                <h2 className="font-display text-lg font-medium text-white">{pillar.title}</h2>
                <p className="text-xs text-neutral-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
            MANUFACTURING TRANSPARENCY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-white">
            148 discrete steps per pair.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Every pair in Series 01 is hand-lasted in family-owned ateliers in Porto,
            Marche, and Alicante.
          </p>
        </div>
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <img
            src={SNEAKERS[0].image}
            alt={SNEAKERS[0].name}
            className="w-full aspect-[4/3] object-cover border border-white/10"
          />
          <img
            src={SNEAKERS[7].image}
            alt={SNEAKERS[7].name}
            className="w-full aspect-[4/3] object-cover border border-white/10"
          />
        </div>
      </section>
    </main>
  );
}
