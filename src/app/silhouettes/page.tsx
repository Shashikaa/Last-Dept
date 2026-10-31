'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Layers, Search, SlidersHorizontal, X, Heart } from 'lucide-react';
import { SNEAKERS, Sneaker } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';

export default function SilhouettesPage() {
  const router = useRouter();
  const {
    setZoomedShoe,
    setSelectedSize,
    addToBag,
    wishlistIds,
    toggleWishlist,
    compareIds,
    toggleCompare,
    clearCompare
  } = useStore();

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('index');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Sculpted Runner',
    'High-Collar Boot',
    'Technical Volume',
    'Layered Silhouette',
    'All-Terrain Atelier',
    'Low-Profile Court',
    'Knit Sculpture'
  ];

  const filteredSneakers = useMemo(() => {
    return SNEAKERS.filter((s) => {
      const matchesCat = categoryFilter === 'All' || s.category === categoryFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.colorway.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.code.localeCompare(b.code);
    });
  }, [categoryFilter, sortBy, searchQuery]);

  const openOn3DWall = (shoe: Sneaker) => {
    setSelectedSize('');
    setZoomedShoe(shoe);
    router.push('/');
  };

  return (
    <main className="pt-28 md:pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="border-b border-white/10 pb-8 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>COMPLETE ARCHIVE // SERIES 01</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            All 10 Silhouettes
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            Select any silhouette to launch the 3D Showroom Wall Zoom or compare
            technical specifications side by side.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search model or color..."
              className="bg-[#131317] border border-white/15 focus:border-amber-400 pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none w-56"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort silhouettes"
            className="bg-[#131317] border border-white/15 focus:border-amber-400 px-3.5 py-2.5 text-xs font-mono uppercase tracking-wider text-white focus:outline-none"
          >
            <option value="index">Sort: Index 01 → 10</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategoryFilter(cat)}
            className={`px-3.5 py-2 text-xs font-mono uppercase tracking-[0.14em] whitespace-nowrap border transition-all ${
              categoryFilter === cat
                ? 'bg-amber-400 text-black border-amber-400 font-semibold'
                : 'bg-[#121216] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {compareIds.length > 0 && (
        <div className="mb-10 bg-[#131318] border border-amber-400/40 p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-300">
                Technical Spec Comparison ({compareIds.length}/3 Selected)
              </h2>
            </div>
            <button
              type="button"
              onClick={clearCompare}
              className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider"
            >
              Clear Comparison
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {compareIds.map((id) => {
              const s = SNEAKERS.find((item) => item.id === id);
              if (!s) return null;
              return (
                <div key={s.id} className="bg-[#0C0C0F] border border-white/10 p-4 relative">
                  <button
                    type="button"
                    onClick={() => toggleCompare(s.id)}
                    className="absolute top-3 right-3 text-neutral-500 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <h3 className="font-display font-semibold text-sm text-white">{s.name}</h3>
                  <p className="text-xs text-amber-300 font-mono mb-3">
                    €{s.price} • {s.colorway}
                  </p>
                  <dl className="space-y-1.5 text-xs border-t border-white/10 pt-3">
                    <div className="flex justify-between gap-2">
                      <dt className="text-neutral-500">Upper:</dt>
                      <dd className="text-neutral-200 text-right">{s.specs.upper}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-neutral-500">Sole:</dt>
                      <dd className="text-neutral-200 text-right">{s.specs.sole}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-neutral-500">Weight:</dt>
                      <dd className="text-neutral-200 text-right">{s.specs.weight}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSneakers.map((shoe) => {
          const isSaved = wishlistIds.includes(shoe.id);
          const isCompared = compareIds.includes(shoe.id);
          return (
            <div
              key={shoe.id}
              className="bg-[#111115] border border-white/[0.08] hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-4 flex items-center justify-between border-b border-white/[0.06]">
                  <div>
                    <span className="font-mono text-[11px] text-amber-400 tracking-[0.2em] block">
                      LAST DEPT. / {shoe.code}
                    </span>
                    <h2 className="font-display text-lg font-semibold text-white">
                      {shoe.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleCompare(shoe.id)}
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider border transition-colors ${
                        isCompared
                          ? 'bg-amber-400/20 border-amber-400 text-amber-300'
                          : 'border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {isCompared ? 'Comparing' : '+ Compare'}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(shoe.id)}
                      className={`p-1.5 border transition-colors ${
                        isSaved
                          ? 'border-amber-400/50 text-amber-400 bg-amber-400/10'
                          : 'border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>

                <div
                  onClick={() => openOn3DWall(shoe)}
                  className="relative aspect-[4/3] bg-[#0B0B0D] overflow-hidden cursor-pointer"
                >
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1.5 acrylic-glass-shelf" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                    <span className="font-medium text-neutral-200">{shoe.colorway}</span>
                    <span className="font-mono text-amber-300">€{shoe.price}</span>
                  </div>
                  <p className="text-xs text-neutral-300 mb-1">{shoe.tagline}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{shoe.designDetails}</p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => openOn3DWall(shoe)}
                  className="flex-1 py-2.5 bg-white hover:bg-amber-300 text-black font-mono text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                >
                  3D Wall Showcase
                </button>
                <button
                  type="button"
                  onClick={() => addToBag(shoe, 'EU 42')}
                  className="px-3.5 py-2.5 border border-white/15 hover:border-amber-400 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-amber-300 transition-colors"
                >
                  + EU 42
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
