import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Artwork } from "@/data/artworks";

interface Slide {
  image: string;
  alt: string;
  lines: string[];
  chinese: string[];
  cta?: { label: string; to: string };
}

const slideText: Omit<Slide, "image" | "alt">[] = [
  {
    lines: ["John Han-Chang Lin", "Color as Meditation", "Flow as Expression"],
    chinese: ["林漢章", "以色彩修行", "讓靈魂流動"],
    cta: { label: "View Gallery", to: "/gallery" },
  },
  {
    lines: ["Painting is a form of meditation."],
    chinese: ["繪畫是一種修行"],
  },
  {
    lines: ["Pigment, Gravity, Time"],
    chinese: ["顏料、重力與時間"],
    cta: { label: "Explore the Work", to: "/gallery" },
  },
];

interface HeroSliderProps {
  heroArtworks: Artwork[];
}

export default function HeroSlider({ heroArtworks }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);

  const slides: Slide[] = heroArtworks.map((artwork, i) => ({
    ...slideText[i],
    image: artwork.image,
    alt: `${artwork.title} abstract painting by John Han-Chang Lin`,
  }));

  useEffect(() => {
    setZoom(false);
    const zoomTimer = requestAnimationFrame(() => setZoom(true));
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(zoomTimer);
    };
  }, [current, slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[9000ms] ease-out"
            style={{ transform: current === i && zoom ? "scale(1.05)" : "scale(1)" }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Text — lower-left */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0, pointerEvents: current === i ? "auto" : "none" }}
        >
          <div className="max-w-2xl">
            {slide.lines.map((line, j) => (
              <p
                key={j}
                className={
                  j === 0
                    ? "font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight"
                    : "font-serif text-lg md:text-xl text-primary-foreground/80 mt-2 font-light italic"
                }
              >
                {line}
              </p>
            ))}
            <div className="mt-3">
              {slide.chinese.map((line, j) => (
                <span key={j} className="font-serif text-base md:text-lg text-primary-foreground/60">
                  {line}{j < slide.chinese.length - 1 ? " · " : ""}
                </span>
              ))}
            </div>
            {slide.cta && (
              <div className="mt-8">
                <Button variant="museum-light" size="lg" asChild>
                  <Link to={slide.cta.to}>{slide.cta.label}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-0.5 transition-all duration-500 ${
              current === i ? "bg-primary-foreground" : "bg-primary-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
