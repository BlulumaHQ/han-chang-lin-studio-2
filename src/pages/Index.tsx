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
      <HeroSlider heroArtworks={heroArtworks} />

      {/* STATEMENT — editorial: huge type, right-aligned on desktop */}
      <section className="px-6 md:px-16 lg:px-24 py-36 md:py-52">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="md:w-1/3 reveal">
            <p className="text-[10px] text-muted-foreground/30 tracking-[0.4em] uppercase font-sans">
              Artist Statement
            </p>
            <div className="mt-8 text-xs text-muted-foreground/30 leading-relaxed space-y-1 tracking-wider">
              <p>「繪畫對我而言，是一種修行。」</p>
              <p>林漢章透過色彩流動與自然力量，</p>
              <p>讓畫面在畫布上逐漸生成。</p>
            </div>
          </div>
          <div className="md:w-2/3 md:text-right reveal reveal-delay-1">
            <blockquote
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground italic leading-tight tracking-wide"
              style={{ lineHeight: "1.12" }}
            >
              "Painting is a<br className="hidden md:block" /> form of meditation."
            </blockquote>
            <p className="text-sm text-muted-foreground leading-[2] tracking-wide mt-10 max-w-lg md:ml-auto">
              John Han-Chang Lin explores the movement of color, gravity, and silence through abstract landscapes
              formed by flowing pigments.
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL PAIR — full-bleed image + offset smaller image */}
      {selectedWorks[0] && selectedWorks[1] && (
        <section className="relative">
          <div className="reveal">
            <img
              src={selectedWorks[0].image}
              alt={`${selectedWorks[0].title} abstract painting by John Han-Chang Lin`}
              className="w-full h-[55vh] md:h-[80vh] object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-6 md:px-16 lg:px-24 -mt-20 md:-mt-32 relative z-10">
            <div className="max-w-7xl mx-auto flex justify-end">
              <div className="w-2/3 md:w-2/5 reveal reveal-delay-2">
                <img
                  src={selectedWorks[1].image}
                  alt={`${selectedWorks[1].title} abstract painting by John Han-Chang Lin`}
                  className="w-full aspect-[4/5] object-cover shadow-2xl"
                  loading="lazy"
                />
                <div className="mt-3 flex justify-between items-baseline">
                  <p className="font-serif text-xs font-light text-foreground tracking-wide">{selectedWorks[1].title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest">{selectedWorks[1].year}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Caption for full-bleed */}
          <div className="px-6 md:px-16 lg:px-24 mt-4 md:mt-6">
            <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[0].title}</p>
            <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{selectedWorks[0].year} · {selectedWorks[0].medium}</p>
          </div>
        </section>
      )}

      {/* PHILOSOPHY — overlapping text block over warm bg */}
      <section className="mt-32 md:mt-48 relative">
        <div className="bg-secondary py-28 md:py-40">
          <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 md:col-start-2 reveal-left">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]" style={{ lineHeight: "1.15" }}>
                Artistic
                <br />
                Philosophy
              </h2>
              <p className="text-sm text-muted-foreground leading-[2] tracking-wide mt-8 max-w-sm">
                For Lin, painting is not an act of control but a dialogue between pigment, gravity, and time.
                Images emerge gradually through the natural movement of color and surface.
              </p>
              <div className="text-xs text-muted-foreground/25 leading-relaxed space-y-1 tracking-wider mt-6">
                <p>對林漢章而言，</p>
                <p>繪畫不是控制畫面，</p>
                <p>而是讓顏料、重力與時間共同完成作品。</p>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8 reveal-right">
              <img
                src={heroArtworks[0]?.image}
                alt="Artwork by John Han-Chang Lin"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS — editorial asymmetric grid */}
      <section className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-20 md:mb-32">
            <div className="reveal">
              <span className="text-[10px] text-muted-foreground/25 tracking-[0.4em] uppercase font-sans block mb-3">
                Mixed Media on Canvas
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground tracking-[0.06em]">
                Selected Works
              </h2>
            </div>
          </div>

          {/* Row 1: large left + two stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-6">
            {selectedWorks[2] && (
              <div className="md:col-span-7 reveal">
                <div className="overflow-hidden">
                  <img
                    src={selectedWorks[2].image}
                    alt={`${selectedWorks[2].title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[6/5] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[2].title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest">{selectedWorks[2].year}</p>
                </div>
              </div>
            )}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
              {selectedWorks.slice(3, 5).map((work, i) => (
                <div key={work.id} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="overflow-hidden">
                    <img
                      src={work.image}
                      alt={`${work.title} abstract painting by John Han-Chang Lin`}
                      className="w-full aspect-[5/4] object-cover artwork-hover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex justify-between items-baseline">
                    <p className="font-serif text-xs font-light text-foreground tracking-wide">{work.title}</p>
                    <p className="text-[9px] text-muted-foreground/30 tracking-widest">{work.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: three equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {selectedWorks.slice(5, 8).map((work, i) => (
              <div key={work.id} className={`reveal reveal-delay-${i + 1}`}>
                <div className="overflow-hidden">
                  <img
                    src={work.image}
                    alt={`${work.title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[4/5] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-serif text-xs font-light text-foreground tracking-wide">{work.title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{work.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: narrow left + wide right (reversed asymmetry) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {selectedWorks[8] && (
              <div className="md:col-span-4 md:mt-12 reveal">
                <div className="overflow-hidden">
                  <img
                    src={selectedWorks[8].image}
                    alt={`${selectedWorks[8].title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[3/4] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-serif text-xs font-light text-foreground tracking-wide">{selectedWorks[8].title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest mt-0.5">{selectedWorks[8].year}</p>
                </div>
              </div>
            )}
            {selectedWorks[9] && (
              <div className="md:col-span-8 reveal reveal-delay-1">
                <div className="overflow-hidden">
                  <img
                    src={selectedWorks[9].image}
                    alt={`${selectedWorks[9].title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[7/4] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[9].title}</p>
                  <p className="text-[9px] text-muted-foreground/30 tracking-widest">{selectedWorks[9].year}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-24 md:mt-32 text-center reveal">
            <Button variant="museum" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STUDIO — editorial: portrait overlapping landscape */}
      <section className="relative pb-32 md:pb-48">
        <div className="px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-end">
              <div className="md:col-span-4 md:col-start-1 space-y-8 pb-8 md:pb-16 reveal-left">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]">
                  Studio
                  <br />
                  Process
                </h2>
                <p className="text-xs text-muted-foreground/40 leading-[2] tracking-wide max-w-xs">
                  The paintings are created through layered flows of pigment, allowing gravity and material
                  to shape the final composition.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-5 reveal reveal-delay-1">
                <img
                  src={photoStudio}
                  alt="John Lin in studio"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-4 md:col-start-9 md:-mb-16 reveal reveal-delay-2">
                <img
                  src={photoGallery}
                  alt="Gallery view"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXHIBITIONS PREVIEW — horizontal line items */}
      <section className="bg-secondary">
        <div className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 reveal">
            <div className="md:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]">
                Exhibition
                <br />
                History
              </h2>
              <div className="mt-8">
                <Button variant="museum" size="lg" asChild>
                  <Link to="/exhibitions">View Exhibition History</Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {[
                { year: "2024", title: "Vancouver Exhibition" },
                { year: "2023", title: "CCAFV Members Exhibition" },
                { year: "2021", title: "Vancouver Chinese Artists Association" },
              ].map((e) => (
                <div key={e.year} className="flex gap-8 items-baseline border-b border-foreground/8 py-7">
                  <span className="text-[10px] text-muted-foreground/25 font-sans tracking-[0.3em] w-12 shrink-0">{e.year}</span>
                  <span className="font-serif text-sm md:text-base text-foreground font-light tracking-wide">{e.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTOR INQUIRY — cinematic ending with portrait */}
      <section className="py-36 md:py-52 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal-left">
            <img
              src={photoPortrait}
              alt="John Han-Chang Lin"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-8 reveal-right">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]">
              Collector
              <br />
              Inquiry
            </h2>
            <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
              For acquisition inquiries, exhibition opportunities, or general correspondence,
              please contact the studio.
            </p>
            <p className="text-xs text-muted-foreground/25 tracking-wider">
              如需作品收藏洽詢或展覽合作，請與我們聯繫。
            </p>
            <div className="pt-2">
              <Button variant="museum" size="lg" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
