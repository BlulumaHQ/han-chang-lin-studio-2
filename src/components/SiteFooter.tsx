import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-lg font-light text-foreground tracking-wide">John Han-Chang Lin</p>
            <p className="font-serif text-base text-muted-foreground/60 mt-1">林漢章</p>
            <p className="text-xs text-muted-foreground/50 mt-4 tracking-wider">Vancouver, Canada</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/gallery" className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500">Gallery</Link>
            <Link to="/about" className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500">About</Link>
            <Link to="/exhibitions" className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500">Exhibitions</Link>
            <Link to="/contact" className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500">Contact</Link>
          </div>
          <div>
            <p className="text-xs text-muted-foreground/50 leading-relaxed tracking-wide">
              For acquisition inquiries and exhibition opportunities.
            </p>
            <Link to="/contact" className="text-xs text-foreground tracking-[0.15em] uppercase mt-3 inline-block hover:opacity-60 transition-opacity duration-500">
              Contact the Studio
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-[10px] text-muted-foreground/40 tracking-wider">
            © 2026 John Han-Chang Lin Gallery. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/40 tracking-wider">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-foreground transition-colors duration-500"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
