import { useReveal } from "@/hooks/useReveal";

export default function ExhibitionsPage() {
  useReveal();

  return (
    <main className="pt-24">
      <section className="px-8 md:px-20 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-2xl md:text-4xl font-light text-foreground mb-20 text-center tracking-[0.15em] reveal">
            Exhibitions
          </h1>

          {/* Selected Exhibitions */}
          <div className="mb-20 reveal">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              Selected Exhibitions
            </h2>
            <div className="space-y-0">
              {[
                { year: "2024", title: "Solo Exhibition — Empty Wall Gallery", location: "Vancouver, BC" },
                { year: "2024", title: "Closing Reception — Pacific Autism Family Network Benefit", location: "Vancouver, BC" },
                { year: "2023", title: "CCAFV Members Exhibition", location: "Vancouver, BC" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 border-b border-border/30 py-6">
                  <span className="text-[10px] text-muted-foreground/30 font-sans w-16 shrink-0 tracking-[0.3em]">{e.year}</span>
                  <div>
                    <p className="font-serif text-sm md:text-base font-light text-foreground tracking-wide">{e.title}</p>
                    <p className="text-[10px] text-muted-foreground/40 tracking-wider mt-1">{e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Exhibitions */}
          <div className="mb-20 reveal">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              Group Exhibitions
            </h2>
            <div className="space-y-0">
              {[
                { year: "2023", title: "Annual Group Exhibition", location: "Vancouver, BC" },
                { year: "2022", title: "Emerging Artists Showcase", location: "Vancouver, BC" },
                { year: "2021", title: "Vancouver Chinese Artists Association Exhibition", location: "Vancouver, BC" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 border-b border-border/30 py-6">
                  <span className="text-[10px] text-muted-foreground/30 font-sans w-16 shrink-0 tracking-[0.3em]">{e.year}</span>
                  <div>
                    <p className="font-serif text-sm md:text-base font-light text-foreground tracking-wide">{e.title}</p>
                    <p className="text-[10px] text-muted-foreground/40 tracking-wider mt-1">{e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="reveal">
            <h2 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              Community Participation
            </h2>
            <div className="space-y-0">
              {[
                { year: "2024", title: "Pacific Autism Family Network — Charity Art Donation" },
                { year: "2023", title: "CCAFV Community Art Program" },
                { year: "2021", title: "Vancouver Chinese Artists Association — Member" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 border-b border-border/30 py-6">
                  <span className="text-[10px] text-muted-foreground/30 font-sans w-16 shrink-0 tracking-[0.3em]">{e.year}</span>
                  <p className="font-serif text-sm md:text-base font-light text-foreground tracking-wide">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
