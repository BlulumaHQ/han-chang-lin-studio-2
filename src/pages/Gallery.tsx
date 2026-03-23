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
    <main className="pt-20">
      {/* Header */}
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.1em]" style={{ lineHeight: "1.1" }}>
                Gallery
              </h1>
              <p className="text-[10px] text-muted-foreground/40 mt-3 tracking-[0.25em] uppercase font-sans">
                {filtered.length} works · Mixed Media on Canvas
              </p>
            </div>
          </div>

          {/* Filter Chips — left-aligned, inline */}
          <div className="flex flex-wrap gap-2 mt-12 reveal reveal-delay-1">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.18em] font-sans uppercase border transition-all duration-500 ${
                  active === f.value
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground/40 border-border/40 hover:border-foreground/50 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid — varied rhythm */}
      <section className="px-6 md:px-16 lg:px-24 py-12 md:py-16 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          {filtered.map((artwork, i) => {
            const pattern = i % 7;

            // Full-width hero piece
            if (pattern === 0) {
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
                      className="w-full h-[40vh] md:h-[65vh] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex justify-between items-baseline">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{artwork.title}</p>
                    <p className="text-[10px] text-muted-foreground/35 tracking-widest">{artwork.year} · {artwork.medium}</p>
                  </div>
                </button>
              );
            }

            // Three-column row
            if (pattern >= 1 && pattern <= 3) {
              if (pattern !== 1) return null;
              const items = [filtered[i], filtered[i + 1], filtered[i + 2]].filter(Boolean);
              return (
                <div key={artwork.id} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {items.map((item, j) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIndex(filtered.indexOf(item))}
                      className={`text-left group reveal reveal-delay-${j + 1}`}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.title} abstract painting by John Han-Chang Lin`}
                          className="w-full aspect-[3/4] object-cover artwork-hover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3">
                        <p className="font-serif text-xs md:text-sm font-light text-foreground tracking-wide">{item.title}</p>
                        <p className="text-[10px] text-muted-foreground/35 tracking-widest mt-0.5">{item.year}</p>
                      </div>
                    </button>
                  ))}
                </div>
              );
            }

            // Two-column asymmetric (wide left)
            if (pattern === 4 || pattern === 5) {
              if (pattern === 5) return null;
              const next = filtered[i + 1];
              return (
                <div key={artwork.id} className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-6">
                  <button
                    onClick={() => setSelectedIndex(i)}
                    className="md:col-span-4 text-left group reveal"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={artwork.image}
                        alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
                        className="w-full aspect-[5/4] object-cover artwork-hover"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="font-serif text-sm font-light text-foreground tracking-wide">{artwork.title}</p>
                      <p className="text-[10px] text-muted-foreground/35 tracking-widest mt-0.5">{artwork.year}</p>
                    </div>
                  </button>
                  {next && (
                    <button
                      onClick={() => setSelectedIndex(i + 1)}
                      className="md:col-span-3 text-left group reveal reveal-delay-2"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={next.image}
                          alt={`${next.title} abstract painting by John Han-Chang Lin`}
                          className="w-full aspect-[3/4] object-cover artwork-hover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3">
                        <p className="font-serif text-sm font-light text-foreground tracking-wide">{next.title}</p>
                        <p className="text-[10px] text-muted-foreground/35 tracking-widest mt-0.5">{next.year}</p>
                      </div>
                    </button>
                  )}
                </div>
              );
            }

            // Single centered
            if (pattern === 6) {
              return (
                <button
                  key={artwork.id}
                  onClick={() => setSelectedIndex(i)}
                  className="w-full md:w-3/5 mx-auto text-left group reveal"
                >
                  <div className="overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[4/3] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{artwork.title}</p>
                    <p className="text-[10px] text-muted-foreground/35 tracking-widest mt-0.5">{artwork.year} · {artwork.medium}</p>
                  </div>
                </button>
              );
            }

            return null;
          })}
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
