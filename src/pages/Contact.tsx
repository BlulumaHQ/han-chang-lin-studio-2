import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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
    <main className="pt-24">
      <section className="px-8 md:px-20 py-16 md:py-24">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-2xl md:text-4xl font-light text-foreground mb-6 text-center tracking-[0.15em] reveal">
            Contact
          </h1>
          <p className="text-center text-xs text-muted-foreground/60 mb-3 leading-[2] tracking-wide reveal reveal-delay-1">
            For acquisition inquiries, exhibition opportunities, or general correspondence,
            please contact the studio.
          </p>
          <p className="text-center text-[10px] text-muted-foreground/30 mb-16 tracking-wider reveal reveal-delay-1">
            如需作品收藏洽詢或展覽合作，請與我們聯繫。
          </p>

          {submitted ? (
            <div className="text-center py-24 space-y-6 reveal">
              <p className="font-serif text-xl font-light text-foreground tracking-wide">Thank you for your inquiry.</p>
              <p className="text-xs text-muted-foreground/50 tracking-wider">We will respond within 2–3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 reveal reveal-delay-2">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-3 font-sans">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border-b border-border/50 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-3 font-sans">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-border/50 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-3 font-sans">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full border-b border-border/50 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-3 font-sans">
                  Artwork of Interest
                </label>
                <input
                  name="artwork"
                  type="text"
                  placeholder="e.g. Emit Flow #001"
                  className="w-full border-b border-border/50 bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-3 font-sans">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full border-b border-border/50 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 resize-none tracking-wide leading-relaxed"
                />
              </div>
              <div className="pt-6">
                <Button type="submit" variant="museum" size="lg" className="w-full md:w-auto">
                  Send Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
