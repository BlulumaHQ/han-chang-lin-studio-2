import { useState, useMemo, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

import ep001 from "@/assets/event-press-001.webp";
import ep002 from "@/assets/event-press-002.webp";
import ep003 from "@/assets/event-press-003.webp";
import ep004 from "@/assets/event-press-004.webp";

import ep006 from "@/assets/event-press-006.webp";
import ep007 from "@/assets/event-press-007.webp";
import ep008 from "@/assets/event-press-008.webp";
import ep009 from "@/assets/event-press-009.webp";
import ep010 from "@/assets/event-press-010.webp";
import ep011 from "@/assets/event-press-011.webp";
import ep012 from "@/assets/event-press-012.webp";
import ep013 from "@/assets/event-press-013.webp";
import ep014 from "@/assets/event-press-014.webp";
import ep015 from "@/assets/event-press-015.webp";
import ep016 from "@/assets/event-press-016.webp";
import ep017 from "@/assets/event-press-017.webp";
import ep018 from "@/assets/event-press-018.webp";
import ep019 from "@/assets/event-press-019.webp";
import ep020 from "@/assets/event-press-020.jpg";

const photos = [ep001, ep002, ep003, ep004, ep006, ep007, ep008, ep009, ep010, ep011, ep012, ep013, ep014, ep015, ep016, ep017, ep018, ep019, ep020];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function EventPress() {
  const shuffled = useMemo(() => shuffle(photos), []);
  const [lightbox, setLightbox] = useState<number | null>(null);
  useReveal();

  const prev = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + shuffled.length) % shuffled.length : null));
  }, [shuffled.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % shuffled.length : null));
  }, [shuffled.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  // Build editorial photo blocks
  const blocks: JSX.Element[] = [];
  let idx = 0;
  while (idx < shuffled.length) {
    const pattern = blocks.length % 3;

    if (pattern === 0 && shuffled[idx]) {
      // Full-width hero photo
      blocks.push(
        <button
          key={`hero-${idx}`}
          onClick={() => setLightbox(idx)}
          className="w-full overflow-hidden group reveal"
        >
          <img src={shuffled[idx]} alt="" className="w-full h-[40vh] md:h-[60vh] object-cover artwork-hover" loading="lazy" />
        </button>
      );
      idx += 1;
    } else if (pattern === 1) {
      // Two-column asymmetric
      const items = shuffled.slice(idx, idx + 2);
      blocks.push(
        <div key={`pair-${idx}`} className="px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {items[0] && (
              <button
                onClick={() => setLightbox(idx)}
                className="md:col-span-5 overflow-hidden group reveal"
              >
                <img src={items[0]} alt="" className="w-full aspect-[3/4] object-cover artwork-hover" loading="lazy" />
              </button>
            )}
            {items[1] && (
              <button
                onClick={() => setLightbox(idx + 1)}
                className="md:col-span-7 md:mt-12 overflow-hidden group reveal reveal-delay-2"
              >
                <img src={items[1]} alt="" className="w-full aspect-[5/4] object-cover artwork-hover" loading="lazy" />
              </button>
            )}
          </div>
        </div>
      );
      idx += items.length;
    } else if (pattern === 2) {
      // Three-column
      const items = shuffled.slice(idx, idx + 3);
      blocks.push(
        <div key={`trio-${idx}`} className="px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((src, j) => (
              <button
                key={j}
                onClick={() => setLightbox(idx + j)}
                className={`overflow-hidden group reveal reveal-delay-${j + 1}`}
              >
                <img src={src} alt="" className="w-full aspect-[4/5] object-cover artwork-hover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      );
      idx += items.length;
    }
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="px-6 md:px-16 lg:px-24 pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-end gap-4 reveal">
          <div className="md:col-span-6">
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.06em]"
              style={{ lineHeight: "1.05" }}
            >
              Event &amp; Press
            </h1>
          </div>
          <div className="md:col-span-6 md:text-right">
            <p className="text-[10px] text-muted-foreground/30 tracking-[0.3em] uppercase font-sans">
              Exhibitions, events, and media coverage
            </p>
          </div>
        </div>
      </section>

      {/* Editorial photo layout */}
      <section className="space-y-8 md:space-y-14 pb-28 md:pb-44">
        {blocks}
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white z-10 transition-colors duration-300"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white z-10 transition-colors duration-300"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white z-10 transition-colors duration-300"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
          <img
            src={shuffled[lightbox]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
