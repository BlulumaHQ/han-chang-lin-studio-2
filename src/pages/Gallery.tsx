import { useState } from "react";
import { artworks, type ColorCategory } from "@/data/artworks";
import ArtworkModal from "@/components/ArtworkModal";
import { useReveal } from "@/hooks/useReveal";

type FilterType = "all" | ColorCategory | "Available" | "Private Collection";

const filters: { label: string; value: FilterType }[] = [
  { label: "All Works", value: "all" },
  { label: "Ocean Depths", value: "Ocean Depths" },
  { label: "Emerald Flow", value: "Emerald Flow" },
  { label: "Golden Light", value: "Golden Light" },
  { label: "Crimson Energy", value: "Crimson Energy" },
  { label: "Celestial Mist", value: "Celestial Mist" },
  { label: "Earth Tones", value: "Earth Tones" },
  { label: "Available", value: "Available" },
  { label: "Private Collection", value: "Private Collection" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<FilterType>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  useReveal();

  const filtered = active === "all"
    ? artworks
    : active === "Available" || active === "Private Collection"
      ? artworks.filter((a) => a.status === active)
      : artworks.filter((a) => a.colorCategory === active);

  const selected = selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <main className="pt-24">
      <section className="px-8 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-2xl md:text-4xl font-light text-foreground mb-4 text-center tracking-[0.15em] reveal">
            Gallery
          </h1>
          <p className="text-center text-xs text-muted-foreground/50 mb-14 tracking-[0.2em] reveal reveal-delay-1">
            {filtered.length} works · Mixed Media on Canvas
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-20 reveal reveal-delay-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.2em] font-sans uppercase border transition-all duration-500 ${
                  active === f.value
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground/50 border-border/50 hover:border-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Editorial mixed layout for gallery */}
          <div className="space-y-12 md:space-y-20">
            {filtered.map((artwork, i) => {
              // Alternate between layout patterns
              const pattern = i % 5;

              if (pattern === 0) {
                // Full-width hero
                return (
                  <button
                    key={artwork.id}
                    onClick={() => setSelectedIndex(i)}
                    className="w-full text-left group reveal"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={artwork.image}
                        alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
                        className="w-full max-h-[70vh] object-cover artwork-hover"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 flex justify-between items-baseline">
                      <p className="font-serif text-sm font-light text-foreground tracking-wide">{artwork.title}</p>
                      <p className="text-[10px] text-muted-foreground/40 tracking-widest">{artwork.year} · {artwork.medium}</p>
                    </div>
                  </button>
                );
              }

              if (pattern === 1 || pattern === 2) {
                // Pair: shown together as asymmetric duo
                if (pattern === 2) return null; // handled in pattern 1
                const next = filtered[i + 1];
                return (
                  <div key={artwork.id} className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
                    <button
                      onClick={() => setSelectedIndex(i)}
                      className="md:col-span-3 text-left group reveal"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
                          className="w-full aspect-[4/5] object-cover artwork-hover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-4">
                        <p className="font-serif text-sm font-light text-foreground tracking-wide">{artwork.title}</p>
                        <p className="text-[10px] text-muted-foreground/40 tracking-widest mt-1">{artwork.year}</p>
                      </div>
                    </button>
                    {next && (
                      <button
                        onClick={() => setSelectedIndex(i + 1)}
                        className="md:col-span-2 md:mt-20 text-left group reveal reveal-delay-2"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={next.image}
                            alt={`${next.title} abstract painting by John Han-Chang Lin`}
                            className="w-full aspect-[3/4] object-cover artwork-hover"
                            loading="lazy"
                          />
                        </div>
                        <div className="mt-4">
                          <p className="font-serif text-sm font-light text-foreground tracking-wide">{next.title}</p>
                          <p className="text-[10px] text-muted-foreground/40 tracking-widest mt-1">{next.year}</p>
                        </div>
                      </button>
                    )}
                  </div>
                );
              }

              if (pattern === 3 || pattern === 4) {
                if (pattern === 4) return null;
                const next = filtered[i + 1];
                return (
                  <div key={artwork.id} className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
                    <button
                      onClick={() => setSelectedIndex(i)}
                      className="md:col-span-2 text-left group reveal"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
                          className="w-full aspect-[3/4] object-cover artwork-hover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-4">
                        <p className="font-serif text-sm font-light text-foreground tracking-wide">{artwork.title}</p>
                        <p className="text-[10px] text-muted-foreground/40 tracking-widest mt-1">{artwork.year}</p>
                      </div>
                    </button>
                    {next && (
                      <button
                        onClick={() => setSelectedIndex(i + 1)}
                        className="md:col-span-3 md:mt-16 text-left group reveal reveal-delay-2"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={next.image}
                            alt={`${next.title} abstract painting by John Han-Chang Lin`}
                            className="w-full aspect-[4/5] object-cover artwork-hover"
                            loading="lazy"
                          />
                        </div>
                        <div className="mt-4">
                          <p className="font-serif text-sm font-light text-foreground tracking-wide">{next.title}</p>
                          <p className="text-[10px] text-muted-foreground/40 tracking-widest mt-1">{next.year}</p>
                        </div>
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

      <ArtworkModal
        artwork={selected}
        open={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        onPrev={selectedIndex !== null && selectedIndex > 0 ? () => setSelectedIndex(selectedIndex - 1) : undefined}
        onNext={selectedIndex !== null && selectedIndex < filtered.length - 1 ? () => setSelectedIndex(selectedIndex + 1) : undefined}
      />
    </main>
  );
}
