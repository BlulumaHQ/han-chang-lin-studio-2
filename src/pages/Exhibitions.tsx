export default function ExhibitionsPage() {
  return (
    <main className="pt-20">
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-16 text-center">
            Exhibitions
          </h1>

          {/* Selected Exhibitions */}
          <div className="mb-16">
            <h2 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-8">
              Selected Exhibitions
            </h2>
            <div className="space-y-6">
              {[
                { year: "2024", title: "Solo Exhibition — Empty Wall Gallery", location: "Vancouver, BC" },
                { year: "2024", title: "Closing Reception — Pacific Autism Family Network Benefit", location: "Vancouver, BC" },
                { year: "2023", title: "CCAFV Members Exhibition", location: "Vancouver, BC" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-b border-border pb-6">
                  <span className="text-sm text-muted-foreground font-sans w-16 shrink-0">{e.year}</span>
                  <div>
                    <p className="font-serif text-lg font-light text-foreground">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Exhibitions */}
          <div className="mb-16">
            <h2 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-8">
              Group Exhibitions
            </h2>
            <div className="space-y-6">
              {[
                { year: "2023", title: "Annual Group Exhibition", location: "Vancouver, BC" },
                { year: "2022", title: "Emerging Artists Showcase", location: "Vancouver, BC" },
                { year: "2021", title: "Vancouver Chinese Artists Association Exhibition", location: "Vancouver, BC" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-b border-border pb-6">
                  <span className="text-sm text-muted-foreground font-sans w-16 shrink-0">{e.year}</span>
                  <div>
                    <p className="font-serif text-lg font-light text-foreground">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h2 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-8">
              Community Participation
            </h2>
            <div className="space-y-6">
              {[
                { year: "2024", title: "Pacific Autism Family Network — Charity Art Donation" },
                { year: "2023", title: "CCAFV Community Art Program" },
                { year: "2021", title: "Vancouver Chinese Artists Association — Member" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-b border-border pb-6">
                  <span className="text-sm text-muted-foreground font-sans w-16 shrink-0">{e.year}</span>
                  <p className="font-serif text-lg font-light text-foreground">{e.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
