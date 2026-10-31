'use client';

import React, { useState } from 'react';
import { X, ShoppingBag, Minus, Plus, Check } from 'lucide-react';
import { SNEAKERS } from '@/data/sneakers';
import { useStore } from '@/context/StoreContext';

export default function BagDrawer() {
  const {
    bagOpen,
    setBagOpen,
    bagItems,
    updateBagQty,
    removeBagItem,
    totalBagCount,
    totalBagSubtotal
  } = useStore();

  const [confirmed, setConfirmed] = useState(false);

  if (!bagOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#0E0E12] border-l border-white/15 h-full flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 block">
                YOUR BAG
              </span>
              <h2 className="font-display text-xl font-medium text-white">
                {totalBagCount} {totalBagCount === 1 ? 'Item' : 'Items'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setBagOpen(false)}
              className="p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {confirmed ? (
            <div className="py-10 space-y-4 text-center">
              <div className="w-12 h-12 bg-amber-400 text-black flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-white">
                Series 01 Allocation Reserved
              </h3>
              <button
                type="button"
                onClick={() => {
                  setConfirmed(false);
                  setBagOpen(false);
                }}
                className="px-6 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-widest"
              >
                Return to Wall
              </button>
            </div>
          ) : bagItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <ShoppingBag className="w-8 h-8 text-neutral-600 mx-auto" />
              <p className="text-sm text-neutral-400">Your bag is currently empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bagItems.map((item) => {
                const shoe = SNEAKERS.find((s) => s.id === item.shoeId);
                if (!shoe) return null;
                return (
                  <div
                    key={`${item.shoeId}-${item.size}`}
                    className="bg-[#15151B] border border-white/10 p-3.5 flex gap-3.5 items-center"
                  >
                    <img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-20 h-16 object-cover bg-black border border-white/10 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-sm font-semibold text-white truncate">
                          {shoe.name}
                        </h3>
                        <span className="font-mono text-xs text-amber-300">
                          €{shoe.price * item.qty}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 truncate">
                        {shoe.colorway} • {item.size}
                      </p>
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center border border-white/15 bg-black">
                          <button
                            type="button"
                            onClick={() => updateBagQty(item.shoeId, item.size, -1)}
                            className="px-2 py-0.5 text-neutral-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-mono">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => updateBagQty(item.shoeId, item.size, 1)}
                            className="px-2 py-0.5 text-neutral-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeBagItem(item.shoeId, item.size)}
                          className="text-[11px] font-mono text-neutral-500 hover:text-red-400 uppercase"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {bagItems.length > 0 && !confirmed && (
          <div className="border-t border-white/10 pt-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400 font-mono uppercase text-xs">
                Subtotal
              </span>
              <span className="font-mono text-lg font-semibold text-white">
                €{totalBagSubtotal}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setConfirmed(true)}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              Complete Allocation (€{totalBagSubtotal})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
