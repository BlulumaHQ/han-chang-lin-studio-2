import { useMemo } from "react";
import { useReveal } from "@/hooks/useReveal";
import { getRandomHomeArtworks } from "@/data/artworks";

const selectedExhibitions = [
  { year: "2024", title: "Solo Exhibition — Empty Wall Gallery", location: "Vancouver, BC" },
  { year: "2024", title: "Closing Reception — Pacific Autism Family Network Benefit", location: "Vancouver, BC" },
  { year: "2023", title: "CCAFV Members Exhibition", location: "Vancouver, BC" },
];

const groupExhibitions = [
  { year: "2023", title: "Annual Group Exhibition", location: "Vancouver, BC" },
  { year: "2022", title: "Emerging Artists Showcase", location: "Vancouver, BC" },
  { year: "2021", title: "Vancouver Chinese Artists Association Exhibition", location: "Vancouver, BC" },
];

const community = [
  { year: "2024", title: "Pacific Autism Family Network — Charity Art Donation" },
  { year: "2023", title: "CCAFV Community Art Program" },
  { year: "2021", title: "Vancouver Chinese Artists Association — Member" },
];

export default function ExhibitionsPage() {
  useReveal();
  const { selectedWorks } = useMemo(() => getRandomHomeArtworks(), []);

  return (
    <main className="pt-20">
      {/* Hero — full-bleed artwork as header */}
      {selectedWorks[0] && (
        <div className="relative h-[40vh] md:h-[55vh] overflow-hidden reveal">
          <img
            src={selectedWorks[0].image}
            alt="Exhibition artwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end px-6 md:px-16 lg:px-24 pb-10 md:pb-16">
            <div>
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide"
                style={{ lineHeight: "1", mixBlendMode: "difference" }}
              >
                Exhibitions
              </h1>
              <p
                className="text-[10px] tracking-[0.3em] uppercase mt-3 font-sans"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Selected exhibitions and community participation
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Selected Exhibitions — timeline style */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground/30 mb-16 reveal">
            Selected Exhibitions
          </h2>
          <div className="space-y-0">
            {selectedExhibitions.map((e, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border/20 reveal reveal-delay-${Math.min(i + 1, 3)}`}
              >
                <span className="md:col-span-2 text-[10px] text-muted-foreground/20 font-sans tracking-[0.3em]">{e.year}</span>
                <p className="md:col-span-7 font-serif text-base md:text-lg font-light text-foreground tracking-wide leading-relaxed">{e.title}</p>
                <p className="md:col-span-3 text-[10px] text-muted-foreground/30 tracking-wider md:text-right">{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider artwork */}
      {selectedWorks[1] && (
        <div className="reveal">
          <img
            src={selectedWorks[1].image}
            alt="Artwork"
            className="w-full h-[30vh] md:h-[45vh] object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Group Exhibitions */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground/30 mb-16 reveal">
            Group Exhibitions
          </h2>
          <div className="space-y-0">
            {groupExhibitions.map((e, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border/20 reveal reveal-delay-${Math.min(i + 1, 3)}`}
              >
                <span className="md:col-span-2 text-[10px] text-muted-foreground/20 font-sans tracking-[0.3em]">{e.year}</span>
                <p className="md:col-span-7 font-serif text-base md:text-lg font-light text-foreground tracking-wide leading-relaxed">{e.title}</p>
                <p className="md:col-span-3 text-[10px] text-muted-foreground/30 tracking-wider md:text-right">{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-secondary">
        <div className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground/30 mb-16 reveal">
              Community Participation
            </h2>
            <div className="space-y-0">
              {community.map((e, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border/15 reveal reveal-delay-${Math.min(i + 1, 3)}`}
                >
                  <span className="md:col-span-2 text-[10px] text-muted-foreground/20 font-sans tracking-[0.3em]">{e.year}</span>
                  <p className="md:col-span-10 font-serif text-base md:text-lg font-light text-foreground tracking-wide leading-relaxed">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
