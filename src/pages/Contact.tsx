import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 text-center">
            Contact
          </h1>
          <p className="text-center text-muted-foreground mb-4">
            For acquisition inquiries, exhibition opportunities, or general correspondence,
            please contact the studio.
          </p>
          <p className="text-center text-sm text-muted-foreground/80 mb-12">
            如需作品收藏洽詢或展覽合作，請與我們聯繫。
          </p>

          {submitted ? (
            <div className="text-center py-20 space-y-4">
              <p className="font-serif text-2xl font-light text-foreground">Thank you for your inquiry.</p>
              <p className="text-muted-foreground">We will respond within 2–3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">
                  Artwork of Interest
                </label>
                <input
                  name="artwork"
                  type="text"
                  placeholder="e.g. Emit Flow #001"
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-sans">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <div className="pt-4">
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
