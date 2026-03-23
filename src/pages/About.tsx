import photoPortrait from "@/assets/photo-portrait.webp";
import photoStudio from "@/assets/photo-studio.webp";
import hsinLogo from "@/assets/hsin-logo.png";
import { useReveal } from "@/hooks/useReveal";

export default function AboutPage() {
  useReveal();

  return (
    <main className="pt-24">
      {/* Portrait + Biography — edge-to-edge feel */}
      <section className="px-8 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="overflow-hidden reveal">
            <img
              src={photoPortrait}
              alt="John Han-Chang Lin portrait"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="space-y-8 md:pt-16 reveal reveal-delay-2">
            <h1 className="font-serif text-2xl md:text-4xl font-light text-foreground tracking-[0.1em]" style={{ lineHeight: "1.15" }}>
              John Han-Chang Lin
            </h1>
            <p className="font-serif text-lg text-muted-foreground/50">林漢章</p>
            <p className="text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase">
              Taiwanese-Canadian Abstract Painter
            </p>
            <div className="space-y-5 text-sm text-muted-foreground leading-[2] pt-4 tracking-wide">
              <p>
                John Han-Chang Lin is a Taiwanese-Canadian artist based in Vancouver.
                Since immigrating to Canada in 1990, he has developed a distinctive approach
                to abstract painting rooted in the natural movement of pigment and gravity.
              </p>
              <p>
                With a background in picture framing, Lin spent decades working closely
                with fine art — handling, preserving, and studying works by established artists.
                This deep familiarity with materials and technique ultimately led him to the
                creative studio, where he began developing his own artistic voice.
              </p>
              <p>
                Lin's paintings emerge through layered pigment flows where
                color, gravity, and time collaborate to produce organic compositions
                reminiscent of aerial landscapes, mineral formations, and ocean depths.
              </p>
              <p>
                In addition to his artistic practice, Lin is also the Founder of{" "}
                <a
                  href="https://hsinhsin.ca/founder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:opacity-50 transition-opacity duration-500"
                >
                  欣欣企業
                </a>
                .
              </p>
            </div>

            {/* Hsin Hsin logo */}
            <div className="pt-8">
              <a
                href="https://hsinhsin.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block opacity-40 hover:opacity-80 transition-opacity duration-500"
              >
                <img
                  src={hsinLogo}
                  alt="Hsin Hsin"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — full bleed feel */}
      <section className="py-0">
        <div className="bg-secondary">
          <div className="max-w-2xl mx-auto px-8 md:px-20 py-24 md:py-32 space-y-10 reveal">
            <h2 className="font-serif text-xl md:text-2xl font-light text-foreground tracking-[0.1em]">
              Artistic Philosophy
            </h2>
            <blockquote className="font-serif text-lg md:text-2xl font-light italic text-foreground leading-relaxed tracking-wide">
              "I do not paint pictures. I create conditions for paintings to emerge."
            </blockquote>
            <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
              Lin allows pigments to flow freely across the canvas, guided by gravity and the
              natural behavior of the materials. Each painting evolves organically through time,
              creating compositions that evoke landscapes, natural forces, and emotional states.
            </p>
            <div className="text-xs text-muted-foreground/40 leading-relaxed space-y-1 pt-4 tracking-wider">
              <p>「繪畫對我而言，是一種修行。」</p>
              <p>林漢章透過色彩流動與自然力量，</p>
              <p>讓畫面在畫布上逐漸生成。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="px-8 md:px-20 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-12 tracking-[0.1em] reveal">
            Creative Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="space-y-5 text-sm text-muted-foreground leading-[2] tracking-wide reveal">
              <p>
                Lin begins by preparing the canvas surface and carefully mixing pigments
                to precise consistencies.
              </p>
              <p>
                The canvas is then positioned at various angles, allowing gravity to guide
                the movement of color.
              </p>
              <p>
                Layers interact over time, forming textures, depth, and translucency that
                resemble erosion patterns, ocean currents, and atmospheric formations.
              </p>
            </div>
            <div className="overflow-hidden reveal reveal-delay-2">
              <img
                src={photoStudio}
                alt="John Lin in studio"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
