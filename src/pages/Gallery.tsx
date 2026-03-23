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

  // Build editorial layout blocks
  const blocks: JSX.Element[] = [];
  let i = 0;
  while (i < filtered.length) {
    const pattern = blocks.length % 4;

    if (pattern === 0 && filtered[i]) {
      // Full-width cinematic piece
      const idx = i;
      const work = filtered[idx];
      blocks.push(
        <div key={work.id} className="reveal">
          <button
            onClick={() => setSelectedIndex(idx)}
            className="w-full text-left group"
          >
            <div className="overflow-hidden">
              <img
                src={work.image}
                alt={`${work.title} abstract painting by John Han-Chang Lin`}
                className="w-full h-[40vh] md:h-[70vh] object-cover artwork-hover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 px-6 md:px-16 lg:px-24 flex justify-between items-baseline">
              <p className="font-serif text-sm font-light text-foreground tracking-wide">{work.title}</p>
              <p className="text-[9px] text-muted-foreground/30 tracking-widest">{work.year} · {work.medium}</p>
            </div>
          </button>
        </div>
      );
      i += 1;
    } else if (pattern === 1) {
      // Two-column: large left + smaller right with offset
      const items = filtered.slice(i, i + 2);
      if (items.length === 0) break;
      blocks.push(
        <div key={`pair-${i}`} className="px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
            {items[0] && (
              <button
                onClick={() => setSelectedIndex(i)}
                className="md:col-span-7 text-left group reveal"
              >
                <div className="overflow-hidden">
                  <img
                    src={items[0].image}
                    alt={`${items[0].title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[5/4] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{items[0].title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{items[0].year}</p>
                </div>
              </button>
            )}
            {items[1] && (
              <button
                onClick={() => setSelectedIndex(i + 1)}
                className="md:col-span-5 md:mt-16 text-left group reveal reveal-delay-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={items[1].image}
                    alt={`${items[1].title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[3/4] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{items[1].title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{items[1].year}</p>
                </div>
              </button>
            )}
          </div>
        </div>
      );
      i += items.length;
    } else if (pattern === 2) {
      // Three-column row
      const items = filtered.slice(i, i + 3);
      if (items.length === 0) break;
      blocks.push(
        <div key={`trio-${i}`} className="px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((item, j) => {
              const absIdx = i + j;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(absIdx)}
                  className={`text-left group reveal reveal-delay-${j + 1}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[4/5] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="font-serif text-xs font-light text-foreground tracking-wide">{item.title}</p>
                    <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{item.year}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      );
      i += items.length;
    } else if (pattern === 3) {
      // Centered single — editorial pause
      const work = filtered[i];
      if (!work) break;
      blocks.push(
        <div key={`center-${i}`} className="px-6 md:px-16 lg:px-24">
          <button
            onClick={() => setSelectedIndex(i)}
            className="w-full md:w-3/5 lg:w-1/2 mx-auto text-left group reveal"
          >
            <div className="overflow-hidden">
              <img
                src={work.image}
                alt={`${work.title} abstract painting by John Han-Chang Lin`}
                className="w-full aspect-[4/3] object-cover artwork-hover"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-serif text-sm font-light text-foreground tracking-wide">{work.title}</p>
              <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{work.year} · {work.medium}</p>
            </div>
          </button>
        </div>
      );
      i += 1;
    }
  }

  return (
    <main className="pt-20">
      {/* Header — editorial, left-aligned title with right-aligned count */}
      <section className="px-6 md:px-16 lg:px-24 pt-20 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-4 reveal">
            <div className="md:col-span-6">
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[0.06em]"
                style={{ lineHeight: "1.05" }}
              >
                Gallery
              </h1>
            </div>
            <div className="md:col-span-6 md:text-right">
              <p className="text-[10px] text-muted-foreground/30 tracking-[0.3em] uppercase font-sans">
                {filtered.length} works · Mixed Media on Canvas
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-14 reveal reveal-delay-1">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => { setActive(f.value); setSelectedIndex(null); }}
                className={`px-4 py-1.5 text-[10px] tracking-[0.18em] font-sans uppercase border transition-all duration-500 ${
                  active === f.value
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground/35 border-border/30 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial layout */}
      <section className="space-y-12 md:space-y-20 pb-28 md:pb-44">
        {blocks}
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
