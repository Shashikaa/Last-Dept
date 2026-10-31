'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060608] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-display font-semibold tracking-[0.22em] text-sm text-white">
              LAST DEPT.
            </span>
            <span className="text-xs text-neutral-600">•</span>
            <span className="font-mono text-[11px] text-neutral-400">
              SERIES 01 / 10 SILHOUETTES
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            The shop is the whole room. Interactive 3D wall & scroll experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <Link href="/" className="hover:text-amber-300">
            Collection
          </Link>
          <Link href="/silhouettes" className="hover:text-amber-300">
            Silhouettes
          </Link>
          <Link href="/atelier" className="hover:text-amber-300">
            Atelier
          </Link>
          <Link href="/contact" className="hover:text-amber-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
