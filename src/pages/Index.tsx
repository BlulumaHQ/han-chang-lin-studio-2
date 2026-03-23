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
      {/* HERO — split-screen: text left, artwork right */}
      <HeroSlider heroArtworks={heroArtworks} />

      {/* FILMSTRIP — edge-to-edge band of works, no gaps */}
      <section className="py-0 overflow-hidden">
        <div className="flex">
          {selectedWorks.slice(0, 4).map((work) => (
            <div key={work.id} className="flex-1 min-w-0">
              <img
                src={work.image}
                alt={`${work.title} abstract painting by John Han-Chang Lin`}
                className="w-full h-48 md:h-72 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ARTIST STATEMENT — wide, left-aligned */}
      <section className="py-32 md:py-44 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground italic leading-[1.15] tracking-wide reveal" style={{ lineHeight: "1.15" }}>
            "Painting is a form of meditation."
          </blockquote>
          <div className="mt-12 md:mt-16 max-w-xl">
            <p className="text-sm text-muted-foreground leading-[2] tracking-wide reveal reveal-delay-1">
              John Han-Chang Lin explores the movement of color, gravity, and silence through abstract landscapes
              formed by flowing pigments.
            </p>
            <div className="mt-5 text-xs text-muted-foreground/40 leading-relaxed tracking-wider reveal reveal-delay-2">
              <p>「繪畫對我而言，是一種修行。」</p>
              <p className="mt-1">林漢章透過色彩流動與自然力量，讓畫面在畫布上逐漸生成，如同自然地景。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK — single large artwork, full bleed */}
      {selectedWorks[4] && (
        <section className="py-0 reveal">
          <img
            src={selectedWorks[4].image}
            alt={`${selectedWorks[4].title} abstract painting by John Han-Chang Lin`}
            className="w-full h-[50vh] md:h-[75vh] object-cover"
            loading="lazy"
          />
          <div className="px-6 md:px-16 lg:px-24 py-5 flex justify-between items-baseline">
            <p className="font-serif text-sm font-light text-foreground tracking-wide">{selectedWorks[4].title}</p>
            <p className="text-[10px] text-muted-foreground/40 tracking-widest">{selectedWorks[4].year} · {selectedWorks[4].medium}</p>
          </div>
        </section>
      )}

      {/* SELECTED WORKS — two-column staggered */}
      <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16 md:mb-24">
            <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.12em] reveal">
              Selected Works
            </h2>
            <span className="text-[10px] text-muted-foreground/30 tracking-[0.3em] uppercase font-sans reveal reveal-delay-1">
              Mixed Media on Canvas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-16 md:gap-y-0">
            {selectedWorks.slice(5, 11).map((work, i) => (
              <div
                key={work.id}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={{ marginTop: i % 2 === 1 ? (window.innerWidth >= 768 ? "6rem" : 0) : 0 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={work.image}
                    alt={`${work.title} abstract painting by John Han-Chang Lin`}
                    className="w-full aspect-[4/5] object-cover artwork-hover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex justify-between items-baseline">
                  <p className="font-serif text-sm font-light text-foreground tracking-wide">{work.title}</p>
                  <p className="text-[10px] text-muted-foreground/40 tracking-widest">{work.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center reveal">
            <Button variant="museum" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ARTISTIC PHILOSOPHY — reversed split: text left, artwork right */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 flex items-center px-6 md:px-16 lg:px-20 py-20 md:py-0 bg-secondary reveal-left">
            <div className="space-y-8 max-w-sm">
              <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.1em]">Artistic Philosophy</h2>
              <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
                For Lin, painting is not an act of control but a dialogue between pigment, gravity, and time.
                Images emerge gradually through the natural movement of color and surface.
              </p>
              <div className="text-xs text-muted-foreground/35 leading-relaxed space-y-1 tracking-wider">
                <p>對林漢章而言，</p>
                <p>繪畫不是控制畫面，</p>
                <p>而是讓顏料、重力與時間共同完成作品。</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 overflow-hidden reveal-right">
            <img
              src={heroArtworks[0]?.image}
              alt="Artwork by John Han-Chang Lin"
              className="w-full h-[50vh] md:h-[85vh] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* STUDIO PROCESS — horizontal trio with caption */}
      <section className="py-32 md:py-44 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-end">
            <div className="reveal">
              <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.12em]">
                Studio Process
              </h2>
              <p className="text-xs text-muted-foreground/50 mt-6 leading-[2] tracking-wide max-w-xs">
                The paintings are created through layered flows of pigment, allowing gravity and material
                to shape the final composition.
              </p>
            </div>
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

      {/* EXHIBITIONS PREVIEW — minimal horizontal list */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start reveal">
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.12em]">
                Exhibition History
              </h2>
              <div className="mt-8">
                <Button variant="museum" size="lg" asChild>
                  <Link to="/exhibitions">View Exhibition History</Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-2 space-y-0">
              {[
                { year: "2024", title: "Vancouver Exhibition" },
                { year: "2023", title: "CCAFV Members Exhibition" },
                { year: "2021", title: "Vancouver Chinese Artists Association" },
              ].map((e) => (
                <div key={e.year} className="flex gap-8 items-baseline border-b border-foreground/10 py-6">
                  <span className="text-[10px] text-muted-foreground/35 font-sans tracking-[0.3em] w-12 shrink-0">{e.year}</span>
                  <span className="font-serif text-sm md:text-base text-foreground font-light tracking-wide">{e.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTOR INQUIRY — spacious ending */}
      <section className="py-36 md:py-48 px-6 md:px-16 lg:px-24">
        <div className="max-w-md mx-auto text-center space-y-8 reveal">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.1em]">
            Collector Inquiry
          </h2>
          <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
            For acquisition inquiries, exhibition opportunities, or general correspondence,
            please contact the studio.
          </p>
          <p className="text-xs text-muted-foreground/35 tracking-wider">
            如需作品收藏洽詢或展覽合作，請與我們聯繫。
          </p>
          <div className="pt-2">
            <Button variant="museum" size="lg" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
