import { useState, useCallback } from "react";
import type { Artwork } from "@/data/artworks";
import ArtworkModal from "./ArtworkModal";

interface ArtworkGridProps {
  artworks: Artwork[];
  columns?: 3 | 4;
}

export default function ArtworkGrid({ artworks, columns = 3 }: ArtworkGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected = selectedIndex !== null ? artworks[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < artworks.length - 1) setSelectedIndex(selectedIndex + 1);
  }, [selectedIndex, artworks.length]);

  const gridClass = columns === 4
    ? "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    : "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6";

  return (
    <>
      <div className={gridClass}>
        {artworks.map((artwork, i) => (
          <button
            key={artwork.id}
            onClick={() => setSelectedIndex(i)}
            className="group text-left animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
          >
            <div className="overflow-hidden bg-muted">
              <img
                src={artwork.image}
                alt={`${artwork.title} abstract painting by John Han-Chang Lin`}
                className="w-full aspect-[3/4] object-cover artwork-hover"
                loading="lazy"
              />
            </div>
            <div className="mt-3 space-y-1">
              <p className="font-serif text-sm md:text-base font-light text-foreground">{artwork.title}</p>
              <p className="text-xs text-muted-foreground">{artwork.year} · {artwork.medium}</p>
            </div>
          </button>
        ))}
      </div>
      <ArtworkModal
        artwork={selected}
        open={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        onPrev={selectedIndex !== null && selectedIndex > 0 ? handlePrev : undefined}
        onNext={selectedIndex !== null && selectedIndex < artworks.length - 1 ? handleNext : undefined}
      />
    </>
  );
}
