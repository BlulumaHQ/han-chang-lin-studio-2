import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/HeroSlider";
import { getRandomHomeArtworks } from "@/data/artworks";
import { useReveal } from "@/hooks/useReveal";
import photoStudio from "@/assets/photo-studio.webp";
import photoGallery from "@/assets/photo-gallery.webp";
import photoPortrait from "@/assets/photo-portrait.webp";

export default function HomePage() {
  const { heroArtworks, selectedWorks } = useMemo(() => getRandomHomeArtworks(), []);
  useReveal();

  return (
    <main>
      {/* HERO — fullscreen cinematic */}
      <HeroSlider heroArtworks={heroArtworks} />

      {/* ARTIST STATEMENT — generous whitespace */}
      <section className="py-32 md:py-48 px-8 md:px-20">
        <div className="max-w-2xl mx-auto text-center reveal">
          <blockquote className="font-serif text-2xl md:text-4xl font-light text-foreground italic leading-relaxed tracking-wide">
            "Painting is a form of meditation."
          </blockquote>
          <p className="mt-10 text-sm md:text-base text-muted-foreground leading-[1.9] max-w-lg mx-auto tracking-wide">
            John Han-Chang Lin explores the movement of color, gravity, and silence through abstract landscapes
            formed by flowing pigments.
          </p>
          <div className="mt-6 text-xs md:text-sm text-muted-foreground/50 leading-relaxed tracking-wider">
            <p>「繪畫對我而言，是一種修行。」</p>
            <p className="mt-2">林漢章透過色彩流動與自然力量，讓畫面在畫布上逐漸生成，如同自然地景。</p>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS — editorial mixed layout */}
      <section className="pb-32 md:pb-48 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-16 text-center tracking-[0.15em] reveal">
            Selected Works
          </h2>

          {/* Editorial asymmetric layout */}
          <div className="space-y-16 md:space-y-24">
            {/* Row 1: Large hero piece */}
            {selectedWorks[0] && (
              <div className="reveal">
                <div className="overflow-hidden">
                  <img
                    src={selectedWorks[0].image}
                    alt={`${selectedWorks[0].title} abstract painting by John Han-Chang Lin`}
                    className="w-full max-h-[75vh] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex justify-between items-baseline">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[0].title}</p>
                  <p className="text-[10px] text-muted-foreground/50 tracking-widest">{selectedWorks[0].year} · {selectedWorks[0].medium}</p>
                </div>
              </div>
            )}

            {/* Row 2: Two asymmetric */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
              {selectedWorks[1] && (
                <div className="md:col-span-3 reveal">
                  <div className="overflow-hidden">
                    <img
                      src={selectedWorks[1].image}
                      alt={`${selectedWorks[1].title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[4/5] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[1].title}</p>
                    <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-1">{selectedWorks[1].year}</p>
                  </div>
                </div>
              )}
              {selectedWorks[2] && (
                <div className="md:col-span-2 md:mt-24 reveal reveal-delay-2">
                  <div className="overflow-hidden">
                    <img
                      src={selectedWorks[2].image}
                      alt={`${selectedWorks[2].title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[3/4] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[2].title}</p>
                    <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-1">{selectedWorks[2].year}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Row 3: Three equal but staggered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {selectedWorks.slice(3, 6).map((work, i) => (
                <div
                  key={work.id}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{ marginTop: i === 1 ? "3rem" : i === 2 ? "1.5rem" : 0 }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={work.image}
                      alt={`${work.title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[3/4] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{work.title}</p>
                    <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-1">{work.year}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 4: Two asymmetric reversed */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
              {selectedWorks[6] && (
                <div className="md:col-span-2 reveal">
                  <div className="overflow-hidden">
                    <img
                      src={selectedWorks[6].image}
                      alt={`${selectedWorks[6].title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[3/4] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[6].title}</p>
                    <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-1">{selectedWorks[6].year}</p>
                  </div>
                </div>
              )}
              {selectedWorks[7] && (
                <div className="md:col-span-3 md:mt-16 reveal reveal-delay-2">
                  <div className="overflow-hidden">
                    <img
                      src={selectedWorks[7].image}
                      alt={`${selectedWorks[7].title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[4/5] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[7].title}</p>
                    <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-1">{selectedWorks[7].year}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Row 5: Large hero piece */}
            {selectedWorks[8] && (
              <div className="reveal">
                <div className="overflow-hidden">
                  <img
                    src={selectedWorks[8].image}
                    alt={`${selectedWorks[8].title} abstract painting by John Han-Chang Lin`}
                    className="w-full max-h-[70vh] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[8].title}</p>
                  <p className="text-[10px] text-muted-foreground/50 tracking-widest mt-1">{selectedWorks[8].year}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-20 text-center reveal">
            <Button variant="museum" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ARTISTIC PHILOSOPHY — flowing transition */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="overflow-hidden reveal">
            <img
              src={heroArtworks[0]?.image}
              alt="Artwork by John Han-Chang Lin"
              className="w-full h-full min-h-[60vh] object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center px-8 md:px-20 py-20 md:py-32 reveal reveal-delay-2">
            <div className="space-y-8 max-w-md">
              <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.1em]">Artistic Philosophy</h2>
              <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
                For Lin, painting is not an act of control but a dialogue between pigment, gravity, and time.
                Images emerge gradually through the natural movement of color and surface.
              </p>
              <div className="text-xs text-muted-foreground/40 leading-relaxed space-y-1 tracking-wider">
                <p>對林漢章而言，</p>
                <p>繪畫不是控制畫面，</p>
                <p>而是讓顏料、重力與時間共同完成作品。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO PROCESS — edge-to-edge with breathing room */}
      <section className="py-32 md:py-48 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-6 text-center tracking-[0.15em] reveal">
            Studio Process
          </h2>
          <p className="text-center text-xs text-muted-foreground/60 max-w-md mx-auto mb-16 leading-[2] tracking-wide reveal reveal-delay-1">
            The paintings are created through layered flows of pigment, allowing gravity and material
            to shape the final composition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[photoStudio, photoGallery, photoPortrait].map((img, i) => (
              <div key={i} className={`overflow-hidden reveal reveal-delay-${i + 1}`}>
                <img
                  src={img}
                  alt={`Studio process ${i + 1}`}
                  className="w-full aspect-[3/4] object-cover artwork-hover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITIONS PREVIEW — clean, flowing */}
      <section className="py-24 md:py-32 px-8 md:px-20">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-14 text-center tracking-[0.15em]">
            Exhibition History
          </h2>
          <div className="space-y-0">
            {[
              { year: "2024", title: "Vancouver Exhibition" },
              { year: "2023", title: "CCAFV Members Exhibition" },
              { year: "2021", title: "Vancouver Chinese Artists Association" },
            ].map((e) => (
              <div key={e.year} className="flex gap-6 items-baseline border-b border-border/40 py-5">
                <span className="text-[10px] text-muted-foreground/40 font-sans tracking-[0.3em]">{e.year}</span>
                <span className="font-serif text-sm md:text-base text-foreground font-light tracking-wide">{e.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button variant="museum" size="lg" asChild>
              <Link to="/exhibitions">View Exhibition History</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COLLECTOR INQUIRY — spacious ending */}
      <section className="py-32 md:py-48 px-8 md:px-20">
        <div className="max-w-lg mx-auto text-center space-y-8 reveal">
          <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.15em]">
            Collector Inquiry
          </h2>
          <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
            For acquisition inquiries, exhibition opportunities, or general correspondence,
            please contact the studio.
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-wider">
            如需作品收藏洽詢或展覽合作，請與我們聯繫。
          </p>
          <Button variant="museum" size="lg" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
