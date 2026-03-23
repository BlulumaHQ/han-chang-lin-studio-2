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

  return (
    <main className="pt-24">
      <section className="px-8 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-2xl md:text-4xl font-light text-foreground mb-16 text-center tracking-[0.15em] reveal">
            Event &amp; Press
          </h1>

          {/* Editorial masonry-style layout */}
          <div className="space-y-10 md:space-y-16">
            {shuffled.map((src, i) => {
              const pattern = i % 5;

              if (pattern === 0) {
                return (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className="w-full overflow-hidden cursor-pointer group reveal"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full max-h-[65vh] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </button>
                );
              }

              if (pattern === 1 || pattern === 2) {
                if (pattern === 2) return null;
                const nextSrc = shuffled[i + 1];
                return (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <button
                      onClick={() => setLightbox(i)}
                      className="overflow-hidden cursor-pointer group reveal"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-72 md:h-96 object-cover artwork-hover"
                        loading="lazy"
                      />
                    </button>
                    {nextSrc && (
                      <button
                        onClick={() => setLightbox(i + 1)}
                        className="overflow-hidden cursor-pointer group reveal reveal-delay-2"
                      >
                        <img
                          src={nextSrc}
                          alt=""
                          className="w-full h-72 md:h-96 object-cover artwork-hover"
                          loading="lazy"
                        />
                      </button>
                    )}
                  </div>
                );
              }

              if (pattern === 3 || pattern === 4) {
                if (pattern === 4) return null;
                const nextSrc = shuffled[i + 1];
                return (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                    <button
                      onClick={() => setLightbox(i)}
                      className="md:col-span-2 overflow-hidden cursor-pointer group reveal"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-72 md:h-[28rem] object-cover artwork-hover"
                        loading="lazy"
                      />
                    </button>
                    {nextSrc && (
                      <button
                        onClick={() => setLightbox(i + 1)}
                        className="md:col-span-3 overflow-hidden cursor-pointer group reveal reveal-delay-2"
                      >
                        <img
                          src={nextSrc}
                          alt=""
                          className="w-full h-72 md:h-[28rem] object-cover artwork-hover"
                          loading="lazy"
                        />
                      </button>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors duration-300"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 transition-colors duration-300"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 transition-colors duration-300"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
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
