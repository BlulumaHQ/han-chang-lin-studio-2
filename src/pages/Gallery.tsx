import { useState } from "react";
import { artworks, type ColorCategory } from "@/data/artworks";
import ArtworkGrid from "@/components/ArtworkGrid";

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

  const filtered = active === "all"
    ? artworks
    : active === "Available" || active === "Private Collection"
      ? artworks.filter((a) => a.status === active)
      : artworks.filter((a) => a.colorCategory === active);

  return (
    <main className="pt-20">
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 text-center">
            Gallery
          </h1>
          <p className="text-center text-muted-foreground mb-10">
            {filtered.length} works · Mixed Media on Canvas
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 text-xs tracking-wide font-sans border transition-all duration-300 ${
                  active === f.value
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <ArtworkGrid artworks={filtered} columns={4} />
        </div>
      </section>
    </main>
  );
}
