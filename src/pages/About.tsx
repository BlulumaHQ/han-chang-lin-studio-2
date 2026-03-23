import photoPortrait from "@/assets/photo-portrait.webp";
import photoStudio from "@/assets/photo-studio.webp";
import hsinLogo from "@/assets/hsin-logo.png";
import { useReveal } from "@/hooks/useReveal";

export default function AboutPage() {
  useReveal();

  return (
    <main className="pt-20">
      {/* Opening — full-bleed portrait with overlaid type */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={photoPortrait}
          alt="John Han-Chang Lin portrait"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="px-6 md:px-16 lg:px-24 pb-12 md:pb-20 w-full">
            <p
              className="font-sans text-[10px] tracking-[0.5em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              About the Artist
            </p>
            <h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide"
              style={{ lineHeight: "0.95", mixBlendMode: "difference" }}
            >
              John Han-Chang Lin
            </h1>
            <p className="font-serif text-lg mt-3 italic" style={{ color: "rgba(255,255,255,0.4)" }}>
              林漢章
            </p>
          </div>
        </div>
      </section>

      {/* Quote — editorial pull-quote, right-aligned */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-1/3 reveal">
            <p className="text-[10px] text-muted-foreground/25 tracking-[0.4em] uppercase font-sans">
              Taiwanese-Canadian Abstract Painter
            </p>
            <div className="mt-8 text-xs text-muted-foreground/25 leading-relaxed space-y-1 tracking-wider">
              <p>「繪畫對我而言，是一種修行。」</p>
              <p>林漢章透過色彩流動與自然力量，</p>
              <p>讓畫面在畫布上逐漸生成。</p>
            </div>
          </div>
          <div className="md:w-2/3 reveal reveal-delay-1">
            <blockquote
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-light italic text-foreground leading-tight tracking-wide"
              style={{ lineHeight: "1.18" }}
            >
              "I do not paint pictures. I create conditions for paintings to emerge."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Biography — text over warm bg, no image */}
      <section className="bg-secondary">
        <div className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 reveal-left">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]" style={{ lineHeight: "1.15" }}>
                Biography
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-sm text-muted-foreground leading-[2] tracking-wide reveal-right">
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
              <div className="pt-4">
                <a
                  href="https://hsinhsin.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block opacity-25 hover:opacity-60 transition-opacity duration-500"
                >
                  <img src={hsinLogo} alt="Hsin Hsin" className="h-9 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — centered text block */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-2xl mx-auto text-center space-y-10 reveal">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]">
            Artistic Philosophy
          </h2>
          <p className="text-sm text-muted-foreground leading-[2.2] tracking-wide">
            Lin allows pigments to flow freely across the canvas, guided by gravity and the
            natural behavior of the materials. Each painting evolves organically through time,
            creating compositions that evoke landscapes, natural forces, and emotional states.
          </p>
        </div>
      </section>

      {/* Creative Process — image fills left half, text on right */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden reveal-left">
          <img
            src={photoStudio}
            alt="John Lin in studio"
            className="w-full h-full min-h-[50vh] object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center px-6 md:px-16 lg:px-20 py-20 md:py-0 reveal-right">
          <div className="space-y-6 max-w-md">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-[0.08em]">
              Creative Process
            </h2>
            <div className="space-y-5 text-sm text-muted-foreground leading-[2] tracking-wide">
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
          </div>
        </div>
      </section>
    </main>
  );
}
