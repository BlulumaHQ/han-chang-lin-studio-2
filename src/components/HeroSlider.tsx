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
          className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[12000ms] ease-out"
            style={{ transform: current === i && zoom ? "scale(1.04)" : "scale(1)" }}
          />
        </div>
      ))}

      {/* Minimal vignette — no heavy gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Text — bottom-left, minimal and elegant */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 z-10 flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-20 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0, pointerEvents: current === i ? "auto" : "none" }}
        >
          <div className="max-w-xl">
            {slide.lines.map((line, j) => (
              <p
                key={j}
                className={
                  j === 0
                    ? "font-serif text-3xl md:text-5xl lg:text-6xl font-light text-primary-foreground leading-[1.1] tracking-wide"
                    : "font-serif text-base md:text-lg text-primary-foreground/70 mt-2 font-light tracking-wider"
                }
                style={{ lineHeight: j === 0 ? "1.1" : undefined }}
              >
                {line}
              </p>
            ))}
            <div className="mt-4 opacity-50">
              {slide.chinese.map((line, j) => (
                <span key={j} className="font-serif text-sm md:text-base text-primary-foreground">
                  {line}{j < slide.chinese.length - 1 ? " · " : ""}
                </span>
              ))}
            </div>
            {slide.cta && (
              <div className="mt-10">
                <Button variant="museum-light" size="lg" asChild>
                  <Link to={slide.cta.to}>{slide.cta.label}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Minimal slide indicators — bottom right */}
      <div className="absolute bottom-8 right-8 md:right-20 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-6 h-px transition-all duration-700 ${
              current === i ? "bg-primary-foreground w-10" : "bg-primary-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
