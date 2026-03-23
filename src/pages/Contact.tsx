import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import { getRandomHomeArtworks } from "@/data/artworks";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { heroArtworks } = useMemo(() => getRandomHomeArtworks(), []);
  useReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xpwzgkvl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("There was an error. Please try again.");
    }
  };

  return (
    <main className="pt-20">
      {/* Full-width artwork as header */}
      {heroArtworks[0] && (
        <div className="h-[35vh] md:h-[45vh] overflow-hidden relative reveal">
          <img
            src={heroArtworks[0].image}
            alt="Artwork by John Han-Chang Lin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end px-6 md:px-16 lg:px-24 pb-8 md:pb-12">
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide"
              style={{ lineHeight: "1", mixBlendMode: "difference" }}
            >
              Contact
            </h1>
          </div>
        </div>
      )}

      {/* Two-column: info left, form right */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          {/* Left — info */}
          <div className="md:col-span-4 space-y-8 reveal-left">
            <p className="text-sm text-muted-foreground leading-[2] tracking-wide">
              For acquisition inquiries, exhibition opportunities, or general correspondence,
              please contact the studio.
            </p>
            <p className="text-xs text-muted-foreground/25 tracking-wider">
              如需作品收藏洽詢或展覽合作，請與我們聯繫。
            </p>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7 md:col-start-6 reveal-right">
            {submitted ? (
              <div className="py-20 space-y-6">
                <p className="font-serif text-2xl font-light text-foreground tracking-wide">Thank you for your inquiry.</p>
                <p className="text-xs text-muted-foreground/35 tracking-wider">We will respond within 2–3 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30 mb-3 font-sans">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border-b border-border/30 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30 mb-3 font-sans">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border-b border-border/30 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30 mb-3 font-sans">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full border-b border-border/30 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30 mb-3 font-sans">
                      Artwork of Interest
                    </label>
                    <input
                      name="artwork"
                      type="text"
                      placeholder="e.g. Emit Flow #001"
                      className="w-full border-b border-border/30 bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/12 focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/30 mb-3 font-sans">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border-b border-border/30 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 resize-none tracking-wide leading-relaxed"
                  />
                </div>
                <div className="mt-12">
                  <Button type="submit" variant="museum" size="lg">
                    Send Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
