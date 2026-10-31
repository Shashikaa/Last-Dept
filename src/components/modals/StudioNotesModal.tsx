'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function StudioNotesModal() {
  const { studioModalOpen, setStudioModalOpen } = useStore();
  if (!studioModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="bg-[#111115] border border-white/20 max-w-xl w-full p-6 sm:p-10 relative">
        <button
          type="button"
          onClick={() => setStudioModalOpen(false)}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 block mb-2">
          LAST DEPT. // STUDIO NOTES
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-3">
          A study in form. A different perspective.
        </h2>
        <p className="text-sm text-neutral-400 leading-relaxed mb-6">
          Ten original silhouettes. One shared space. A collection of textures,
          proportions and unexpected details, made to be explored up close.
        </p>

        <div className="space-y-3 border-y border-white/10 py-5 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-300">01 / EXPLORE THE WALL</span>
            <span className="text-xs text-neutral-400">
              Hover across the two illuminated acrylic tiers.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-300">02 / FIND YOUR SILHOUETTE</span>
            <span className="text-xs text-neutral-400">
              Click any shoe to zoom the 3D wall directly into that shelf.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-300">03 / MAKE IT YOURS</span>
            <span className="text-xs text-neutral-400">
              Choose your EU size from the dropdown and add to your bag.
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-neutral-500">
            LAST DEPT. CONCEPT STORE // SERIES 01
          </span>
          <button
            type="button"
            onClick={() => setStudioModalOpen(false)}
            className="px-5 py-2 bg-white text-black text-xs font-mono uppercase tracking-widest font-medium"
          >
            Explore Wall
          </button>
        </div>
      </div>
    </div>
  );
}
