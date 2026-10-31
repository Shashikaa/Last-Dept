'use client';

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { SNEAKERS, Sneaker } from '@/data/sneakers';

export interface BagItem {
  shoeId: string;
  size: string;
  qty: number;
}

interface StoreContextValue {
  zoomedShoe: Sneaker | null;
  setZoomedShoe: (shoe: Sneaker | null) => void;
  hoveredShoeId: string;
  setHoveredShoeId: (id: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  wallLightingMode: 'reactive' | 'all-lit' | 'studio-dim';
  setWallLightingMode: (mode: 'reactive' | 'all-lit' | 'studio-dim') => void;
  bagOpen: boolean;
  setBagOpen: (open: boolean) => void;
  studioModalOpen: boolean;
  setStudioModalOpen: (open: boolean) => void;
  bagItems: BagItem[];
  addToBag: (shoe: Sneaker, size?: string) => void;
  updateBagQty: (shoeId: string, size: string, delta: number) => void;
  removeBagItem: (shoeId: string, size: string) => void;
  totalBagCount: number;
  totalBagSubtotal: number;
  wishlistIds: string[];
  toggleWishlist: (shoeId: string) => void;
  compareIds: string[];
  toggleCompare: (shoeId: string) => void;
  clearCompare: () => void;
  toast: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [zoomedShoe, setZoomedShoe] = useState<Sneaker | null>(null);
  const [hoveredShoeId, setHoveredShoeId] = useState<string>('foundry-01');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [wallLightingMode, setWallLightingMode] = useState<'reactive' | 'all-lit' | 'studio-dim'>('reactive');
  const [bagOpen, setBagOpen] = useState<boolean>(false);
  const [studioModalOpen, setStudioModalOpen] = useState<boolean>(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([
    { shoeId: 'index-06', size: 'EU 42', qty: 1 }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['index-06']);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => setToast(msg);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const addToBag = (shoe: Sneaker, size?: string) => {
    const finalSize = size || selectedSize;
    if (!finalSize) {
      showToast('Select your EU size to continue.');
      return;
    }
    setBagItems((prev) => {
      const idx = prev.findIndex((item) => item.shoeId === shoe.id && item.size === finalSize);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { shoeId: shoe.id, size: finalSize, qty: 1 }];
    });
    showToast(`${shoe.name} (${finalSize}) added to your bag.`);
    setBagOpen(true);
  };

  const updateBagQty = (shoeId: string, size: string, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((item) => (item.shoeId === shoeId && item.size === size ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeBagItem = (shoeId: string, size: string) => {
    setBagItems((prev) => prev.filter((item) => !(item.shoeId === shoeId && item.size === size)));
  };

  const toggleWishlist = (shoeId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(shoeId);
      const shoe = SNEAKERS.find((s) => s.id === shoeId);
      showToast(exists ? `Removed ${shoe?.name} from saved silhouettes.` : `Saved ${shoe?.name} to your archive.`);
      return exists ? prev.filter((id) => id !== shoeId) : [...prev, shoeId];
    });
  };

  const toggleCompare = (shoeId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(shoeId)) return prev.filter((id) => id !== shoeId);
      if (prev.length >= 3) {
        showToast('You can compare up to 3 silhouettes side-by-side.');
        return prev;
      }
      return [...prev, shoeId];
    });
  };

  const clearCompare = () => setCompareIds([]);

  const totalBagCount = useMemo(() => bagItems.reduce((sum, i) => sum + i.qty, 0), [bagItems]);
  const totalBagSubtotal = useMemo(
    () =>
      bagItems.reduce((sum, i) => {
        const s = SNEAKERS.find((item) => item.id === i.shoeId);
        return sum + (s ? s.price * i.qty : 0);
      }, 0),
    [bagItems]
  );

  return (
    <StoreContext.Provider
      value={{
        zoomedShoe,
        setZoomedShoe,
        hoveredShoeId,
        setHoveredShoeId,
        selectedSize,
        setSelectedSize,
        wallLightingMode,
        setWallLightingMode,
        bagOpen,
        setBagOpen,
        studioModalOpen,
        setStudioModalOpen,
        bagItems,
        addToBag,
        updateBagQty,
        removeBagItem,
        totalBagCount,
        totalBagSubtotal,
        wishlistIds,
        toggleWishlist,
        compareIds,
        toggleCompare,
        clearCompare,
        toast,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used inside StoreProvider');
  return ctx;
}
