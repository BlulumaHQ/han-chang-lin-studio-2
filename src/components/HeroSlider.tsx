import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Artwork } from "@/data/artworks";

interface HeroSliderProps {
  heroArtworks: Artwork[];
}

export default function HeroSlider({ heroArtworks }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroArtworks.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroArtworks.length]);

  if (heroArtworks.length === 0) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed artwork */}
      {heroArtworks.map((artwork, i) => (
        <div
          key={artwork.id}
          className="absolute inset-0"
          style={{
            opacity: current === i ? 1 : 0,
            transition: "opacity 1800ms ease-in-out",
          }}
        >
          <img
            src={artwork.image}
            alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: current === i ? "scale(1.04)" : "scale(1)",
              transition: "transform 12000ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      ))}

      {/* Bottom-left: artist name — large, overlapping the artwork */}
      <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
        <div className="px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
          <div
            className={`transition-all ease-out pointer-events-auto ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDuration: "1200ms", transitionDelay: "400ms" }}
          >
            <p
              className="font-sans text-[10px] tracking-[0.5em] uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Taiwanese-Canadian Abstract Painter
            </p>
            <h1
              className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] font-light text-white tracking-wide"
              style={{
                lineHeight: "0.92",
                mixBlendMode: "difference",
              }}
            >
              John
              <br />
              Han-Chang
              <br />
              Lin
            </h1>
            <p
              className="font-serif text-lg md:text-xl mt-4 italic tracking-wider"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              林漢章
            </p>
          </div>
        </div>
      </div>

      {/* Right side: subtle scroll cue + slide indicators */}
      <div className="absolute bottom-16 md:bottom-24 right-6 md:right-16 lg:right-24 flex flex-col items-end gap-6 pointer-events-auto">
        <div className="flex flex-col gap-2">
          {heroArtworks.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-700"
              style={{
                width: "2px",
                height: current === i ? "32px" : "16px",
                backgroundColor: current === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <Link
          to="/gallery"
          className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors duration-500"
          style={{ writingMode: "vertical-rl" }}
        >
          View Gallery
        </Link>
      </div>
    </section>
  );
}
