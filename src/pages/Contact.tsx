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
    <main className="pt-20">
      {/* Header band */}
      <section className="bg-secondary px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-3xl reveal">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.1em]" style={{ lineHeight: "1.1" }}>
            Contact
          </h1>
          <p className="text-sm text-muted-foreground/50 mt-6 leading-[2] tracking-wide max-w-md">
            For acquisition inquiries, exhibition opportunities, or general correspondence,
            please contact the studio.
          </p>
          <p className="text-[10px] text-muted-foreground/25 mt-3 tracking-wider">
            如需作品收藏洽詢或展覽合作，請與我們聯繫。
          </p>
        </div>
      </section>

      {/* Form — wider, two-column on desktop */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-24 space-y-6 reveal">
              <p className="font-serif text-2xl font-light text-foreground tracking-wide">Thank you for your inquiry.</p>
              <p className="text-xs text-muted-foreground/40 tracking-wider">We will respond within 2–3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/35 mb-3 font-sans">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full border-b border-border/40 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/35 mb-3 font-sans">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-border/40 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/35 mb-3 font-sans">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border-b border-border/40 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/35 mb-3 font-sans">
                    Artwork of Interest
                  </label>
                  <input
                    name="artwork"
                    type="text"
                    placeholder="e.g. Emit Flow #001"
                    className="w-full border-b border-border/40 bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/15 focus:outline-none focus:border-foreground transition-colors duration-500 tracking-wide"
                  />
                </div>
              </div>
              <div className="mt-10">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground/35 mb-3 font-sans">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full border-b border-border/40 bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-500 resize-none tracking-wide leading-relaxed"
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
      </section>
    </main>
  );
}
