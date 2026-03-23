import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    }, 8000);
    return () => clearInterval(interval);
  }, [heroArtworks.length]);

  if (heroArtworks.length === 0) return null;

  return (
    <section className="relative h-screen w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Left: Text panel */}
      <div className="relative z-10 flex flex-col justify-end md:justify-center px-6 md:px-16 lg:px-24 pb-32 md:pb-0 order-2 md:order-1 bg-background">
        <div
          className={`space-y-6 transition-all duration-1000 ease-out ${
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[10px] text-muted-foreground/40 tracking-[0.4em] uppercase font-sans">
            Taiwanese-Canadian Abstract Painter
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-foreground tracking-wide"
            style={{ lineHeight: "1.05" }}
          >
            John<br />Han-Chang<br />Lin
          </h1>
          <p className="font-serif text-base md:text-lg text-muted-foreground/60 italic tracking-wider">
            林漢章
          </p>
          <p className="text-sm text-muted-foreground/70 leading-[1.9] max-w-sm tracking-wide pt-2">
            Color as Meditation · Flow as Expression
          </p>
          <div className="pt-4">
            <Button variant="museum" size="lg" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Artwork panel — cycling images */}
      <div className="relative overflow-hidden order-1 md:order-2 h-[50vh] md:h-full">
        {heroArtworks.map((artwork, i) => (
          <div
            key={artwork.id}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: current === i ? 1 : 0,
              transitionDuration: "2000ms",
            }}
          >
            <img
              src={artwork.image}
              alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: current === i ? "scale(1.03)" : "scale(1)",
                transition: "transform 10000ms ease-out",
              }}
            />
          </div>
        ))}

        {/* Slide indicators — bottom of image */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 flex gap-2.5">
          {heroArtworks.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-700 ${
                current === i ? "bg-white w-8" : "bg-white/30 w-4"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
