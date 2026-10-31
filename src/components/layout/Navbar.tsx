'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function Navbar() {
  const pathname = usePathname();
  const { zoomedShoe, setZoomedShoe, totalBagCount, setBagOpen, setStudioModalOpen } = useStore();

  const navItems = [
    { href: '/', label: 'Collection' },
    { href: '/silhouettes', label: 'Silhouettes' },
    { href: '/atelier', label: 'Atelier' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#09090B]/75 border-b border-white/[0.07]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setZoomedShoe(null)}
          className="group flex items-center gap-3 text-left"
        >
          <span className="px-2 py-1 border border-white/25 bg-white/[0.04] font-display font-bold tracking-tighter text-xs text-white group-hover:border-amber-400 transition-colors">
            LD
          </span>
          <span className="font-display font-semibold tracking-[0.22em] text-sm sm:text-base text-white">
            LAST DEPT.
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          {zoomedShoe ? (
            <button
              type="button"
              onClick={() => setZoomedShoe(null)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium text-white transition-all shadow-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-300" />
              <span>Collection</span>
            </button>
          ) : (
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] p-1 rounded-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full text-xs tracking-[0.12em] uppercase transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          )}

          <button
            type="button"
            onClick={() => setStudioModalOpen(true)}
            className="text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors tracking-wide px-2 py-1"
          >
            Studio
          </button>
        </div>

        <button
          type="button"
          onClick={() => setBagOpen(true)}
          className="text-xs sm:text-sm font-mono tracking-[0.12em] text-neutral-200 hover:text-amber-300 transition-colors px-3 py-1.5 border border-white/10 hover:border-amber-400/40 bg-white/[0.03]"
        >
          Bag ({String(totalBagCount).padStart(2, '0')})
        </button>
      </div>
    </header>
  );
}
