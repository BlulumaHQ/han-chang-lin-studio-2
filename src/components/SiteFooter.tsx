import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-background">
      {/* Thin rule */}
      <div className="mx-6 md:mx-16 lg:mx-24 border-t border-border/40" />

      <div className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
        {/* Two-row footer: name + links on top, legal on bottom */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-16">
          {/* Left: branding */}
          <div className="space-y-3">
            <p className="font-serif text-xl font-light text-foreground tracking-[0.1em]">John Han-Chang Lin</p>
            <p className="font-serif text-sm text-muted-foreground/50">林漢章</p>
            <p className="text-[10px] text-muted-foreground/40 tracking-[0.2em] mt-4">Vancouver, Canada</p>
          </div>

          {/* Center: nav links in a single row */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Gallery", to: "/gallery" },
              { label: "About", to: "/about" },
              { label: "Exhibitions", to: "/exhibitions" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: inquiry CTA */}
          <div className="max-w-xs">
            <p className="text-xs text-muted-foreground/40 leading-relaxed tracking-wide">
              For acquisition inquiries and exhibition opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 text-[10px] text-foreground tracking-[0.22em] uppercase border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors duration-500"
            >
              Contact the Studio
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-[10px] text-muted-foreground/30 tracking-wider">
            © 2026 John Han-Chang Lin Gallery. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/30 tracking-wider">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-foreground transition-colors duration-500"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
