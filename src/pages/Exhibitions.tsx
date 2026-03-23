import { useReveal } from "@/hooks/useReveal";

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

  return (
    <main className="pt-20">
      {/* Page header */}
      <section className="px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-20 md:pb-28 bg-secondary">
        <div className="max-w-4xl reveal">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.1em]" style={{ lineHeight: "1.1" }}>
            Exhibitions
          </h1>
          <p className="text-xs text-muted-foreground/40 tracking-[0.2em] uppercase mt-4 font-sans">
            Selected exhibitions and community participation
          </p>
        </div>
      </section>

      {/* Content — three-column on desktop */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-16">
          {/* Selected Exhibitions */}
          <div className="reveal">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10 pb-3 border-b border-border/40">
              Selected Exhibitions
            </h2>
            <div className="space-y-0">
              {selectedExhibitions.map((e, i) => (
                <div key={i} className="py-5 border-b border-border/20">
                  <span className="text-[10px] text-muted-foreground/25 font-sans tracking-[0.3em] block mb-2">{e.year}</span>
                  <p className="font-serif text-sm font-light text-foreground tracking-wide leading-relaxed">{e.title}</p>
                  <p className="text-[10px] text-muted-foreground/35 tracking-wider mt-1">{e.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Group Exhibitions */}
          <div className="reveal reveal-delay-1">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10 pb-3 border-b border-border/40">
              Group Exhibitions
            </h2>
            <div className="space-y-0">
              {groupExhibitions.map((e, i) => (
                <div key={i} className="py-5 border-b border-border/20">
                  <span className="text-[10px] text-muted-foreground/25 font-sans tracking-[0.3em] block mb-2">{e.year}</span>
                  <p className="font-serif text-sm font-light text-foreground tracking-wide leading-relaxed">{e.title}</p>
                  <p className="text-[10px] text-muted-foreground/35 tracking-wider mt-1">{e.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10 pb-3 border-b border-border/40">
              Community Participation
            </h2>
            <div className="space-y-0">
              {community.map((e, i) => (
                <div key={i} className="py-5 border-b border-border/20">
                  <span className="text-[10px] text-muted-foreground/25 font-sans tracking-[0.3em] block mb-2">{e.year}</span>
                  <p className="font-serif text-sm font-light text-foreground tracking-wide leading-relaxed">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
