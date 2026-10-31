'use client';

import React, { useState } from 'react';
import { MapPin, Check, Send } from 'lucide-react';
import { SNEAKERS } from '@/data/sneakers';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    flagship: 'Paris — Le Marais',
    preferredSilhouette: 'INDEX 06 — Sand / Burgundy',
    date: '2026-11-14',
    message: ''
  });

  return (
    <main className="pt-28 md:pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400 block mb-2">
              04 // CLIENT CONCIERGE & SHOWROOMS
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white tracking-tight">
              Experience the Wall in Person.
            </h1>
          </div>

          <div className="space-y-4">
            {[
              {
                city: 'PARIS — LE MARAIS FLAGSHIP',
                address: '14 Rue de Turenne, 75004 Paris, France',
                hours: 'Tue – Sun: 11:00 – 20:00 CET'
              },
              {
                city: 'MILAN — BRERA GALLERY',
                address: 'Via Solferino 18, 20121 Milano MI, Italy',
                hours: 'Tue – Sat: 10:30 – 19:30 CET'
              },
              {
                city: 'TOKYO — AOYAMA MONOLITH',
                address: '5-7-21 Minami-Aoyama, Minato-ku, Tokyo',
                hours: 'Wed – Mon: 12:00 – 20:00 JST'
              }
            ].map((loc) => (
              <div key={loc.city} className="bg-[#111115] border border-white/10 p-5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-amber-300 uppercase tracking-wider">
                    {loc.city}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                </div>
                <p className="text-xs text-neutral-200">{loc.address}</p>
                <p className="text-[11px] text-neutral-500">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-[#111115] border border-white/15 p-6 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-white mb-6">
              Reserve a Private Showroom Fitting
            </h2>

            {submitted ? (
              <div className="bg-amber-500/10 border border-amber-400/50 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-400 text-black flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-white">
                    Private Appointment Request Confirmed
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-white text-black text-xs font-mono uppercase tracking-widest font-medium"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0A0A0D] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0A0A0D] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <select
                  value={form.preferredSilhouette}
                  onChange={(e) => setForm({ ...form, preferredSilhouette: e.target.value })}
                  className="w-full bg-[#0A0A0D] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none"
                >
                  {SNEAKERS.map((s) => (
                    <option key={s.id} value={`${s.name} — ${s.colorway}`}>
                      #{s.code} {s.name} ({s.colorway}) — €{s.price}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Specify your usual EU size or notes..."
                  className="w-full bg-[#0A0A0D] border border-white/15 p-3.5 text-xs text-white focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Showroom Appointment</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
